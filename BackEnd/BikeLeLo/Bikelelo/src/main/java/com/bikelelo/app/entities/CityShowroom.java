package com.bikelelo.app.entities;

public class CityShowroom {
	
	private Company companyid;
	private City cityid;
	
	public CityShowroom() {
		super();
	}
	
	public CityShowroom(Company companyid, City cityid) {
		super();
		this.companyid = companyid;
		this.cityid = cityid;
	}
	
	public CityShowroom(City cityid) {
		super();
		this.cityid = cityid;
	}
	
	public Company getCompanyid() {
		return companyid;
	}
	
	public void setCompanyid(Company companyid) {
		this.companyid = companyid;
	}
	
	public City getCityid() {
		return cityid;
	}
	
	public void setCityid(City cityid) {
		this.cityid = cityid;
	}
	
	@Override
	public String toString() {
		return "CityShowroom [companyid=" + companyid + ", cityid=" + cityid + "]";
	}
}
