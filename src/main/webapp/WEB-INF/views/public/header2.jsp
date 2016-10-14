<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js"/>

<body class="with-new-header fixed-header">
    <a class="screen-reader-only screen-reader-only-focusable skip-to-content" data-hook="skip-to-content" tabindex="1" href="#site-content">
      콘텐츠로 바로가기</a>

    <span class="screen-reader-only"> 에어비앤비</span>

    <noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-46MK"
height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>

      <div class="smart-banner" aria-hidden="true"></div>

      <div id="header" class="airbnb-header new logged_in is_host">
  <div class="header--sm show-sm" aria-hidden="true">
  <a href="#" aria-label="홈페이지" data-prevent-default="" class="link-reset burger--sm">
    <i class="icon icon-reorder icon-rausch"></i>
    <span class="screen-reader-only">에어비앤비</span>
  </a>
  <div class="title--sm text-center">
      <button class="btn btn-block search-btn--sm search-modal-trigger " style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
        <i class="icon icon-search icon-gray"></i>
        <span class="search-placeholder--sm"> 어디로 가세요?
        </span>
      </button>
      <a href="/" class="header-belo hide">
        <span class="screen-reader-only">에어비앤비</span>
      </a>
  </div>
  <div class="action--sm"></div>
  <nav class="nav--sm" role="navigation"></nav>
  <div class="search-modal-container"></div>
</div>

  <header class="regular-header clearfix hide-sm" id="new-header" role="banner">
  
	<div class="comp pull-left" style="margin-top:-1.2%;">
  <a href="/" class="hdr-btn link-reset belo-container" aria-label="에어비앤비">
    <i class="icon icon-pos--lower  icon-airbnb-alt h2 show-login"></i>
    <i class="icon icon-pos--lower  icon-airbnb show-logout"></i>
  </a>
