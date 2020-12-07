package com.icq.model.entities.survey;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.icq.model.entities.Survey;

@Entity
@Table(name = "surveyMHOT")
public class SurveyMHOT extends Survey{

	private static final long serialVersionUID = 989569282164531835L;
	
	@Column
	private Integer satisfaction;

	public Integer getSatisfaction() {
		return satisfaction;
	}

	public void setSatisfaction(Integer satisfaction) {
		this.satisfaction = satisfaction;
	}
}
