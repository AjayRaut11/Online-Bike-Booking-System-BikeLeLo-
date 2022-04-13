package com.bikelelo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import com.bikelelo.app.entities.Specifications;
import com.bikelelo.app.entities.Vehicle;

public interface BikeRepository extends JpaRepository<Vehicle, Integer> {

	@Query("select s from Specifications s  where vehicleid = :vehinserted")
	public Specifications getVehicle(Vehicle vehinserted);
}
