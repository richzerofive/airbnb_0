package com.airbnb.web.domains;

import lombok.Getter;
import lombok.Setter;

public class HostingDTO {
	@Getter @Setter private String room_type, building_type, country, state, city, street, optional, zip_code,
	host_convenience_1, 
	host_convenience_2, 
	host_convenience_3, 
	host_convenience_4, 
	host_convenience_5, 
	host_convenience_6, 
	host_convenience_7, 
	host_convenience_8, 
	host_convenience_9, 
	host_convenience_10, 
	host_convenience_11, 
	host_convenience_12, 
	host_convenience_13;
	@Getter @Setter private int guest_cnt, bed_cnt, bathroom_cnt;
	
}
