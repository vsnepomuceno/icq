package com.icq.model.entities.survey;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.icq.model.entities.Survey;


@Entity
@Table(name = "mhot14")
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({"p1", "p2", "p3", "p4", "p5", "p6", "p7", "p8Boolean", "p8", "retired",
		"unemployed", "p9Boolean", "p9", "p10", "p11Boolean", "p11", "p12", "p13Boolean", "p13", "p14" })
public class MHOT14 extends Survey implements Serializable {

	
	@JsonProperty("p1")
	private long p1;
	@JsonProperty("p2")
	private long p2;
	@JsonProperty("p3")
	private long p3;
	@JsonProperty("p4")
	private long p4;
	@JsonProperty("p5")
	private long p5;
	@JsonProperty("p6")
	private long p6;
	@JsonProperty("p7")
	private long p7;
	@JsonProperty("p8Boolean")
	private String p8Boolean;
	@JsonProperty("p8")
	private long p8;
	@JsonProperty("retired")
	private String retired;
	@JsonProperty("unemployed")
	private String unemployed;
	@JsonProperty("p9Boolean")
	private String p9Boolean;
	@JsonProperty("p9")
	private long p9;
	@JsonProperty("p10")
	private long p10;
	@JsonProperty("p11Boolean")
	private String p11Boolean;
	@JsonProperty("p11")
	private long p11;
	@JsonProperty("p12")
	private long p12;
	@JsonProperty("p13Boolean")
	private String p13Boolean;
	@JsonProperty("p13")
	private long p13;
	@JsonProperty("p14")
	private long p14;
	
	private final static long serialVersionUID = -1534051417579851332L;

	/**
	 * No args constructor for use in serialization
	 *
	 */
	public MHOT14() {
	}

	/**
	 *
	 * @param p1
	 * @param p2
	 * @param p3
	 * @param p4
	 * @param p5
	 * @param p6
	 * @param p8Boolean
	 * @param p7
	 * @param p8
	 * @param p9
	 * @param p10
	 * @param fone
	 * @param p11Boolean
	 * @param p12
	 * @param p11
	 * @param p14
	 * @param p13
	 * @param name
	 * @param p9Boolean
	 * @param retired
	 * @param p13Boolean
	 * @param unemployed
	 * @param email
	 */
	public MHOT14(long p1, long p2, long p3, long p4, long p5, long p6, long p7,
			String p8Boolean, long p8, String retired, String unemployed, String p9Boolean, long p9, long p10,
			String p11Boolean, long p11, long p12, String p13Boolean, long p13, long p14) {
		super();
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
		this.p4 = p4;
		this.p5 = p5;
		this.p6 = p6;
		this.p7 = p7;
		this.p8Boolean = p8Boolean;
		this.p8 = p8;
		this.retired = retired;
		this.unemployed = unemployed;
		this.p9Boolean = p9Boolean;
		this.p9 = p9;
		this.p10 = p10;
		this.p11Boolean = p11Boolean;
		this.p11 = p11;
		this.p12 = p12;
		this.p13Boolean = p13Boolean;
		this.p13 = p13;
		this.p14 = p14;
	}

	@JsonProperty("p1")
	public long getP1() {
		return p1;
	}

	@JsonProperty("p1")
	public void setP1(long p1) {
		this.p1 = p1;
	}

	@JsonProperty("p2")
	public long getP2() {
		return p2;
	}

	@JsonProperty("p2")
	public void setP2(long p2) {
		this.p2 = p2;
	}

	@JsonProperty("p3")
	public long getP3() {
		return p3;
	}

	@JsonProperty("p3")
	public void setP3(long p3) {
		this.p3 = p3;
	}

	@JsonProperty("p4")
	public long getP4() {
		return p4;
	}

	@JsonProperty("p4")
	public void setP4(long p4) {
		this.p4 = p4;
	}

	@JsonProperty("p5")
	public long getP5() {
		return p5;
	}

	@JsonProperty("p5")
	public void setP5(long p5) {
		this.p5 = p5;
	}

	@JsonProperty("p6")
	public long getP6() {
		return p6;
	}

	@JsonProperty("p6")
	public void setP6(long p6) {
		this.p6 = p6;
	}

	@JsonProperty("p7")
	public long getP7() {
		return p7;
	}

	@JsonProperty("p7")
	public void setP7(long p7) {
		this.p7 = p7;
	}

	@JsonProperty("p8Boolean")
	public String getP8Boolean() {
		return p8Boolean;
	}

	@JsonProperty("p8Boolean")
	public void setP8Boolean(String p8Boolean) {
		this.p8Boolean = p8Boolean;
	}

	@JsonProperty("p8")
	public long getP8() {
		return p8;
	}

	@JsonProperty("p8")
	public void setP8(long p8) {
		this.p8 = p8;
	}

	@JsonProperty("retired")
	public String getRetired() {
		return retired;
	}

	@JsonProperty("retired")
	public void setRetired(String retired) {
		this.retired = retired;
	}

	@JsonProperty("unemployed")
	public String getUnemployed() {
		return unemployed;
	}

	@JsonProperty("unemployed")
	public void setUnemployed(String unemployed) {
		this.unemployed = unemployed;
	}

	@JsonProperty("p9Boolean")
	public String getP9Boolean() {
		return p9Boolean;
	}

	@JsonProperty("p9Boolean")
	public void setP9Boolean(String p9Boolean) {
		this.p9Boolean = p9Boolean;
	}

	@JsonProperty("p9")
	public long getP9() {
		return p9;
	}

	@JsonProperty("p9")
	public void setP9(long p9) {
		this.p9 = p9;
	}

	@JsonProperty("p10")
	public long getP10() {
		return p10;
	}

	@JsonProperty("p10")
	public void setP10(long p10) {
		this.p10 = p10;
	}

	@JsonProperty("p11Boolean")
	public String getP11Boolean() {
		return p11Boolean;
	}

	@JsonProperty("p11Boolean")
	public void setP11Boolean(String p11Boolean) {
		this.p11Boolean = p11Boolean;
	}

	@JsonProperty("p11")
	public long getP11() {
		return p11;
	}

	@JsonProperty("p11")
	public void setP11(long p11) {
		this.p11 = p11;
	}

	@JsonProperty("p12")
	public long getP12() {
		return p12;
	}

	@JsonProperty("p12")
	public void setP12(long p12) {
		this.p12 = p12;
	}

	@JsonProperty("p13Boolean")
	public String getP13Boolean() {
		return p13Boolean;
	}

	@JsonProperty("p13Boolean")
	public void setP13Boolean(String p13Boolean) {
		this.p13Boolean = p13Boolean;
	}

	@JsonProperty("p13")
	public long getP13() {
		return p13;
	}

	@JsonProperty("p13")
	public void setP13(long p13) {
		this.p13 = p13;
	}

	@JsonProperty("p14")
	public long getP14() {
		return p14;
	}

	@JsonProperty("p14")
	public void setP14(long p14) {
		this.p14 = p14;
	}
}