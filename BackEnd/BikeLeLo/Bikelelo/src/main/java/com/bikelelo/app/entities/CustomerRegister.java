package com.bikelelo.app.entities;

import java.util.Date;

public class CustomerRegister {
	
	private String fname;
	private String lname;
	private String email;
	private String contact;
	private String paddress;
	private Date dob;
	private String userid;
	private String pwd;
	private String securityque;
	private String ans;
	private String hint;
	private String role;
	private String npwd;
	private int accstate;
	private int loginid;
	
	public CustomerRegister() {
		super();
	}

	public CustomerRegister(String fname, String lname, String email, String contact, String paddress, Date dob,
			String userid, String pwd, String securityque, String ans, String hint, String role, int accstate) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.paddress = paddress;
		this.dob = dob;
		this.userid = userid;
		this.pwd = pwd;
		this.securityque = securityque;
		this.ans = ans;
		this.hint = hint;
		this.role = role;
		this.accstate = accstate;
	}
	
	public CustomerRegister(String userid, String pwd, String npwd) {
		super();
		this.userid = userid;
		this.pwd = pwd;
		this.npwd = npwd;
	}

	public CustomerRegister(String fname, String lname, String email, String contact, String paddress, Date dob,
			String securityque, String ans, String hint, int loginid) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.contact = contact;
		this.paddress = paddress;
		this.dob = dob;
		this.securityque = securityque;
		this.ans = ans;
		this.hint = hint;
		this.loginid = loginid;
	}

	public String getNpwd() {
		return npwd;
	}

	public void setNpwd(String npwd) {
		this.npwd = npwd;
	}

	public int getLoginid() {
		return loginid;
	}

	public void setLoginid(int loginid) {
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

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getSecurityque() {
		return securityque;
	}

	public void setSecurityque(String securityque) {
		this.securityque = securityque;
	}

	public String getAns() {
		return ans;
	}

	public void setAns(String ans) {
		this.ans = ans;
	}

	public String getHint() {
		return hint;
	}

	public void setHint(String hint) {
		this.hint = hint;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public int getAccstate() {
		return accstate;
	}

	public void setAccstate(int accstate) {
		this.accstate = accstate;
	}

	@Override
	public String toString() {
		return "CustomerRegister [fname=" + fname + ", lname=" + lname + ", email=" + email + ", contact=" + contact
				+ ", paddress=" + paddress + ", dob=" + dob + ", userid=" + userid + ", pwd=" + pwd + ", securityque="
				+ securityque + ", ans=" + ans + ", hint=" + hint + ", role=" + role + ", accstate=" + accstate + "]";
	}
}
