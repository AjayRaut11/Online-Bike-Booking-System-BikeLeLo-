package com.bikelelo.app.entities;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "payment")
public class Payment {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int trid;
	
	@Column
	private double amt;

	@Column
	private String paymode;


	public Payment() {
		super();
	}

	public Payment(int trid, double amt, String paymode) {
		super();
		this.trid = trid;
		this.amt = amt;
		this.paymode = paymode;
		
	}

	public Payment(double amt, String paymode) {
		super();
		this.amt = amt;
		this.paymode = paymode;
	
	}

	public int getTrid() {
		return trid;
	}

	public void setTrid(int trid) {
		this.trid = trid;
	}

	public double getAmt() {
		return amt;
	}

	public void setAmt(double amt) {
		this.amt = amt;
	}

	public String getPaymode() {
		return paymode;
	}

	public void setPaymode(String paymode) {
		this.paymode = paymode;
	}


	@Override
	public String toString() {
		return "Payment [trid=" + trid + ", amt=" + amt + ", paymode=" + paymode + "]";
	}
	
}
