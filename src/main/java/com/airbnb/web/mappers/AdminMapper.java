package com.airbnb.web.mappers;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.airbnb.web.domains.AdminDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.util.Command;


@Repository
public interface AdminMapper {
	public Retval count();
	public Retval mcount();
	public Retval hcount();
	public Retval rcount();
	public List<AdminDTO> list(Command command);
	public List<AdminDTO> find(Command command);
	
	public Retval regist(AdminDTO param);
	public Retval update(AdminDTO param);
	public Retval delete(AdminDTO param);
	

}
