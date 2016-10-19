package com.airbnb.web.controllers;

import java.util.HashMap;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.airbnb.web.constants.Values;
import com.airbnb.web.domains.AdminDTO;
import com.airbnb.web.domains.Retval;
import com.airbnb.web.service.AdminService;
import com.airbnb.web.util.Command;

import javafx.scene.control.Pagination;

@Controller
@SessionAttributes({"user","context","js","css","img"})
@Scope("session")
@RequestMapping("/admin")
public class AdminController {
	private static final Logger logger = LoggerFactory.getLogger(AdminController.class);
	@Autowired Retval retval;
	@Autowired AdminService service;
/*	@Autowired Command command;*/
	@Autowired AdminDTO member;
	
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
	@RequestMapping("/list/{pgNum}")
	public @ResponseBody HashMap<String,Object> list(@PathVariable String pgNum,ModelMap model){
		logger.info("LIST pgNum is {}",pgNum);
		
		int[]pages = new int[3];
		int[]rows = new int[2];
		HashMap<String,Object> map = new HashMap<String,Object>();
		Retval r = service.count();
		int totCount = r.getCount();
/*		pages = Pagination.getPages(totCount, Integer.parseInt(pgNum));
		rows = Pagination.getRows(totCount, Integer.parseInt(pgNum), Values.PG_SIZE); 
		command.setStart(rows[0]);
		command.setEnd(rows[1]);*/
		logger.info("LIST totCount {}",totCount);
		logger.info("LIST pgSize {}",Values.PG_SIZE);
		logger.info("LIST totCount {}",totCount);
		logger.info("LIST totPg {}",pages[2]);
		logger.info("LIST pgNum {}",pgNum);
		logger.info("LIST startPg {}",pages[0]);
		logger.info("LIST lastPg {}",pages[1]);
	/*	model.addAttribute("list", service.list(command));
		model.addAttribute("pgSize", Values.PG_SIZE);
		model.addAttribute("totCount", totCount);
		model.addAttribute("totPg", pages[2]);
		model.addAttribute("pgNum", Integer.parseInt(pgNum));
		model.addAttribute("startPg", pages[0]);
		model.addAttribute("lastPg", pages[1]);*/
	/*	map.put("list", service.list(command));*/
		map.put("pgSize", Values.PG_SIZE);
		map.put("totCount", totCount);
		map.put("totPg", pages[2]);
		map.put("pgNum", Integer.parseInt(pgNum));
		map.put("startPg", pages[0]);
		map.put("lastPg", pages[1]);
		map.put("groupSize", Values.GROUP_SIZE);
		
		return map;
	}
	@RequestMapping("/mchart")
	public String admiMnav(){
		logger.info("----- ADMIN_CONTOLLER NAV PASS -----");
		return "admin/mchart.jsp";
	}
}