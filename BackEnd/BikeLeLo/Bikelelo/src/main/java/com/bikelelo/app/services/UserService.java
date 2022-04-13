package com.bikelelo.app.services;

import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bikelelo.app.entities.Bookings;
import com.bikelelo.app.entities.CancelBooking;
import com.bikelelo.app.entities.City;
import com.bikelelo.app.entities.Customer;
import com.bikelelo.app.entities.Payment;
import com.bikelelo.app.entities.SecurityQuestion;
import com.bikelelo.app.entities.Showroom;
import com.bikelelo.app.entities.Specifications;
import com.bikelelo.app.entities.User;
import com.bikelelo.app.entities.Vehicle;
import com.bikelelo.app.entities.VehicleColor;
import com.bikelelo.app.repositories.BookingRepository;
import com.bikelelo.app.repositories.CancelBookingRepository;
import com.bikelelo.app.repositories.CityRepository;
import com.bikelelo.app.repositories.CustomerRepository;
import com.bikelelo.app.repositories.PaymentRepository;
import com.bikelelo.app.repositories.SecurityQuestionRepository;
import com.bikelelo.app.repositories.ShowroomRepository;
import com.bikelelo.app.repositories.SpecificationRepository;
import com.bikelelo.app.repositories.UserRepository;
import com.bikelelo.app.repositories.VehicleColorRepository;  

@Service
public class UserService {

	@Autowired
	UserRepository urepos;
	
	@Autowired
	ShowroomRepository swrepos;
	
	@Autowired
	CustomerRepository crepos;
	
	@Autowired
	ShowroomRepository shrepos;
	
	@Autowired
	SecurityQuestionRepository qrepos;
	
	@Autowired
	CityRepository cityrepos;
	
	@Autowired
	VehicleColorRepository vcrepos;
	
	@Autowired
	BookingRepository brepos;
	
	@Autowired
	CancelBookingRepository canbookrepos;
	
	@Autowired
	PaymentRepository prepos;
	
	@Autowired
	SpecificationRepository specsrepos;

	public User validateLogin(String userid, String password) {
		User usr = urepos.getusrByuname(userid);
		System.out.println(usr);
		if (usr.getUserid().equals(userid) && usr.getPwd().equals(password))
			return usr;
		else
			return usr = null;
	}
	
	public User fetchque(String userid) {
		User usr = urepos.getusrByuname(userid);
		return usr;
	}
	
	public boolean deluser(int loginid) {
		if(urepos.deluser(loginid)==1)
			return true;
		else
			return false;
	}
	
	public User getbyId(int loginid) {
		return urepos.getById(loginid);
	}
	
	public User saveUser(User user) {
		return urepos.save(user);
	}
	
	public Customer saveCustomer(Customer cust) {
		return crepos.save(cust);
	}
	
	public Showroom saveShowroom(Showroom sw) {
		return swrepos.save(sw);
	}
	
	public boolean updateUser(int logid, String secQue, String ans, String hint) {
		if(urepos.updateUser(logid, secQue, ans, hint)==1)
			return true;
		else
			return false;
	}
	
	public boolean updateShowroom(User logid, String email, String contact) {
		if(swrepos.updateShowroom(logid, email, contact)==1) {
			return true;
		} else
			return false;
	}
	
	public boolean updateCustomer(User logid, String fname, String lname, Date dob, String paddress, String email, String contact) {
		if(crepos.updateCustomer(logid, fname, lname, email, contact, paddress, dob)==1) {
			return true;
		} else
			return false;
	}

	public boolean resetpwd(String userid, String pwd) {
		if(urepos.resetpwd(userid, pwd)==1) {
			return true;
		} else
			return false;
	}

	public List<Showroom> getListShowroombycity(City cityid) {
		return shrepos.getListShowroombycity(cityid);
	}

	public boolean uidValidCheck(String uid) {
		if(urepos.uidValidCheck(uid)==null)
			return true;
		return false;	
	}

	public List<SecurityQuestion> getQList() {
		return qrepos.findAll();
	}

	public float gettax(int cityid) {
		City c = cityrepos.getById(cityid);
		return c.getTax();
	}

	public List<VehicleColor> getColors(Vehicle vehicleid) {
		return vcrepos.getList(vehicleid.getVehicleid());
	}

	public List<Bookings> getbooks(int uid) {
		return brepos.getbookings(uid);
	}

	public CancelBooking cancelbook(int bookingid, String reason, Date date) {
		Bookings b = brepos.getById(bookingid);
		if(b!=null) {
			if(brepos.cancelBook(bookingid)==1) {
				CancelBooking c = new CancelBooking(b.getTrid().getAmt(), "Online", b, date, reason);
				System.out.println(c);
				CancelBooking can = canbookrepos.save(c);
				return can;
			}
		}
		return null;
	}

	public List<CancelBooking> getcanbooks(int uid) {
		return canbookrepos.getcanbooking(uid);
	}

	public List<Bookings> getactbooks(int uid) {
		return brepos.getActbookings(uid);
	}

	public Payment savebook(Payment p) {
		return prepos.save(p);
	}

	public Bookings booksave(Bookings b) {
		return brepos.save(b);
	}

	public Customer getcustbyId(int uid) {
		Customer c = crepos.getById(uid);
		return c;
	}

	public Specifications getvehiclebyId(int vehicleid) {
		return specsrepos.getById(vehicleid);
	}

	public Showroom getswbyId(int swid) {
		return swrepos.getById(swid);
	}

	public VehicleColor getcvbyId(int cvid) {
		return vcrepos.getById(cvid);
	}
}
