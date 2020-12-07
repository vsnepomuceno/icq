package com.icq.model.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.NamedQuery;
import javax.persistence.TypedQuery;

import com.icq.model.entities.Chart;
import com.icq.model.entities.charts.MHOT14Chart;
import com.icq.model.entities.survey.MHOT14;

@NamedQuery(name = "Mhot14Chart.findAll", query = "SELECT m FROM mhot14 m")
public class ChartDAO extends DAO<Chart> {

	private EntityManager entityManager;

	public ChartDAO() {
		this.entityManager = createEntityManager();
	}

	public Chart getMHOT14Avarage() {
		Chart chart = new MHOT14Chart();
		
		TypedQuery<MHOT14> query = this.entityManager.createQuery("SELECT m FROM MHOT14 m", MHOT14.class);
		List<MHOT14> results = query.getResultList();
		
		double p1Avg = 0.0;
		double p2Avg = 0.0;
		double p3Avg = 0.0;
		double p4Avg = 0.0;
		double p5Avg = 0.0;
		
		if (!results.isEmpty()) {
			for (MHOT14 mhot : results) {
				p1Avg += mhot.getP1();
				p2Avg += mhot.getP2();
				p3Avg += mhot.getP3();
				p4Avg += mhot.getP4();
				p5Avg += mhot.getP5();			
			}
			
			((MHOT14Chart)chart).setP1Avarage(p1Avg/results.size());
			((MHOT14Chart)chart).setP2Avarage(p2Avg/results.size());
			((MHOT14Chart)chart).setP3Avarage(p3Avg/results.size());
			((MHOT14Chart)chart).setP4Avarage(p4Avg/results.size());
			((MHOT14Chart)chart).setP5Avarage(p5Avg/results.size());
		} else {
			((MHOT14Chart)chart).setP1Avarage(p1Avg);
			((MHOT14Chart)chart).setP2Avarage(p2Avg);
			((MHOT14Chart)chart).setP3Avarage(p3Avg);
			((MHOT14Chart)chart).setP4Avarage(p4Avg);
			((MHOT14Chart)chart).setP5Avarage(p5Avg);
		}
		
		return chart;
	}
}
