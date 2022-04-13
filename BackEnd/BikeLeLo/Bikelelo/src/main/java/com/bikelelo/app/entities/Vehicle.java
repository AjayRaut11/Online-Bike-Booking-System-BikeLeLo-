package com.bikelelo.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "vehicles")
public class Vehicle {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int vehicleid;
	@Column
	private String modelname;
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="companyid")
	private Company companyid;
	@Column
	private double xswprice;
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="catid")
	private Category catid;
	
	public Vehicle() {
		super();
	}

	public Vehicle(int vehicleid, String modelname, Company companyid, double xswprice, Category catid) {
		super();
		this.vehicleid = vehicleid;
		this.modelname = modelname;
		this.companyid = companyid;
		this.xswprice = xswprice;
		this.catid = catid;
	}

	public Vehicle(String modelname, Company companyid, double xswprice, Category catid) {
		super();
		this.modelname = modelname;
		this.companyid = companyid;
		this.xswprice = xswprice;
		this.catid = catid;
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

	public Company getCompanyid() {
		return companyid;
	}

	public void setCompanyid(Company companyid) {
		this.companyid = companyid;
	}

	public double getXswprice() {
		return xswprice;
	}

	public void setXswprice(double xswprice) {
		this.xswprice = xswprice;
	}

	public Category getCatid() {
		return catid;
	}

	public void setCatid(Category catid) {
		this.catid = catid;
	}

	@Override
	public String toString() {
		return "Vehicle [vehicleid=" + vehicleid + ", modelname=" + modelname + ", companyid=" + companyid
				+ ", xswprice=" + xswprice + ", catid=" + catid + "]";
	}
}
