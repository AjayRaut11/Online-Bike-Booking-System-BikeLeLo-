package com.bikelelo.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="vehiclecolor")
public class VehicleColor  {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cvid;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "vehicleid")
	private Vehicle vehicleid;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "colorid")
	private Color colorid;
	
	public VehicleColor() {
		super();
	}
	
	public VehicleColor(int cvid, Vehicle vehicleid, Color colorid) {
		super();
		this.cvid = cvid;
		this.vehicleid = vehicleid;
		this.colorid = colorid;
	}
	
	public VehicleColor(Vehicle vehicleid, Color colorid) {
		super();
		this.vehicleid = vehicleid;
		this.colorid = colorid;
	}
	
	public int getCvid() {
		return cvid;
	}
	
	public void setCvid(int cvid) {
		this.cvid = cvid;
	}
	
	public Vehicle getVehicleid() {
		return vehicleid;
	}
	
	public void setVehicleid(Vehicle vehicleid) {
		this.vehicleid = vehicleid;
	}
	
	public Color getColorid() {
		return colorid;
	}
	
	public void setColorid(Color colorid) {
		this.colorid = colorid;
	}
	
	@Override
	public String toString() {
		return "VehicleColor [cvid=" + cvid + ", vehicleid=" + vehicleid + ", colorid=" + colorid + "]";
	}	
}
