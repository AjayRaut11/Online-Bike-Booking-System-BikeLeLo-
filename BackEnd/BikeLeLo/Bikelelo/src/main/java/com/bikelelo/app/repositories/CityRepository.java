package com.bikelelo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bikelelo.app.entities.City;

public interface CityRepository extends JpaRepository<City, Integer> {

}
