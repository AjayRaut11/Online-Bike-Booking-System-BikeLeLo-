package com.bikelelo.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bikelelo.app.entities.CancelBooking;

public interface CancelBookingRepository extends JpaRepository<CancelBooking, Integer> {

	@Query("select b from CancelBooking b where b.bookingid.uid.uid = :uid and b.bookingid.status = 'Cancelled'")
	List<CancelBooking> getcanbooking(int uid);
}