package com.icq.rest;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.icq.model.dao.ChartDAO;
import com.icq.model.entities.Chart;

@Path("/chart")
public class ChartRest {

	private ChartDAO chartDao = new ChartDAO();
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/mhot/avarage")
	public Chart sayPlainTextHello() {
		
		return this.chartDao.getMHOT14Avarage();
	}
}
