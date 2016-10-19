package com.airbnb.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.airbnb.web.domains.Retval;
import com.airbnb.web.util.Command;


@Repository
public interface AdminMapper {
	public List<?> find(Command command);
	public List<?> findByName(String name);
	public Retval count();
	

}
