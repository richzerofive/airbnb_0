package com.airbnb.web.domains;

import org.springframework.stereotype.Component;

@Component
public class Retval {
	private int count;
	private String message, flag;

	public int getCount() {
		return count;
	}

	public void setCount(int count) {
		this.count = count;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = "success";
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

}