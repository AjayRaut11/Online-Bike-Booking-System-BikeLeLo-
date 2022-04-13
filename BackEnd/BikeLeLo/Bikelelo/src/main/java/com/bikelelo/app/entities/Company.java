package com.bikelelo.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="company")
public class Company {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int companyid;
	@Column
	private String companyname;
	
	public Company() {
		super();
	}

	public Company(int companyid, String companyname) {
		super();
		this.companyid = companyid;
		this.companyname = companyname;
	}

	public Company(String companyname) {
		super();
		this.companyname = companyname;
	}
	
	public int getCompanyid() {
		return companyid;
	}

	public void setCompanyid(int companyid) {
		this.companyid = companyid;
	}

	public String getCompanyname() {
		return companyname;
	}

	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}

	@Override
	public String toString() {
		return "Company [companyid=" + companyid + ", companyname=" + companyname + "]";
	}
}