</div>

	<div class="comp pull-right show-login">
  		<a class="no-crawl hdr-btn link-reset header-avatar-trigger needsclick" rel="nofollow" href="/trips" data-href="/dashboard" data-href-host="/trips">
    <span class="value_name margin-right--tiny hide-md">user</span>
    <div class="media-photo media-round user-profile-image header-icon icon-profile-alt-gray">
    <img width="28" height="28" src="https://a2.muscache.com/im/pictures/0c825300-eb86-4356-a1ac-23b1cb633d04.jpg?aki_policy=profile_small" alt="">
	</div>
  </a>

  <div class="panel  drop-down-menu avatar-tooltip--new">
    <div class="panel-header no-border hide-lg">
      <strong><span class="value_name">user</span></strong>
    </div>
        <a href="/trips" class="js-your-trips-item panel-body link-reset hover-item no-crawl hide">
          <div class="hover-item__content"> 여행 목록</div>
        </a>
        <a href="/city-hosts?source=hdr" class="hide city-host-button-md panel-body link-reset hover-item">
          <div class="hover-item__content">City Hosts 
              <img class="beta-badge" src="https://a0.muscache.com/airbnb/static/magical_trips/guest/beta-badge-56a0d5bc185adfe79992a46991964070.png" alt="Beta" height="18">
          </div>
          </a>        
          <a href="/wishlists/my" class="js-wishlists-item panel-body link-reset hover-item no-crawl hide">
          <div class="hover-item__content"> 위시리스트</div>
        </a>
        <a href="/users/edit" class=" panel-body link-reset hover-item no-crawl">
          <div class="hover-item__content">프로필 수정</div>
        </a>
        <a href="/invite?r=3" class="travel-credit-item panel-body link-reset hover-item">
          <div class="hover-item__content">여행 크레딧</div></a>        
          <a href="/users/notifications" class=" panel-body link-reset hover-item no-crawl">
          <div class="hover-item__content">계정 관리</div>
        </a>
        <a href="/business-travel?s=nav" class="business-travel  panel-body link-reset hover-item">
          <div class="hover-item__content">출장 프로그램
          </div></a>        
          <a href="/logout" class=" panel-body link-reset hover-item no-crawl">
          <div class="hover-item__content">로그아웃</div>
        	</a>
  		</div>
	</div>


  <div class="comp pull-right show-logout">
  <a data-login-modal="" href="/login" data-redirect="redirect_params[action]=show&amp;redirect_params[controller]=homepages" class="hdr-btn link-reset">
   	 로그인</a>
	</div>
	<div class="comp pull-right show-logout">
  <a data-signup-modal="" data-header-view="true" href="/signup_login" data-redirect="redirect_params[action]=show&amp;redirect_params[controller]=homepages" class="hdr-btn link-reset">
   	 회원가입</a>
	</div>


  
	<div class="comp pull-right show-travel-credit js-travel-credit-menu-container hide">
  	<a class="needsclick no-crawl hdr-btn link-reset js-travel-credit-comp" href="/invite?r=3" rel="nofollow" data-href="/invite?r=3">
    <div class="gift-icon-container text-center">
      <span class="margin-right--tiny hide-md">크레딧</span>
      <i class="header-icon js-travel-credit-icon icon-gift-alt-gray">
        <i class="alert-count js-travel-credit-unread-count text-center fade in">1</i>
      </i>
    </div>
  </a>

  	<div class="panel  drop-down-menu travel-credit-dropdown"></div>
	</div>
 
	<div id="js-header-help-menu"><div class="comp pull-right no-border help-trigger-wrapper no-hover" data-reactid=".6"><a class="hdr-btn js-help-toggle link-reset needsclick" href="/help" data-reactid=".6.0"><span class="margin-right--tiny hide-md" data-reactid=".6.0.0">도움말</span><span data-reactid=".6.0.1">&nbsp;</span><i class="header-icon icon-lifesaver-alt-gray" data-reactid=".6.0.2"></i></a><div class="field-guide panel help-side-panel" data-reactid=".6.1"><div data-reactid=".6.1.0"><div class="side-panel-header text-center" data-reactid=".6.1.0.0"><a href="/help" class="link-reset" data-reactid=".6.1.0.0.1"><span data-reactid=".6.1.0.0.1.0">에어비앤비 도움말</span></a><a href="#" data-prevent-default="true" class="close-button pull-right link-reset" data-reactid=".6.1.0.0.2"><i class="icon icon-remove" data-reactid=".6.1.0.0.2.0"></i></a></div><div class="main-content" data-reactid=".6.1.0.1"><div class="text-left search-container" data-reactid=".6.1.0.1.0"><div class="search-input-container" data-reactid=".6.1.0.1.0.0"><div class="search-input-inner-container" data-reactid=".6.1.0.1.0.0.0"><div class="icon-search-container" data-reactid=".6.1.0.1.0.0.0.0"><i class="icon-gray icon icon-search dls-search-bar-icon icon-size-1" data-reactid=".6.1.0.1.0.0.0.0.0"></i></div><input class="search-input dls-search-input" type="text" name="q" autocomplete="off" maxlength="1024" value="" placeholder="질문을 입력하거나 키워드로 검색하세요." data-reactid=".6.1.0.1.0.0.0.1"></div></div><div class="search-results-container text-dark-gray" data-reactid=".6.1.0.1.0.1"><div data-reactid=".6.1.0.1.0.1.0"><div class="search-results loading" data-reactid=".6.1.0.1.0.1.0.0"></div></div><div class="expandable-indicator" data-reactid=".6.1.0.1.0.1.2"></div></div></div></div><div class="help-link-bottom text-center" data-reactid=".6.1.0.2"><a href="/help" data-prevent-default="true" data-reactid=".6.1.0.2.1"><span data-reactid=".6.1.0.2.1.0">도움말 보기</span></a></div></div></div></div></div>
 
	<div class="hide js-header-business-travel comp pull-right background-light-gray">
 	 <a class="hdr-btn link-reset needsclick" href="/business/dashboard?s=nav">
    <span class="margin-right--tiny hide-md">출장</span>
    <i class="header-icon js-business-travel-icon icon-business-travel-gray"></i>
  	</a>
	</div>
    
	<div class="comp pull-right show-login">
  	<a class="needsclick no-crawl hdr-btn link-reset js-inbox-comp message-link" href="/inbox" data-href="/inbox" rel="nofollow">
    <div class="inbox-icon-container text-center">
      <span class="margin-right--tiny hide-md">메시지</span>
      <i class="js-message-icon header-icon message-icon icon-message-alt-gray">
        <i class="alert-count unread-count text-center fade in">1</i>
      </i>
    </div>
  </a>

  <div class="panel  drop-down-menu notifications-dropdown">
  <div class="loading" data-reactid=".1"></div></div>
	</div>

    
	<div class="comp pull-right show-trips show-login js-trips-menu-container">
 	 <a class="needsclick no-crawl hdr-btn link-reset js-trips-comp trips-comp" href="/trips" rel="nofollow" data-href="/trips">
    	<div class="inbox-icon-container text-center">
      <span class="margin-right--tiny hide-md">여행</span>
      <i class="header-icon js-trips-icon icon-suitcase-gray">
        <i class="alert-count js-trips-unread-count text-center fade">0</i>
      </i>
    </div>
  </a>

  	<div class="panel  drop-down-menu trips-dropdown"><div class="loading" data-reactid=".2"></div></div>
	</div>
  
	<div class="comp pull-right show-host">
  <a class="needsclick host-icon-wrapper no-crawl hdr-btn link-reset js-host-menu-icon" href="/rooms" rel="nofollow" data-href="/rooms">
    <span class="hide-md margin-right--tiny">호스트</span>
    <i class="header-icon host-icon js-host-icon icon-home-alt-gray">
      <i class="alert-count js-host-item-count listing-count text-center fade in">!</i>
    </i>
  </a>

  <div class="panel  drop-down-menu host-tooltip--new">
    <div class="panel-header no-border hide-lg">
      <span><strong>호스트</strong></span>
    </div>
    <div class="hover-item panel-body relist-your-space">
      <a href="https://www.airbnb.co.kr/manage-listing/15345840" class="link-reset click-area">
        <div class="listing-image placeholder"></div><div class="cta-container va-container va-container-v">
          <div class="va-middle">
            <div class="cta-text space-5">숙소 등록 완료하기
            </div>
            <div class="cta-text-v3-reactivate hide">재활성화하기
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 58%;">
              </div>
            </div>
          </div>
        </div>
	</a>      
	<div class="close-button hide">
        <a href="#" class="alert-close"></a>
      </div>
    </div>

        <a href="/dashboard" class=" panel-body link-reset hover-item origin-item js-host-dashboard-link no-crawl">
          <div class="hover-item__content">알림판
            <i class="alert-count js-pending-request-count--inline text-center fade">0</i>
          </div>
        </a>
        <a href="/rooms" class=" panel-body link-reset hover-item origin-item js-host-calendar-link hide no-crawl">
          <div class="hover-item__content"> 달력   
          </div>
        </a>
        <a href="/rooms" class=" panel-body link-reset hover-item origin-item js-host-manage-listings-link no-crawl">
          <div class="hover-item__content"> 숙소 관리
            <i class="alert-count listing-count listing-count--inline text-center fade in hide">1</i>
          </div></a>
        <a href="/rooms/new" class=" panel-body link-reset hover-item origin-item js-host-list-your-space-link">
          <div class="hover-item__content">  숙소 등록 </div></a>        
          <a href="/my_reservations" class=" panel-body link-reset hover-item origin-item js-host-my-reservations-link no-crawl">
          <div class="hover-item__content"> 예약 관리  </div></a>
        <a href="/users/transaction_history" class=" panel-body link-reset hover-item origin-item js-host-transaction-history-link no-crawl">
          <div class="hover-item__content">대금 수령 내역   </div></a>
        <a href="/refer?r=41" class=" panel-body link-reset hover-item origin-item hide item-refer-hosts js-host-refer-hosts-link no-crawl">
          <div class="hover-item__content"> 호스트 추천하기
            <span class="label label-pink label-new">NEW!</span>
          </div></a>
        <a href="/users/reviews" class=" panel-body link-reset hover-item origin-item js-host-reviews-link no-crawl">
          <div class="hover-item__content"> 후기   </div>
        </a>
        <a href="/host-assist" class=" panel-body link-reset hover-item origin-item hide item-host-assist js-host-assist-link no-crawl">
          <div class="hover-item__content"> 호스트 지원      
          </div>
        </a>
        <a href="/hospitality" class=" panel-body link-reset hover-item origin-item js-host-hospitality-link">
          <div class="hover-item__content"> 따뜻한 손님맞이           
          </div></a>  
         </div>
	</div>
   
	<div class="comp pull-right city-host-button hide">
  	<a class="hdr-btn link-reset js-host-menu-icon city-host-icon-wrapper" href="/city-hosts?source=hdr">
    <div>
      <span>City Hosts</span>
      <img class="beta-badge" src="https://a0.muscache.com/airbnb/static/magical_trips/guest/beta-badge-56a0d5bc185adfe79992a46991964070.png" alt="Beta" height="15">
    </div>
  </a>
