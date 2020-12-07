package com.icq.model.dao;

import javax.persistence.EntityManager;

import com.icq.model.entities.Pacient;

public class PacientDAO extends DAO<Pacient> {

	private EntityManager entityManager;

	public PacientDAO() {
		this.entityManager = createEntityManager();
	}
	
}
