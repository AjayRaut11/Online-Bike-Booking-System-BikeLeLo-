package com.bikelelo.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "city")
public class City {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int cityid;
	@Column
	private String cityname;
	@Column
	private float tax;
	
	public City() {
		super();
	}

	public City(int cityid, String cityname, float tax) {
		super();
		this.cityid = cityid;
		this.cityname = cityname;
		this.tax = tax;
	}

	public City(int cityid, String cityname) {
		super();
		this.cityid = cityid;
		this.cityname = cityname;
	}

	public City(String cityname, float tax) {
		super();
		this.cityname = cityname;
		this.tax = tax;
	}

	public City(int cityid) {
		super();
		this.cityid = cityid;
	}

	public int getCityid() {
		return cityid;
	}

	public void setCityid(int cityid) {
		this.cityid = cityid;
	}

	public String getCityname() {
		return cityname;
	}

	public void setCityname(String cityname) {
		this.cityname = cityname;
	}

	public float getTax() {
		return tax;
	}

	public void setTax(float tax) {
		this.tax = tax;
	}

	@Override
	public String toString() {
		return "City [cityid=" + cityid + ", cityname=" + cityname + ", tax=" + tax + "]";
	}
}
