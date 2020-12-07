package com.icq.beans;

import java.io.Serializable;
import java.io.UnsupportedEncodingException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

import javax.ejb.Stateless;
import javax.xml.bind.DatatypeConverter;

import com.icq.model.dao.PacientDAO;
import com.icq.model.entities.Pacient;


@Stateless
public class PacientBean implements Serializable{


	private static final long serialVersionUID = 6519354638650386140L;
	
	private PacientDAO pacientDAO = new PacientDAO();
	
	public Pacient createUser(Pacient pacient) throws UnsupportedEncodingException, 
	NoSuchAlgorithmException {
		
		if (pacient.getHash() == null) {
			String hash = encodeSHA256(pacient.getEmail()+pacient.getFone());
			pacient.setHash(hash);
		}
		
		pacientDAO.persistir(pacient);

		return pacient;
	}
	
	/**
     * Returns SHA-256 encoded string
     * @param value - the string to be encoded
     * @return SHA-256 encoded string
     * @throws UnsupportedEncodingException if UTF-8 is not supported by the system
     * @throws NoSuchAlgorithmException if SHA-256 is not supported by the system
     */
    public static String encodeSHA256(String value) 
            throws UnsupportedEncodingException, NoSuchAlgorithmException {
        MessageDigest md = MessageDigest.getInstance("SHA-256");
        md.update(value.getBytes("UTF-8"));
        byte[] digest = md.digest();
        return DatatypeConverter.printBase64Binary(digest).toString();
    }
}
