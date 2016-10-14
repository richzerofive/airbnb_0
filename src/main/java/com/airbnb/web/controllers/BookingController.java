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
@RequestMapping("/booking")
public class BookingController {
		
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping("/main")
	public String main() {
		logger.info("예약 컨트롤러 {}.","booking");
		return "public:booking/booking.tiles";
	}
	@RequestMapping("/detail")
	public String detail() {
		logger.info("예약 컨트롤러 {}.","booking");
		return "public:booking/detail.tiles";
	}
	@RequestMapping("/cancel")
	public String cancel() {
		logger.info("예약 컨트롤러 {}.","cancel");
		return "member:booking/cancel.tiles";
	}
	
}