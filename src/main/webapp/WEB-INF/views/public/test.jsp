<%@ page language="java" contentType="text/html; charset=UTF-8"	pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<c:set var="context" value="<%=request.getContextPath()%>" />
<c:set var="img" value="${context}/resources/img" />
<c:set var="css" value="${context}/resources/css" />
<c:set var="js" value="${context}/resources/js"/>
<head>
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
	<meta name="viewport" content="width=device-width, user-scalable=no" />
	<meta property="og:url" content="http://www.pigno.se/barn/PIGNOSE-Calendar">
	<meta property="og:type" content="product" />
	<meta property="og:title" content="PIGNOSE Calendar" />
	<meta property="og:description" content="PIGNOSE Calendar is beautiful and eidetic jQuery date picker plguin." />
	<meta property="og:image" content="http://www.pigno.se/barn/PIGNOSE-HyperModel/demo/img/cover@250.png" />
	<meta property="og:site_name" content="PIGNOSE" />
	<title>PIGNOSE Calendar</title>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="${css}/hosting/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="${css}/hosting/prism.css" />
	<link rel="stylesheet" type="text/css" href="${css}/hosting/calendar-style.css" />
	<link rel="stylesheet" type="text/css" href="${css}/hosting/pignose.calendar.css" />
	<style type="text/css">
		@import url(https://fonts.googleapis.com/css?family=Raleway);
		@import url(https://fonts.googleapis.com/css?family=Open+Sans);
		html, body {
			position: relative;
			height: 100%;
		}

		#wrapper {
			padding-bottom: 40px;
		}

		.center {
			text-align: center;
		}

		.header {
			max-width: 1200px;
			width: 80%;
			margin: 0 auto;
			padding-top: 40px;
			padding-bottom: 40px;
			margin-bottom: 40px;
			text-align: center;
		}

		.header h1 {
			margin-bottom: 20px;
			font-size: 24px;
			font-weight: 400;
			font-family: 'Raleway', 'helvetica', 'sans-serif';
			color: #333333;
		}

		.article {
			max-width: 1200px;
			width: 80%;
			margin: 0 auto;
			margin-top: 40px;
			padding-top: 40px;
			border-top: 1px solid #efefef;
			font-family: 'Raleway', 'helvetica', 'sans-serif';
			text-align: center;
		}

		.article h3 {
			margin-bottom: 40px;
		}

		.article h5 {
			margin-top: 60px;
			font-size: 130%;
			font-weight: 600;
		}

		.article table {
			font-size: 115%;
			text-align: left;
		}

		.article pre {
			font-size: 115%;
		}

        .article ul {
            display: inline-block;
            font-size: 115%;
            font-weight: 600;
            margin: 20px 0;
        }

        .article ul li {
            margin: 10px 0;
        }

		.input-calendar {
			display: block;
			width: 100%;
			max-width: 360px;
			margin: 0 auto;
			height: 3.2em;
			line-height: 3.2em;
			font: inherit;
			padding: 0 1.2em;
			border: 1px solid #d8d8d8;
			box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
			-o-box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
			-moz-box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
			-webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
		}

		.btn-calendar {
			display: block;
			width: 100%;
			max-width: 360px;
			height: 3.2em;
			line-height: 3.2em;
			background-color: #52555a;
			margin: 0 auto;
			font-weight: 600;
			color: #ffffff !important;
			text-decoration: none !important;
			box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
			-o-box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
			-moz-box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
			-webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
		}

		.btn-calendar:hover {
			background-color: #5a6268;
		}

		.box {
			display: none;
			max-width: 360px;
			margin: 0 auto;
			font-weight: 600;
			margin-top: 2em;
			padding: 1.6em;
			background-color: #fafafa;
			border: 1px solid #d8d8d8;
			box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
			-o-box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
			-moz-box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
			-webkit-box-shadow: 0 4px 12px rgba(0, 0, 0, .25);
			overflow: hidden;
		}

		.box .active-dates .label {
			margin: 0 .4em;
			white-space: normal;
			word-break: break-word;
			line-height: 2.4;
		}

		.box.box-languages .label {
			font-size: 100%;
		}
	</style>
	<script type="text/javascript" src="${js}/hosting_jquery.latest.min.js"></script>
	<script type="text/javascript" src="${js}/hosting_bootstrap.min.js"></script>
	<script type="text/javascript" src="${js}/hosting_prism.min.js"></script>
	<script type="text/javascript" src="${js}/hosting_moment.min.js"></script>
	<script type="text/javascript" src="${js}/hosting_pignose.calendar.js"></script>
	<script type="text/javascript">
	//<![CDATA[
	$(function() {
		$('.calendar').pignoseCalendar({
			select: function(date, obj) {
				obj.calendar.parent().next().show().text('You selected ' + 
				(date[0] === null? 'null':date[0].format('YYYY-MM-DD')) +
				'.');
			}
		});

		$('.input-calendar').pignoseCalendar({
			buttons: true,
		});

		var $btn = $('.btn-calendar').pignoseCalendar({
			modal: true,
			buttons: true,
			apply: function(date) {
				$btn.next().show().text('You applied date ' + date + '.');
			}
		});

		$('.calendar-dark').pignoseCalendar({
			theme: 'dark',
			select: function(date, obj) {
				obj.calendar.parent().next().show().text('You selected ' + 
				(date[0] === null? 'null':date[0].format('YYYY-MM-DD')) +
				'.');
			}
		});

		$('.multi-select-calendar').pignoseCalendar({
			multiple: true,
			select: function(date, obj) {
				obj.calendar.parent().next().show().text('You selected ' + 
					(date[0] === null? 'null':date[0].format('YYYY-MM-DD')) +
					'~' +
					(date[1] === null? 'null':date[1].format('YYYY-MM-DD')) +
					'.');
			}
		});

		$('.toggle-calendar').pignoseCalendar({
			toggle: true,
			select: function(date, obj) {
				var $target = obj.calendar.parent().next().show().html('You selected ' + 
				(date[0] === null? 'null':date[0].format('YYYY-MM-DD')) + 
				'.' +
				'<br /><br />' +
				'<strong>Active dates</strong><br /><br />' +
				'<div class="active-dates"></div>');

				for(var idx in obj.storage.activeDates) {
					var date = obj.storage.activeDates[idx];
					if(typeof date !== 'string') {
						continue;
					}
					$target.find('.active-dates').append('<span class="label label-default">' + date + '</span>');
				}
			}
		});
		
		$('.language-calendar').each(function() {
			var $this = $(this);
			var lang = $this.data('lang');
			$this.pignoseCalendar({
				lang: lang
			});
		});
	});
	//]]>
	</script>
</head>
<body>
	<div id="wrapper">
		<div class="header">
			<img src="demo/img/pignose-logo.png" alt="" />
			<h1>PIGNOSE Calendar</h1>
			<a href="https://github.com/KennethanCeyer/PIGNOSE-Calendar" target="_blank" class="btn btn-primary">View project on Github</a> <a href="https://github.com/KennethanCeyer/PIGNOSE-Calendar/archive/master.zip" target="_blank" class="btn btn-info">Download zip</a>
		</div>
		<div class="article">
			<h3>Calendar</h3>
            <h4>PIGNOSE Calendar is beautiful and eidetic jQuery date picker plguin.</h4>
            <div class="calendar"></div>
			<div class="box"></div>
		</div>
		<div class="article">
			<h3>Input type</h3>
            <h4>You can use calendar by input power ups.</h4>
            <input type="text" class="input-calendar" />
			<div class="box"></div>
		</div>
		<div class="article">
			<h3>Modal</h3>
            <h4>You can display calendar by modal popup.</h4>
            <a href="#" class="btn-calendar">Open Modal</a>
			<div class="box"></div>
		</div>
		<div class="article">
			<h3>Dark theme support</h3>
            <h4>Dark theme type supports, And we have a plan to add other themes.</h4>
            <div class="calendar-dark"></div>
			<div class="box"></div>
		</div>
		<div class="article">
			<h3>Multiple range Calendar</h3>
            <h4>PIGNOSE Calendar supports multiple range picker.</h4>
            <div class="multi-select-calendar"></div>
			<div class="box"></div>
		</div>
		<div class="article">
			<h3>Toggle Calendar</h3>
            <h4>You can toggle date and get those dates as array.</h4>
            <div class="toggle-calendar"></div>
			<div class="box"></div>
		</div>
		<div class="article">
			<h3>I18N Support</h3>
            <h4>PIGNOSE Calendar supports various languages.</h4>

			<h5>Korean</h5>
            <div class="language-calendar language-ko-calendar" data-lang="ko"></div>

			<h5>Deutsche</h5>
            <div class="language-calendar language-de-calendar" data-lang="de"></div>

			<h5>Chinese</h5>
            <div class="language-calendar language-ch-calendar" data-lang="ch"></div>

			<h5>Supported languages</h5>
			<div class="box box-languages" style="display: block;">
				<span class="label label-primary">en</span>
				<span class="label label-primary">ko</span>
				<span class="label label-primary">fr</span>
				<span class="label label-primary">ch</span>
				<span class="label label-primary">de</span>
				<span class="label label-primary">jp</span>
			</div>
		</div>
        <div class="article">
			<h3>Dependency</h3>
            <h4>This plugin has dependencies some javascript library.</h4>
            <p>Check belows and import it.</p>
            <ul>
                <li>jQuery core library</li>
                <li>Moment library</li>
            </ul>
        </div>
		<div id="content" class="article">
			<h3>Options</h3>
			<table class="table table-striped table-hover">
                <colgroup>
                    <col style="width: 120px;">
                    <col>
                    <col>
                    <col>
                    <col>
                </colgroup>
				<thead>
					<tr>
						<th colspan="2">name</th>
						<th>type</th>
						<th>description</th>
                        <th>default</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td colspan="2">lang</td>
						<td class="center"><span class="label label-primary">string</span></td>
						<td>A language to set to the Calendar.</td>
						<td>en</td>
					</tr>
					<tr>
						<td colspan="2">theme</td>
						<td class="center"><span class="label label-primary">string</span></td>
						<td>A theme to set to the Calendar. (light, dark).</td>
						<td>light</td>
					</tr>
					<tr>
						<td colspan="2">format</td>
						<td class="center"><span class="label label-primary">string</span></td>
						<td>The date format that you want to print to input element by value.</td>
						<td>YYYY-MM-DD</td>
					</tr>
					<tr>
						<td colspan="2">modal</td>
						<td class="center"><span class="label label-primary">boolean</span></td>
						<td>If you want display calendar as modal, You can use by setting modal option to true.</td>
						<td>false</td>
					</tr>
					<tr>
						<td colspan="2">buttons</td>
						<td class="center"><span class="label label-primary">boolean</span></td>
						<td>If you are using input type calendar, You can add button controller for confirm by user.</td>
						<td>false</td>
					</tr>
					<tr>
						<td colspan="2">toggle</td>
						<td class="center"><span class="label label-primary">boolean</span></td>
						<td>If you set true this option, You can use toggle on your Calendar.</td>
						<td>false</td>
					</tr>
					<tr>
						<td colspan="2">multiple</td>
						<td class="center"><span class="label label-primary">boolean</span></td>
						<td>If you set true this option, You can use multiple picker on your Calendar.</td>
						<td>false</td>
					</tr>
					<tr>
						<td colspan="2">select</td>
						<td class="center"><span class="label label-primary">function</span></td>
						<td>This callback will be called when you select a date on calendar (date click).</td>
						<td></td>
					</tr>
					<tr>
						<td colspan="2">apply</td>
						<td class="center"><span class="label label-primary">function</span></td>
						<td>This callback will be called when you apply a date on calendar. (OK button click).</td>
						<td></td>
					</tr>
				</tbody>
			</table>
		</div>
        <div id="content" class="article">
			<h3>Methods</h3>
            <h4>You can use the method like <span class="label label-default">$element.hypermodel('Method Name', arguments);</span> format.</h4>
			<table class="table table-striped table-hover">
				<thead>
					<tr>
						<th>name</th>
						<th>type</th>
						<th>description</th>
					</tr>
				</thead>
				<tbody>
					<tr>
                        <td>set</td>
						<td class="center"><span class="label label-primary">function</span></td>
						<td>You can set specific date that you want for using on calendar, The argument type must be <span class="label label-primary">Options.format</span> type that you gave (default format are YYYY-MM-DD).</td>
					</tr>
					<tr>
                        <td>select</td>
						<td class="center"><span class="label label-primary">function</span></td>
						<td>You can click day by using this method, First argument must be <span class="label label-primary">integer</span> type.</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div id="bower" class="article">
			<h3>bower</h3>
			<blockquote><p>If you use bower.</p></blockquote>
			<pre><code class="language-bash">bower install pg-calendar</code></pre>
		</div>
		<div id="npm" class="article">
			<h3>npm</h3>
			<blockquote><p>If you use npm.</p></blockquote>
			<pre><code class="language-bash">npm install pg-calendar</code></pre>
		</div>
		<div id="sample" class="article">
			<h3>sample</h3>
			<ul class="nav nav-tabs tab">
				<li role="presentation" class="active"><a href="#html" data-toggle="tab" aria-controls="html">HTML</a></li>
				<li role="presentation"><a href="#javascript" data-toggle="tab" aria-controls="javascript">Javascript</a></li>
			</ul>
			<div class="tab-content">
				<div role="tabpanel" class="tab-pane active" id="html">
					<pre><code class="language-markup">&lt;div class=&quot;calendar&quot;&gt;&lt;/div&gt;</code></pre>
				</div>
				<div role="tabpanel" class="tab-pane" id="javascript">
					<pre><code class="language-js">$(function() {
    $('.calendar').pignoseCalendar({
		lang: 'en'
	});
});</code></pre>
				</div>
			</div>
		</div>
	</div>
</body>
</html>
