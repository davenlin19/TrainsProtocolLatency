package twitterApp;

public class MessageTwitter {

	int id;
	int localCount;
	int id_ref;
	int refCount;
	int heure;

	public MessageTwitter(int id, int localCount, int id_ref, int refCount,
			int heure) {
		super();
		this.id = id;
		this.localCount = localCount;
		this.id_ref = id_ref;
		this.refCount = refCount;
		this.heure = heure;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getLocalCount() {
		return localCount;
	}

	public void setLocalCount(int localCount) {
		this.localCount = localCount;
	}

	public int getId_ref() {
		return id_ref;
	}

	public void setId_ref(int id_ref) {
		this.id_ref = id_ref;
	}

	public int getRefCount() {
		return refCount;
	}

	public void setRefCount(int refCount) {
		this.refCount = refCount;
	}

	public int getHeure() {
		return heure;
	}

	public void setHeure(int heure) {
		this.heure = heure;
	}

}
