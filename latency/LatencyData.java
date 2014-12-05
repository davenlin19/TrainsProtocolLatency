package perf;

public class LatencyData {

	public static int currentRecordsNb = 0;
	public static int maxRecordsNb = 512;
	public static int timevalRecords[] = new int[512];
	public static double mean = 0, variance = 0;
	public static double standardDeviation = 0, min95confidenceInterval = 0,
			max95confidenceInterval = 0, min99confidenceInterval = 0,
			max99confidenceInterval = 0;

	static int recordValue(int value) {

		if (currentRecordsNb == maxRecordsNb) {
			maxRecordsNb *= 2;
			// timevalRecords = realloc(pingRec->timevalRecords,
			// pingRec->maxRecordsNb * sizeof(struct timeval));
		}

		timevalRecords[currentRecordsNb] = value;
		currentRecordsNb++;

		return 0;
	}

	static int setStatistics() {

		int i;
		double calculatedMean = 0;
		double calculatedVariance = 0;

		double[] floatRecords = new double[currentRecordsNb];

		// Data conversion from struct timeval to double
		// and calculation of the mean
		for (i = 0; i < currentRecordsNb; i++) {
			floatRecords[i] = (double) timevalRecords[i];

			calculatedMean += floatRecords[i];
		}
		calculatedMean /= currentRecordsNb;
		mean = calculatedMean;

		// Calculation of the variance
		for (i = 0; i < currentRecordsNb; i++) {

			calculatedVariance += ((floatRecords[i] - calculatedMean) * (floatRecords[i] - calculatedMean));

		}
		calculatedVariance /= currentRecordsNb;
		variance = calculatedVariance;

		// Calculation of the standard deviation
		standardDeviation = Math.sqrt(variance);

		// Calculation of the confidence intervals
		min95confidenceInterval = mean - 2 * standardDeviation;
		max95confidenceInterval = mean + 2 * standardDeviation;
		min99confidenceInterval = mean - 3 * standardDeviation;
		max99confidenceInterval = mean + 3 * standardDeviation;

		return 0;
	}
}
