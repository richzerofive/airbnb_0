<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>로그인</title>
<link rel="stylesheet" href="${css}/member.css" />
</head>
<body>
<div class="box">
	<form action="${context}/member/result/login.jsp" method="post">
		<span class="meta">ID</span> <input type="text" name="id" /><br />
		
		<span class="meta">비밀번호</span> <input type="password" name="pw" /><br />
	<br /><br /><br />
		<input type="submit" value="로그인" />
		<input type="reset" value="취소" />
	</form>

	</div>
</body>
</html>