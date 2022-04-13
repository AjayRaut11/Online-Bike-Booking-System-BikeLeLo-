package com.bikelelo.app.entities;

public class ShowroomRegister {
	
	private String swname;
	private String email;
	private String contact;
	private String paddress;
	private int cityid;
	private int pincode;
	private String userid;
	private String pwd;
	private String securityque;
	private String ans;
	private String hint;
	private String role;
	private int accstate;
	private int loginid;
	
	public ShowroomRegister() {
		super();
	}

	public ShowroomRegister(String swname, String email, String contact, String paddress, int cityid, int pincode,
			String userid, String pwd, String securityque, String ans, String hint, String role, int accstate) {
		super();
		this.swname = swname;
		this.email = email;
		this.contact = contact;
		this.paddress = paddress;
		this.cityid = cityid;
		this.pincode = pincode;
		this.userid = userid;
		this.pwd = pwd;
		this.securityque = securityque;
		this.ans = ans;
		this.hint = hint;
		this.role = role;
		this.accstate = accstate;
	}
	
	public ShowroomRegister(int loginid, String email, String contact, String securityque, String ans, String hint) {
		super();
		this.email = email;
		this.contact = contact;
		this.securityque = securityque;
		this.ans = ans;
		this.hint = hint;
		this.loginid = loginid;
	}
	
	public int getLoginid() {
		return loginid;
	}

	public void setLoginid(int loginid) {
		this.loginid = loginid;
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

	public int getCityid() {
		return cityid;
	}

	public void setCityid(int cityid) {
		this.cityid = cityid;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
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
		return "ShowroomRegister [swname=" + swname + ", email=" + email + ", contact=" + contact + ", paddress="
				+ paddress + ", cityid=" + cityid + ", pincode=" + pincode + ", userid=" + userid + ", pwd=" + pwd
				+ ", securityque=" + securityque + ", ans=" + ans + ", hint=" + hint + ", role=" + role + ", accstate="
				+ accstate + "]";
	}
}
