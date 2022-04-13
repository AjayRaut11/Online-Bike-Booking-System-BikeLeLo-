package com.bikelelo.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="category")
public class Category {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int catid;
	@Column
	private String catname;
	
	public Category() {
		super();
	}

	public Category(int catid, String catname) {
		super();
		this.catid = catid;
		this.catname = catname;
	}

	public Category(String catname) {
		super();
		this.catname = catname;
	}

	public Category(int catid) {
		super();
		this.catid = catid;
	}

	public int getCatid() {
		return catid;
	}

	public void setCatid(int catid) {
		this.catid = catid;
	}

	public String getCatname() {
		return catname;
	}

	public void setCatname(String catname) {
		this.catname = catname;
	}

	@Override
	public String toString() {
		return "Category [catid=" + catid + ", catname=" + catname + "]";
	}
}
