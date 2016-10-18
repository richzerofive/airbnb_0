package com.airbnb.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.airbnb.web.domains.Retval;

@Controller
@RequestMapping("/member")
public class MemberController {
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	@Autowired Retval retval;
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
	public @ResponseBody Retval  membersignUp() {
		logger.info("----- member_CONTOLLER signUp PASS -----");
		return retval;
	}

	@RequestMapping("/main")
	public String memberMain() {
		logger.info("Welcome home! The client locale is 1111{}", "디버깅 모드");
		return "member:member/show.tiles";
	}
	@RequestMapping("/cancel")
	public String memberCancel() {
		logger.info("memberCancel");
		return "member:member/cancel.tiles";
	}
	@RequestMapping("/change_pw")
	public String memberChangePw() {
		logger.info("memberChangePw");
		return "member:member/change_pw.tiles";
	}
	@RequestMapping("/dashboard")
	public @ResponseBody Retval memberHeader() {
		logger.info("Member_Dashboard: {}", retval.getMessage());
		System.out.println("Dashboard: "+retval.getMessage());
		return retval;
	}

	@RequestMapping("/inbox")
	public @ResponseBody Retval memberinbox() {
		logger.info("----- member_CONTOLLER inbox -----");
		return retval;
	}

	@RequestMapping("/trip")
	public @ResponseBody Retval memberTrip() {
		logger.info("----- member_CONTOLLER trip PASS -----");
		return retval;
	}

	@RequestMapping("/edit")
	public @ResponseBody Retval memberEdit() {
		logger.info("----- member_CONTOLLER edit PASS -----");
		return retval;
	}

	@RequestMapping("/account")
	public @ResponseBody Retval memberaccount() {
		logger.info("----- member_CONTOLLER Member/Account -----");
		retval.setMessage("success");
		logger.info("Account: {}", retval.getMessage());
		System.out.println("Account: "+retval.getMessage());
		return retval;
	}
	@RequestMapping("/rooms")
	public @ResponseBody Retval memberRooms(){
		logger.info("memberController: rooms");
		System.out.println("Rooms: "+retval.getMessage());
		return retval;
	};
}
