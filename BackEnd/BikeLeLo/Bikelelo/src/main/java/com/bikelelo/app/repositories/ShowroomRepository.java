package com.bikelelo.app.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import com.bikelelo.app.entities.City;
import com.bikelelo.app.entities.Showroom;
import com.bikelelo.app.entities.User;

public interface ShowroomRepository extends JpaRepository<Showroom, Integer> {
	
	@Query("select s from Showroom s  where loginid = :loginid")
	public Showroom getByloginid(User loginid);
	
	@Transactional
	@Modifying
	@Query("update Showroom set email = :email, contact = :contact where loginid = :logid")
	public int updateShowroom(User logid, String email, String contact);
	
	@Query("select s from Showroom s  where s.loginid.role = 'Showroom' and s.loginid.accstate = 1")
	public List<Showroom> getActsw();

	@Query("select s from Showroom s  where s.loginid.role = 'Showroom' and s.loginid.accstate = 0")
	public List<Showroom> getClsw();

	@Query("select s from Showroom s  where s.cityid = :cityid")
	public List<Showroom> getListShowroombycity(City cityid);

	@Query("select s from Showroom s where s.cityid.cityid = :cityid and s.swname like %:companyname%")
	public List<Showroom> getShwList(int cityid, String companyname);
}
