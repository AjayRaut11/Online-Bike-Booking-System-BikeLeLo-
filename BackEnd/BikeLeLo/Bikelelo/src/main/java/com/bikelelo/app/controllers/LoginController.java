package com.bikelelo.app.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.bikelelo.app.entities.BikeSpecs;
import com.bikelelo.app.entities.BookingPayment;
import com.bikelelo.app.entities.Bookings;
import com.bikelelo.app.entities.CancelBooking;
import com.bikelelo.app.entities.Category;
import com.bikelelo.app.entities.City;
import com.bikelelo.app.entities.CityShowroom;
import com.bikelelo.app.entities.Company;
import com.bikelelo.app.entities.Customer;
import com.bikelelo.app.entities.CustomerRegister;
import com.bikelelo.app.entities.Payment;
import com.bikelelo.app.entities.SecurityQuestion;
import com.bikelelo.app.entities.Showroom;
import com.bikelelo.app.entities.ShowroomRegister;
import com.bikelelo.app.entities.Specifications;
import com.bikelelo.app.entities.User;
import com.bikelelo.app.entities.Vehicle;
import com.bikelelo.app.entities.VehicleColor;
import com.bikelelo.app.services.BikeService;
import com.bikelelo.app.services.BookingService;
import com.bikelelo.app.services.CustomerService;
import com.bikelelo.app.services.ShowroomService;
import com.bikelelo.app.services.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class LoginController {

	@Autowired
	UserService userservice;
	
	@Autowired
	CustomerService cservice;
	
	@Autowired
	ShowroomService swservice;
	
	@Autowired
	BikeService bkservice;
	
	@Autowired
	ShowroomService shservice;
	
	@Autowired
	BookingService bservice;
	
	@PostMapping("/allbook")
	public List<Bookings> getAllBook(@RequestBody Showroom book) {
		System.out.println(book.getSwid());
		return bservice.getAllb(book.getSwid());
	}
	
	@PostMapping("/editstat")
	public boolean getEditStat(@RequestBody Bookings book) {
		System.out.println(book.getBookingid());
		System.out.println(book.getStatus());
		return bservice.getEdit(book.getBookingid(),book.getStatus());
	}

	@PostMapping("/allusr")
	public List<Customer> getAllCust() {
		return cservice.getAll();
	}
	
	@PostMapping("/actusr")
	public List<Customer> getActusr() {
		return cservice.getActusr();
	}
	
	@PostMapping("/clusr")
	public List<Customer> getClusr() {
		return cservice.getClusr();
	}
	
	@PostMapping("/adallbook")
	public List<Bookings> getAllbook() {
		return bservice.getAll();
	}
	
	@PostMapping("/fetchbymonth")
	public List<Bookings> getbookbymonth(@RequestBody BookingPayment month) {
		System.out.println(month.getMonth());
		return bservice.getbymonth(month.getMonth());
	}
	
	@PostMapping("/allsw")
	public List<Showroom> getAllsw() {
		return swservice.getAll();
	}
	
	@PostMapping("/actsw")
	public List<Showroom> getActsw() {
		return swservice.getActsw();
	}
	
	@PostMapping("/clsw")
	public List<Showroom> getClsw() {
		return swservice.getClsw();
	}
	
	@PostMapping("getsws")
	public List<Showroom> getsws(@RequestBody CityShowroom csw) {
		System.out.println(csw.getCityid().getCityid());
		System.out.println(csw.getCompanyid().getCompanyname());
		return swservice.getShwList(csw.getCityid(), csw.getCompanyid());
	}
	
	@PostMapping("/gettax")
	public float getClsw(@RequestBody City cityid) {
		return userservice.gettax(cityid.getCityid());
	}
	
	@PostMapping("/getcolors")
	public List<VehicleColor> getColors(@RequestBody VehicleColor vehid) {
		return userservice.getColors(vehid.getVehicleid());
	}
	
	@PostMapping("/search")
	public List<Specifications> searchBike(@RequestBody BikeSpecs bspecs) {
		String searchText = bspecs.getSearchtext();
		System.out.println(searchText);
		List<Specifications> sp = null;
		sp = bkservice.getBikesbycomp(searchText);
		System.out.println(sp);
		if(sp.isEmpty())
			sp = bkservice.getBikesbymodel(searchText);
		return sp;
	}
	
	@PostMapping("/catid")
	public List<Specifications> searchBike(@RequestBody Category cat) {
		System.out.println(cat.getCatid());
		List<Specifications> blist = bkservice.getListbyCat(cat);
		return blist;
	}
	
	@PostMapping("/range")
	public List<Specifications> searchBikebyrange(@RequestBody Vehicle maxPrice) {
		System.out.println(maxPrice.getXswprice());
		double mxpr = maxPrice.getXswprice();
		List<Specifications> blist = null;
		System.out.println(mxpr);
		if(mxpr==0.0) {
			blist = bkservice.getblistover();
		} else {
			blist = bkservice.getbListbyRange(mxpr);
		}
		return blist;
	}
	
	@PostMapping("/fetchall")
	public List<Specifications> comparebike() {
		List<Specifications> blist = bkservice.getList();
		return blist;
	}
	
	@PostMapping("/fetchallque")
	public List<SecurityQuestion> fetchallQues() {
		List<SecurityQuestion> qlist = userservice.getQList();
		return qlist;
	}
	
	@PostMapping("/fetch")
	public List<Specifications> comparebike(@RequestBody Specifications specs) {
		System.out.println(specs.getSpecsid());
		Specifications s = bkservice.getV(specs.getSpecsid());
		List<Specifications> blist = bkservice.getListsecbike(s.getSpecsid(), s.getVehicleid().getCatid());
		return blist;
	}
	
	@PostMapping("/uidvalidcheck")
	public boolean uidValidCheck(@RequestBody User uid) {
		System.out.println(uid.getUserid());
		if(userservice.uidValidCheck(uid.getUserid()))
			return true;
		return false;
	}

	@PostMapping("/login")
	public Object validateLogin(@RequestBody User user) {
		System.out.println(user.getUserid());
		System.out.println(user.getPwd());
		Object cust = null;
		User usr = userservice.validateLogin(user.getUserid(), user.getPwd());
		System.out.println(usr);
		if (usr == null)
			System.out.println("User Not Found");
		else {
			System.out.println(usr.getRole());
			if(usr.getRole().equals("User")||usr.getRole().equals("Admin"))
				cust = cservice.getCustByLoginid(usr);
			else if(usr.getRole().equals("Showroom"))
				cust = swservice.getSwByLoginid(usr);
		}
		return cust;
	}
	
	@PostMapping("/fetchque")
	public Object fetchque(@RequestBody User user) {
		System.out.println(user.getUserid());
		User usr = null;
		usr = userservice.fetchque(user.getUserid());
		System.out.println(usr);
		if (usr == null)
			System.out.println("User Not Found");
		return usr;
	}
	
	@PostMapping("/resetpwd")
	public boolean resetpwd(@RequestBody User user) {
		System.out.println(user.getUserid());
		User usr = null;
		usr = userservice.fetchque(user.getUserid());
		System.out.println(user.getSecurityque());
		System.out.println(user.getAns());
		System.out.println(user.getPwd());
		if((usr.getUserid().equals(user.getUserid()))&&(usr.getSecurityque().equals(user.getSecurityque()))&&(usr.getAns().equals(user.getAns())))
			if(userservice.resetpwd(user.getUserid(),user.getPwd()))
				return true;
		return false;	
	}
	
	@PostMapping("/uchngpwd")
	public boolean uchngpwd(@RequestBody CustomerRegister user) {
		System.out.println(user.getUserid());
		User usr = null;
		usr = userservice.fetchque(user.getUserid());
		if((usr.getUserid().equals(user.getUserid()))&&(usr.getPwd().equals(user.getPwd())))
			if(userservice.resetpwd(user.getUserid(),user.getNpwd()))
				return true;
		return false;
	}
	
	@PostMapping("/usersave")
	public Customer saveCustomer(@RequestBody CustomerRegister cust) {
		User user = new User(cust.getUserid(), cust.getPwd(), cust.getSecurityque(), cust.getAns(), cust.getHint(), cust.getRole(), cust.getAccstate());
		User userinserted = userservice.saveUser(user);
		Customer c = new Customer(userinserted, cust.getFname(), cust.getLname(), cust.getEmail(), cust.getContact(), cust.getPaddress(), cust.getDob ());
		Customer custinserted = userservice.saveCustomer(c);
		return custinserted;
	}
	
	@PostMapping("/addbike")
	public boolean saveBike(@RequestBody BikeSpecs bike) {
		Company comp = bkservice.getComp(bike.getCompanyid());
		Category cat = bkservice.getCat(bike.getCatid());
		Vehicle veh = new Vehicle(bike.getModelname(), comp, bike.getXswprice(), cat);
		Vehicle vehinserted = bkservice.saveBike(veh);
		Specifications specs = new Specifications(vehinserted, bike.getEngcap(), bike.getMileage(), bike.getFuelcap(), bike.getEmissionstd(), bike.getBrakesys(), bike.getTorque(), bike.getFbraketype(), bike.getRbraketype(), bike.getCylinder(), bike.getKillswitch(), bike.getPower(), bike.getKerbweight(), bike.getSeatheight(), bike.getAbout(), bike.getWarranty());
		Specifications sp = bkservice.saveSpecs(specs);
		System.out.println(sp);
		if(sp!=null)
			return true;
		else
			return false;
	}
	
	@PostMapping("/showroomsave")
	public Showroom saveShowroom(@RequestBody ShowroomRegister cust) {
		User user = new User(cust.getUserid(), cust.getPwd(), cust.getSecurityque(), cust.getAns(), cust.getHint(), cust.getRole(), cust.getAccstate());
		City city = shservice.getCity(cust.getCityid());
		User userinserted = userservice.saveUser(user);
		Showroom s = new Showroom(userinserted, cust.getSwname(), cust.getEmail(), cust.getContact(), cust.getPaddress(), city, cust.getPincode());
		Showroom swinserted = userservice.saveShowroom(s);
		return swinserted;
	}
	
	@PostMapping("/swupdate")
	public boolean updateShowroom(@RequestBody ShowroomRegister cust) {
		if(userservice.updateUser(cust.getLoginid(), cust.getSecurityque(), cust.getAns(), cust.getHint())) {
			User usr = userservice.getbyId(cust.getLoginid());
			if(userservice.updateShowroom(usr, cust.getEmail(), cust.getContact())) {
				return true;
			}
		}
		return false;
	}
	
	@PostMapping("/usrupdate")
	public boolean updateCustomer(@RequestBody CustomerRegister cust) {
		if(userservice.updateUser(cust.getLoginid(), cust.getSecurityque(), cust.getAns(), cust.getHint())) {
			User usr = userservice.getbyId(cust.getLoginid());
			if(userservice.updateCustomer(usr, cust.getFname(), cust.getLname(), cust.getDob(), cust.getPaddress(), cust.getEmail(), cust.getContact())) {
				return true;
			}
		}
		return false;
	}
	
	@PostMapping("/deluser")
	public boolean deluser(@RequestBody ShowroomRegister cust) {
		return userservice.deluser(cust.getLoginid());
	}
	
	@PostMapping("/getubookings")
	public List<Bookings> getbooks(@RequestBody Customer uid) {
		System.out.println(uid.getUid());
		return userservice.getbooks(uid.getUid());
	}
	
	@PostMapping("/getuactbook")
	public List<Bookings> getactbooks(@RequestBody Customer uid) {
		System.out.println(uid.getUid());
		return userservice.getactbooks(uid.getUid());
	}
	
	@PostMapping("/getucanbookings")
	public List<CancelBooking> getcanbooks(@RequestBody Customer uid) {
		System.out.println(uid.getUid());
		return userservice.getcanbooks(uid.getUid());
	}
	
	@PostMapping("/cancelBook")
	public CancelBooking Cancelbook(@RequestBody CancelBooking bid) {
		System.out.println(bid.getBookingid().getBookingid()+" ; "+bid.getReason()+" ; "+bid.getReqdate());
		return userservice.cancelbook(bid.getBookingid().getBookingid(), bid.getReason(), bid.getReqdate());
	}
	
	@PostMapping("/savebikebook")
	public Bookings SaveBikeBook(@RequestBody BookingPayment bp) {
		Customer c = userservice.getcustbyId(bp.getUid());
		System.out.println(c);
		Specifications s = userservice.getvehiclebyId(bp.getVehicleid());
		System.out.println(s);
		Showroom sw = userservice.getswbyId(bp.getSwid());
		System.out.println(sw);
		VehicleColor cvid = userservice.getcvbyId(bp.getCvid());
		System.out.println(cvid);
		Payment p = new Payment(bp.getAmt() , "Online");
		Payment pay = userservice.savebook(p);
		Bookings b = new Bookings(c,s,sw,bp.getDbook(),pay,bp.getStatus(),cvid);
		Bookings book = userservice.booksave(b);
		return book;
		
	}
}