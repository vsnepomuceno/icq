package com.icq.model.dao;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

public abstract class DAO<T> {
	
	private static EntityManager entityManager;

	public DAO() {
		createEntityManager();
	}

	public static EntityManager createEntityManager() {
		if (entityManager == null) {
			EntityManagerFactory factory = Persistence.createEntityManagerFactory("ICQ");
			entityManager = factory.createEntityManager();
		}

		return entityManager;
	}
	

	public void persistir(T entidade) {
		entityManager.getTransaction().begin();
		entityManager.persist(entidade);
		entityManager.getTransaction().commit();
	}

}
