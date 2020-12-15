package com.icq.rest;

import java.net.URI;
import java.net.URISyntaxException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.icq.model.dao.PacientDAO;
import com.icq.model.dao.SurveyDAO;
import com.icq.model.entities.Pacient;
import com.icq.model.entities.survey.MHOT14;

@Path("/survey")
public class SurveyRest {

	private SurveyDAO surveyDao = new SurveyDAO();
	private PacientDAO pacientDAO = new PacientDAO();

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String sayPlainTextHello() {
		return "Hello Jersey";
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/mhot/{hash}")
	public Response add(MHOT14 survey, @PathParam("hash") String hash) throws URISyntaxException {
		
		if (hash != null) {
			
			Pacient p = this.pacientDAO.findByHash(hash);
			survey.setPacient(p);
			survey.setSurveyName("MHOT14");
			survey.setDate(new java.sql.Date(new java.util.Date().getTime()));
			surveyDao.persistir(survey);
		}
		URI uri = new URI("/faces/response.xhtml");
		return Response.created(uri).build();
	}

}
