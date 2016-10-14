package com.airbnb.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.airbnb.web.domains.AdminDTO;
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
	public String adminChart(){
		logger.info("----- ADMIN_CONTOLLER chart -----");
		return "admin:admin/chart.tiles";
	}	
	@RequestMapping("/list")
	public String adminList(){
		logger.info("----- ADMIN_CONTOLLER list -----");
		return "admin/list.jsp";
	}
	@RequestMapping("/r-list")
	public String adminRevList(){
		logger.info("----- ADMIN_CONTOLLER list -----");
		return "admin:admin/r-list.tiles";
	}
	@RequestMapping("/h-list")
	public String adminHouseList(){
		logger.info("----- ADMIN_CONTOLLER list -----");
		return "admin:admin/h-list.tiles";
	}
	@RequestMapping("/search")
	public String adminSearch(){
		logger.info("----- ADMIN_CONTOLLER search -----");
		return "admin:admin/search.tiles";
	}
}