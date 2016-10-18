var app = (function() {
	var init = function(context) {
		session.init(context);
		onCreate();
		member.init();
		guide.init();
	};
	var context = function() {
		return session.getContextPath();
	};
	var js = function() {
		return session.getJavascriptPath('js');
	};
	var css = function() {
		return session.getCssPath('css');
	};
	var img = function() {
		return session.getImagePath('img');
	};
	var setContentView = function() {
		$('#p_con_footer').addClass('text_center').css('margin-left','16%').css('margin-right','0 auto').css('width','100%');
		$('#b_detail1').addClass('cursor');
		$('#b_detail2').addClass('cursor');
		$('#b_detail3').addClass('cursor');
		$('#b_main1').addClass('cursor');
		$('#b_main2').addClass('cursor');
		$('#b_main3').addClass('cursor');
		$('#b_main4').addClass('cursor');
		$('#b_main5').addClass('cursor');
		$('#m_signin').addClass('cursor');
		$('#m_signup').addClass('cursor');
		$('#m_management').addClass('cursor');
	};
	var onCreate = function() {
		setContentView();
		$('#p_header_brand').click(function(){
			controller.home();});
		$('#b_detail1').click(function(){
			controller.move('booking','detail');});
		$('#b_detail2').click(function(){
			controller.move('booking','detail');});
		$('#b_detail3').click(function(){
			controller.move('booking','detail');});
		$('#b_main1').click(function(){
			controller.move('booking','main');});
		$('#b_main2').click(function(){
			controller.move('booking','main');});
		$('#b_main3').click(function(){
			controller.move('booking','main');});
		$('#b_main4').click(function(){
			controller.move('booking','main');});
		$('#b_main5').click(function(){
			controller.move('booking','main');});
		$('#m_signin').click(function(){
			controller.move('member','signin');});
		$('#m_signup').click(function(){
			controller.move('member','signup');});
		$('#m_management').click(function(){
			controller.move('member','main');});
	};
	return {
		init : init,
		onCreate : onCreate,
		setContentView : setContentView,
		context : context,
		img : img,
		js : js,
		css : css
	}
})();
var session = (function() {
	var init = function(context) {
		sessionStorage.setItem('context', context);
		sessionStorage.setItem('js', context + '/resources/js');
		sessionStorage.setItem('css', context + '/resources/css');
		sessionStorage.setItem('img', context + '/resources/img');
	};
	var getContextPath = function() {
		return sessionStorage.getItem('context');
	};
	var getJavascriptPath = function() {
		return sessionStorage.getItem('js');
	};
	var getCssPath = function() {
		return sessionStorage.getItem('js');
	};
	var getImagePath = function() {
		return sessionStorage.getItem('img');
	};
	return {
		init : init,
		getContextPath : getContextPath,
		getJavascriptPath : getJavascriptPath,
		getCssPath : getCssPath,
		getImagePath : getImagePath
	};

})();
var controller = (function() {
	var _page, _directory, _key;
	var setKey = function(key) {
		this._key = key;
	};
	var setPage = function(page) {
		this._page = page;
	};
	var setDirectory = function(directory) {
		this._directory = directory;
	};
	var getKey = function() {
		return this._key;
	};
	var getPage = function() {
		return this._page;
	};
	var getDirectory = function() {
		return this._directory;
	};
	return {
		setPage : setPage,
		getPage : getPage,
		setKey : setKey,
		getKey : getKey,
		setDirectory : setDirectory,
		getDirectory : getDirectory,

		moveWithKey : function(directory, page, key) {
			setDirectory(directory);
			setPage(page);
			setKey(key)
			location.href = app.context() + '/' + getDirectory() + '/'
					+ getPage() + '?key=' + getKey();
		},
		move : function(directory, page) {
			setDirectory(directory);
			setPage(page);
			location.href = app.context() + '/' + getDirectory() + '/'
					+ getPage();
		},
		home : function() {
			location.href = app.context() + '/'
		}
	};
})();
var nav = (function() {
	var init = function() {
		onCreate();
	};
	var setContentView = function() {
		
	};
	var onCreate = function() {
		setContentView();
	/*	${'#h_login'}.click(function(){
			;});*/
	};
	return {
		init : init
	};
})();
var nav = (function() {
	var init = function() {
		onCreate();
	};
	var setContentView = function() {
		
	};
	var onCreate = function() {
		setContentView();
	/*	${'#h_login'}.click(function(){
			;});*/
	};
	return {
		init : init
	};
})();
var member = (function() {
	var init = function() {
		onCreate();
	};
	var setContentView = function() {
	};
	var onCreate = function() {
		setContentView();
		$('#dashboard-item').click(function() {
			controller.move('member', 'dashboard');
		});
		$('#inbox-item').click(function() {
			controller.move('member', 'inbox');
		});
		$('#rooms-item').click(function() {
			controller.move('member', 'rooms');
		});
		$('#your-trips-item').click(function() {
			controller.move('member', 'trip');
		});
		$('#user-profile-item').click(function() {
			controller.move('member', 'edit');
		});
		$('#account-item').click(function() {
			controller.move('member', 'account');
		});
		$('#booking-item').click(function() {
			controller.move('booking', 'cancel');
		});
		$('#go_admin').click(function() {
			controller.move('admin', 'main');
		});
	};
	return {
		init : init
	};
})();