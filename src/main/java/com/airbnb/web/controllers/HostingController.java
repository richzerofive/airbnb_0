package com.airbnb.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.airbnb.web.domains.HostingDTO;
import com.airbnb.web.domains.Retval;
@Controller
@RequestMapping("/hosting")
public class HostingController {
	private static final Logger logger = LoggerFactory.getLogger(HostingController.class);
	@Autowired private Retval retval;
	
	@RequestMapping(value="/regist", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: {}.", "regist");
		logger.info("HostingController :: Regist :: room_type :: {}",hostingDTO.getRoom_type());
		logger.info("HostingController :: Regist :: guest_cnt :: {}",hostingDTO.getGuest_cnt());
		retval.setMessage("success");
		return retval;
	}
	
	
	
	@RequestMapping("/manage_1")
	public String hostingManage1(){
		logger.info("HostingController :: {}.", "manage_1");
		return "public:hosting/hosting_manage_1.tiles";
	}
	@RequestMapping("/manage_2")
	public String hostingManage2(){
		logger.info("HostingController :: {}.", "manage_2");
		return "public:hosting/hosting_manage_2.tiles";
	}
	@RequestMapping("/manage_3")
	public String hostingManage3(){
		logger.info("HostingController :: {}.", "manage_3");
		return "public:hosting/hosting_manage_3.tiles";
	}
	@RequestMapping("/manage_4")
	public String hostingManage4(){
		logger.info("HostingController :: {}.", "manage_4");
		return "public:hosting/hosting_manage_4.tiles";
	}
	@RequestMapping("/manage_5")
	public String hostingManage5(){
		logger.info("HostingController :: {}.", "manage_5");
		return "public:hosting/hosting_manage_5.tiles";
	}
	@RequestMapping("/manage_6")
	public String hostingManage6(){
		logger.info("HostingController :: {}.", "manage_6");
		return "public:hosting/hosting_manage_6.tiles";
	}
	@RequestMapping("/manage_7")
	public String hostingManage7(){
		logger.info("HostingController :: {}.", "manage_7");
		return "public:hosting/hosting_manage_7.tiles";
	}
	@RequestMapping("/manage_8")
	public String hostingManage8(){
		logger.info("HostingController :: {}.", "manage_8");
		return "public:hosting/hosting_manage_8.tiles";
	}
	@RequestMapping("/manage_9")
	public String hostingManage9(){
		logger.info("HostingController :: {}.", "manage_9");
		return "public:hosting/hosting_manage_9.tiles";
	}
	@RequestMapping("/manage_10")
	public String hostingManage10(){
		logger.info("HostingController :: {}.", "manage_10");
		return "public:hosting/hosting_manage_10.tiles";
	}
	@RequestMapping("/manage_11")
	public String hostingManage11(){
		logger.info("HostingController :: {}.", "manage_11");
		return "public:hosting/hosting_manage_11.tiles";
	}
	@RequestMapping("/manage_12")
	public String hostingManage12(){
		logger.info("HostingController :: {}.", "manage_12");
		return "public:hosting/hosting_manage_12.tiles";
	}
	@RequestMapping("/manage_13")
	public String hostingManage13(){
		logger.info("HostingController :: {}.", "manage_13");
		return "public:hosting/hosting_manage_13.tiles";
	}
}
