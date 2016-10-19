<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
    
                <!--test  chart  -->
                <div id="page-wrapper">
	<div id="page-inner">
		<div class="row">
			<div class="col-md-12">
				<h1 class="page-header">
					통계<small>회원 호스팅 예약 관련 통계 자료 </small>
				</h1>
			</div>
		</div>
		<!-- /. ROW  -->
		<div class="row">
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="panel panel-default">
					<div class="panel-heading">2016년 월별 회원 가입 현황</div>
					<div class="panel-body">
					<div id="curve_chart" style="width: 400px; height: 400px"></div>
					<!-- 	<div id="morris-bar-chart"></div> -->
					</div>
				</div>
			</div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="panel panel-default">
					<div class="panel-heading">2016년 월별 회원 및 호스팅 가입,예약 통계</div>
					<div class="panel-body">
						<div id="morris-area-chart"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- /. ROW  -->
		<div class="row">

			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="panel panel-default">
					<div class="panel-heading">연도별 회원 및 호스팅 가입 통계</div>
					<div class="panel-body">
					 <div id="columnchart_material" style="width: 400px; height: 400px;"></div>
					</div>
				</div>
			</div>
			<div class="col-md-6 col-sm-12 col-xs-12">
				<div class="panel panel-default">
					<div class="panel-heading">순수 회원 및 호스팅 회원 통계</div>
					<div class="panel-body">
						<div id="morris-donut-chart"></div>
					</div>
				</div>
			</div>
		</div>
		<!-- /. ROW  -->
		
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, options);
      }
    </script>
  </head>
  
  <head>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data1 = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: 'Company Performance',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

        chart.draw(data1, options);
      }
    </script>
  </head>
  <body>
    <div id="curve_chart" style="width: 900px; height: 500px"></div>
  </body>
