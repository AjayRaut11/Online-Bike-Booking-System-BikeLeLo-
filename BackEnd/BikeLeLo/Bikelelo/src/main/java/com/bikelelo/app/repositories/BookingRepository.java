package com.bikelelo.app.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import com.bikelelo.app.entities.Bookings;

public interface BookingRepository extends JpaRepository<Bookings, Integer> {

	@Query("select b from Bookings b where b.swid.swid = :i")
	List<Bookings> findAllbook(int i);

	@Query("select b from Bookings b where b.uid.uid = :uid")
	List<Bookings> getbookings(int uid);

	@Transactional
	@Modifying
	@Query("update Bookings set status = 'Cancelled' where bookingid = :bookingid")
	int cancelBook(int bookingid);
	
	@Transactional
	@Modifying
	@Query("update Bookings set status = :status where bookingid = :bookingid ")
	int editbook(int bookingid, String status);

	@Query("select b from Bookings b where b.uid.uid = :uid and status != 'Cancelled'")
	List<Bookings> getActbookings(int uid);

	@Query("select b from Bookings b where DATE_FORMAT(b.dbook, '%M') = :month")
	List<Bookings> getbymonth(String month);
}
