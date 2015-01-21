package twitter;

import trains.Interface;

import perf.InterfaceJNI;
import latency.LatencyData;

public class TimeKeeper implements Runnable {

	private final Interface trin;

	private final int broadcasters;
	private final int number;
	private final int size;
	private final int warmup;
	private final int measurement;
	private final int cooldown;

	private long timeLoadInterfaceBegins = -1;
	private long timeLoadInterfaceEnds = -1;

	private long timeJtrInitBegins = -1;
	private long timeJtrInitEnds = -1;

	private boolean measurementPhase = false;

	public static class Builder {
		// Required parameters
		private final Interface trin;
		private final int broadcasters;
		private final int number;
		private final int size;

		// Optional parameters - initialized with default values
		private int warmup = 2;
		private int measurement = 10;
		private int cooldown = 1;

		public Builder(Interface trin, int broadcasters, int number, int size) {
			this.trin = trin;
			this.broadcasters = broadcasters;
			this.number = number;
			this.size = size;
		}

		public Builder warmup(int val) {
			warmup = val;
			return this;
		}

		public Builder measurement(int val) {
			measurement = val;
			return this;
		}

		public Builder cooldown(int val) {
			cooldown = val;
			return this;
		}

		public TimeKeeper build() {
			return new TimeKeeper(this);
		}
	}

	private TimeKeeper(Builder builder) {
		trin = builder.trin;
		broadcasters = builder.broadcasters;
		number = builder.number;
		size = builder.size;
		warmup = builder.warmup;
		measurement = builder.measurement;
		cooldown = builder.warmup;
	}

