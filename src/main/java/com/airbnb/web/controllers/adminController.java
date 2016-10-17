package com.airbnb.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.airbnb.web.domains.Retval;

@Controller

@RequestMapping("/admin")
public class adminController {
	private static final Logger logger = LoggerFactory.getLogger(adminController.class);
	@Autowired Retval retval;
	@Autowired 
	
	@RequestMapping("/main")
	public String goMain(){
		logger.info("Welcome home! The client locale is 1111{}", "디버깅 모드");
		return "admin:admin/content.tiles";
	}
	@RequestMapping(value="/admin_main")
	public @ResponseBody Retval goAdminMain(){
		logger.info("Welcome home! The client locale is admin{}", "  goAdminMain");
		retval.setMessage("success");
	
		return retval;
	}
	@RequestMapping("/header")
	public String adminHeader(){
		logger.info("----- ADMIN_CONTOLLER HEADER PASS -----");
		return "admin/header.jsp";
	}
	@RequestMapping("/nav")
	public String adminNav(){
		logger.info("----- ADMIN_CONTOLLER NAV PASS -----");
		return "admin/nav.jsp";
	}
	@RequestMapping("/chart")
	public @ResponseBody Retval adminChart(){
		logger.info("----- ADMIN_CONTOLLER chart -----");
		retval.setMessage("success");
		return retval;
	}	
	@RequestMapping("/mlist")
	public @ResponseBody Retval adminList(){
		logger.info("----- ADMIN_CONTOLLER adminlist -----");
		retval.setMessage("success");
		return retval;
	}
	@RequestMapping("/rlist")
	public @ResponseBody Retval adminRevList(){
		logger.info("----- ADMIN_CONTOLLER REVlist -----");
		retval.setMessage("success");
		return retval;
	}
	@RequestMapping("/hlist")
	public @ResponseBody Retval adminHouseList(){
		logger.info("----- ADMIN_CONTOLLER HOUSElist -----");
		retval.setMessage("success");
		return retval;
	}
	@RequestMapping("/search")
	public @ResponseBody Retval adminSearch(){
		logger.info("----- ADMIN_CONTOLLER search -----");
		retval.setMessage("success");
		return retval;
	}
}