package com.bikelelo.app.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.bikelelo.app.entities.VehicleColor;

public interface VehicleColorRepository extends JpaRepository<VehicleColor, Integer> {

	@Query("select v from VehicleColor v where v.vehicleid.vehicleid = :vehicleid")
	List<VehicleColor> getList(int vehicleid);
}
