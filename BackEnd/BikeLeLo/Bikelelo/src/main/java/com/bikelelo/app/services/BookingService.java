package com.bikelelo.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bikelelo.app.entities.Bookings;

import com.bikelelo.app.repositories.BookingRepository;

@Service
public class BookingService {
	@Autowired
	BookingRepository brepos;
	
	public List<Bookings> getAllb(int i) {
		return brepos.findAllbook(i);
	}
	
	public boolean getEdit(int bookingid, String status) {
		if(brepos.editbook(bookingid,status)==1)
			return true;
		return false;
	}

	public List<Bookings> getAll() {
		return brepos.findAll();
	}

	public List<Bookings> getbymonth(String month) {
		return brepos.getbymonth(month);
	}
}
