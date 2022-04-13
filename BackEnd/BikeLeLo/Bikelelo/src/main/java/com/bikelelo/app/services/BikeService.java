package com.bikelelo.app.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bikelelo.app.entities.Category;
import com.bikelelo.app.entities.City;
import com.bikelelo.app.entities.Company;
import com.bikelelo.app.entities.Specifications;
import com.bikelelo.app.entities.Vehicle;
import com.bikelelo.app.repositories.BikeRepository;
import com.bikelelo.app.repositories.CategoryRepository;
import com.bikelelo.app.repositories.CityRepository;
import com.bikelelo.app.repositories.CompanyRepository;
import com.bikelelo.app.repositories.SpecificationRepository;

@Service
public class BikeService {
	
	@Autowired
	CompanyRepository comprepos;
	
	@Autowired
	CategoryRepository catrepos;
	
	@Autowired
	BikeRepository bkrepos;
	
	@Autowired
	SpecificationRepository specsrepos;
	
	@Autowired
	CityRepository crepos;

	public Company getComp(int companyid) {
		Company comp = comprepos.getById(companyid);
		return comp;
	}

	public Category getCat(int catid) {
		Category cat = catrepos.getById(catid);
		return cat;
	}

	public Vehicle saveBike(Vehicle veh) {
		return bkrepos.save(veh);
	}

	public Specifications saveSpecs(Specifications specs) {
		return specsrepos.save(specs);
	}

	public Vehicle getVeh(int vehicleid) {
		return bkrepos.getById(vehicleid);
	}

	public Specifications getVehicle(Vehicle vehinserted) {
		return bkrepos.getVehicle(vehinserted);
	}

	public List<Specifications> getListbyCat(Category cat) {
		return specsrepos.getListbyCat(cat);
	}

	public List<Specifications> getbListbyRange(double maxPrice) {
		return specsrepos.getbListbyRange(maxPrice);
	}

	public List<Specifications> getblistover() {
		return specsrepos.getblistover();
	}
	
	public List<Specifications> getList() {
		return specsrepos.findAll();
	}

	public List<Specifications> getListsecbike(int i, Category category) {
		return specsrepos.getList(i, category);
	}

	public Specifications getV(int specsid) {
		return specsrepos.getById(specsid);
	}

	public List<Specifications> getBikesbycomp(String searchText) {
		return specsrepos.getBikesbycomp(searchText);
	}
	
	public List<Specifications> getBikesbymodel(String searchText) {
		return specsrepos.getBikesbymodel(searchText);
	}

	public City getCity(int cityid) {
		return crepos.getById(cityid);
	}
}