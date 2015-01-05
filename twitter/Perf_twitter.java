package perf;

import java.nio.ByteBuffer;
import java.util.ArrayList;
import java.util.Random;
import java.util.concurrent.Semaphore;

import trains.CallbackCircuitChange;
import trains.CallbackUtoDeliver;
import trains.CircuitView;
import trains.Interface;
import trains.Message;

public class Perf {

	// static boolean sender;
	static int broadcasters;
	static int delayBetweenTwoUtoBroadcast = 1; // millis
	static int frequencyOfPing = 10;
	// static int nbRecMsgBeforeStop;
	static int nbRecMsg = 0;
	static boolean measurementDone;

	static Semaphore semWaitEnoughMembers;

	static Interface trin = Interface.trainsInterface();
	static int rank;
	static int pingResponder;

	final static int AM_BROADCAST = 0;
	final static int AM_PING = 4;
	final static int AM_PONG = 5;

	static TimeKeeper timeKeeper;
	static int rankMessage = 0;

	static ArrayList<MessageTwitter> arrMsg = new ArrayList<>();

	public static class myCallbackCircuitChange implements
			CallbackCircuitChange {

		private static final myCallbackCircuitChange CIRCUITCHANGE = new myCallbackCircuitChange();
		private int id = 0;

		private myCallbackCircuitChange() {
			// Nothing to do
		}

		public static myCallbackCircuitChange getInstance() {
			return CIRCUITCHANGE;
		}

		public void setId(int id) {
			this.id = id;
		}

		@Override
		public void run(CircuitView cv) {
			// Printing the circuit modification
			System.out
					.println("!!! ******** callbackCircuitChange called with "
							+ cv.getMemb() + " members (process ");

			// Printing the new/departed participant
			if (cv.getJoined() != 0) {
				System.out.println(Integer.toString(cv.getJoined())
						+ " has arrived.)");
			} else {
				System.out.println(Integer.toString(cv.getDeparted())
						+ " is gone.)");
				if (!measurementDone) {
					System.out
							.println("!!! ******** Experience has failed ******** !!!\n");
					return;
				}
			}

			System.out.println(cv.getMemb() + " // " + broadcasters);

			if (cv.getMemb() >= broadcasters) {
				for (rank = 0; (rank < cv.getMemb())
						&& trin.JgetMyAddress() != cv.getMembersAddress(rank); rank++)
					;

				pingResponder = cv.getMembersAddress(0);
				System.out
						.println("!!! ******** enough members to start utoBroadcasting\n");
				semWaitEnoughMembers.release();
			}
		}
	}

	public static class myCallbackUtoDeliver implements CallbackUtoDeliver {

		private static final myCallbackUtoDeliver UTODELIVER = new myCallbackUtoDeliver();

		public myCallbackUtoDeliver() {
			// Nothing to do
		}

		public static myCallbackUtoDeliver getInstance() {
			return UTODELIVER;
		}

		public int getTypeMessage(byte[] payload) {
			byte[] payLoadTypeMsgArr = new byte[4];

			int i;
			for (i = 0; i < 4; i++) {
				payLoadTypeMsgArr[i] = payload[i];
			}

			return ByteBuffer.wrap(payLoadTypeMsgArr).getInt();
		}

		public void setTypeMessage(byte[] payload, int type) {
			byte[] byteTypeMessage = ByteBuffer.allocate(4).putInt(type)
					.array();
			int i;
			for (i = 0; i < 4; i++) {
				payload[i] = byteTypeMessage[i];
			}
		}

