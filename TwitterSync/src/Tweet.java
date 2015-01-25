public class Tweet {

	private int sender_id;
	private int sender_count;
	private int ref_id;
	private int ref_count;
	private String sendDate;
	private int latency;
	private int id;

	public int getSender_id() {
		return sender_id;
	}

	public void setSender_id(int sender_id) {
		this.sender_id = sender_id;
	}

	public int getSender_count() {
		return sender_count;
	}

	public void setSender_count(int sender_count) {
		this.sender_count = sender_count;
	}

	public int getRef_id() {
		return ref_id;
	}

	public void setRef_id(int ref_id) {
		this.ref_id = ref_id;
	}

	public int getRef_count() {
		return ref_count;
	}

	public void setRef_count(int ref_count) {
		this.ref_count = ref_count;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getSendDate() {
		return sendDate;
	}

	public void setSendDate(String sendDate) {
		this.sendDate = sendDate;
	}

	public int getLatency() {
		return latency;
	}

	public void setLatency(int latency) {
		this.latency = latency;
	}

}
