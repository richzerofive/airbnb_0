var ADMIN_HEAD =
	'<!doctype html>'
	+'<html lang="en">'
	+'<head>'
	+'<title>에어비앤비 (Airbnb) – 어디서나 우리집처럼 편안하게</title>'
	+'<link rel="stylesheet" href="/web/resources/css/application.css" type="text/css"/>'
	+'<link rel="stylesheet" href="/web/resources/css/bootstrap.css" type="text/css"/>'
	+'<link rel="stylesheet" href="/web/resources/css/custom-styles.css" type="text/css"/>'
	+'<link rel="stylesheet" href="/web/resources/css/font-awesome.css" type="text/css"/>'
	+'</head>'
	+'<body>'
	+'<header>'
	+'<div id="admin_header">'
	+'<div id="wrapper">'
	+'<nav id="admin_header" class="navbar navbar-default top-navbar" role="navigation">'
	+'<div class="navbar-header">'
	+'<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".sidebar-collapse">'
	+'<span class="sr-only">Toggle navigation</span>'
	+'<span class="icon-bar"></span>'
	+'<span class="icon-bar"></span>'
	+'<span class="icon-bar"></span>'
	+'</button>'
	+'<a class="navbar-brand" >AIRBNB</a>'
	+'</div>'
	+'<ul class="nav navbar-top-links navbar-right">'
	+'<li class="dropdown">'
	+'<a class="dropdown-toggle" data-toggle="dropdown" href="#" aria-expanded="false">'
	+'<i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>'
	+'</a>'
	+'<ul class="dropdown-menu dropdown-user">'
	+'<li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>'
	+'</li>'
	+'<li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>'
	+'</li>'
	+'<li class="divider"></li>'
	+'<li><a href="#"><i class="fa fa-sign-out fa-fw"></i> Logout</a>'
	+'</li>'
	+'</ul>'
	+'<!-- /.dropdown-user -->'
	+'</li>'
	+'<!-- /.dropdown -->'
	+'</ul>'
	+'</nav>'
	+'<!--/. NAV TOP -->'
	+'</div>'
	+'</header>' 
var ADMIN_NAV =
	'<nav>'
	+'<div id="admin_nav">'
	+'<head>'
	+'<meta charset="utf-8" />'
	+'<meta name="viewport" content="width=device-width, initial-scale=1.0" />'
	+'<title>Airbnb</title>'
	+'<!-- Bootstrap Styles-->'
	+'<link href="/web/resources/css/bootstrap.css" rel="stylesheet" />'
	+'<!-- FontAwesome Styles-->'
	+'<link href="/web/resources/css/font-awesome.css" rel="stylesheet" />'
	+'<!-- Morris Chart Styles-->'
	+'<link href="/web/resources/css/morris/morris-0.4.3.min.css" rel="stylesheet" />'
	+'<!-- Custom Styles-->'
	+'<link href="/web/resources/css/custom-styles.css" rel="stylesheet" />'
	+'<!-- Google Fonts-->'
	+'<link href="http://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />'
	+'</head>'
	+'<nav id="admin_nav" class="navbar-default navbar-side" role="navigation">'
	+'<div class="sidebar-collapse">'
	+'<ul class="nav" id="main-menu">'
	+'<li>'
	+'<a class="active-menu" id="admin_nav_main"><i class="fa fa-dashboard"></i> Dashboard</a>'
	+'</li>'
	+'<li>'
	+'<a class="active-menu" href="/web/admin/list"><i class="fa fa-desktop"></i> List</a>'
	+'<ul class="nav nav-second-level">'
	+'<li>'
	+'<a href="/web/admin/list">회원 리스트</a>'
	+'</li>'
	+'<li>'
	+'<a href="/web/admin/h-list">호스팅 리스트</a>'
	+'</li>'
	+'<li>'
	+'<a href="/web/admin/r-list">예약 현황 리스트</a>'
	+'</li>'
	+'</ul>'
	+'</li>'
	+'<li>'
	+'<a class="active-menu" href="/web/admin/chart"><i class="fa fa-bar-chart-o"></i> Charts</a>'
	+'</li>'
	+'<li>'
	+'<a class="active-menu" href="/web/admin/search"><i class="fa fa-qrcode"></i> Search</a>'
	+'</li>'
	+'</ul>'
	+'</div>'
	+'</nav>'
	+'<!-- /. NAV SIDE -->'
	+'</div>'
	+'</nav>'