		@Override
		public void run(int sender, Message msg) {

			byte[] payload = msg.getPayload();
			int i;
			int payLoadTypeMsg = getTypeMessage(payload);

			if (payLoadTypeMsg == AM_PING) {

				byte[] payLoadNewMsgID = new byte[4];
				for (i = 0; i < 4; i++) {
					payLoadNewMsgID[i] = payload[i + 4];
				}
				int newMsgAddress = ByteBuffer.wrap(payLoadNewMsgID).getInt();

				byte[] payLoadNewMsgRank = new byte[4];
				for (i = 0; i < 4; i++) {
					payLoadNewMsgRank[i] = payload[i + 8];
				}
				int newMsgRank = ByteBuffer.wrap(payLoadNewMsgRank).getInt();

				byte[] payLoadRefMsgID = new byte[4];
				for (i = 0; i < 4; i++) {
					payLoadRefMsgID[i] = payload[i + 12];
				}
				int refMsgID = ByteBuffer.wrap(payLoadRefMsgID).getInt();

				byte[] payLoadRefMsgRank = new byte[4];
				for (i = 0; i < 4; i++) {
					payLoadRefMsgRank[i] = payload[i + 16];
				}
				int refMsgRank = ByteBuffer.wrap(payLoadRefMsgRank).getInt();

				byte[] payLoadSendTimeArr = new byte[4];
				for (i = 0; i < 4; i++) {
					payLoadSendTimeArr[i] = payload[i + 20];
				}
				int payLoadSendTime = ByteBuffer.wrap(payLoadSendTimeArr)
						.getInt();

				arrMsg.add(new MessageTwitter(newMsgAddress, newMsgRank,
						refMsgID, refMsgRank, payLoadSendTime));				

				int receiveDate = (int) (System.nanoTime() / 1000000);
				int latency = receiveDate - payLoadSendTime;
				if (timeKeeper.isMeasurementPhase()) {					
					LatencyData.recordValue(latency);
				}

				for (i = 0; i < arrMsg.size(); i++) {
					if (arrMsg.get(i).getId() == refMsgID
							&& arrMsg.get(i).getLocalCount() == refMsgRank) {
						break;
					}
				}

				if (i == arrMsg.size()) {
					System.out.println("Error!!!!!!!!!!!! refMsgID = "
							+ refMsgID + ", refMsgRank = " + refMsgRank);
				}

			}
			nbRecMsg++;
		}
	}

