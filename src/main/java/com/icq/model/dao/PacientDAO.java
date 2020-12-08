package com.icq.model.dao;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;

import com.icq.model.entities.Pacient;

public class PacientDAO extends DAO<Pacient> {

	private EntityManager entityManager;

	public PacientDAO() {
		this.entityManager = createEntityManager();
	}

	public Pacient findByEmail(String surveyEmail) {
		Pacient p = null;
		
		TypedQuery<Pacient> query = this.entityManager.createQuery(""
				+ "SELECT p FROM Pacient p WHERE p.email= :email", Pacient.class);
		query.setParameter("email", surveyEmail);
		
		p = query.getSingleResult();
		
		return p;
	}
	
}
