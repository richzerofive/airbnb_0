package com.airbnb.web.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/guidebook")
public class GuidebookController {
	private static final Logger logger = LoggerFactory.getLogger(GuidebookController.class);
	@RequestMapping("/content")
	public String guidebook(){
		logger.info("GuideController ! content() ");
		return "guidebook:guidebook/content.tiles";
	}
	

	@RequestMapping("/header")
	public String guideHeader(){
		logger.info("---- Guide_CONTROLLER HEADER PASS ----");
		return "public/header.jsp";
	}

}