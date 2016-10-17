<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js"/>
<!doctype html>
<html lang="en">
<head>
	<title><tiles:getAsString name="title"/></title>
	<link rel="stylesheet" href="${css}/application.css" type="text/css"/>
	<link rel="stylesheet" href="${css}/bootstrap.css" type="text/css"/>
	<link rel="stylesheet" href="${css}/custom-styles.css" type="text/css"/>
	<link rel="stylesheet" href="${css}/font-awesome.css" type="text/css"/>
</head>
<body>

	<header>
		<div id="admin_header">
			<tiles:insertAttribute name="header" /> 	
		</div>
	</header>
	<nav>
		<div id="admin_nav">
			<tiles:insertAttribute name="nav" /> 	
		</div>
	</nav>
	<section>
		<article id="admin_article">
			<tiles:insertAttribute name="body" /> 
		</article>
	</section>
	<footer>
		 <div id="admin_footer">
		 	<tiles:insertAttribute name="footer" /> 
		 </div>
	</footer>
</body>
    <!-- /. WRAPPER  -->
    <!-- JS Scripts-->
    <!-- jQuery Js -->
    <script src="${js}/jquery-1.10.2.js"></script>
    <!-- Bootstrap Js -->
    <script src="${js}/bootstrap.min.js"></script>
    <!-- Metis Menu Js -->
    <script src="${js}/jquery.metisMenu.js"></script>
    <!-- Morris Chart Js -->
    <script src="${js}/morris/raphael-2.1.0.min.js"></script>
    <script src="${js}/morris/morris.js"></script>
    <!-- Custom Js -->
    <script src="${js}/custom-scripts.js"></script>
     <!-- inchul Js -->
    <script src="${js}/inchul.js"></script>
	<script src="${js}/application.js"></script>


<script>

	app.init('${pageContext.request.contextPath}');
		admin.init();
</script>
</html>




