import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import org.zeromq.ZMQ;

public class Main {

	public static void main(String[] args) {
		try {
			String connectionURL = "jdbc:mysql://localhost:3306/TwitterCausalite";
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
				System.out.println("New tweet delivré : " + resultArr[0] + "#"
						+ resultArr[1] + "#" + resultArr[2] + "#"
						+ resultArr[3] + "#" + resultArr[4] + "#"
						+ resultArr[5]);

				// get data from reply message
				Tweet newTweet = new Tweet();
				newTweet.setSender_id(Integer.parseInt(resultArr[0]));
				newTweet.setSender_count(Integer.parseInt(resultArr[1]));
				newTweet.setRef_id(Integer.parseInt(resultArr[2]));
				newTweet.setRef_count(Integer.parseInt(resultArr[3]));
				newTweet.setSendDate(resultArr[4]);
				newTweet.setLatency(Integer.parseInt(resultArr[5]));

				// add new tweet to database
				addTweetToDB(connection, newTweet);

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

	private static void addTweetToDB(Connection connection, Tweet newTweet)
			throws SQLException {
		PreparedStatement ps = connection
				.prepareStatement("INSERT INTO `TWEET` VALUES("
						+ newTweet.getSender_id() + ", "
						+ newTweet.getSender_count() + ", "
						+ newTweet.getRef_id() + ", " + newTweet.getRef_count()
						+ ", '" + newTweet.getSendDate() + "', "
						+ newTweet.getLatency() + ", null)");
		System.out.println("Sync: " + "INSERT INTO `TWEET` VALUES("
						+ newTweet.getSender_id() + ", "
						+ newTweet.getSender_count() + ", "
						+ newTweet.getRef_id() + ", " + newTweet.getRef_count()
						+ ", '" + newTweet.getSendDate() + "', "
						+ newTweet.getLatency() + ", null)");
		ps.execute();
		System.out.println("Insert into database.");
	}

}
