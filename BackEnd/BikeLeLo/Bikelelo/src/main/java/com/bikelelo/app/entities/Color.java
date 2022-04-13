package com.bikelelo.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="color")
public class Color {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int colorid;
	@Column
	private String colorname;
	
	public Color() {
		super();
	}

	public Color(int colorid, String colorname) {
		super();
		this.colorid = colorid;
		this.colorname = colorname;
	}

	public int getColorid() {
		return colorid;
	}

	public void setColorid(int colorid) {
		this.colorid = colorid;
	}

	public String getColorname() {
		return colorname;
	}

	public void setColorname(String colorname) {
		this.colorname = colorname;
	}

	@Override
	public String toString() {
		return "Color [colorid=" + colorid + ", colorname=" + colorname + "]";
	}
}
