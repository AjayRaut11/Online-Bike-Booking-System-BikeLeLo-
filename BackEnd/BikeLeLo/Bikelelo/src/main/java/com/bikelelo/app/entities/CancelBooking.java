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
@Table(name = "cancelbooking")
public class CancelBooking {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int reqid;

	@Column
	private double refundamt;
	
	@Column
	private String paymode;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "bookingid")
	private Bookings bookingid;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	private Date reqdate;
	
	@Column
	private String reason;

	public CancelBooking() {
		super();
	}

	public CancelBooking(int reqid, double refundamt, String paymode, Bookings bookingid, Date reqdate, String reason) {
		super();
		this.reqid = reqid;
		this.refundamt = refundamt;
		this.paymode = paymode;
		this.bookingid = bookingid;
		this.reqdate = reqdate;
		this.reason = reason;
	}

	public CancelBooking(double refundamt, String paymode, Bookings bookingid, Date reqdate, String reason) {
		super();
		this.refundamt = refundamt;
		this.paymode = paymode;
		this.bookingid = bookingid;
		this.reqdate = reqdate;
		this.reason = reason;
	}

	public CancelBooking(Bookings bookingid) {
		super();
		this.bookingid = bookingid;
	}

	public int getReqid() {
		return reqid;
	}

	public void setReqid(int reqid) {
		this.reqid = reqid;
	}

	public double getRefundamt() {
		return refundamt;
	}

	public void setRefundamt(double refundamt) {
		this.refundamt = refundamt;
	}

	public String getPaymode() {
		return paymode;
	}

	public void setPaymode(String paymode) {
		this.paymode = paymode;
	}

	public Bookings getBookingid() {
		return bookingid;
	}

	public void setBookingid(Bookings bookingid) {
		this.bookingid = bookingid;
	}

	public Date getReqdate() {
		return reqdate;
	}

	public void setReqdate(Date reqdate) {
		this.reqdate = reqdate;
	}

	public String getReason() {
		return reason;
	}

	public void setReason(String reason) {
		this.reason = reason;
	}

	@Override
	public String toString() {
		return "CancelBooking [reqid=" + reqid + ", refundamt=" + refundamt + ", paymode=" + paymode + ", bookingid="
				+ bookingid + ", reqdate=" + reqdate + ", reason=" + reason + "]";
	}
}
