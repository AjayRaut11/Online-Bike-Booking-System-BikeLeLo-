package com.bikelelo.app.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.bikelelo.app.entities.Category;
import com.bikelelo.app.entities.Specifications;

public interface SpecificationRepository extends JpaRepository<Specifications, Integer> {
	
	@Query("select s from Specifications s where s.vehicleid.catid = :cat")	
	List<Specifications> getListbyCat(Category cat);

	@Query("select s from Specifications s where s.vehicleid.xswprice <= :maxPrice")
	List<Specifications> getbListbyRange(double maxPrice);

	@Query("select s from Specifications s where s.vehicleid.xswprice >= 2000000")
	List<Specifications> getblistover();
	 
	@Query("select s from Specifications s where s.specsid != :i and s.vehicleid.catid = :category")
	List<Specifications> getList(int i, Category category);

	@Query("select s from Specifications s where s.vehicleid.companyid.companyname like %:searchText%")
	List<Specifications> getBikesbycomp(String searchText);
	
	@Query("select s from Specifications s where s.vehicleid.modelname like %:searchText%")
	List<Specifications> getBikesbymodel(String searchText);
}
