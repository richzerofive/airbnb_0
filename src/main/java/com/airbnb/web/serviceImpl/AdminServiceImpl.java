package com.airbnb.web.serviceImpl;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.airbnb.web.controllers.AdminController;
import com.airbnb.web.domains.AdminDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.mappers.AdminMapper;
import com.airbnb.web.service.AdminService;
import com.airbnb.web.util.Command;



@Service
public class AdminServiceImpl implements AdminService {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired	private SqlSession sqlSession;
	@Autowired	private AdminDTO member;

	@Autowired  private Retval retval ;

	public List<?> findBy(String keyword) {
		return null;
	}
	public String myAccount() {
		return member.toString();
	}
	@Override
	public List<?> list(Command command) {
		AdminMapper mapper = sqlSession.getMapper(AdminMapper.class);
		return list(command);
	}
	@Override
	public Retval count() {
		 AdminMapper mapper = sqlSession.getMapper(AdminMapper.class);
		return mapper.count();
	}
	@Override
	public List<?> find(Command command) {
		// TODO Auto-generated method stub
		return list(command);
	}

	
}
