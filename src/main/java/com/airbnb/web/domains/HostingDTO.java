package com.airbnb.web.domains;

import lombok.Getter;
import lombok.Setter;

public class HostingDTO {
	@Getter @Setter private String room_type, building_type, country, state, city, street, optional, zip_code, convenience, safety_fac,
	space, explaination, title, rules, other_rule, checkin_term, checkin_time, latitude, longitude, picture, block_date;
	@Getter @Setter private int guest_cnt, bed_cnt, bathroom_cnt, min_nights, max_nights, price;
	
}
