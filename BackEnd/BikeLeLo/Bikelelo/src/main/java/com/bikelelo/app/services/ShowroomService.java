package com.bikelelo.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bikelelo.app.entities.City;
import com.bikelelo.app.entities.Company;
import com.bikelelo.app.entities.Showroom;
import com.bikelelo.app.entities.User;
import com.bikelelo.app.repositories.CityRepository;
import com.bikelelo.app.repositories.ShowroomRepository;

@Service
public class ShowroomService {
	
	@Autowired
	ShowroomRepository swrepos;
	
	@Autowired
	CityRepository cityrepos;
	
	public Showroom getSwByLoginid(User user) {
		Showroom sw = swrepos.getByloginid(user);
		return sw;
	}
	
	public List<Showroom> getAll() {
		return swrepos.findAll();
	}
	
	public List<Showroom> getActsw() {
		return swrepos.getActsw();
	}
	
	public List<Showroom> getClsw() {
		return swrepos.getClsw();
	}

	public City getCity(int cityid) {
		return cityrepos.getById(cityid);
	}

	public List<Showroom> getShwList(City cityid, Company companyid) {
		return swrepos.getShwList(cityid.getCityid(), companyid.getCompanyname());
	}
}
