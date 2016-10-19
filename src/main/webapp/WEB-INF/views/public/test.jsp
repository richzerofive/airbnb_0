<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>jQuery UI Datepicker - Default functionality</title>
  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" href="/resources/demos/style.css">
  <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <script>
  $( function() {
	   $('#calendar').datepicker();
	    $('#calendar2').datepicker();
	    $('#calendar3').datepicker();
	    $('#ui-datepicker-div').draggable();
  } );
  </script>
</head>
<body>
 <hr><hr><hr><hr><hr><hr><hr><hr><hr>수정수정22<hr><hr><hr><hr><hr><hr><hr><hr><hr>
<div>
Calendar: <input id="calendar" type="text" /><br /> 
Calendar2: <input id="calendar2" type="text" /><br/> 
Fixed calendar: <div id="calendar3"></div>
</div>
 <hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr><hr>
 
 
 <script type="text/javascript">
$(document).ready(function() {
    $('#calendar').datepicker();
    $('#calendar2').datepicker();
    $('#calendar3').datepicker();
    $('#ui-datepicker-div').draggable();
});
</script>

<div>
Calendar: <input id="calendar" type="text" /><br />  <-- draggable
Calendar2: <input id="calendar2" type="text" /><br/> <-- draggable
Fixed calendar: <div id="calendar3"></div> <-- fixed
</div>
 
 
 
 
</body>
</html>