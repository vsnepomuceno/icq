package com.icq.model.dao;

import javax.persistence.EntityManager;

import com.icq.model.entities.Survey;

public class SurveyDAO extends DAO<Survey> {
	private EntityManager entityManager;

	public SurveyDAO() {
		this.entityManager = createEntityManager();
	}

}
