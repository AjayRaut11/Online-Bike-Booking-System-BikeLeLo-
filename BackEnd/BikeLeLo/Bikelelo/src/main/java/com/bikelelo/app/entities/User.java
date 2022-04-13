package com.bikelelo.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "login")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int loginid;
	@Column
	private String userid;
	@Column
	private String pwd;
	@Column
	private String securityque;
	@Column
	private String ans;
	@Column
	private String hint;
	@Column
	private String role;
	@Column
	private int accstate;
	
	public User() {
		super();
	}

	public User(int loginid, String userid, String pwd, String securityque, String ans, String hint, String role,
			int accstate) {
		super();
		this.loginid = loginid;
		this.userid = userid;
		this.pwd = pwd;
		this.securityque = securityque;
		this.ans = ans;
		this.hint = hint;
		this.role = role;
		this.accstate = accstate;
	}

	public User(String userid, String pwd, String securityque, String ans, String hint, String role, int accstate) {
		super();
		this.userid = userid;
		this.pwd = pwd;
		this.securityque = securityque;
		this.ans = ans;
		this.hint = hint;
		this.role = role;
		this.accstate = accstate;
	}
	
	public User(String userid, String pwd) {
		super();
		this.userid = userid;
		this.pwd = pwd;
	}

	public User(int loginid, String securityque, String ans, String hint) {
		super();
		this.loginid = loginid;
		this.securityque = securityque;
		this.ans = ans;
		this.hint = hint;
	}

	public int getLoginid() {
		return loginid;
	}

	public void setLoginid(int loginid) {
		this.loginid = loginid;
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
		return "User [loginid=" + loginid + ", userid=" + userid + ", pwd=" + pwd + ", securityque=" + securityque
				+ ", ans=" + ans + ", hint=" + hint + ", role=" + role + ", accstate=" + accstate + "]";
	}
}
