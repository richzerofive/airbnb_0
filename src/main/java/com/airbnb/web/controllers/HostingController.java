package com.airbnb.web.controllers;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import com.airbnb.web.domains.HostingDTO;
import com.airbnb.web.domains.Retval;
@Controller
@RequestMapping("/hosting")
public class HostingController {
	private static final Logger logger = LoggerFactory.getLogger(HostingController.class);
	@Autowired private Retval retval;
	
	@RequestMapping(value="/regist1", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist1(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: {}.", "regist1");
		logger.info("HostingController :: Regist :: room_type :: {}",hostingDTO.getRoom_type());
		logger.info("HostingController :: Regist :: guest_cnt :: {}",hostingDTO.getGuest_cnt());
		logger.info("HostingController :: Regist :: building_type :: {}",hostingDTO.getBuilding_type());
		retval.setMessage("success1");
		return retval;
	}
	@RequestMapping(value="/regist2", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist2(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: {}.", "regist2");
		logger.info("HostingController :: Regist :: bed_cnt :: {}",hostingDTO.getBed_cnt());
		logger.info("HostingController :: Regist :: bathroom_cnt :: {}",hostingDTO.getBathroom_cnt());
		retval.setMessage("success2");
		return retval;
	}
	@RequestMapping(value="/regist3", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist3(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: {}.", "regist3");
		logger.info("HostingController :: Regist :: country :: {}",hostingDTO.getCountry());
		logger.info("HostingController :: Regist :: state :: {}",hostingDTO.getState());
		logger.info("HostingController :: Regist :: city :: {}",hostingDTO.getCity());
		logger.info("HostingController :: Regist :: street :: {}",hostingDTO.getStreet());
		logger.info("HostingController :: Regist :: optional :: {}",hostingDTO.getOptional());
		logger.info("HostingController :: Regist :: zip_code :: {}",hostingDTO.getZip_code());
		retval.setMessage("success3");
		return retval;
	}
	@RequestMapping(value="/regist4", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist4(@RequestBody HostingDTO hostingDTO){
		String convenience, convenience1, convenience2,	convenience3, convenience4, convenience5, convenience6,
		convenience7, convenience8, convenience9, convenience10, convenience11, convenience12, convenience13 = "";
		convenience1 = (hostingDTO.getHost_convenience_1() == "true")?"T":"F";
		convenience2 = (hostingDTO.getHost_convenience_2() == "true")?"T":"F";
		convenience3 = (hostingDTO.getHost_convenience_3() == "true")?"T":"F";
		convenience4 = (hostingDTO.getHost_convenience_4() == "true")?"T":"F";
		convenience5 = (hostingDTO.getHost_convenience_5() == "true")?"T":"F";
		convenience6 = (hostingDTO.getHost_convenience_6() == "true")?"T":"F";
		convenience7 = (hostingDTO.getHost_convenience_7() == "true")?"T":"F";
		convenience8 = (hostingDTO.getHost_convenience_8() == "true")?"T":"F";
		convenience9 = (hostingDTO.getHost_convenience_9() == "true")?"T":"F";
		convenience10 = (hostingDTO.getHost_convenience_10() == "true")?"T":"F";
		convenience11 = (hostingDTO.getHost_convenience_11() == "true")?"T":"F";
		convenience12 = (hostingDTO.getHost_convenience_12() == "true")?"T":"F";
		convenience13 = (hostingDTO.getHost_convenience_13() == "true")?"T":"F";
		convenience = convenience1 + "-" + convenience2 + "-" + convenience3 + "-" + convenience4 + "-" + convenience5 + "-" + convenience6
				+ "-" + convenience7 + "-" + convenience8 + "-" + convenience9 + "-" + convenience10 + "-" + convenience11 + "-" + convenience12 + "-" + convenience13;
		logger.info("HostingController :: {}.", "regist4");
		logger.info("HostingController :: Regist :: host_convenience_1 :: {}",convenience1);
		logger.info("HostingController :: Regist :: host_convenience_2 :: {}",convenience2);
		logger.info("HostingController :: Regist :: host_convenience_3 :: {}",convenience3);
		logger.info("HostingController :: Regist :: host_convenience_4 :: {}",convenience4);
		logger.info("HostingController :: Regist :: host_convenience_5 :: {}",convenience5);
		logger.info("HostingController :: Regist :: host_convenience_6 :: {}",convenience6);
		logger.info("HostingController :: Regist :: host_convenience_7 :: {}",convenience7);
		logger.info("HostingController :: Regist :: host_convenience_8 :: {}",convenience8);
		logger.info("HostingController :: Regist :: host_convenience_9 :: {}",convenience9);
		logger.info("HostingController :: Regist :: host_convenience_10 :: {}",convenience10);
		logger.info("HostingController :: Regist :: host_convenience_11 :: {}",convenience11);
		logger.info("HostingController :: Regist :: host_convenience_12 :: {}",convenience12);
		logger.info("HostingController :: Regist :: host_convenience_13 :: {}",convenience13);
		logger.info("HostingController :: Regist :: convenience :: {}",convenience);
		retval.setMessage("success4");
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
