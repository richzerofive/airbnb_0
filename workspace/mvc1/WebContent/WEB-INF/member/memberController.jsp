<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
 	div{border: 1px solid powderblue;width: 200px;margin: 0 auto;text-align:center;}
 	</style>
</head>
<body>
	<div id="" class="memberclass">
	회원관리<br/>
	<ol>
		<li><a href="service/regist.jsp">회원가입</a></li>
		<li><a href="service/login.jsp">로그인</a></li>
		<li><a href="service/logout.jsp">로그아웃</a></li>
		<li><a href="service/show.jsp">내정보보기</a></li>
		<li><a href="service/update.jsp">내정보수정</a></li>
		<li><a href="service/retire.jsp">탈퇴</a></li>
		<li><a href="service/list.jsp">회원목록</a></li>
		<li><a href="service/list.jsp">검색</a></li>
		<li><a href="service/count.jsp">회원수</a></li>
	</ol>
	<a href="index.jsp"><img src="${context}/home.jpg" alt="home" style="width: 30px"></a>
		
	</div>
</body>
</html>