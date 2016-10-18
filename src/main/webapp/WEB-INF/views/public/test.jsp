<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyDQ-NnjOtdXE_zPAsWQIknvFjA1WNuY2_Y"></script>
<script>
var map;
var myCenter = new google.maps.LatLng(37.250943, 127.028344);


	var mapProp = {
		center:myCenter,
		zoom : 5,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	
	map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
	google.maps.event.addListener(map, 'click', function(event){
		placeMarker(event.latLng);
	});

function placeMarker(location){
	var marker = new google.maps.Marker({
		position : location,
		map : map,
	});
	var infowindow = new google.maps.InfoWindow({
		content : 'Latitude: ' + location.lat() + '<br>Longitude : ' + location.lng()
	});
	infowindow.open(map,marker);
}

</script>


<div id="googleMap" style="width:500px; height:380px;"></div>