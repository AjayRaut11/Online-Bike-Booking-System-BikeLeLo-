package com.bikelelo.app.repositories;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;
import com.bikelelo.app.entities.Customer;
import com.bikelelo.app.entities.User;

public interface CustomerRepository extends JpaRepository<Customer, Integer> {
	
	@Query("select c from Customer c  where loginid = :loginid")
	public Customer getByloginid(User loginid);
	
	@Transactional
	@Modifying
	@Query("update Customer set fname = :fname, lname = :lname, email = :email, contact = :contact, paddress = :paddress, dob = :dob where loginid = :logid")
	public int updateCustomer(User logid, String fname, String lname, String email, String contact, String paddress, Date dob);

	@Query("select s from Customer s  where s.loginid.role = 'User' and s.loginid.accstate = 1")
	public List<Customer> getActusr();

	@Query("select c from Customer c  where c.loginid.role = 'User' and c.loginid.accstate = 0")
	public List<Customer> getClusr();

	@Query("select c from Customer c  where c.loginid.role != 'Admin'")
	public List<Customer> findAllusr();
}
