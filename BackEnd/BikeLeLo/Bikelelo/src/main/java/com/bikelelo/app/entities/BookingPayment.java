package com.bikelelo.app.entities;

import java.util.Date;

public class BookingPayment {
	
	private int bookingid;
	private int uid;
	private int vehicleid; //Specsid
	private int swid;
	private Date dbook;
	private int trid;
	private String status;
	private int cvid;
	private double amt;
	private String paymode;
	private String month;

	public BookingPayment() {
		super();
	}

	public BookingPayment(String month) {
		super();
		this.month = month;
	}
	
	public BookingPayment(int bookingid, int uid, int vehicleid, int swid, Date dbook,
			int trid, String status, int cvid, double amt) {
		super();
		this.bookingid = bookingid;
		this.uid = uid;
		this.vehicleid = vehicleid;
		this.swid = swid;
		this.dbook = dbook;
		this.trid = trid;
		this.status = status;
		this.cvid = cvid;
		this.amt = amt;
	}
	
	public BookingPayment(int uid, int vehicleid, int swid, Date dbook, String status,
			int cvid) {
		super();
		this.uid = uid;
		this.vehicleid = vehicleid;
		this.swid = swid;
		this.dbook = dbook;
		this.status = status;
		this.cvid = cvid;
	}
	
	public BookingPayment(int bookingid, int uid, int vehicleid, int swid, Date dbook,
			String status, int cvid) {
		super();
		this.bookingid = bookingid;
		this.uid = uid;
		this.vehicleid = vehicleid;
		this.swid = swid;
		this.dbook = dbook;
		this.status = status;
		this.cvid = cvid;
	}
	
	public BookingPayment(int trid, double amt, String paymode) {
		super();
		this.trid = trid;
		this.amt = amt;
		this.paymode = paymode;
	}
	
	public BookingPayment(double amt, String paymode) {
		super();
		this.amt = amt;
		this.paymode = paymode;
	}
	
	public BookingPayment(int bookingid) {
		super();
		this.bookingid = bookingid;
	}

	public String getMonth() {
		return month;
	}

	public void setMonth(String month) {
		this.month = month;
	}

	public int getBookingid() {
		return bookingid;
	}

	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}

	public int getUid() {
		return uid;
	}

	public void setUid(int uid) {
		this.uid = uid;
	}

	public int getVehicleid() {
		return vehicleid;
	}

	public void setVehicleid(int vehicleid) {
		this.vehicleid = vehicleid;
	}

	public int getSwid() {
		return swid;
	}

	public void setSwid(int swid) {
		this.swid = swid;
	}

	public Date getDbook() {
		return dbook;
	}

	public void setDbook(Date dbook) {
		this.dbook = dbook;
	}

	public int getTrid() {
		return trid;
	}

	public void setTrid(int trid) {
		this.trid = trid;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getCvid() {
		return cvid;
	}

	public void setCvid(int cvid) {
		this.cvid = cvid;
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
		return "BookingPayment [bookingid=" + bookingid + ", uid=" + uid + ", vehicleid=" + vehicleid + ", swid=" + swid
				+ ", dbook=" + dbook + ", trid=" + trid + ", status=" + status + ", cvid=" + cvid + ", amt=" + amt
				+ ", paymode=" + paymode + ", month=" + month + "]";
	}
}
