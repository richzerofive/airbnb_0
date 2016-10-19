/**
 * 
 */
package com.airbnb.web.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.airbnb.web.domains.Retval;
import com.airbnb.web.util.Command;


@Component
public interface AdminService{
	public List<?> list(Command command);
	public List<?> find(Command command);
	public Retval count();
	
}
