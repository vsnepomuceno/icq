package com.icq.managed.beans;

import java.io.Serializable;
import java.io.UnsupportedEncodingException;
import java.security.NoSuchAlgorithmException;

import javax.ejb.EJB;
import javax.enterprise.context.SessionScoped;
import javax.inject.Named;

import com.icq.beans.PacientBean;
import com.icq.beans.SurveyBean;
import com.icq.model.entities.Pacient;

@Named("registerPacienteMB")
@SessionScoped
public class RegisterPacienteMB implements Serializable {
	private static final long serialVersionUID = 1685823449195612778L;

	@EJB
	private PacientBean pacientBean;
	
	@EJB
	private SurveyBean surveyBean;

	private String name;
	private String email;
	private String fone;
	
	private String surveyEmail;

	public String register() {
		Pacient p = new Pacient();
		p.setEmail(email);
		p.setFone(fone);
		p.setName(name);
		try {
			pacientBean.createUser(p);
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (NoSuchAlgorithmException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		return "login";
	}
	
	public String sendSurvey() {
		
		Pacient p = pacientBean.findPacientByEmail(this.surveyEmail);
		
		if (p != null) {
			surveyBean.sendSurvey(p);
		}
		return "login";
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getFone() {
		return fone;
	}

	public void setFone(String fone) {
		this.fone = fone;
	}

	public String getSurveyEmail() {
		return surveyEmail;
	}

	public void setSurveyEmail(String surveyEmail) {
		this.surveyEmail = surveyEmail;
	}

}
