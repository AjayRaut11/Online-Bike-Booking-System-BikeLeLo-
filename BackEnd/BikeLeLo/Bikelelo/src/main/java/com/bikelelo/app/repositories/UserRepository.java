package com.bikelelo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;
import com.bikelelo.app.entities.User;

@Transactional
@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	@Query("select u from User u  where userid = :userid")
	public User getusrByuname(String userid);
	
	@Transactional
	@Modifying
	@Query("update User set securityque = :secQue, ans = :ans, hint = :hint where loginid = :logid")
	public int updateUser(int logid, String secQue, String ans, String hint);
	
	@Transactional
	@Modifying
	@Query("update User set accstate = '0' where loginid = :loginid")
	public int deluser(int loginid);

	@Transactional
	@Modifying
	@Query("update User set pwd = :pwd where userid = :userid")
	public int resetpwd(String userid, String pwd);

	@Query("select u from User u where u.userid = :uid")
	public User uidValidCheck(String uid);
}
