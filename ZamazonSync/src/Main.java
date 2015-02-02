import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.zeromq.ZMQ;

public class Main {

	public static void main(String[] args) {
		try {
			String connectionURL = "jdbc:mysql://localhost:3306/Zamazon";
			Connection connection = null;
			Class.forName("com.mysql.jdbc.Driver").newInstance();
			connection = DriverManager.getConnection(connectionURL, "root",
					"55233435");

			ZMQ.Context context = ZMQ.context(1);
			ZMQ.Socket responder = context.socket(ZMQ.REP);
			responder.bind("tcp://*:5562");

			boolean isLoop = true;

			System.out.println("Sync Server started !");
			while (isLoop) {
				byte[] result = responder.recv(0);

				String resultTweetDelivered = new String(result);
				String[] resultArr = resultTweetDelivered.split("#");
				System.out.println("New order delivered : " + resultArr[0]
						+ "#" + resultArr[1] + "#" + resultArr[2] + "#"
						+ resultArr[3] + "#" + resultArr[4]);

				// get data from reply message
				Order newOrder = new Order();
				newOrder.setBuyer_id(Integer.parseInt(resultArr[0]));
				newOrder.setProduct_id(Integer.parseInt(resultArr[1]));
				newOrder.setQuantity(Integer.parseInt(resultArr[2]));
				newOrder.setSendDate(resultArr[3]);
				newOrder.setLatency(Integer.parseInt(resultArr[4]));

				// add new order to database
				addOrderToDB(connection, newOrder);

				String reply = "OK";
				responder.send(reply.getBytes(), 0);
				System.out.println("Send World");
			}

			responder.close();
		} catch (SQLException e) {
			System.out.println(e.getMessage());
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}

	private static void addOrderToDB(Connection connection, Order newOrder)
			throws SQLException {
		PreparedStatement ps = connection
				.prepareStatement("INSERT INTO `ORDER` VALUES(null, "
						+ newOrder.getBuyer_id() + ", "
						+ newOrder.getProduct_id() + ", "
						+ newOrder.getQuantity() + ", "
						+ newOrder.getSendDate() + "', "
						+ newOrder.getLatency() + ")");
		System.out.println("Sync: " + "INSERT INTO `ORDER` VALUES(null, "
				+ newOrder.getBuyer_id() + ", " + newOrder.getProduct_id()
				+ ", " + newOrder.getQuantity() + ", " + newOrder.getSendDate()
				+ "', " + newOrder.getLatency() + ")");
		ps.execute();
		System.out.println("Insert into database.");
	}

}
