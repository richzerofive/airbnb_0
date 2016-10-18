<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt"%>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions"%>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js" />
<link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
<link rel="stylesheet" href="${css}/hosting.css" />

<style>
#map {
	height: 95%;
}

.controls {
	background-color: #fff;
	border-radius: 2px;
	border: 1px solid transparent;
	box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
	box-sizing: border-box;
	font-family: Roboto;
	font-size: 15px;
	font-weight: 300;
	height: 29px;
	margin-left: 17px;
	margin-top: 10px;
	outline: none;
	padding: 0 11px 0 13px;
	text-overflow: ellipsis;
	width: 400px;
}

.controls:focus {
	border-color: #4d90fe;
}
</style>

<div id="host_regist_div_page7">
	<div id="host_manage_detail_left1">
		<h5>호스팅</h5>
		<h6>
			<a href="${context}/hosting/manage_2">달력</a>
		</h6>
		<h6>
			<a href="${context}/hosting/manage_3">요금 설정</a>
		</h6>
		<h6>
			<a href="${context}/hosting/manage_4">예약</a>
		</h6>
		<h6>
			<a href="${context}/hosting/manage_5">체크인</a>
		</h6>
		<h6>
			<a href="${context}/hosting/manage_6">예약취소내역</a>
		</h6>
		<br>
		<h5>숙소</h5>
		<h6>
			<a href="${context}/hosting/manage_7">기본 설정</a>
		</h6>
		<h6>
			<a href="${context}/hosting/manage_8">설명</a>
		</h6>
		<h6>
			<a href="${context}/hosting/manage_9">위치</a>
		</h6>
		<h6>
			<a href="${context}/hosting/manage_10">편의시설</a>
		</h6>
		<h6>
			<a href="${context}/hosting/manage_11">사진</a>
		</h6>
		<h6>
			<a href="${context}/hosting/manage_12">숙소 안전</a>
		</h6>
		<br>
		<h5>게스트 자료</h5>
		<h6>
			<a href="${context}/hosting/manage_13">가이드북</a>
		</h6>
		<br>
	</div>

	<div id="host_manage_detail_right1">
		<div id="host_manage_detail_right2"
			style="overflow: scroll; height: 820px;">
			<div id="host_manage_detail_right2_2">
				<h2>회원님이#도시이름#에서 좋아하는 것들을 소개해 주세요.</h2>
				<hr>
				<br>
				<div>
					<span>가장 좋아하는 음식점과 명소를 소개하는 가이드북을 만들어 보세요. 게스트가 이동 중에도 편리하게
						볼 수 있게요!</span>
				</div>
				<br>
				<div class="guidebook-form__sub-head-legal">
					<span>어디에 표시되나요?</span>
					<div class="guidebook-form__sub-head-legal">
						<a href="#" target="_blank"><span><span>가이드북
									인쇄하기 </span>»</span></a>
					</div>
				</div>
				<hr>
				<div>
					<h3>음식</h3>
					<hr>
					<div>제일 좋아하는 레스토랑, 베이커리, 커피숍이 어디인가요?</div>
					<div class="col-md-9">
						<input type="text" placeholder="추천 장소...">
					</div>
					<select class="col-md-4" style="margin-top: 1%;">
						<option>음식</option>
						<option>바와 클럽</option>
						<option>관광</option>
						<option>공원 및 자연</option>
						<option>예술과 문화</option>
						<option>쇼핑</option>
						<option>생활 필수 서비스</option>
						<option>엔터테인먼트와 액티비티</option>
						<option>교통편</option>
						<option>기타</option>
					</select> <select class="col-md-4" style="margin-top: 1%; margin-left: 1%;">
						<option>카테고리</option>
						<option>레스토랑</option>
						<option>카페 또는 커피숍</option>
						<option>베이커리</option>
						<option>디저트 가게</option>
						<option>길거리 시장</option>
						<option>기타</option>
					</select>
					<textarea placeholder="이유..." maxlength="5000"
						style="height: 102px;"></textarea>
					<button type="button">추가</button>
					<button type="button">취소</button>
				</div>

				<div>
					<h3>바와 클럽</h3>
					<hr>
					<div>밤 시간에 여가를 즐길 때는 주로 어디로 가시나요?</div>
					<div class="col-md-9">
						<input type="text" placeholder="추천 장소...">
					</div>
					<select class="col-md-4" style="margin-top: 1%;">
						<option>음식</option>
						<option>바와 클럽</option>
						<option>관광</option>
						<option>공원 및 자연</option>
						<option>예술과 문화</option>
						<option>쇼핑</option>
						<option>생활 필수 서비스</option>
						<option>엔터테인먼트와 액티비티</option>
						<option>교통편</option>
						<option>기타</option>
					</select> <select class="col-md-4" style="margin-top: 1%; margin-left: 1%;">
						<option>레스토랑</option>
						<option>카페 또는 커피숍</option>
						<option>베이커리</option>
						<option>디저트 가게</option>
						<option>길거리 시장</option>
						<option>기타</option>
					</select>
					<textarea placeholder="이유..." maxlength="5000"
						style="height: 102px;"></textarea>
					<button type="button">추가</button>
					<button type="button">취소</button>
				</div>

				<div>
					<h3>음식</h3>
					<hr>
					<div>제일 좋아하는 레스토랑, 베이커리, 커피숍이 어디인가요?</div>
					<div class="col-md-9">
						<input type="text" placeholder="추천 장소...">
					</div>
					<select class="col-md-4" style="margin-top: 1%;">
						<option>음식</option>
						<option>바와 클럽</option>
						<option>관광</option>
						<option>공원 및 자연</option>
						<option>예술과 문화</option>
						<option>쇼핑</option>
						<option>생활 필수 서비스</option>
						<option>엔터테인먼트와 액티비티</option>
						<option>교통편</option>
						<option>기타</option>
					</select> <select class="col-md-4" style="margin-top: 1%; margin-left: 1%;">
						<option>레스토랑</option>
						<option>카페 또는 커피숍</option>
						<option>베이커리</option>
						<option>디저트 가게</option>
						<option>길거리 시장</option>
						<option>기타</option>
					</select>
					<textarea placeholder="이유..." maxlength="5000"
						style="height: 102px;"></textarea>
					<button type="button">추가</button>
					<button type="button">취소</button>
				</div>

				<div>
					<h3>음식</h3>
					<hr>
					<div>제일 좋아하는 레스토랑, 베이커리, 커피숍이 어디인가요?</div>
					<div class="col-md-9">
						<input type="text" placeholder="추천 장소...">
					</div>
					<select class="col-md-4" style="margin-top: 1%;">
						<option>음식</option>
						<option>바와 클럽</option>
						<option>관광</option>
						<option>공원 및 자연</option>
						<option>예술과 문화</option>
						<option>쇼핑</option>
						<option>생활 필수 서비스</option>
						<option>엔터테인먼트와 액티비티</option>
						<option>교통편</option>
						<option>기타</option>
					</select> <select class="col-md-4" style="margin-top: 1%; margin-left: 1%;">
						<option>레스토랑</option>
						<option>카페 또는 커피숍</option>
						<option>베이커리</option>
						<option>디저트 가게</option>
						<option>길거리 시장</option>
						<option>기타</option>
					</select>
					<textarea placeholder="이유..." maxlength="5000"
						style="height: 102px;"></textarea>
					<button type="button">추가</button>
					<button type="button">취소</button>
				</div>

				<div>
					<h3>음식</h3>
					<hr>
					<div>제일 좋아하는 레스토랑, 베이커리, 커피숍이 어디인가요?</div>
					<div class="col-md-9">
						<input type="text" placeholder="추천 장소...">
					</div>
					<select class="col-md-4" style="margin-top: 1%;">
						<option>음식</option>
						<option>바와 클럽</option>
						<option>관광</option>
						<option>공원 및 자연</option>
						<option>예술과 문화</option>
						<option>쇼핑</option>
						<option>생활 필수 서비스</option>
						<option>엔터테인먼트와 액티비티</option>
						<option>교통편</option>
						<option>기타</option>
					</select> <select class="col-md-4" style="margin-top: 1%; margin-left: 1%;">
						<option>레스토랑</option>
						<option>카페 또는 커피숍</option>
						<option>베이커리</option>
						<option>디저트 가게</option>
						<option>길거리 시장</option>
						<option>기타</option>
					</select>
					<textarea placeholder="이유..." maxlength="5000"
						style="height: 102px;"></textarea>
					<button type="button">추가</button>
					<button type="button">취소</button>
				</div>

				<div>
					<h3>음식</h3>
					<hr>
					<div>제일 좋아하는 레스토랑, 베이커리, 커피숍이 어디인가요?</div>
					<div class="col-md-9">
						<input type="text" placeholder="추천 장소...">
					</div>
					<select class="col-md-4" style="margin-top: 1%;">
						<option>음식</option>
						<option>바와 클럽</option>
						<option>관광</option>
						<option>공원 및 자연</option>
						<option>예술과 문화</option>
						<option>쇼핑</option>
						<option>생활 필수 서비스</option>
						<option>엔터테인먼트와 액티비티</option>
						<option>교통편</option>
						<option>기타</option>
					</select> <select class="col-md-4" style="margin-top: 1%; margin-left: 1%;">
						<option>레스토랑</option>
						<option>카페 또는 커피숍</option>
						<option>베이커리</option>
						<option>디저트 가게</option>
						<option>길거리 시장</option>
						<option>기타</option>
					</select>
					<textarea placeholder="이유..." maxlength="5000"
						style="height: 102px;"></textarea>
					<button type="button">추가</button>
					<button type="button">취소</button>
				</div>

			</div>
		</div>
		<div id="host_manage_detail_right3">
			&nbsp;
			<div class="map-canvas" style="height: 100%; width: 100%;">
				<div
					style="height: 95%; width: 100%; position: relative; margin-top: 5%;">
					<div id="map"></div>
				</div>
			</div>
		</div>
	</div>
</div>