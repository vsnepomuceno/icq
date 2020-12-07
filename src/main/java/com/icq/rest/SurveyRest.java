package com.icq.rest;

import java.net.URI;
import java.net.URISyntaxException;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.icq.model.dao.SurveyDAO;
import com.icq.model.entities.survey.MHOT14;

@Path("/survey")
public class SurveyRest {

	private SurveyDAO surveyDao = new SurveyDAO();

	@GET
	@Produces(MediaType.TEXT_PLAIN)
	public String sayPlainTextHello() {
		return "Hello Jersey";
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("/mhot")
	public Response add(MHOT14 survey) throws URISyntaxException {
		survey.setSurveyName("MHOT14");
		surveyDao.persistir(survey);
		URI uri = new URI("/faces/response.xhtml");
		return Response.created(uri).build();
	}

}
