package com.airbnb.web.domains;

import lombok.Getter;
import lombok.Setter;

public class HostingDTO {
	@Getter @Setter private String room_type;
	@Getter @Setter private int guest_cnt;
	
}
