package com.airbnb.web.domains;

import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
public class Retval {
	@Getter @Setter private int count;
	@Getter @Setter private String message,flag;
}
