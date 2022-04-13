package com.bikelelo.app.entities;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "showroom")
public class Showroom {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int swid;
	@Column
	private String swname;
	@Column
	private String email;
	@Column
	private String contact;
	@Column(name = "landmark")
	private String paddress;
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="cityid")
	private City cityid;
	@Column
	private int pincode;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "loginid")
	private User loginid;
	
	public Showroom() {
		super();
	}

	public Showroom(int swid, String swname, String email, String contact, String paddress, City cityid, int pincode,
			User loginid) {
		super();
		this.swid = swid;
		this.swname = swname;
		this.email = email;
		this.contact = contact;
		this.paddress = paddress;
		this.cityid = cityid;
		this.pincode = pincode;
		this.loginid = loginid;
	}

	public Showroom(User loginid, String swname, String email, String contact, String paddress, City cityid, int pincode) {
		super();
		this.swname = swname;
		this.email = email;
		this.contact = contact;
		this.paddress = paddress;
		this.cityid = cityid;
		this.pincode = pincode;
		this.loginid = loginid;
	}

	public Showroom(String email, String contact, User loginid) {
		super();
		this.email = email;
		this.contact = contact;
		this.loginid = loginid;
	}

	public int getSwid() {
		return swid;
	}

	public void setSwid(int swid) {
		this.swid = swid;
	}

	public String getSwname() {
		return swname;
	}

	public void setSwname(String swname) {
		this.swname = swname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getPaddress() {
		return paddress;
	}

	public void setPaddress(String paddress) {
		this.paddress = paddress;
	}

	public City getCityid() {
		return cityid;
	}

	public void setCityid(City cityid) {
		this.cityid = cityid;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
	}

	public User getLoginid() {
		return loginid;
	}

	public void setLoginid(User loginid) {
		this.loginid = loginid;
	}

	@Override
	public String toString() {
		return "Showroom [swid=" + swid + ", swname=" + swname + ", email=" + email + ", contact=" + contact
				+ ", paddress=" + paddress + ", cityid=" + cityid + ", pincode=" + pincode + ", loginid=" + loginid
				+ "]";
	}
}
