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
@Table(name = "bookings")
public class Bookings {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingid;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "uid")
	private Customer uid;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "vehicleid")
	private Specifications vehicleid;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "swid")
	private Showroom swid;

	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column(name = "dbook")
	private Date dbook;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "trid")
	private Payment trid;
	
	@Column
	private String status;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "cvid")
	private VehicleColor cvid;
	
	public Bookings() {
		super();
	}

	public Bookings(Showroom swid) {
		super();
		this.swid = swid;
	}

	public Bookings(Customer uid, Specifications vehicleid, Showroom swid, Date dbook, Payment trid, String status,
			VehicleColor cvid) {
		super();
		this.uid = uid;
		this.vehicleid = vehicleid;
		this.swid = swid;
		this.dbook = dbook;
		this.trid = trid;
		this.status = status;
		this.cvid = cvid;
	}

	public Bookings(int bookingid, Customer uid, Specifications vehicleid, Showroom swid, Date dbook, Payment trid,
			String status, VehicleColor cvid) {
		super();
		this.bookingid = bookingid;
		this.uid = uid;
		this.vehicleid = vehicleid;
		this.swid = swid;
		this.dbook = dbook;
		this.trid = trid;
		this.status = status;
		this.cvid = cvid;
	}

	public Bookings(int bookingid) {
		super();
		this.bookingid = bookingid;
	}

	public int getBookingid() {
		return bookingid;
	}


	public void setBookingid(int bookingid) {
		this.bookingid = bookingid;
	}


	public Customer getUid() {
		return uid;
	}


	public void setUid(Customer uid) {
		this.uid = uid;
	}


	public Specifications getVehicleid() {
		return vehicleid;
	}


	public void setVehicleid(Specifications vehicleid) {
		this.vehicleid = vehicleid;
	}


	public Showroom getSwid() {
		return swid;
	}


	public void setSwid(Showroom swid) {
		this.swid = swid;
	}


	public Date getDbook() {
		return dbook;
	}


	public void setDbook(Date dbook) {
		this.dbook = dbook;
	}


	public Payment getTrid() {
		return trid;
	}


	public void setTrid(Payment trid) {
		this.trid = trid;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		this.status = status;
	}

	public VehicleColor getCvid() {
		return cvid;
	}

	public void setCvid(VehicleColor cvid) {
		this.cvid = cvid;
	}

	@Override
	public String toString() {
		return "Bookings [bookingid=" + bookingid + ", uid=" + uid + ", vehicleid=" + vehicleid + ", swid=" + swid
				+ ", dbook=" + dbook + ", trid=" + trid + ", status=" + status + ", cvid=" + cvid + "]";
	}
}