</div>

  <div class="comp pull-right not-launched comp-hire-a-host">
  <a class="hdr-btn link-reset lys-link hire-a-host-link" href="/co-hosting?ref=header_button">
    <span class="btn btn-small btn-hire-a-host"></span></a>
  <div class="panel  drop-down-menu hire-a-host-dropdown">
    	<p class="panel-body">
     	 	<a class="link-reset hire-a-host-tooltip" href="/co-hosting?ref=header_button">Tooltip content!</a>
   		 </p>
 	 </div>
	</div>

  
	<div class="comp pull-right hide-host comp-become-a-host ">
 	 <a class="hdr-btn link-reset lys-link js-become-a-host-link comp-become-a-host__link" href="/rooms/new?from_nav=1&amp;link=1">
    <span class="btn btn-small btn-become-a-host">호스팅 하기
      <i class="icon icon-gift icon-host-referral-gift js-host-referral-gift-icon hide "></i>
    </span>
  	</a>
  <div class="panel  drop-down-menu hide js-become-a-host-dropdown">
    <a class="link-reset panel-body hover-item hide js-become-a-host-lys" href="/become-a-host?from_nav=1&amp;link=2">
      <div class="hover-item__content"> 숙소 등록 </div>
    </a>
    <a class="link-reset js-become-a-host-tooltip panel-body hover-item" href="/rooms/new?from_nav=1&amp;link=3">
      <div class="tooltip-content"> 호스팅 하기</div>
    </a>
    	<a class="link-reset panel-body hover-item js-become-a-host-why-host hide" href="/host?from_nav=1">
      <div class="hover-item__content"> 호스팅 방법</div>
   	 </a>
  	</div>
	</div>

      <div class="comp pull-left back-to-search-results-wrapper"></div>
      	<div class="comp search-bar-wrapper" role="search">
      		<form action="/s" class="search-form" data-reactid=".0">
      	<div data-reactid=".0.0"><div class="search-bar" data-reactid=".0.0.0">
      		<i class="header-icon icon-search-alt-gray search-icon" aria-hidden="true" data-reactid=".0.0.0.0"></i>
     		 <label class="screen-reader-only" for="header-search-form" aria-hidden="true" data-reactid=".0.0.0.1">어디로 가세요?</label>
     		 <input type="text" placeholder="어디로 가세요?" autocomplete="off" name="location" id="header-search-form" class="location" value="" data-reactid=".0.0.0.2">
      		<input type="hidden" name="source" value="hdr" data-reactid=".0.0.0.4"></div>
      	<div id="header-search-settings" class="panel search-settings header-menu" data-reactid=".0.0.1"></div>
      	</div></form></div>

	</header>
	</div>	