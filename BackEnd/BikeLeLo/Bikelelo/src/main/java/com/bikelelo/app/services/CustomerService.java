package com.bikelelo.app.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.bikelelo.app.entities.Customer;
import com.bikelelo.app.entities.User;
import com.bikelelo.app.repositories.CustomerRepository;

@Service
public class CustomerService {
	
	@Autowired
	CustomerRepository crepos;
	
	public Customer getCustByLoginid(User user) {
		//System.out.println(user);
		Customer cust = crepos.getByloginid(user);
		//System.out.println(cust);
		return cust;
	}
	
	public List<Customer> getAll() {
		return crepos.findAllusr();
	}

	public List<Customer> getActusr() {
		return crepos.getActusr();
	}

	public List<Customer> getClusr() {
		return crepos.getClusr();
	}
}
