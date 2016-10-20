package com.airbnb.web.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.airbnb.web.controllers.AdminController;
import com.airbnb.web.domains.AdminDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.mappers.AdminMapper;
import com.airbnb.web.services.AdminService;
import com.airbnb.web.util.Command;



@Service @Lazy
@Transactional
public class AdminServiceImpl implements AdminService {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired	private SqlSession sqlSession;
	@Autowired	private AdminDTO member;
	@Autowired  private Retval retval ;
	@Override
	public List<AdminDTO> list(Command command) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<AdminDTO> find(Command command) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval regist(AdminDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval update(AdminDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval delete(AdminDTO param) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval mcount() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval hcount() {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public Retval rcount() {
		// TODO Auto-generated method stub
		return null;
	}

	
	
}
