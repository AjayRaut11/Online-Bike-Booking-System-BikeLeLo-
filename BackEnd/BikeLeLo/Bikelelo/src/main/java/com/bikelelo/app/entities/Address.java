package com.bikelelo.app.entities;

public class Address {

	private String area, city, pincode;

	public Address() {
	}

	public Address(String area, String city, String pincode) {
		this.area = area;
		this.city = city;
		this.pincode = pincode;
	}

	// member method
	public void display() {
		if (area == null || city == null || pincode == null)
			System.out.println("Address : Null");
		else
			System.out.println("Address: " + area + ", " + city + " - " + pincode);
	}

	public String toString() {
		return "Address: " + area + ", " + city + " - " + pincode;
	}
}