var ADMIN_SECTION =
	'<section>'
	+'<article id="admin_article">'
	+''
	+'<body>'
	+'<div id="page-wrapper">'
	+'<div id="page-inner">'
	+'<div class="row">'
	+'<div class="col-md-12">'
	+'<h1 class="page-header">'
	+'Dashboard <small>Summary of AIRBNB</small>'
	+'</h1>'
	+'</div>'
	+'</div>'
	+'<!-- /. ROW -->'
	+'<div class="row">'
	+'<div class="col-md-3 col-sm-12 col-xs-12">'
	+'<div class="panel panel-primary text-center no-boder bg-color-green">'
	+'<div class="panel-body">'
	+'<a href="/web/admin/list">'
	+'<i class="fa fa-user fa-5x"></i>'
	+'<h3>8,457 </h3>'
	+'</div>'
	+'<div class="panel-footer back-footer-green" >'
	+'가입회원자수</a>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'<div class="col-md-3 col-sm-12 col-xs-12">'
	+'<div class="panel panel-primary text-center no-boder bg-color-blue">'
	+'<div class="panel-body">'
	+'<a href="/web/admin/h-list">'
	+'<i class="fa fa-home fa-5x"></i>'
	+'<h3>52,160 </h3>'
	+'</div>'
	+'<div class="panel-footer back-footer-blue">'
	+'호스팅 회원수</a>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'<div class="col-md-3 col-sm-12 col-xs-12">'
	+'<div class="panel panel-primary text-center no-boder bg-color-red">'
	+'<div class="panel-body">'
	+'<a href="/web/admin/r-list">'
	+'<i class="fa fa-book fa-5x"></i>'
	+'<h3>15,823 </h3>'
	+'</div>'
	+'<div class="panel-footer back-footer-red">'
	+'예약 현황</a>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'<div class="col-md-3 col-sm-12 col-xs-12">'
	+'<div class="panel panel-primary text-center no-boder bg-color-brown">'
	+'<div class="panel-body">'
	+'<i class="fa fa-users fa-5x" ></i>'
	+'<h3>36,752 </h3>'
	+'</div>'
	+'<div class="panel-footer back-footer-brown">'
	+'Daily Visits'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'<div class="row">'
	+'<div class="col-md-12 col-sm-12 col-xs-12">'
	+'<div class="panel panel-default">'
	+'<div class="panel-heading">'
	+'Latest booking status list'
	+'</div>'
	+'<div class="panel-body">'
	+'<div class="table-responsive">'
	+'<table class="table table-striped table-bordered table-hover">'
	+'<thead>'
	+'<tr>'
	+'<th>예약번호</th>'
	+'<th>결재일</th>'
	+'<th>예약자 ID </th>'
	+'<th>Hoisting ID</th>'
	+'<th>Check in date</th>'
	+'<th>Check out date</th>'
	+'<th>Address</th>'
	+'</tr>'
	+'</thead>'
	+'<tbody>'
	+'<tr>'
	+'<td>1000</td>'
	+'<td>2016-10-09</td>'
	+'<td>Doe</td>'
	+'<td>John15482</td>'
	+'<td>2016-10-09</td>'
	+'<td>2016-10-19</td>'
	+'<td>seoul</td>'
	+'</tr>'
	+'<tr>'
	+'<td>1001</td>'
	+'<td>2016-10-10</td>'
	+'<td>choi Doe</td>'
	+'<td>John15482</td>'
	+'<td>2016-10-09</td>'
	+'<td>2016-10-19</td>'
	+'<td>LA</td>'
	+'</tr>'
	+'<tr>'
	+'<td>1002</td>'
	+'<td>2016-10-10</td>'
	+'<td>choi Doe</td>'
	+'<td>John15482</td>'
	+'<td>2016-10-09</td>'
	+'<td>2016-10-19</td>'
	+'<td>LA</td>'
	+'</tr>'
	+'<tr>'
	+'<td>1003</td>'
	+'<td>2016-10-10</td>'
	+'<td>choi Doe</td>'
	+'<td>John15482</td>'
	+'<td>2016-10-09</td>'
	+'<td>2016-10-19</td>'
	+'<td>LA</td>'
	+'</tr>'
	+'<tr>'
	+'<td>1004</td>'
	+'<td>2016-10-10</td>'
	+'<td>choi Doe</td>'
	+'<td>John15482</td>'
	+'<td>2016-10-09</td>'
	+'<td>2016-10-19</td>'
	+'<td>busan</td>'
	+'</tr>'
	+'<tr>'
	+'<td>1006</td>'
	+'<td>2016-10-10</td>'
	+'<td>choi Doe</td>'
	+'<td>John15482</td>'
	+'<td>2016-10-09</td>'
	+'<td>2016-10-19</td>'
	+'<td>LA</td>'
	+'</tr>'
	+'</tbody>'
	+'</table>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'</div>'
	+'<!-- /. ROW -->'
	+'</article>'
	+'</section>'
