package com.bikelelo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bikelelo.app.entities.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {
	
}
