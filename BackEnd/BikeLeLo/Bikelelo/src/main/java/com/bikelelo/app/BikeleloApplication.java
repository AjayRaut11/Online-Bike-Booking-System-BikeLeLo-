package com.bikelelo.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.bikelelo.app.*")
public class BikeleloApplication {

	public static void main(String[] args) {
		SpringApplication.run(BikeleloApplication.class, args);
	}
}