var ADMIN_FOOTER =
	'<footer>'
	+'<div id="admin_footer">'
	+'<footer><p align="center">All right reserved. HANBIT: CIC </a></p></footer>'
	+'</div>'
	+'<!-- /. PAGE INNER -->'
	+'</div>'
	+'<!-- /. PAGE WRAPPER -->'
	+'</div>'
	+'<!-- /. WRAPPER -->'
	+'<!-- JS Scripts-->'
	+'<!-- jQuery Js -->'
	+'<script src="/web/resources/js/jquery-1.10.2.js"></script>'
	+'<!-- Bootstrap Js -->'
	+'<script src="/web/resources/js/bootstrap.min.js"></script>'
	+'<!-- Metis Menu Js -->'
	+'<script src="/web/resources/js/jquery.metisMenu.js"></script>'
	+'<!-- Morris Chart Js -->'
	+'<script src="/web/resources/js/morris/raphael-2.1.0.min.js"></script>'
	+'<script src="/web/resources/js/morris/morris.js"></script>'
	+'<!-- Custom Js -->'
	+'<script src="/web/resources/js/custom-scripts.js"></script>'
	+'</body>'
	+'</div>'
	+'</footer>'
	+'</body>'
	+'<script src="/web/resources/js/application.js"></script>'
	+'<script>'
	+'app.init("/web");'
	+'</script>'
	+'</html>'
var admin =(function(){
	$('#admin_header').empty().load(app.context()+'/admin/header');
	$('#admin_header').empty().load(app.context()+'/admin/header');
	$('#admin_header').empty().load(app.context()+'/admin/header');
	$('#admin_header').empty().load(app.context()+'/admin/header');
	$('#adm_nav').empty().load(app.context()+'/admin/nav');
	var init =(function(){onCreate();});
	var setContentView =(function(){});
	var onCreate =(function(){
		setContentView();
		$('#admin_nav #admin_nav_main').click(function(){admin.main()});
		$().click(function(){});
		$().click(function(){});
		$().click(function(){});
	});
});

/*var admin= (function () {
	var _pass;
	var getPass= function() {return this._pass;};
	var setPass= function(pass) {this._pass=pass;};
	var init = function(){onCreate();};
	var setContentView = function (){
		$('#admin_header').css('height','50px');
		$('.navbar-header').css('height','50px');
		$('#admin_header #exit').addClass('cursor');
	};
	var onCreate = function(){
		setContentView();
		$('#admin_nav #member_mgmt #list').click(function(){user.student_list(1)});
		$('#admin_nav #member_mgmt #find_by').click(function(){controller.move('member','find_by');});
		$('#admin_nav #member_mgmt #count').click(function(){controller.move('member','count');});
		$('#admin_nav #account_mgmt #b_delete').click(function(){controller.move('account','b_delete');});
		$('#admin_nav #account_mgmt #b_list').click(function(){controller.move('account','b_list');});
		$('#admin_nav #account_mgmt #b_search').click(function(){controller.move('account','b_search');});
		$('#admin_nav #account_mgmt #b_count').click(function(){controller.move('account','b_count');});
		$('#admin_nav #grade_mgmt #g_regist').click(function(){controller.move('grade','g_regist');});
		$('#admin_nav #grade_mgmt #g_update').click(function(){controller.move('grade','g_update');});
		$('#admin_nav #grade_mgmt #g_delete').click(function(){controller.move('grade','g_delete');});
		$('#admin_nav #grade_mgmt #g_list').click(function(){controller.move('grade','g_list');});
		$('#admin_nav #grade_mgmt #g_count').click(function(){controller.move('grade','g_count');});
		$('#admin_nav #grade_mgmt #g_search').click(function(){controller.move('grade','g_search');});
		$('#admin_header #exit').click(function() {controller.home();});
		$('#admin_header #go_admin_home').click(function() {controller.move('admin','main');});
		$('#g_regist').click(function () {alert("등록으로 이동 합니다");controller.move('member','list')});
		$('#g_update').click(function () {alert("등록으로 이동 합니다");controller.move('member','list')});
	};
	return {
init:init,
getPass : getPass,
setpass : setPass,
check : function() {
	controller.move('admin','main');
},
check2 : function() {
	setPass(1);
	var isAdmin = window.confirm('관리자입니까? :');
	if (!isAdmin) {
		alert('관리자만 접근 가능합니다');
	} else {
		var password = prompt('관리자 비번을 입력해라');
		if (password == getPass()) {
			controller.move('admin', 'main');}
		else {
			alert('비번이 틀림')
		}
	}
}
};

})();*/

