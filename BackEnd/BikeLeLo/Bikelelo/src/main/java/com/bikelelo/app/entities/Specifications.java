package com.bikelelo.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "specs")
public class Specifications {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int specsid;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "vehicleid")
	private Vehicle vehicleid;
	@Column
	private String engcap;
	@Column
	private String mileage;
	@Column
	private String fuelcap;
	@Column
	private String emissionstd;
	@Column
	private String brakesys;
	@Column
	private String torque;
	@Column
	private String fbraketype;
	@Column
	private String rbraketype;
	@Column
	private int cylinder;
	@Column
	private int killswitch;
	@Column
	private String power;
	@Column
	private String kerbweight;
	@Column
	private String seatheight;
	@Column
	private String about;
	@Column
	private int warranty;
	
	public Specifications() {
		super();
	}

	public Specifications(Vehicle vehicleid, String engcap, String mileage, String fuelcap, String emissionstd,
			String brakesys, String torque, String fbraketype, String rbraketype, int cylinder, int killswitch,
			String power, String kerbweight, String seatheight, String about, int warranty) {
		super();
		this.vehicleid = vehicleid;
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
		this.kerbweight = kerbweight;
		this.seatheight = seatheight;
		this.about = about;
		this.warranty = warranty;
	}

	public Specifications(String engcap, String mileage, String fuelcap, String emissionstd,
			String brakesys, String torque, String fbraketype, String rbraketype, int cylinder, int killswitch,
			String power, String kerbweight, String seatheight, String about, int warranty) {
		super();
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
		this.kerbweight = kerbweight;
		this.seatheight = seatheight;
		this.about = about;
		this.warranty = warranty;
	}
	
	public Specifications(int specsid, Vehicle vehicleid, String engcap, String mileage, String fuelcap,
			String emissionstd, String brakesys, String torque, String fbraketype, String rbraketype, int cylinder,
			int killswitch, String power, String kerbweight, String seatheight, String about, int warranty) {
		super();
		this.specsid = specsid;
		this.vehicleid = vehicleid;
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
		this.kerbweight = kerbweight;
		this.seatheight = seatheight;
		this.about = about;
		this.warranty = warranty;
	}

	public int getSpecsid() {
		return specsid;
	}

	public void setSpecsid(int specsid) {
		this.specsid = specsid;
	}

	public Vehicle getVehicleid() {
		return vehicleid;
	}

	public void setVehicleid(Vehicle vehicleid) {
		this.vehicleid = vehicleid;
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

	public int getWarranty() {
		return warranty;
	}

	public void setWarranty(int warranty) {
		this.warranty = warranty;
	}

	@Override
	public String toString() {
		return "Specifications [specsid=" + specsid + ", vehicleid=" + vehicleid + ", engcap=" + engcap + ", mileage="
				+ mileage + ", fuelcap=" + fuelcap + ", emissionstd=" + emissionstd + ", brakesys=" + brakesys
				+ ", torque=" + torque + ", fbraketype=" + fbraketype + ", rbraketype=" + rbraketype + ", cylinder="
				+ cylinder + ", killswitch=" + killswitch + ", power=" + power + ", kerbweight=" + kerbweight
				+ ", seatheight=" + seatheight + ", about=" + about + ", warranty=" + warranty + ", getSpecsid()="
				+ getSpecsid() + ", getVehicleid()=" + getVehicleid() + ", getEngcap()=" + getEngcap()
				+ ", getMileage()=" + getMileage() + ", getFuelcap()=" + getFuelcap() + ", getEmissionstd()="
				+ getEmissionstd() + ", getBrakesys()=" + getBrakesys() + ", getTorque()=" + getTorque()
				+ ", getFbraketype()=" + getFbraketype() + ", getRbraketype()=" + getRbraketype() + ", getCylinder()="
				+ getCylinder() + ", getKillswitch()=" + getKillswitch() + ", getPower()=" + getPower()
				+ ", getKerbweight()=" + getKerbweight() + ", getSeatheight()=" + getSeatheight() + ", getAbout()="
				+ getAbout() + ", getWarranty()=" + getWarranty() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}
}