	public static void main(String args[]) {

		// Trying to use environment variables to get the values of the
		// parameters for a use of a script for the perf tests

		/*
		 * String nomBroadcaster = System.getenv("BROADCASTERS"); String
		 * nomWarmup = System.getenv("WARMUP"); String nomCooldown =
		 * System.getenv("COOLDOWN"); String nomMeasurement =
		 * System.getenv("MEASUREMENT"); String nomNumber =
		 * System.getenv("NUMBER"); String nomSize = System.getenv("SIZE");
		 * 
		 * if(nomBroadcaster == null || nomWarmup == null || nomCooldown == null
		 * || nomMeasurement == null || nomNumber == null || nomSize == null){
		 * System.out.println("### Wrong parameters ! ###"); System.out.println(
		 * "You need to set the following environment variables correctly : BROADCASTERS, WARMUP, COOLDOWN, MEASUREMENT, NUMBER, SIZE, NTRAINS"
		 * ); System.exit(1); } else {
		 * System.out.println("### Correct parameters ! ###"); }
		 * 
		 * broadcasters = Integer.parseInt(nomBroadcaster); int warmup =
		 * Integer.parseInt(nomWarmup); int cooldown =
		 * Integer.parseInt(nomCooldown); int measurement =
		 * Integer.parseInt(nomMeasurement); int number =
		 * Integer.parseInt(nomNumber); int size = Integer.parseInt(nomSize);
		 */

		// trInit parameters: values by default
		int trainsNumber = 0;
		int wagonLength = 0;
		int waitNb = 0;
		int waitTime = 0;

		byte[] payload = null;
		Message msg = null;
		int exitcode;
		int pingMessagesCounter = 0;
		int maxConcurrentRequests = 1;

		rank = 0;

		// Test parameters
		broadcasters = 2;
		int cooldown = 1; /* Default value = 10 seconds */
		int measurement = 10; /* Default value = 600 seconds */
		int number = 2;
		int size = 100;
		int warmup = 2; /* Default value = 300 seconds */
		measurementDone = false;

		// Semaphores initialization
		semWaitEnoughMembers = new Semaphore(maxConcurrentRequests, true);

		// Callback
		myCallbackCircuitChange mycallbackCC = myCallbackCircuitChange
				.getInstance();
		mycallbackCC.setId(1);
		myCallbackUtoDeliver mycallbackUto = myCallbackUtoDeliver.getInstance();

		try {
			semWaitEnoughMembers.acquire();
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// timeKeeper.setTimeLoadInterfaceBegins(System.nanoTime());
		// timeKeeper.setTimeLoadInterfaceEnds(System.nanoTime());

		timeKeeper = new TimeKeeper.Builder(trin, broadcasters, number, size)
				.warmup(warmup).measurement(measurement).cooldown(cooldown)
				.build();

		timeKeeper.setTimeJtrInitBegins(System.nanoTime());

		exitcode = trin.JtrInit(trainsNumber, wagonLength, waitNb, waitTime,
				myCallbackCircuitChange.class.getName(),
				myCallbackUtoDeliver.class.getName());

		timeKeeper.setTimeJtrInitEnds(System.nanoTime());

		if (exitcode < 0) {
			System.out.println("JtrInit failed.");
			return;
		}

		System.out.println("A");
		try {
			semWaitEnoughMembers.acquire();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		System.out.println("B");

		new Thread(timeKeeper).start();

		payload = new byte[size];

		byte[] byteTypeMessage;
		byte[] byteMyAddress = ByteBuffer.allocate(4)
				.putInt(trin.JgetMyAddress()).array();
		byte[] byteRankNewMessage;
		byte[] byteIDRefMessage;
		byte[] byteRankRefMessage;
		byte[] byteSendDate;

		System.out.println("C");
		arrMsg.add(new MessageTwitter(0, 0, 0, 0, 0));
		System.out.println("D");
		int localCount = 1;

		if (rank < broadcasters) {
			while (!measurementDone) {

				int countPayLoad = 0, countByte = 0;
				if (pingMessagesCounter == 0) {
					if (arrMsg.size() > 0) {						
						int r = (int) (Math.random() * arrMsg.size());
						MessageTwitter msgRef = arrMsg.get(r);						
						int sysTime = (int) (System.nanoTime() / 1000000);
						byteTypeMessage = ByteBuffer.allocate(4)
								.putInt(AM_PING).array();
						MessageTwitter newMsg = new MessageTwitter(
								trin.JgetMyAddress(), localCount,
								msgRef.getId(), msgRef.getLocalCount(), sysTime);
						byteRankNewMessage = ByteBuffer.allocate(4)
								.putInt(localCount).array();
						byteIDRefMessage = ByteBuffer.allocate(4)
								.putInt(msgRef.getId()).array();
						byteRankRefMessage = ByteBuffer.allocate(4)
								.putInt(msgRef.getLocalCount()).array();
						byteSendDate = ByteBuffer.allocate(4).putInt(sysTime)
								.array();
						for (countByte = 0; countByte < 4; countByte++) {
							payload[countPayLoad] = byteTypeMessage[countByte];
							countPayLoad++;
						}
						for (countByte = 0; countByte < 4; countByte++) {
							payload[countPayLoad] = byteMyAddress[countByte];
							countPayLoad++;
						}
						for (countByte = 0; countByte < 4; countByte++) {
							payload[countPayLoad] = byteRankNewMessage[countByte];
							countPayLoad++;
						}
						for (countByte = 0; countByte < 4; countByte++) {
							payload[countPayLoad] = byteIDRefMessage[countByte];
							countPayLoad++;
						}
						for (countByte = 0; countByte < 4; countByte++) {
							payload[countPayLoad] = byteRankRefMessage[countByte];
							countPayLoad++;
						}
						for (countByte = 0; countByte < 4; countByte++) {
							payload[countPayLoad] = byteSendDate[countByte];
							countPayLoad++;
						}
						localCount++;
					}

				} else {
					byteTypeMessage = ByteBuffer.allocate(4)
							.putInt(AM_BROADCAST).array();
					for (countByte = 0; countByte < 4; countByte++) {
						payload[countPayLoad] = byteTypeMessage[countByte];
						countPayLoad++;
					}
				}

				msg = Message.messageFromPayload(payload);

				if (msg == null) {
					System.out.println("Creating a message failed.");
					return;
				}

				trin.Jnewmsg(msg.getPayload().length, msg.getPayload());

				exitcode = trin.JutoBroadcast(msg);
				if (exitcode < 0) {
					System.out.println("JutoBroadcast failed.");
					return;
				}

				rankMessage++;

				pingMessagesCounter = (pingMessagesCounter + 1)
						% frequencyOfPing;

				try {
					Thread.sleep(delayBetweenTwoUtoBroadcast);
				} catch (InterruptedException e) {
					e.printStackTrace();
				}
			}
		}
		System.out.println("** JtrTerminate");
		exitcode = trin.JtrTerminate();
		if (exitcode < 0) {
			System.out.println("JtrTerminate failed.");
			return;
		}

		System.out.println("\n*********************\n");
		// System.exit(0);
	}

}
