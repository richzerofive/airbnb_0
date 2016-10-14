package com.airbnb.web.domains;

import java.io.Serializable;

import org.springframework.stereotype.Component;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Component
@Data
public class AdminDTO implements Serializable {/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Getter @Setter private String id;
	@Getter @Setter private String name;

}
