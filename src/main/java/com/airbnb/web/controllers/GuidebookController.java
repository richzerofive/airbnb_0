package com.airbnb.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.airbnb.web.domains.Retval;

@Controller
@RequestMapping("/guidebook")
public class GuidebookController {
	private static final Logger logger = LoggerFactory.getLogger(GuidebookController.class);
	@Autowired Retval retval;
	@RequestMapping("/content")
	public String guidebook(){
		logger.info("GuideController ! content() ");
		return "public:guidebook/content.tiles";
	}
	
	@RequestMapping("/g_Seoul")
	public @ResponseBody Retval g_Seoul(){
		logger.info("GuideController ! g_Seoul() ");
		retval.setMessage("success");
		return retval;
	}
	
	@RequestMapping("/manage13")
	public @ResponseBody Retval manage13(){
		logger.info("GuideController ! manage13() ");
		retval.setMessage("success");
		return retval;
	}

	@RequestMapping("/header")
	public String guideHeader(){
		logger.info("---- Guide_CONTROLLER HEADER PASS ----");
		return "public/header.jsp";
	}

}