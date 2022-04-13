package com.bikelelo.app.entities;

public class BikeSpecs {
	
	private int vehicleid;
	private String modelname;
	private int companyid;
	private double xswprice;
	private int catid;
	private String engcap;
	private String mileage;
	private String fuelcap;
	private String emissionstd;
	private String brakesys;
	private String torque;
	private String fbraketype;
	private String rbraketype;
	private int cylinder;
	private int killswitch;
	private String power;
	private int warranty;
	private String kerbweight;
	private String seatheight;
	private String about;
	private String searchtext;
	
	public BikeSpecs() {
		super();
	}

	public BikeSpecs(int vehicleid, String modelname, int companyid, double xswprice, int catid, String engcap,
			String mileage, String fuelcap, String emissionstd, String brakesys, String torque, String fbraketype,
			String rbraketype, int cylinder, int killswitch, String power, int warranty, String kerbweight,
			String seatheight, String about) {
		super();
		this.vehicleid = vehicleid;
		this.modelname = modelname;
		this.companyid = companyid;
		this.xswprice = xswprice;
		this.catid = catid;
		this.engcap = engcap;
		this.mileage = mileage;
		this.fuelcap = fuelcap;
		this.emissionstd = emissionstd;
		this.brakesys = brakesys;
		this.torque = torque;
		this.fbraketype = fbraketype;
		this.rbraketype = rbraketype;
		this.cylinder = cylinder;
		this.killswitch = killswitch;
		this.power = power;
		this.warranty = warranty;
		this.kerbweight = kerbweight;
		this.seatheight = seatheight;
		this.about = about;
	}

	public BikeSpecs(String modelname, int companyid, double xswprice, int catid, String engcap, String mileage,
			String fuelcap, String emissionstd, String brakesys, String torque, String fbraketype, String rbraketype,
			int cylinder, int killswitch, String power, int warranty, String kerbweight, String seatheight,
			String about) {
		super();
		this.modelname = modelname;
		this.companyid = companyid;
		this.xswprice = xswprice;
		this.catid = catid;
		this.engcap = engcap;
		this.mileage = mileage;
		this.fuelcap = fuelcap;
		this.emissionstd = emissionstd;
		this.brakesys = brakesys;
		this.torque = torque;
		this.fbraketype = fbraketype;
		this.rbraketype = rbraketype;
		this.cylinder = cylinder;
		this.killswitch = killswitch;
		this.power = power;
		this.warranty = warranty;
		this.kerbweight = kerbweight;
		this.seatheight = seatheight;
		this.about = about;
	}

	public BikeSpecs(String searchtext) {
		super();
		this.searchtext = searchtext;
	}
	
	public String getSearchtext() {
		return searchtext;
	}

	public void setSearchtext(String searchtext) {
		this.searchtext = searchtext;
	}

	public int getVehicleid() {
		return vehicleid;
	}

	public void setVehicleid(int vehicleid) {
		this.vehicleid = vehicleid;
	}

	public String getModelname() {
		return modelname;
	}

	public void setModelname(String modelname) {
		this.modelname = modelname;
	}

	public int getCompanyid() {
		return companyid;
	}

	public void setCompanyid(int companyid) {
		this.companyid = companyid;
	}

	public double getXswprice() {
		return xswprice;
	}

	public void setXswprice(double xswprice) {
		this.xswprice = xswprice;
	}

	public int getCatid() {
		return catid;
	}

	public void setCatid(int catid) {
		this.catid = catid;
	}

	public String getEngcap() {
		return engcap;
	}

	public void setEngcap(String engcap) {
		this.engcap = engcap;
	}

	public String getMileage() {
		return mileage;
	}

	public void setMileage(String mileage) {
		this.mileage = mileage;
	}

	public String getFuelcap() {
		return fuelcap;
	}

	public void setFuelcap(String fuelcap) {
		this.fuelcap = fuelcap;
	}

	public String getEmissionstd() {
		return emissionstd;
	}

	public void setEmissionstd(String emissionstd) {
		this.emissionstd = emissionstd;
	}

	public String getBrakesys() {
		return brakesys;
	}

	public void setBrakesys(String brakesys) {
		this.brakesys = brakesys;
	}

	public String getTorque() {
		return torque;
	}

	public void setTorque(String torque) {
		this.torque = torque;
	}

	public String getFbraketype() {
		return fbraketype;
	}

	public void setFbraketype(String fbraketype) {
		this.fbraketype = fbraketype;
	}

	public String getRbraketype() {
		return rbraketype;
	}

	public void setRbraketype(String rbraketype) {
		this.rbraketype = rbraketype;
	}

	public int getCylinder() {
		return cylinder;
	}

	public void setCylinder(int cylinder) {
		this.cylinder = cylinder;
	}

	public int getKillswitch() {
		return killswitch;
	}

	public void setKillswitch(int killswitch) {
		this.killswitch = killswitch;
	}

	public String getPower() {
		return power;
	}

	public void setPower(String power) {
		this.power = power;
	}

	public int getWarranty() {
		return warranty;
	}

	public void setWarranty(int warranty) {
		this.warranty = warranty;
	}

	public String getKerbweight() {
		return kerbweight;
	}

	public void setKerbweight(String kerbweight) {
		this.kerbweight = kerbweight;
	}

	public String getSeatheight() {
		return seatheight;
	}

	public void setSeatheight(String seatheight) {
		this.seatheight = seatheight;
	}

	public String getAbout() {
		return about;
	}

	public void setAbout(String about) {
		this.about = about;
	}

	@Override
	public String toString() {
		return "BikeSpecs [vehicleid=" + vehicleid + ", modelname=" + modelname + ", companyid=" + companyid
				+ ", xswprice=" + xswprice + ", catid=" + catid + ", engcap=" + engcap + ", mileage=" + mileage
				+ ", fuelcap=" + fuelcap + ", emissionstd=" + emissionstd + ", brakesys=" + brakesys + ", torque="
				+ torque + ", fbraketype=" + fbraketype + ", rbraketype=" + rbraketype + ", cylinder=" + cylinder
				+ ", killswitch=" + killswitch + ", power=" + power + ", warranty=" + warranty + ", kerbweight="
				+ kerbweight + ", seatheight=" + seatheight + ", about=" + about + "]";
	}
}
