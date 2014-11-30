package perf;

import java.awt.TrayIcon.MessageType;
import java.util.concurrent.Semaphore;

import trains.CallbackCircuitChange;
import trains.CallbackUtoDeliver;
import trains.CircuitView;
import trains.Interface;
import trains.Message;
import trains.MessageHeader;

public class Perf {

	// static boolean sender;
	static int broadcasters;
	static int delayBetweenTwoUtoBroadcast = 1; // millis
	// static int nbRecMsgBeforeStop;
	static int nbRecMsg = 0;
	static boolean measurementDone;

	static Semaphore semWaitEnoughMembers;

	static Interface trin = Interface.trainsInterface();
	static int rank;
	static int pingResponder;

	final static int AM_PING = 0;
	final static int AM_PONG = 1;

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

		@Override
		public void run(int sender, Message msg) {

			if (msg.getMessageHeader().getType() == AM_PING) {
				if (trin.JgetMyAddress() == pingResponder) {
					Message pongMsg = new Message(new MessageHeader(msg
							.getMessageHeader().getLen(), AM_PONG),
							msg.getPayload());
					int rc = trin.JutoBroadcast(pongMsg);					
					// if (rc < 0) {
					// System.out.println("JutoBroadcast failed.");
					// return;
					// }
				}
				// System.out.println("AM_PING, pingResponder = " +
				// pingResponder + ", myAddr = " + trin.JgetMyAddress());
			} else if (msg.getMessageHeader().getType() == AM_PONG) {
				// msg.getPayload().
				// memcpy(&pingSender, mp->payload, sizeof(address));
				// if (pingSender == myAddress) {
				// memcpy(&sendDate, mp->payload + sizeof(address),
				// sizeof(struct timeval));
				// gettimeofday(&receiveDate, NULL );
				// timersub(&receiveDate, &sendDate, &latency);
				//
				// if (measurementPhase) {
				// recordValue(latency, &record);
				// }
				//
				// }
				System.out.println("AM_PONG");
			}

			nbRecMsg++;

			/*
			 * String content = new String(msg.getPayload());
			 * System.out.println("!!! " + nbRecMsg + "-ieme message (recu de "
			 * + sender + " / contenu = " + content + ")");
			 */
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
		int rankMessage = 0;
		Message msg = null;
		int exitcode;
		int i = 0;
		int maxConcurrentRequests = 1;

		rank = 0;

		// Test parameters
		broadcasters = 2;
		int cooldown = 1; /* Default value = 10 seconds */
		int measurement = 10; /* Default value = 600 seconds */
		int number = 2;
		int size = 10;
		int warmup = 1; /* Default value = 300 seconds */
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

		TimeKeeper timeKeeper = new TimeKeeper.Builder(trin, broadcasters,
				number, size).warmup(warmup).measurement(measurement)
				.cooldown(cooldown).build();

		timeKeeper.setTimeJtrInitBegins(System.nanoTime());

		exitcode = trin.JtrInit(trainsNumber, wagonLength, waitNb, waitTime,
				myCallbackCircuitChange.class.getName(),
				myCallbackUtoDeliver.class.getName());

		timeKeeper.setTimeJtrInitEnds(System.nanoTime());

		if (exitcode < 0) {
			System.out.println("JtrInit failed.");
			return;
		}

		try {
			semWaitEnoughMembers.acquire();
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

		new Thread(timeKeeper).start();

		if (rank < broadcasters) {
			while (!measurementDone) {

				payload = Message.IntToByteArray(rankMessage);
				if (payload == null) {
					System.out
							.println("Converting payload to byte array failed.");
					return;
				}

				msg = Message.messageFromPayload(payload);

				if (msg == null) {
					System.out.println("Creating a message failed.");
					return;
				}

				trin.Jnewmsg(msg.getPayload().length, msg.getPayload());

				rankMessage++;

				exitcode = trin.JutoBroadcast(msg);
				if (exitcode < 0) {
					System.out.println("JutoBroadcast failed.");
					return;
				}

				try {
					Thread.sleep(delayBetweenTwoUtoBroadcast);
				} catch (InterruptedException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}
			}
		}
		System.out.println("rankMessage: " + rankMessage);
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
