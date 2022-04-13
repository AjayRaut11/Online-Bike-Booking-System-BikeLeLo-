package com.bikelelo.app.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.bikelelo.app.entities.SecurityQuestion;

public interface SecurityQuestionRepository extends JpaRepository<SecurityQuestion, Integer> {

}
