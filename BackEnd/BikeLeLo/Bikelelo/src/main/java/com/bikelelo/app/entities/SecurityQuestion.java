package com.bikelelo.app.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "secques")
public class SecurityQuestion {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int qid;
	@Column
	private String quetext;
	
	public SecurityQuestion() {
		super();
	}

	public SecurityQuestion(int qid, String quetext) {
		super();
		this.qid = qid;
		this.quetext = quetext;
	}

	public SecurityQuestion(String quetext) {
		super();
		this.quetext = quetext;
	}

	public int getQid() {
		return qid;
	}

	public void setQid(int qid) {
		this.qid = qid;
	}

	public String getQuetext() {
		return quetext;
	}

	public void setQuetext(String quetext) {
		this.quetext = quetext;
	}

	@Override
	public String toString() {
		return "SecurityQuestion [qid=" + qid + ", quetext=" + quetext + "]";
	}
}
