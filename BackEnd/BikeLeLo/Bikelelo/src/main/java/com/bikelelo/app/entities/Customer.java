package com.bikelelo.app.entities;

import java.util.Date;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name = "customer")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int uid;
	@Column
	private String fname;
	@Column
	private String lname;
	@Column
	private String email;
	@Column
	private String contact;
	@Column
	private String paddress;
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "dob")
	private Date dob;
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "loginid")
	private User loginid;
	
	public Customer() {
		super();
	}

	public Customer(User loginid, String fname, String lname, String email, String contact, String paddress, Date bdate) {
		super();
		this.loginid = loginid;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.paddress = paddress;
		this.dob = bdate;
	}

	public Customer(int uid, User loginid, String fname, String lname, String email, String contact, String paddress,
			Date bdate) {
		super();
		this.uid = uid;
		this.loginid = loginid;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.paddress = paddress;
		this.dob = bdate;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public User getLoginid() {
		return loginid;
	}

	public void setLoginid(User loginid) {
		this.loginid = loginid;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
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

	public Date getBdate() {
		return dob;
	}

	public void setBdate(Date bdate) {
		this.dob = bdate;
	}

	@Override
	public String toString() {
		return "Customer [uid=" + uid + ", loginid=" + loginid + ", fname=" + fname + ", lname=" + lname + ", email="
				+ email + ", contact=" + contact + ", paddress=" + paddress + ", bdate=" + dob + "]";
	}
}