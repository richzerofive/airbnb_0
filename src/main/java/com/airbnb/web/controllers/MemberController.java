package com.airbnb.web.controllers;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);

	/*
	@RequestMapping(value = "/regist1", method = RequestMethod.POST, consumes = "application/json")
	public @ResponseBody Retval hostingRegist1(@RequestBody HostingDTO hostingDTO) {
		logger.info("HostingController :: {}.", "regist1");
		logger.info("HostingController :: Regist :: room_type :: {}", hostingDTO.getRoom_type());
		logger.info("HostingController :: Regist :: guest_cnt :: {}", hostingDTO.getGuest_cnt());
		logger.info("HostingController :: Regist :: building_type :: {}", hostingDTO.getBuilding_type());
		retval.setMessage("success1");
		return retval;
	}*/

	@RequestMapping("/signin")
	public String membersignIn() {
		logger.info("----- member_CONTOLLER signin PASS -----");
		return "public:member/signIn.tiles";
	}

	@RequestMapping("/signup")
	public String membersignUp() {
		logger.info("----- member_CONTOLLER signUp PASS -----");
		return "public:member/signUp.tiles";
	}

	@RequestMapping("/main")
	public String memberMain() {
		logger.info("Welcome home! The client locale is 1111{}", "디버깅 모드");
		return "member:member/show.tiles";
	}

	@RequestMapping("/dashboard")
	public String memberHeader() {
		logger.info("----- member_dashboard PASS -----");
		return "member:member/dashboard.tiles";
	}

	@RequestMapping("/inbox")
	public String memberinbox() {
		logger.info("----- member_CONTOLLER inbox -----");
		return "member:member/inbox.tiles";
	}

	@RequestMapping("/trip")
	public String memberTrip() {
		logger.info("----- member_CONTOLLER trip PASS -----");
		return "member:member/trips.tiles";
	}

	@RequestMapping("/edit")
	public String memberEdit() {
		logger.info("----- member_CONTOLLER edit PASS -----");
		return "member:member/edit.tiles";
	}

	@RequestMapping("/account")
	public String memberaccount() {
		logger.info("----- member_CONTOLLER accountPASS -----");
		return "member:member/account.tiles";
	}

	@RequestMapping("/asrasr")
	public String membera5w25() {
		logger.info("----- member_CONTOLLER accountPASS -----");
		return "member:member/account.tiles";
	}
}