	public void run() {

		/*
		 * What we want: time for JtrInit elapsed time ru_utime su-utime number
		 * of messages delivered by the application number of bytes delivered to
		 * the application number of calls to newmsg() and more...
		 */

		int timeBegins = -1;
		int timeEnds = -1;

		InterfaceJNI perfin = InterfaceJNI.perfInterface();

		try {
			measurementPhase = false;
			// System.out.println("warmup");
			Thread.sleep(this.warmup * 1000);
			// System.out.println("timeBegins");
			timeBegins = (int) (System.nanoTime() / 1000000);
			// System.out.println("getrusageBegin");
			perfin.JgetrusageBegin();
			// System.out.println("JsetcountersBegin");
			perfin.JsetcountersBegin(trin);
			measurementPhase = true;
			// System.out.println("measurment");

			Thread.sleep(this.measurement * 1000);

			timeEnds = (int) (System.nanoTime() / 1000000);
			perfin.JgetrusageEnd();
			perfin.JsetcountersEnd(trin);

			measurementPhase = false;
			this.setMeasurementDone();
			Thread.sleep(this.cooldown * 1000);

		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		int i, j, countErr = 0;
		for (i = 1; i < Twitter.arrMsg.size(); i++) {
			for (j = 0; j < i; j++) {
				if (Twitter.arrMsg.get(j).getId() == Twitter.arrMsg.get(i)
						.getId_ref()
						&& Twitter.arrMsg.get(j).getLocalCount() == Twitter.arrMsg
								.get(i).getRefCount()) {
					break;
				}
			}
			if(i == j) {
				System.out.println("Error!!!");
				System.out.println("arrMsg(" + i + ") = id:"
						+ Twitter.arrMsg.get(i).getId() + ", rank:" + Twitter.arrMsg.get(i).getLocalCount()
						+ ", refMsgID:" + Twitter.arrMsg.get(i).getId_ref() + ", refMsgRank:"
						+ Twitter.arrMsg.get(i).getRefCount());
				countErr++;
			}
		}
		System.out.println("Nombre d'err = " + countErr);

		// System.out.println(
		// "latency --broadcasters " + broadcasters + " --cooldown " + cooldown
		// + " --frequencyPing " + Perf.frequencyOfPing + " --wagonMaxLen " +
		// --measurement %d --number %d --size %d --trainsNumber %d --warmup
		// %d\n",
		// broadcasters, cooldown, frequencyOfPing, wagonMaxLen, measurement,
		// number, size,
		// trainsNumber, warmup);
		//
		// printDiffTimeval("time for tr_init (in sec)", timeTrInitEnd,
		// timeTrInitBegin);
		//
		// printDiffTimeval("elapsed time (in sec)", timeEnd, timeBegin);
		//
		// printDiffTimeval("ru_utime (in sec)", rusageEnd.ru_utime,
		// rusageBegin.ru_utime);
		// printDiffTimeval("ru_stime (in sec)", rusageEnd.ru_stime,
		// rusageBegin.ru_stime);
		//
		// timeradd(&rusageBegin.ru_utime, &rusageBegin.ru_stime, &startSomme);
		// timeradd(&rusageEnd.ru_utime, &rusageEnd.ru_stime, &stopSomme);
		// printDiffTimeval("ru_utime+ru_stime (in sec)", stopSomme,
		// startSomme);
		//
		// System.out.println("number of messages delivered to the application ; %llu\n",
		// countersEnd.messages_delivered - countersBegin.messages_delivered);
		// System.out.println("number of bytes delivered to the application ; %llu\n",
		// countersEnd.messages_bytes_delivered -
		// countersBegin.messages_bytes_delivered);
		// System.out.println("number of bytes of trains received from the network ; %llu\n",
		// countersEnd.trains_bytes_received -
		// countersBegin.trains_bytes_received);
		// System.out.println("number of trains received from the network ; %llu\n",
		// countersEnd.trains_received - countersBegin.trains_received);
		// System.out.println("number of bytes of recent trains received from the network ; %llu\n",
		// countersEnd.recent_trains_bytes_received -
		// countersBegin.recent_trains_bytes_received);
		// System.out.println("number of recent trains received from the network ; %llu\n",
		// countersEnd.recent_trains_received -
		// countersBegin.recent_trains_received);
		// System.out.println("number of wagons delivered to the application ; %llu\n",
		// countersEnd.wagons_delivered - countersBegin.wagons_delivered);
		// System.out.println("number of times automaton has been in state WAIT ; %llu\n",
		// countersEnd.wait_states - countersBegin.wait_states);
		// System.out.println("number of calls to commRead() ; %llu\n",
		// countersEnd.comm_read - countersBegin.comm_read);
		// System.out.println("number of bytes read by commRead() calls ; %llu\n",
		// countersEnd.comm_read_bytes - countersBegin.comm_read_bytes);
		// System.out.println("number of calls to commReadFully() ; %llu\n",
		// countersEnd.comm_readFully - countersBegin.comm_readFully);
		// System.out.println("number of bytes read by commReadFully() calls ; %llu\n",
		// countersEnd.comm_readFully_bytes -
		// countersBegin.comm_readFully_bytes);
		// System.out.println("number of calls to commWrite() ; %llu\n",
		// countersEnd.comm_write - countersBegin.comm_write);
		// System.out.println("number of bytes written by commWrite() calls ; %llu\n",
		// countersEnd.comm_write_bytes - countersBegin.comm_write_bytes);
		// System.out.println("number of calls to commWritev() ; %llu\n",
		// countersEnd.comm_writev - countersBegin.comm_writev);
		// System.out.println("number of bytes written by commWritev() calls ; %llu\n",
		// countersEnd.comm_writev_bytes - countersBegin.comm_writev_bytes);
		// System.out.println("number of calls to newmsg() ; %llu\n",
		// countersEnd.newmsg - countersBegin.newmsg);
		// System.out.println("number of times there was flow control when calling newmsg() ; %llu\n",
		// countersEnd.flowControl - countersBegin.flowControl);
		//
		// timersub(&stopSomme, &startSomme, &diffCPU);
		// timersub(&timeEnd, &timeBegin, &diffTimeval);
		// System.out.println(
		// "Broadcasters / number / size / ntr / Average number of delivered wagons per recent train received / Average number of msg per wagon / Throughput of uto-broadcasts in Mbps / %%CPU ; %d ; %d ; %d ; %d ; %g ; %g ; %g ; %g\n",
		// broadcasters, number, size, ntr,
		// ((double) (countersEnd.wagons_delivered -
		// countersBegin.wagons_delivered))
		// / ((double) (countersEnd.recent_trains_received
		// - countersBegin.recent_trains_received)),
		// ((double) (countersEnd.messages_delivered
		// - countersBegin.messages_delivered))
		// / ((double) (countersEnd.wagons_delivered
		// - countersBegin.wagons_delivered)),
		// ((double) (countersEnd.messages_bytes_delivered
		// - countersBegin.messages_bytes_delivered) * 8)
		// / ((double) (diffTimeval.tv_sec * 1000000 + diffTimeval.tv_usec)),
		// ((double) (diffCPU.tv_sec * 1000000 + diffCPU.tv_usec)
		// / (double) (diffTimeval.tv_sec * 1000000 + diffTimeval.tv_usec)));

		System.out.println("Time for LoadInterface (in sec): "
				+ (this.timeLoadInterfaceEnds - this.timeLoadInterfaceBegins)
				/ 1000d);
		System.out.println("Time for JtrInit (in sec): "
				+ (this.timeJtrInitEnds - this.timeJtrInitBegins) / 1000000d);
		System.out.println("Elasped time (in sec): " + (timeEnds - timeBegins)
				/ 1000d);

		System.out.println("ru_utime: " + perfin.Jgetru_utime() / 1000000d);
		System.out.println("su_utime: " + perfin.Jgetru_stime() / 1000000d);

		System.out.println("number of messages delivered to the application: "
				+ perfin.Jgetmessages_delivered());
		System.out.println("number of bytes delivered to the application: "
				+ perfin.Jgetmessages_bytes_delivered());
		System.out
				.println("number of bytes of trains received from the network: "
						+ perfin.Jgettrains_bytes_received());
		System.out.println("number of trains received from the network: "
				+ perfin.Jgettrains_received());
		System.out
				.println("number of bytes of recent trains received from the network: "
						+ perfin.Jgetrecent_trains_bytes_received());
		System.out
				.println("number of recent trains received from the network: "
						+ perfin.Jgetrecent_trains_received());
		System.out.println("number of wagons delivered to the application: "
				+ perfin.Jgetwagons_delivered());
		System.out.println("number of times automaton has been in state WAIT: "
				+ perfin.Jgetwait_states());
		System.out.println("number of calls to commRead() : "
				+ perfin.Jgetcomm_read());
		System.out.println("number of bytes read by commRead() calls: "
				+ perfin.Jgetcomm_read_bytes());
		System.out.println("number of calls to commReadFully(): "
				+ perfin.Jgetcomm_readFully());
		System.out.println("number of bytes read by commReadFully() calls: "
				+ perfin.Jgetcomm_readFully_bytes());
		System.out.println("number of calls to commWrite(): "
				+ perfin.Jgetcomm_write());
		System.out.println("number of bytes written by commWrite() calls: "
				+ perfin.Jgetcomm_write_bytes());
		System.out.println("number of calls to commWritev(): "
				+ perfin.Jgetcomm_writev());
		System.out.println("number of bytes written by commWritev() calls: "
				+ perfin.Jgetcomm_writev_bytes());
		System.out.println("number of calls to newmsg(): "
				+ perfin.Jgetnewmsg());
		System.out
				.println("number of times there was flow control when calling newmsg(): "
						+ perfin.JgetflowControl());

		System.out
				.println("\nBroadcasters / number / size / ntr / Average number of delivered wagons per recent train received / Average number of msg per wagon / Throughput of uto-broadcasts in Mbps ; "
						+ broadcasters
						+ " ; "
						+ number
						+ " ; "
						+ size
						+ " ; ?ntr ; "
						+ perfin.Jgetwagons_delivered()
						/ perfin.Jgetrecent_trains_received()
						+ " ; "
						+ perfin.Jgetmessages_delivered()
						/ perfin.Jgetwagons_delivered()
						+ " ; "
						+ perfin.Jgetmessages_bytes_delivered()
						/ ((timeEnds - timeBegins) / 1000d) + "\n");

		// Latency results

		LatencyData.setStatistics();
		if (Twitter.rank >= broadcasters) {
			System.out
					.println("WARNING : This participant was not a broadcaster");
			System.out.println("It didn't send any PING message");
		}
		System.out.println("Number of ping records during this experience : "
				+ LatencyData.currentRecordsNb);
		System.out.println("Average latency  (ms)   : " + LatencyData.mean);
		System.out.println("Variance                : " + LatencyData.variance);
		System.out.println("Standard deviation      : "
				+ LatencyData.standardDeviation);
		System.out.println("95%% confidence interval : ["
				+ LatencyData.min95confidenceInterval + " ; "
				+ LatencyData.max95confidenceInterval + "]");
		System.out.println("99%% confidence interval : ["
				+ LatencyData.min99confidenceInterval + " ; "
				+ LatencyData.max99confidenceInterval + "]");

		System.exit(0);
	}

	public void setTimeLoadInterfaceBegins(long val) {
		this.timeLoadInterfaceBegins = val;
	}

	public void setTimeLoadInterfaceEnds(long val) {
		this.timeLoadInterfaceEnds = val;
	}

	public void setTimeJtrInitBegins(long val) {
		this.timeJtrInitBegins = val;
	}

	public void setTimeJtrInitEnds(long val) {
		this.timeJtrInitEnds = val;
	}

	public void setMeasurementDone() {
		Twitter.measurementDone = true;
	}

	public boolean isMeasurementPhase() {
		return measurementPhase;
	}

	public void setMeasurementPhase(boolean measurementPhase) {
		this.measurementPhase = measurementPhase;
	}

}
