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
		logger.info("HostingController :: Regist :: latitude :: {}",hostingDTO.getLatitude());
		logger.info("HostingController :: Regist :: longitude :: {}",hostingDTO.getLongitude());
		retval.setMessage("success4");
		return retval;
	}
	@RequestMapping(value="/regist5", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist5(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: Regist :: convenience :: {}",hostingDTO.getConvenience());
		logger.info("HostingController :: Regist :: safety_fac :: {}",hostingDTO.getSafety_fac());
		retval.setMessage("success5");
		return retval;
	}
	@RequestMapping(value="/regist6", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist6(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: Regist :: space :: {}",hostingDTO.getSpace());
		retval.setMessage("success6");
		return retval;
	}
	@RequestMapping(value="/regist7", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist7(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: Regist :: picture :: {}",hostingDTO.getPicture());
		retval.setMessage("success7");
		return retval;
	}
	@RequestMapping(value="/regist8", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist8(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: Regist :: explaination :: {}",hostingDTO.getExplaination());
		retval.setMessage("success8");
		return retval;
	}
	@RequestMapping(value="/regist9", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist9(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: Regist :: title :: {}",hostingDTO.getTitle());
		retval.setMessage("success9");
		return retval;
	}
	@RequestMapping(value="/regist10", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist10(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: Regist :: rules :: {}",hostingDTO.getRules());
		logger.info("HostingController :: Regist :: other_rule :: {}",hostingDTO.getOther_rule());
		retval.setMessage("success10");
		return retval;
	}
	@RequestMapping(value="/regist11", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist11(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: Regist :: checkin_term :: {}",hostingDTO.getCheckin_term());
		logger.info("HostingController :: Regist :: checkin_time :: {}",hostingDTO.getCheckin_time());
		retval.setMessage("success11");
		return retval;
	}
	@RequestMapping(value="/regist12", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist12(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: Regist :: min_nights :: {}",hostingDTO.getMin_nights());
		logger.info("HostingController :: Regist :: max_nights :: {}",hostingDTO.getMax_nights());
		retval.setMessage("success12");
		return retval;
	}
	@RequestMapping(value="/regist13", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingRegist13(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: Regist :: price :: {}",hostingDTO.getPrice());
		retval.setMessage("success13");
		return retval;
	}
	@RequestMapping(value="/manage2", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage2(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: blockdate :: {}",hostingDTO.getBlock_date());
		retval.setMessage("manage2");
		return retval;
	}
	@RequestMapping(value="/manage3", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage3(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: price :: {}",hostingDTO.getPrice());
		retval.setMessage("manage3");
		return retval;
	}
	@RequestMapping(value="/manage4", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage4(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: rules :: {}",hostingDTO.getRules());
		logger.info("HostingController :: manage :: other_rule :: {}",hostingDTO.getOther_rule());
		retval.setMessage("manage4");
		return retval;
	}
	@RequestMapping(value="/manage5", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage5(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: checkin_time :: {}",hostingDTO.getCheckin_time());
		retval.setMessage("manage5");
		return retval;
	}

	@RequestMapping(value="/manage7", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage7(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: building_type :: {}",hostingDTO.getBuilding_type());
		logger.info("HostingController :: manage :: room_type :: {}",hostingDTO.getRoom_type());
		logger.info("HostingController :: manage :: guest_cnt :: {}",hostingDTO.getGuest_cnt());
		logger.info("HostingController :: manage :: bed_cnt :: {}",hostingDTO.getBed_cnt());
		logger.info("HostingController :: manage :: bathroom_cnt :: {}",hostingDTO.getBathroom_cnt());
		retval.setMessage("manage7");
		return retval;
	}
	@RequestMapping(value="/manage8", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage8(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: title :: {}",hostingDTO.getTitle());
		logger.info("HostingController :: manage :: explaination :: {}",hostingDTO.getExplaination());
		retval.setMessage("manage8");
		return retval;
	}
	@RequestMapping(value="/manage9", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage9(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: latitude :: {}",hostingDTO.getLatitude());
		logger.info("HostingController :: manage :: longitude :: {}",hostingDTO.getLongitude());
		retval.setMessage("manage9");
		return retval;
	}
	@RequestMapping(value="/manage10", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage10(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: convenience :: {}",hostingDTO.getConvenience());
		retval.setMessage("manage10");
		return retval;
	}
	@RequestMapping(value="/manage11", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage11(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: picture :: {}",hostingDTO.getPicture());
		retval.setMessage("manage11");
		return retval;
	}
	@RequestMapping(value="/manage12", method=RequestMethod.POST, consumes="application/json")
	public @ResponseBody Retval hostingManage12(@RequestBody HostingDTO hostingDTO){
		logger.info("HostingController :: manage :: safety_fac :: {}",hostingDTO.getSafety_fac());
		retval.setMessage("manage12");
		return retval;
	}

}
