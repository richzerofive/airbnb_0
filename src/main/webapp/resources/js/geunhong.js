var hosting = (function(){
	var _bed_count = 0, _bathroom_count = 0, _max_nights_count = 0, _min_nights_count = 0;
	var init = function(){onCreate();};
	var setContentView = function(){};
	var onCreate = function (){
		setContentView();
		$('#pub_article').on('click','#temp_temp',function(){
			alert('하이하이');
		});
		$('#pub_article').on('click','#temp_temp2',function(){
			alert('하이하이');
		});
		
		
		$('#pub_header').on('click','#hosting_go',function(){
			$('#pub_article').html(hosting_main);
		});
		$('#pub_article').on('click','#hosting_go',function(){
			$('#pub_article').html(hosting_main);
		});
		$('#pub_article').on('click','#hosting_regist_1',function(){
			$('#pub_article').html(hosting_regist_1);
		})
	
		$('#pub_article').on('click','#hosting_regist_2',function(){
			var regist_data_1 = {
					'room_type' : $('#host_room_type option:selected').val(),
					'guest_cnt' : $('#host_guest_cnt option:selected').val(),
					'building_type' : $('#host_building_type option:selected').val()
			};
				$.ajax({
					url : app.context()+'/hosting/regist1',
					type : 'POST',
					data : JSON.stringify(regist_data_1),
					dataType : 'json',
					contentType : 'application/json',
					async : false,
					success : function(data){
						if(data.message === 'success1'){
						$('#pub_article').html(hosting_regist_2);
						}
					},
					error : function(x,s,m){
						alert('regist1시 error 발생 : ' + m);
					}
				});
				
		})
		$('#pub_article').on('click','#host_bed_cnt_plus',function(){
			_bed_count += 1;
			$('#div_host_bed_cnt').html('<input type="text" value="'+_bed_count+'" class="host_regist_count" id="host_bed_cnt">');
		})
		$('#pub_article').on('click','#host_bed_cnt_minus',function(){
			if (_bed_count <= 0) {
				alert('침대의 갯수는 - 가 될 수 없습니다.');
			}else{
				_bed_count -= 1;
				$('#div_host_bed_cnt').html('<input type="text" value="'+_bed_count+'" class="host_regist_count" id="host_bed_cnt">');
			}
			
		})
		$('#pub_article').on('click','#host_bathroom_cnt_plus',function(){
			_bathroom_count += 1;
			$('#div_host_bathroom_cnt').html('<input type="text" value="'+_bathroom_count+'" class="host_regist_count" id="host_bed_cnt">');
		})
		$('#pub_article').on('click','#host_bathroom_cnt_minus',function(){
			if (_bathroom_count <= 0) {
				alert('욕실의 갯수는 - 가 될 수 없습니다.');
			}else{
				_bathroom_count -= 1;
				$('#div_host_bathroom_cnt').html('<input type="text" value="'+_bathroom_count+'" class="host_regist_count" id="host_bed_cnt">');
			}
		})
		$('#pub_article').on('click','#hosting_regist_3',function(){
			var regist_data_2 = {
					'bed_cnt' : $('#host_bed_cnt').val(),
					'bathroom_cnt' : $('#host_bathroom_cnt').val()
			}
			$.ajax({
				url : app.context()+'/hosting/regist2',
				type : 'POST',
				data : JSON.stringify(regist_data_2),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success2') {
						$('#pub_article').html(hosting_regist_3);
					}
				},
				error : function(x,s,m){
					alert('regist2시 error 발생 : ' + m);
				}
			});
		
		})
		$('#pub_article').on('click','#hosting_regist_4',function(){
			var regist_data_3 = {
					country : $('#host_country option:selected').val(),
					state : $('#host_state').val(),
					city : $('#host_city').val(),
					street : $('#host_street').val(),
					optional : $('#host_optional').val(),
					zip_code : $('#host_zip_code').val()
			};
			$.ajax({
				url : app.context()+'/hosting/regist3',
				type : 'POST',
				data : JSON.stringify(regist_data_3),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success3') {
						$('#pub_article').html(hosting_regist_4);
						var map;
						var myCenter = new google.maps.LatLng(37.552615, 126.937665);
							var mapProp = {
								center:myCenter,
								zoom : 13,
								mapTypeId : google.maps.MapTypeId.ROADMAP
							};
							map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
							google.maps.event.addListener(map, 'click', function(event){
								placeMarker(event.latLng);
							});
						function placeMarker(location){
							var marker = new google.maps.Marker({
								position : location,
								map : map,
							});
							var infowindow = new google.maps.InfoWindow({
								content : 'Latitude: ' + location.lat() + '<br>Longitude : ' + location.lng()
							});
							infowindow.open(map,marker);
							$('#hosting_map_lat').prop('value', location.lat());
							$('#hosting_map_long').prop('value', location.lng());
							google.maps.event.addListener(map, 'click', function(event){
								marker.setMap(null);
							});
						}
					}
				},
				error : function(x,s,m){
					alert('regist3시 error 발생 : ' + m);
				}
			});
		})
		$('#pub_article').on('click','#hosting_regist_5',function(){
			var regist_data_4 = {
				'latitude' : $('#hosting_map_lat').val(),
				'longitude' : $('#hosting_map_long').val()
			}
			$.ajax({
				url : app.context()+'/hosting/regist4',
				type : 'POST',
				data : JSON.stringify(regist_data_4),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success4') {
						$('#pub_article').html(hosting_regist_5);
					}
				},
				error : function(x,s,m){
					alert('regist4시 error 발생 : ' + m);
				}
			});
		})
		$('#pub_article').on('click','#hosting_regist_6',function(){
			var convenience =
			(($('#host_convenience_1').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_2').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_3').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_4').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_5').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_6').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_7').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_8').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_9').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_10').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_11').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_12').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_convenience_13').prop('checked') == true)?'T':'F'); 
			var safety_fac = 
			(($('#host_safety_fac_1').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_safety_fac_2').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_safety_fac_3').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_safety_fac_4').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_safety_fac_5').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_safety_fac_6').prop('checked') == true)?'T':'F');		
			var regist_data_5 = {
				'convenience' : convenience,
				'safety_fac' : safety_fac
			};
			$.ajax({
				url : app.context()+'/hosting/regist5',
				type : 'POST',
				data : JSON.stringify(regist_data_5),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success5') {
						$('#pub_article').html(hosting_regist_6);
					}
				},
				error : function(x,s,m){
					alert('regist5시 error 발생 : ' + m);
				}
			});
		})
		$('#pub_article').on('click','#hosting_regist_7',function(){
			var space = 
			(($('#host_space_1').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_2').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_3').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_4').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_5').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_6').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_7').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_space_8').prop('checked') == true)?'T':'F');
			var regist_data_6 = {
				'space' : space
			}
			$.ajax({
				url : app.context()+'/hosting/regist6',
				type : 'POST',
				data : JSON.stringify(regist_data_6),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success6') {
						 $('#pub_article').html(hosting_regist_7);
						 $('#fine-uploader-gallery').fineUploader({
					            template: 'qq-template-gallery',
					            request: {
					                endpoint: '/server/uploads'
					            },
					            thumbnails: {
					                placeholders: {
					                    waitingPath: '/source/placeholders/waiting-generic.png',
					                    notAvailablePath: '/source/placeholders/not_available-generic.png'
					                }
					            },
					            validation: {
					                allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
					            }
					        });
						
					}
				},
				error : function(x,s,m){
					alert('regist6시 error 발생 : ' + m);
				}
			});
		})
		$('#pub_article').on('click','#hosting_regist_8',function(){
			var regist_data_7 = {
				'picture' : $('#host_upload_img').text()
			}
			$.ajax({
				url : app.context()+'/hosting/regist7',
				type : 'POST',
				data : JSON.stringify(regist_data_7),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success7') {
						$('#pub_article').html(hosting_regist_8);
					}
				},
				error : function(x,s,m){
					alert('regist7시 error 발생 : ' + m);
				}
			});
		})
		$('#pub_article').on('click','#hosting_regist_9',function(){
			var regist_data_8 = {
				'explaination' : $('#host_explaination').val()
			}
			$.ajax({
				url : app.context()+'/hosting/regist8',
				type : 'POST',
				data : JSON.stringify(regist_data_8),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success8') {
						$('#pub_article').html(hosting_regist_9);
					}
				},
				error : function(x,s,m){
					alert('regist8시 error 발생 : ' + m);
				}
			});
		})
		$('#pub_article').on('click','#hosting_regist_10',function(){
			var regist_data_9 = {
				title : $('#host_title').val()
			}
			$.ajax({
				url : app.context()+'/hosting/regist9',
				type : 'POST',
				data : JSON.stringify(regist_data_9),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success9') {
						$('#pub_article').html(hosting_regist_10);
					}
				},
				error : function(x,s,m){
					alert('regist9시 error 발생 : ' + m);
				}
			});
		})
		$('#pub_article').on('click','#hosting_regist_11',function(){
			var rules = 
			(($('#host_rules_1').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_rules_2').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_rules_3').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_rules_4').prop('checked') == true)?'T':'F') + '-' + 
			(($('#host_rules_5').prop('checked') == true)?'T':'F');
			
			var regist_data_10 = {
				'rules' : rules,
				'other_rule' : $('#host_other_rule').val()
			}
			
			$.ajax({
				url : app.context()+'/hosting/regist10',
				type : 'POST',
				data : JSON.stringify(regist_data_10),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success10') {
						$('#pub_article').html(hosting_regist_11);

					}
				},
				error : function(x,s,m){
					alert('regist10시 error 발생 : ' + m);
				}
			});
		})
		$('#pub_article').on('click','#hosting_regist_12',function(){
			var regist_data_11 = {
				'checkin_term' : $('#host_checkin_term option:selected').val(),
				'checkin_time' : $('#host_checkin_time option:selected').val()
			}
			$.ajax({
				url : app.context()+'/hosting/regist11',
				type : 'POST',
				data : JSON.stringify(regist_data_11),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success11') {
						$('#pub_article').html(hosting_regist_12);
					}
				},
				error : function(x,s,m){
					alert('regist11시 error 발생 : ' + m);
				}
			});
		})
		$('#pub_article').on('click','#host_min_nights_plus',function(){
			_min_nights_count += 1;
			$('#div_host_min_nights').html('<input type="text" value="'+_min_nights_count+'" class="host_regist_count" id="host_min_nights">');
		})
		$('#pub_article').on('click','#host_min_nights_minus',function(){
			if (_min_nights_count <= 0) {
				alert('최소 숙박일수는 - 가 될 수 없습니다.');
			}else{
				_min_nights_count -= 1;
				$('#div_host_min_nights').html('<input type="text" value="'+_min_nights_count+'" class="host_regist_count" id="host_min_nights">');
			}
		})
		$('#pub_article').on('click','#host_max_nights_plus',function(){
			_max_nights_count += 1;
			$('#div_host_max_nights').html('<input type="text" value="'+_max_nights_count+'" class="host_regist_count" id="host_max_nights">');
		})
		$('#pub_article').on('click','#host_max_nights_minus',function(){
			if (_max_nights_count <= 0) {
				alert('최대 숙박일수는 - 가 될 수 없습니다.');
			}else{
				_max_nights_count -= 1;
				$('#div_host_max_nights').html('<input type="text" value="'+_max_nights_count+'" class="host_regist_count" id="host_max_nights">');
			}
		})
		$('#pub_article').on('click','#hosting_regist_13',function(){
			var regist_data_12 = {
				'min_nights' : $('#host_min_nights').val(),
				'max_nights' : $('#host_max_nights').val()
			}
			$.ajax({
				url : app.context()+'/hosting/regist12',
				type : 'POST',
				data : JSON.stringify(regist_data_12),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success12') {
						$('#pub_article').html(hosting_regist_13);
					}
				},
				error : function(x,s,m){
					alert('regist12시 error 발생 : ' + m);
				}
			});
		})
		$('#pub_article').on('click','#hosting_regist_14',function(){
			var regist_data_13 = {
				'price' : $('#host_price').val()
			}
			$.ajax({
				url : app.context()+'/hosting/regist13',
				type : 'POST',
				data : JSON.stringify(regist_data_13),
				dataType : 'json',
				contentType : 'application/json',
				success : function(data){
					if (data.message === 'success13') {
						alert('등록완료');
					}
				},
				error : function(x,s,m){
					alert('regist13시 error 발생 : ' + m);
				}
			});
		})
		
		$('#pub_article').on('click','#hosting_manage_1',function(){
			$('#pub_article').html(hosting_manage_1)
		})
		$('#pub_article').on('click','#hosting_manage_2',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_2)
			$(function() {
				$('.multi-select-calendar').pignoseCalendar({
					multiple: true,
					select: function(date, obj) {
						obj.calendar.parent().next().show().val(
							(date[0] === null? '':date[0].format('YYYY-MM-DD')) +
							'~' +
							(date[1] === null? '':date[1].format('YYYY-MM-DD')));	
						var block_date = $('#host_calendar_val').val().split("~");
						$('#host_calendar_min').prop('value',block_date[0]);
						$('#host_calendar_max').prop('value',block_date[1]);
					}
				});
			$('#host_manage_submit_2').click(function(){
				var manage_data_2 = {
					'block_date' : $('#host_calendar_min').val() + ',' + $('#host_calendar_max').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage2',
					type : 'POST',
					data : JSON.stringify(manage_data_2),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage2') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage2시 error 발생 : ' + m);
					}
				});
			})
				
			
	/*			$('.toggle-calendar').pignoseCalendar({
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
				});	*/
			});	
		})
		$('#pub_article').on('click','#hosting_manage_3',function(){
			$('#pub_article').html(hosting_manage_menu2)
			$('#host_manage_detail_right1').html(hosting_manage_3)
			$('#host_manage_submit_3').click(function(){
				var manage_data_3 = {
					'price' : $('#host_manage_price').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage3',
					type : 'POST',
					data : JSON.stringify(manage_data_3),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage3') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage3시 error 발생 : ' + m);
					}
				});
			});
		})
		$('#pub_article').on('click','#hosting_manage_4',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_4)
			$('#host_manage_submit_4').click(function(){
				var manage_rules = 
					(($('#host_manage_rules_1').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_rules_2').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_rules_3').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_rules_4').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_rules_5').prop('checked') == true)?'T':'F');
				var manage_data_4 = {
					'rules' : manage_rules,
					'other_rule' : $('#host_manage_other_rule').val()
				}
				
				
				
				$.ajax({
					url : app.context()+'/hosting/manage4',
					type : 'POST',
					data : JSON.stringify(manage_data_4),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage4') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage4시 error 발생 : ' + m);
					}
				});
			});
		})
		$('#pub_article').on('click','#hosting_manage_5',function(){
			$('#pub_article').html(hosting_manage_menu2)
			$('#host_manage_detail_right1').html(hosting_manage_5)
			$('#host_manage_submit_5').click(function(){
				var manage_data_5 = {
					'checkin_time' : $('#host_manage_checkin_time option:selected').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage5',
					type : 'POST',
					data : JSON.stringify(manage_data_5),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage5') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage5시 error 발생 : ' + m);
					}
				});
			});
		})
		$('#pub_article').on('click','#hosting_manage_6',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_6)
		})
		$('#pub_article').on('click','#hosting_manage_7',function(){
			$('#pub_article').html(hosting_manage_menu3)
			$('#host_manage_detail_right1').html(hosting_manage_7)
			$('#host_manage_submit_7').click(function(){
				var manage_data_7 = {
					'building_type' : $('#host_manage_building_type option:selected').val(),
					'room_type' : $('#host_manage_room_type option:selected').val(),
					'guest_cnt' : $('#host_manage_guest_cnt option:selected').val(),
					'bed_cnt' : $('#host_manage_bed_cnt option:selected').val(),
					'bathroom_cnt' : $('#host_manage_bathroom_cnt option:selected').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage7',
					type : 'POST',
					data : JSON.stringify(manage_data_7),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage7') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage7시 error 발생 : ' + m);
					}
				});
			})
			

		})
		$('#pub_article').on('click','#hosting_manage_8',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_8)
			$('#host_manage_submit_8').click(function(){
				var manage_data_8 = {
					'title' : $('#host_manage_title').val(),
					'explaination' : $('#host_manage_explaination').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage8',
					type : 'POST',
					data : JSON.stringify(manage_data_8),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage8') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage8시 error 발생 : ' + m);
					}
				});
			})
		})
		$('#pub_article').on('click','#hosting_manage_9',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_9)
			var map;
			var myCenter = new google.maps.LatLng(37.552615, 126.937665);
				var mapProp = {
					center:myCenter,
					zoom : 13,
					mapTypeId : google.maps.MapTypeId.ROADMAP
				};
				map = new google.maps.Map(document.getElementById("googleMap_manage"),mapProp);
				google.maps.event.addListener(map, 'click', function(event){
					placeMarker(event.latLng);
				});
			function placeMarker(location){
				var marker = new google.maps.Marker({
					position : location,
					map : map,
				});
				var infowindow = new google.maps.InfoWindow({
					content : 'Latitude: ' + location.lat() + '<br>Longitude : ' + location.lng()
				});
				infowindow.open(map,marker);
				$('#hosting_manage_map_lat').prop('value', location.lat());
				$('#hosting_manage_map_long').prop('value', location.lng());
				google.maps.event.addListener(map, 'click', function(event){
					marker.setMap(null);
				});
			}

			$('#host_manage_submit_9').click(function(){
				var manage_data_9 = {
					'latitude' : $('#hosting_manage_map_lat').val(),
					'longitude' : $('#hosting_manage_map_long').val()
				}
				$.ajax({
					url : app.context()+'/hosting/manage9',
					type : 'POST',
					data : JSON.stringify(manage_data_9),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage9') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage9시 error 발생 : ' + m);
					}
				});
			});	
		})
		$('#pub_article').on('click','#hosting_manage_10',function(){
			$('#pub_article').html(hosting_manage_menu4)
			$('#host_manage_detail_right1').html(hosting_manage_10)
			$('#host_manage_submit_10').click(function(){
				var convenience = 
				(($('#host_manage_convenience_1').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_2').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_3').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_4').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_5').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_6').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_7').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_8').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_9').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_10').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_11').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_12').prop('checked') == true)?'T':'F') + '-' + 
				(($('#host_manage_convenience_13').prop('checked') == true)?'T':'F');
				var manage_data_10 = {
					'convenience' : convenience
				}
				$.ajax({
					url : app.context()+'/hosting/manage10',
					type : 'POST',
					data : JSON.stringify(manage_data_10),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage10') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage10시 error 발생 : ' + m);
					}
				});
			})
			
		})
		$('#pub_article').on('click','#hosting_manage_11',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_11)
			$('#fine-uploader-gallery_manage').fineUploader({
		            template: 'qq-template-gallery',
		            request: {
		                endpoint: '/server/uploads'
		            },
		            thumbnails: {
		                placeholders: {
		                    waitingPath: '/source/placeholders/waiting-generic.png',
		                    notAvailablePath: '/source/placeholders/not_available-generic.png'
		                }
		            },
		            validation: {
		                allowedExtensions: ['jpeg', 'jpg', 'gif', 'png']
		            }
		        });
			$('#host_manage_submit_11').click(function(){
				var manage_data_11 = {
					'picture' : $('#host_upload_img').text()
				}
				$.ajax({
					url : app.context()+'/hosting/manage11',
					type : 'POST',
					data : JSON.stringify(manage_data_11),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage11') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage11시 error 발생 : ' + m);
					}
				});
			})
			
			
		})
		$('#pub_article').on('click','#hosting_manage_12',function(){
			$('#pub_article').html(hosting_manage_menu)
			$('#host_manage_detail_right1').html(hosting_manage_12)
			$('#host_manage_submit_12').click(function(){
				var safety_fac = 
					(($('#host_manage_safety_fac_1').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_safety_fac_2').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_safety_fac_3').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_safety_fac_4').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_safety_fac_5').prop('checked') == true)?'T':'F') + '-' + 
					(($('#host_manage_safety_fac_6').prop('checked') == true)?'T':'F');
				var manage_data_12 = {
					'safety_fac' : safety_fac
				}
				$.ajax({
					url : app.context()+'/hosting/manage12',
					type : 'POST',
					data : JSON.stringify(manage_data_12),
					dataType : 'json',
					contentType : 'application/json',
					success : function(data){
						if (data.message === 'manage12') {
							alert('수정완료');
						}
					},
					error : function(x,s,m){
						alert('manage12시 error 발생 : ' + m);
					}
				});
			})
		})
	};
	return {
		init : init, _bed_count : _bed_count, _bathroom_count : _bathroom_count, 
		_max_nights_count : _max_nights_count, _min_nights_count : _min_nights_count
	};
})();
var hosting_main = 
'<div id="host_main_top_pic"><br/>'
+'<div id="host_main_top1">'
+'<div id="host_main_top2">'
+'<h1 style="color:white;"><b><br>에어비앤비<br>호스트가 되어<br>부수입을<br>올리세요.</b><br><br></h1>'
+'<h4 style="color:white;">집 수리비를 모으고 꿈에 그리던 <br>여행을 떠나는 등 호스팅 부수입으로 <br>꿈을 이루세요.</h4><br><br>'
+'<input type="button" value="호스팅 시작하기" class="btn btn-danger" id="hosting_regist_1">'
+'<input type="button" value="호스팅 관리하기(임시버튼)" class="btn btn-danger" id="hosting_manage_1"><br><br><br>'
+'</div>'
+'</div>'
+'<br/>'
+'</div>'
+'<div id="host_main_way1">'
+'<h4 style="text-align:center; color: grey;">호스팅 방법</h4>'
+'<div id="host_main_way2">'
+'<h2>①</h2><br>'
+'<h2><b>호스트로 등록</b></h2><br>'
+'<h5>숙소 등록부터 시작해 보세요. 숙소에 대한 프로필을 작성하는 것과 같습니다.</h5><br>'
+'<div id="host_main_way3">'
+'<i class="icon icon-home icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$0.3:$0.$0.0.0"></i><br>'
+'<h2>숙소 페이지에 필요한 정보</h2><br>'
+'<h5>숙소 설명을 입력하고, 사진을 찍어 업로드하고, 가격을 설정하세요. 게스트는 숙소 정보를 보고 회원님의 숙소에 대해 파악할 수 있습니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-group icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".245ywa29log.4.0.1:$0.3:$0.$1.0.0"></i><br>'
+'<h2>이용 가능 게스트 요건</h2><br><br>'
+'<h5>예약 가능 여부 및 숙소 이용 규칙을 설정하세요. 호스트 설정 및 달력 설정 기능을 통해 호스팅을 보다 쉽게 할 수 있습니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-handshake icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".245ywa29log.4.0.1:$0.3:$1.$0.0.0"></i><br>'
+'<h2>에어비앤비가 도와드려요</h2><br>'
+'<h5>숙소 준비부터 요금 선택, 현지 법에 따른 의무에 대한 이해까지 각 단계마다 필요한 도구와 정보를 제공해 드려요.</h5>'
+'</div>'
+'</div>'
+'</div>'
+'<div id="host_main_way1">'
+'<div id="host_main_way2">'
+'<h2>②</h2><br>'
+'<h2><b>숙소 검색 및 예약</b></h2>'
+'<h5>예약 확인과 함께 게스트의 메시지를 받게 됩니다.</h5><br>'
+'<div id="host_main_way3">'
+'<i class="icon icon-comment icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$1.3:$0.$0.0.0"></i><br>'
+'<h2>게스트에게 메시지 보내기</h2><br>'
+'<h5>온라인이나 앱을 통해 메시지를 보내 게스트에 대해 알아가고 질문에 답할 수 있습니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-suitcase icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$1.3:$0.$1.0.0"></i><br>'
+'<h2>체크인 계획</h2><br><br>'
+'<h5>호스트에 따라 게스트를 직접 만나 열쇠를 전달하기도 하고, 출입문 비밀번호를 전달하기도 합니다. 회원님께 편리한 방법을 선택하세요.</h5>'
+'</div>'
+'</div>'
+'</div>'
+'<div id="host_main_way1">'
+'<div id="host_main_way2">'
+'<h2>③</h2><br>'
+'<h2><b>게스트 맞이하기</b></h2>'
+'<h5>아침을 제공하는 호스트도 있고, 보다 자유로운 방식을 선호하는 호스트도 있습니다. 호스팅 방식은 전적으로 회원님이 결정할 수 있습니다.</h5><br>'
+'<div id="host_main_way3">'
+'<i class="icon icon-essentials icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$2.3:$0.$0.0.0"></i><br>'
+'<h2>기본적인 준비</h2><br>'
+'<h5>대부분의 호스트는 게스트가 사용할 수 있는 모든 공간을 청소하고 깨끗한 침대 시트, 수건, 화장지와 같은 필수품목을 제공합니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-id-card-back icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$2.3:$0.$1.0.0"></i><br>'
+'<h2>게스트의 숙박 결제</h2><br>'
+'<h5>에어비앤비가 결제에 관한 모든 부분을 처리하니 회원님이 직접 관여하실 부분은 없습니다. 게스트는 체크인 전에 요금을 납부합니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-money-deposit icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$2.3:$1.$0.0.0"></i><br>'
+'<h2>대금 수령 방법</h2><br>'
+'<h5>페이팔, 계좌 입금, 해외 송금 중에서 대금 수령 방법을 선택하실 수 있습니다. 대금은 게스트가 체크인하고 24시간 후에 자동으로 입금됩니다. 간단하죠?</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-tag icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$2.3:$1.$1.0.0"></i><br>'
+'<h2>수입과 수수료</h2><br>'
+'<h5>에어비앤비에 숙소를 등록하는 것은 무료입니다. 에어비앤비는 모든 예약에 3%의 호스트 서비스 수수료를 부과합니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-filter icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.4.0.1:$2.3:$2.$0.0.0"></i><br>'
+'<h2>요금 설정</h2><br>'
+'<h5>요금은 회원님이 결정합니다. 숙소를 등록하면 비슷한 숙소의 요금과 여행 트렌드를 고려하여 요금을 제안해 주는 도구를 이용할 수 있습니다.</h5>'
+'</div>'
+'</div>'
+'</div>'
+'<div id="host_main_way1" style="margin-top:20%;">'
+'<div id="host_main_way2">'
+'<h2>④</h2><br>'
+'<h2><b>안심하세요</b></h2>'
+'<h5>에어비앤비가 회원님과 회원님의 집을 보호하기 위한 계획을 미리 세워두었습니다.</h5><br>'
+'<div id="host_main_way3">'
+'<i class="icon icon-host-guarantee icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.5.0.2:$0.$0.0.0"></i><br>'
+'<h2>₩1,000,000,000 호스트 보호 프로그램</h2><br>'
+'<h5>호스트 보호 프로그램은 사고로 회원님의 집이나 물건에 피해가 발생할 경우에 대비해 회원님을 보호해주는 프로그램입니다. 에어비앤비에 숙소가 등록된 모든 호스트는 추가 비용 없이 보장을 받을 수 있습니다. 별도의 절차 없이 자동으로 가입됩니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-ok-alt icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.5.0.2:$0.$1.0.0"></i><br>'
+'<h2>신뢰를 기초로 하는 에어비앤비</h2><br>'
+'<h5>전화번호를 포함한 게스트와 호스트 양측의 정보를 인증하였습니다. 여행 후에는 게스트와 호스트 모두 서로에 대해 후기를 남기도록 되어 있습니다. 게스트도 후기를 통해 평가를 받으므로 호스트와 숙소를 존중하여 대하게 됩니다.</h5>'
+'</div>'
+'<div id="host_main_way3">'
+'<i class="icon icon-lifesaver icon-size-2 text-babu space-top-4 info-item__icon" data-reactid=".137i0fe8jr4.5.0.2:$1.$0.0.0"></i><br>'
+'<h2>수입 이상의 가치</h2><br>'
+'<h5>호스트는 부수입을 버는 것뿐만 아니라 글로벌 커뮤니티의 일원이 되어 도움을 받을 수 있습니다. 에어비앤비와 다른 호스트에게 배울 수 있는 기회가 언제든 열려 있습니다.</h5>'
+'</div>'
+'</div>'
+'</div>'
+'<div id="host_main_media1">'
+'<div id="host_main_media2">'
+'<h1 style="color:white; text-align:center;"><b>호스트가 들려주는 호스팅의 매력<br><br></b></h1>'
+'<h1 style="color:white; text-align:center;"><a href="#">▶</a></h1>'
+'</div>'
+'</div>'
+'<div id="host_main_bottom1">'
+'<div id="host_main_bottom2">'
+'<h1 style="color:white;"><b>게스트를 맞이해 보세요!</b></h1><br>'
+'<input type="button" value="호스팅 시작하기" class="btn btn-danger" id="hosting_regist_1">'
+'<img src="https://a0.muscache.com/airbnb/static/slash_host/hand_key-601456c51410ba5705dfef7c047bfe4f.png" alt="" style="float:right" />'
+'</div>'
+'</div>';
var hosting_regist_1 = 
'<div id="host_regist_div_page_1">'
+'<div id="host_regist_div_left1">'
+'<div id="host_regist_div_left4">'
+'<h1>호스트가 될 준비를 시작해보세요.</h1><br>'
+'<h6 style="color:grey">1단계</h6><br>'
+'<h3>회원님의 숙소 유형은 무엇인가요?</h3><br>'	
+'<select class="host_regist_select1" id="host_room_type">'
+'<option selected="selected" value="집전체">집 전체</option>'
+'<option value="개인실">개인실</option>'
+'<option value="다인실">다인실</option>'
+'</select><br>'
+'<select class="host_regist_select1" id="host_guest_cnt">'
+'<option selected="selected" value="1">게스트  1명</option>'
+'<option value="2">게스트  2명</option>'
+'<option value="3">게스트  3명</option>'
+'<option value="4">게스트  4명</option>'
+'<option value="5">게스트  5명</option>'
+'<option value="6">게스트  6명</option>'
+'<option value="7">게스트  7명</option>'
+'<option value="8">게스트  8명</option>'
+'<option value="9">게스트  9명</option>'
+'<option value="10">게스트  10명</option>'
+'<option value="11">게스트  11명</option>'
+'<option value="12">게스트  12명</option>'
+'<option value="13">게스트  13명</option>'
+'<option value="14">게스트  14명</option>'
+'<option value="15">게스트  15명</option>'
+'<option value="16">게스트  16명 + </option>'
+'</select><br><br>'
+'<h3>숙소의 건물 유형을 알려주세요.</h3><br>'
+'<select class="host_regist_select1" id="host_building_type">'
+'<option selected="selected" value="temp">하나를 선택해주세요.</option>'
+'<option value="temp2">하나를 선택해주세요.</option>'
+'</select><br><br><hr>'
+'<a href="#" id="hosting_go"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_2"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right1">'
+'<img src="https://github.com/richzerofive/airbnb_0/blob/geunhong/src/main/webapp/resources/img/hosting/host_regist_1.jpg?raw=true" alt="" style="margin-top:8%; margin-left:10%;"/>'
+'</div>'
+'</div>';
var hosting_regist_2 =
'<div id="host_regist_div_page_2">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>숙소에 침대의 갯수는 몇 개인가요?</h2><br>'
+'<div id="div_host_bed_cnt"><input type="text" value="'+hosting._bed_count+'" placeholder="침대 갯수" class="host_regist_count" id="host_bed_cnt"></div>'
+'<input type="button" value="+" class="btn btn-default host_regist_cal" id="host_bed_cnt_plus"><input type="button" value="-" class="btn btn-default host_regist_cal" id="host_bed_cnt_minus"><br><br><br><br><br>'
+'<h2>욕실은 몇 개인가요?</h2><br>'
+'<div id="div_host_bathroom_cnt"><input type="text" value="'+hosting._bathroom_count+'" placeholder="욕실 갯수" class="host_regist_count" id="host_bathroom_cnt"></div>'
+'<input type="button" value="+" class="btn btn-default host_regist_cal" id="host_bathroom_cnt_plus"><input type="button" value="-" class="btn btn-default host_regist_cal" id="host_bathroom_cnt_minus"><br>'
+'<br><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_1"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_3"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_2">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>회원님 숙소의 침대 수와 종류에 따라 몇 명의 인원이 불편함 없이 머물 수 있는지가 결정됩니다.</h5>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_3 = 
'<div id="host_regist_div_page_3">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>숙소의 위치를 알려주세요.</h2><br>'
+'<h4>국가</h4>'
+'<select class="host_regist_select1" id="host_country">'
+'<option selected="selected" value="한국">한국</option>'
+'<option value="미국">미국</option>'
+'</select><br><br>'
+'<div style="float:left; width:50%;">'
+'<h4>도시</h4>'
+'<input type="text" value="서울특별시" class="host_regist_count2" id="host_state">'
+'</div>'
+'<div style="float:left; width:50%;">'
+'<h4>시 / 군</h4>'
+'<input type="text" value="" placeholder="예) 강남구" class="host_regist_count2" id="host_city">'
+'</div><br><br><br><br><br>'
+'<h4>도로명 / 건물번호 / 아파트 이름 / 건물 이름</h4>'
+'<input type="text" placeholder="예) 언주로 406" class="host_regist_count2" id="host_street"><br><br><br>'
+'<h4>빌딩 번호, 빌딩/아파트 이름(및 호실)</h4>'
+'<input type="text" placeholder="예) 35동 4층 407호" class="host_regist_count2" id="host_optional"><br><br><br>'
+'<h4>우편번호</h4>'
+'<input type="text" placeholder="예) 135-919" class="host_regist_count2" id="host_zip_code"><br><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_2"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_4"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_3">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>정확한 주소는 예약이 확정된 게스트에게만 공개됩니다.</h5><br>'
+'<img src="https://a2.muscache.com/airbnb/static/list_your_space/tip-address-3a85eca55833a5cee81d0c8df157d89d.png" alt="" />'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_4 = 
'<div id="host_regist_div_page_4">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>숙소의 위치를 알려주세요.</h2><br>'
+'<div id="googleMap" style="width:100%; height:380px;"></div>'
+'<br><br>'
+'<h4 style="color:grey;">위치를 변경하려면 핀을 드래그하세요.</h4><br><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_3"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_5"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'<input type="hidden" id="hosting_map_lat">'
+'<input type="hidden" id="hosting_map_long">'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_4">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>정확한 주소는 예약이 확정된 게스트에게만 공개됩니다.</h5><br>'
+'<img src="https://a2.muscache.com/airbnb/static/list_your_space/tip-address-3a85eca55833a5cee81d0c8df157d89d.png" alt="" />'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_5 = 
'<div id="host_regist_div_page_5">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>어떤 편의시설을 제공하시나요?</h2><br>'
+'<form id="host_convenience">'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_1"><span class="host_regist_input_text">필수 품목</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_2"><span class="host_regist_input_text">무선인터넷</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_3"><span class="host_regist_input_text">샴푸</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_4"><span class="host_regist_input_text">옷장/서랍장</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_5"><span class="host_regist_input_text">TV</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_6"><span class="host_regist_input_text">난방</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_7"><span class="host_regist_input_text">에어컨</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_8"><span class="host_regist_input_text">조식,커피,차</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_9"><span class="host_regist_input_text">책상/작업공간</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_10"><span class="host_regist_input_text">벽난로</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_11"><span class="host_regist_input_text">다리미</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_12"><span class="host_regist_input_text">헤어 드라이기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_convenience_13"><span class="host_regist_input_text">집에서 키우는 반려동물</span><br><br>'
+'</form>'
+'<h2>안전시설</h2><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_1"><span class="host_regist_input_text">연기 감지기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_2"><span class="host_regist_input_text">일산화탄소 감지기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_3"><span class="host_regist_input_text">구급상자</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_4"><span class="host_regist_input_text">안전 카드</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_5"><span class="host_regist_input_text">소화기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_safety_fac_6"><span class="host_regist_input_text">침실에 잠금장치 있음</span><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_4"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_6"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_5">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>필수품목을 제공하면 게스트가 내 집처럼 편안하게 머물 수 있습니다.<br><br>'
+'일부 호스트는 조식 또는 커피와 차만 제공하기도 합니다. 필수 사항은 아니지만,'
+'이런 서비스를 제공하면 게스트가 보다 환영받는다고 느낄 수 있습니다.</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_6 =
'<div id="host_regist_div_page_6">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>게스트가 어떤 공간을 사용할 수 있나요?</h2><br>'	
+'<input type="checkbox" class="host_regist_input_box" id="host_space_1"><span class="host_regist_input_text">부엌</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_2"><span class="host_regist_input_text">빨래 - 세탁기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_3"><span class="host_regist_input_text">빨래 - 건조기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_4"><span class="host_regist_input_text">주차</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_5"><span class="host_regist_input_text">엘리베이터</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_6"><span class="host_regist_input_text">수영장</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_7"><span class="host_regist_input_text">자쿠지 욕조</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_space_8"><span class="host_regist_input_text">헬스장</span><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_5"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_7"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_6">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>호스팅하는 공간은 집 안에 있어야 합니다. 집의 일부가 아닌 빨래방이나 주변 시설은 포함하지 마세요. 이웃이 동의하면 수영장이나 자쿠지 등의 단지 공유 시설을 포함할 수 있습니다.</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_7 = 
'<div id="host_regist_div_page_7">'
+'<div id="host_regist_div_left5" style="height:1000px;"></div>'
+'<div id="host_regist_div_center1">'
+'<div id="host_regist_div_center2">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" style="float:right"/>'
+'<h3>사진</h3><br><br><div id="fine-uploader-gallery"></div><br><br>'
+'<input type="hidden" id="hosting_image_value">'
+'<hr>'
+'<a href="#" id="hosting_regist_6"><input type="button" value="뒤로" class="btn btn-info host_regist_prev2"></a>'
+'<a href="#" id="hosting_regist_8"><input type="button" value="다음" class="btn btn-danger host_regist_next2"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right5">&nbsp;</div>'
+'</div>';
var hosting_regist_8 = 
'<div id="host_regist_div_page_8">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>숙소 설명을 작성하세요</h2><br>'
+'<input type="text" placeholder="숙소에서 가까운 곳" class="host_regist_count3" id="host_explaination"><br><br><br><br><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_7"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_9"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_8">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>여기에 작성한 설명이 숙소 페이지 맨 위에 표시됩니다.'
+'게스트가 숙소를 검색할 때 일반적으로 궁금해 하는 질문 몇 가지를 제시해 보았습니다.' 
+'내용은 나중에 수정하거나 추가하실 수 있습니다.</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_9 =
'<div id="host_regist_div_page_9">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>이름 지정</h2><br>'
+'<input type="text" placeholder="숙소 제목" class="host_regist_count2" id="host_title"><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_8"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_10"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_9">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right6">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>주변 숙소의 몇 가지 예를 보여드립니다.</h5><br>'
+'<div style="float:left; width:50%; margin-top:-7%">'
+'<img src="https://a2.muscache.com/im/pictures/47535740/2697a4de_original.jpg" alt="" style="width:100%; height:100;" /><br><br><br>'
+'<img src="https://a2.muscache.com/im/pictures/b3d17cb0-6905-4242-a107-46ed053d3996.jpg" alt="" style="width:100%; height:100%; margin-top:-12%"/><br><br><br>'
+'<img src="https://a2.muscache.com/im/pictures/8ce7437a-a577-4d38-93a7-e164b813e81d.jpg" alt="" style="width:100%; height:70px; margin-top:-7%"/><br><br><br>'
+'</div>'
+'<div style="float:right; width:50%; margin-top:-7%">'
+'<h5>고급 스튜디오를 최저가에 @강남역 최고의 위치!!</h5><br>'
+'<h5>English/中文OK! 1min to subway 3-room huge apartment</h5><br>'
+'<h5>[Myeongdong] #003 Jongno Hans house</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_10 =
'<div id="host_regist_div_page_10">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>게스트가 지켜야 할 숙소 이용규칙을 정하세요</h2><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_rules_1"><span class="host_regist_input_text">어린이(2~12세) 숙박에 적합함</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_rules_2"><span class="host_regist_input_text">유아(2세 미만) 숙박에 적합함 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_rules_3"><span class="host_regist_input_text">반려동물 동반에 적합함 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_rules_4"><span class="host_regist_input_text">흡연 가능 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_rules_5"><span class="host_regist_input_text">행사나 파티 허용 </span><br><br>'
+'<h2>기타 규칙 추가하기</h2><br>'
+'<input type="text" placeholder="그 밖에 게스트가 알아두어야 하는 사항" class="host_regist_count2" id="host_other_rule">'
+'<hr>'
+'<a href="#" id="hosting_regist_9"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_11"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_10">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>에어비앤비의 필수 요건을 충족하고 숙소 이용규칙에 동의해야 숙소를 예약할 수 있습니다.'
+'즉시 예약으로 숙소를 예약한 게스트가 숙박 전이나 도중에 숙소 이용규칙을 어기면 페널티 없이 예약을 취소할 수 있습니다.</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_11 =
'<div id="host_regist_div_page_11">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>얼마나 먼 날짜까지 예약할 수 있나요?</h2><br>'
+'<select class="host_regist_select1" id="host_checkin_term">'
+'<option selected="selected" value="all">항상</option>'
+'<option value="3">3달</option>'
+'<option value="6">6달</option>'
+'<option value="12">1년</option>'
+'<option value="interception">기본적으로 예약 차단</option>'
+'</select><br><br>'
+'<h5 style="color: grey;">팁: 호스트 대부분은 최대 6개월간의 달력을 업데이트합니다.</h5><br><br>'
+'<h2>몇 시까지 체크인이 가능한가요?</h2><br>'
+'<select lclass="host_regist_select1" id="host_checkin_time">'
+'<option selected="selected" value="00:00">00:00</option>'
+'<option value="01:00">01:00</option>'
+'<option value="02:00">02:00</option>'
+'<option value="03:00">03:00</option>'
+'<option value="04:00">04:00</option>'
+'</select><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_10"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_12"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_11">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>temp</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_12 = 
'<div id="host_regist_div_page_12">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>게스트가 얼마 동안 숙박할 수 있나요?</h2><br>'
+'<br><br>'
+'<div id="div_host_min_nights"><input type="text" value="'+hosting._min_nights_count+'" class="host_regist_count" id="host_min_nights"></div>'
+'<input type="button" value="+" class="btn btn-default host_regist_cal" id="host_min_nights_plus"><input type="button" value="-" class="btn btn-default host_regist_cal" id="host_min_nights_minus"><br><br><br>'
+'<div id="div_host_max_nights"><input type="text" value="'+hosting._max_nights_count+'" class="host_regist_count" id="host_max_nights"></div>'
+'<input type="button" value="+" class="btn btn-default host_regist_cal" id="host_max_nights_plus"><input type="button" value="-" class="btn btn-default host_regist_cal" id="host_max_nights_minus"><br><br><br><br><br>'
+'<h5 style="color: grey;">팁: 숙박 기간이 짧으면 예약을 더 많이 받을 수 있지만, 그만큼 예약을 자주 받아야 합니다.</h5><br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_11"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_13"><input type="button" value="다음" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_12">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>temp</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_regist_13 =
'<div id="host_regist_div_page_13">'
+'<div id="host_regist_div_left3">'
+'<div id="host_regist_div_left4">'
+'<h2>기본 요금</h2><br>'
+'<h5 style="color: grey;">기본 요금은 회원님이 정한 기본 1박당 요금입니다.</h5><br><br>'
+'<h6>기본 요금</h6>'
+'<input type="text" placeholder="￦ / 박" class="host_regist_count2" id="host_price">'
+'<br><br>'
+'<hr>'
+'<a href="#" id="hosting_regist_12"><input type="button" value="뒤로" class="btn btn-info host_regist_prev"></a>'
+'<a href="#" id="hosting_regist_14"><input type="button" value="완료" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_regist_div_right_13">'
+'<div id="host_regist_div_right3">'
+'<div id="host_regist_div_right4">'
+'<img src="https://a0.muscache.com/airbnb/static/list_your_space/tip-icon-73f3ef1d10a9545bfd15fd266803da48.png" alt="" /><br><br>'
+'<h5>temp</h5><br>'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_manage_1 = 
'<div id="host_manage_div_page_1">'
+'<div id="host_manage_div_left1">'
+'<div id="host_manage_div_left2">'
+'<h4><b>숙소 목록</b></h4><br>'
+'<h4>예약 관리</h4>'
+'<h4>예약 필수 조건</h4><br>'
+'<input type="button" value="새로운 숙소 추가" class="btn btn-primary">'
+'</div>'
+'</div>'
+'<div id="host_manage_div_right1">'
+'<div id="host_manage_div_right2">'
+'<h6 style="padding-left:3%;">운영 중</h6>'
+'</div>'
+'<div id="host_manage_div_right3">'
+'<div id="host_manage_div_right4">'
+'사진'
+'</div>'
+'<div id="host_manage_div_right5">'
+'<h6><b>숙소 타이틀</b></h6><br>'
+'<h6>숙소 주소</h6>'
+'<h6>최종 업데이트 : 2016년 10월 11일</h6><br>'
+'<input type="button" value="달력 관리 및 설정" class="btn btn-default" id="hosting_manage_2">'
+'<input type="button" value="미리보기" class="btn btn-default">'
+'</div>'
+'</div>'
+'</div>'
+'</div>';
var hosting_manage_menu = 
'<div id="host_manage_div_page_2">'
+'<div id="host_manage_detail_left1">'
+'<h4>호스팅</h4>'
+'<h5><a href="#" id="hosting_manage_2">달력</a></h5>'
+'<h5><a href="#" id="hosting_manage_3">요금 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_4">예약</a></h5>'
+'<h5><a href="#" id="hosting_manage_5">체크인</a></h5>'
+'<h5><a href="#" id="hosting_manage_6">예약취소내역</a></h5><br>'
+'<h4>숙소</h4>'
+'<h5><a href="#" id="hosting_manage_7">기본 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_8">설명</a></h5>'
+'<h5><a href="#" id="hosting_manage_9">위치</a></h5>'
+'<h5><a href="#" id="hosting_manage_10">편의시설</a></h5>'
+'<h5><a href="#" id="hosting_manage_11">사진</a></h5>'
+'<h5><a href="#" id="hosting_manage_12">숙소 안전</a></h5><br>'
+'<h4>게스트 자료</h4>'
+'<h5><a href="#">가이드북</a></h5><br>'	
+'</div>'
+'<div id="host_manage_detail_right1">';
var hosting_manage_menu2 = 
'<div id="host_manage_div_page_3">'
+'<div id="host_manage_detail_left1">'
+'<h4>호스팅</h4>'
+'<h5><a href="#" id="hosting_manage_2">달력</a></h5>'
+'<h5><a href="#" id="hosting_manage_3">요금 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_4">예약</a></h5>'
+'<h5><a href="#" id="hosting_manage_5">체크인</a></h5>'
+'<h5><a href="#" id="hosting_manage_6">예약취소내역</a></h5><br>'
+'<h4>숙소</h4>'
+'<h5><a href="#" id="hosting_manage_7">기본 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_8">설명</a></h5>'
+'<h5><a href="#" id="hosting_manage_9">위치</a></h5>'
+'<h5><a href="#" id="hosting_manage_10">편의시설</a></h5>'
+'<h5><a href="#" id="hosting_manage_11">사진</a></h5>'
+'<h5><a href="#" id="hosting_manage_12">숙소 안전</a></h5><br>'
+'<h4>게스트 자료</h4>'
+'<h5><a href="#">가이드북</a></h5><br>'	
+'</div>'
+'<div id="host_manage_detail_right1">';
var hosting_manage_menu3 = 
'<div id="host_manage_div_page_4">'
+'<div id="host_manage_detail_left1_3">'
+'<h4>호스팅</h4>'
+'<h5><a href="#" id="hosting_manage_2">달력</a></h5>'
+'<h5><a href="#" id="hosting_manage_3">요금 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_4">예약</a></h5>'
+'<h5><a href="#" id="hosting_manage_5">체크인</a></h5>'
+'<h5><a href="#" id="hosting_manage_6">예약취소내역</a></h5><br>'
+'<h4>숙소</h4>'
+'<h5><a href="#" id="hosting_manage_7">기본 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_8">설명</a></h5>'
+'<h5><a href="#" id="hosting_manage_9">위치</a></h5>'
+'<h5><a href="#" id="hosting_manage_10">편의시설</a></h5>'
+'<h5><a href="#" id="hosting_manage_11">사진</a></h5>'
+'<h5><a href="#" id="hosting_manage_12">숙소 안전</a></h5><br>'
+'<h4>게스트 자료</h4>'
+'<h5><a href="#">가이드북</a></h5><br>'	
+'</div>'
+'<div id="host_manage_detail_right1">';
var hosting_manage_menu4 = 
'<div id="host_manage_div_page_5">'
+'<div id="host_manage_detail_left1_4">'
+'<h4>호스팅</h4>'
+'<h5><a href="#" id="hosting_manage_2">달력</a></h5>'
+'<h5><a href="#" id="hosting_manage_3">요금 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_4">예약</a></h5>'
+'<h5><a href="#" id="hosting_manage_5">체크인</a></h5>'
+'<h5><a href="#" id="hosting_manage_6">예약취소내역</a></h5><br>'
+'<h4>숙소</h4>'
+'<h5><a href="#" id="hosting_manage_7">기본 설정</a></h5>'
+'<h5><a href="#" id="hosting_manage_8">설명</a></h5>'
+'<h5><a href="#" id="hosting_manage_9">위치</a></h5>'
+'<h5><a href="#" id="hosting_manage_10">편의시설</a></h5>'
+'<h5><a href="#" id="hosting_manage_11">사진</a></h5>'
+'<h5><a href="#" id="hosting_manage_12">숙소 안전</a></h5><br>'
+'<h4>게스트 자료</h4>'
+'<h5><a href="#">가이드북</a></h5><br>'	
+'</div>'
+'<div id="host_manage_detail_right1">';
var hosting_manage_2 =
'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<div id="wrapper">'
+'<h2><b>예약 불가능일자 설정</b></h2>'
+'<h6>호스트가 원하는 날짜는 예약할 수 없도록 설정할 수 있습니다.</h6><br><hr>'
+'<div class="multi-select-calendar"></div>'
+'<div class="box" id="host_calendar_val"></div>'
+'</div>'
+'<hr><a href="#" id="host_manage_submit_2"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_1">'
+'<div id="host_manage_detail_right4">'
+'<h4><b>예약 불가능일자 설정</b></h4><br>'
+'<h5>시작일자</h5>'
+'<input type="text" id="host_calendar_min">'
+'<h5>종료일자</h5>'
+'<input type="text" id="host_calendar_max"><br>'
+'</div>'
+'</div>'
+'</div>';
var hosting_manage_3 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>요금 설정</b></h2>'
+'<h6>호스트가 원하는 요금을 설정할 수 있습니다.</h6><br><hr>'
+'<input type="text" placeholder="￦ / 박" class="host_regist_count2" id="host_manage_price">'
+'<hr><a href="#" id="host_manage_submit_3"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_4 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>숙소 이용규칙</b></h2>'
+'<h6>특정 유형의 예약을 허용하거나 제한하세요. 회원님이 정한 규칙에 동의한 게스트만 예약할 수 있습니다.'
+'&nbsp;<a href="#">더 알아보기</a></h6><br><hr>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_rules_1"><span class="host_regist_input_text">어린이(2~12세) 숙박에 적합함</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_rules_2"><span class="host_regist_input_text">유아(2세 미만) 숙박에 적합함 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_rules_3"><span class="host_regist_input_text">반려동물 동반에 적합함 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_rules_4"><span class="host_regist_input_text">흡연 가능 </span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_rules_5"><span class="host_regist_input_text">행사나 파티 허용 </span><br><br>'
+'<h2>추가규칙</h2><br>'
+'<input type="text" placeholder="그 밖에 게스트가 알아두어야 하는 사항" class="host_regist_count2" id="host_manage_other_rule"><hr>'
+'<a href="#" id="host_manage_submit_4"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_5 = 
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>체크인</b></h2>'
+'<h6>체크인에 대한 정책</h6><br><hr>'
+'<h2>체크인 시간</h2><br>'
+'<select class="host_regist_select1" id="host_manage_checkin_time">'
+'<option selected="selected" value="00:00">00:00</option>'
+'<option value="01:00">01:00</option>'
+'<option value="02:00">02:00</option>'
+'<option value="03:00">03:00</option>'
+'<option value="04:00">04:00</option>'
+'</select><br><br><hr>'
+'<a href="#" id="host_manage_submit_5"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_6 = 
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>예약 취소</b></h2>'
+'<h6>예약 취소에 대한 환불 정책</h6><br><hr>'
+'<h2>환불 정책</h2><br>'
+'<select id="host_regist_select1">'
+'<option>유연 : 숙소 도착 하루 전에 취소하는 경우 에어비앤비 수수료 제외 전액 환불</option>'
+'<option>보통 : 숙소 도착 5일 전까지 취소 시 에어비앤비 수수료 제외 전액 환불</option>'
+'<option>엄격 : 숙소 도착 7일 전까지 취소 시 수수료 제외 50% 환불</option>'
+'</select><br><br><hr>'
+'<a href="${context}/hosting/regist_12"><input type="button" value="수정" class="btn btn-danger" id="host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_7 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>숙소</b></h2><br>'
+'<h4>집 유형</h4>'
+'<select class="host_regist_select1" id="host_manage_building_type">'
+'<option selected="selected" value="temp">하나를 선택해주세요.</option>'
+'</select>'
+'<h4>숙소 유형</h4>'
+'<select class="host_regist_select1" id="host_manage_room_type">'
+'<option selected="selected" value="집전체">집 전체</option>'
+'<option value="개인실">개인실</option>'
+'<option value="다인실">다인실</option>'
+'</select><br>'
+'<h4>수용 인원</h4>'
+'<select class="host_regist_select1" id="host_manage_guest_cnt">'
+'<option selected="selected" value="1">게스트  1명</option>'
+'<option value="2">게스트  2명</option>'
+'<option value="3">게스트  3명</option>'
+'<option value="4">게스트  4명</option>'
+'<option value="5">게스트  5명</option>'
+'<option value="6">게스트  6명</option>'
+'<option value="7">게스트  7명</option>'
+'<option value="8">게스트  8명</option>'
+'<option value="9">게스트  9명</option>'
+'<option value="10">게스트  10명</option>'
+'<option value="11">게스트  11명</option>'
+'<option value="12">게스트  12명</option>'
+'<option value="13">게스트  13명</option>'
+'<option value="14">게스트  14명</option>'
+'<option value="15">게스트  15명</option>'
+'</select>'
+'</div><hr>'
+'<div id="host_manage_detail_right2_2">'
+'<h2><b>침실 및 욕실</b></h2><br>'
+'<h4>침실 수</h4>'
+'<select class="host_regist_select1" id="host_manage_bed_cnt">'
+'<option selected="selected" value="1">1</option>'
+'</select>'
+'<h4>욕실 수</h4>'	
+'<select class="host_regist_select1" id="host_manage_bathroom_cnt">'
+'<option selected="selected" value="1">1</option>'
+'</select><br><hr>'
+'<a href="#" id="host_manage_submit_7"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_3">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_8 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h3><b>여행객들에게 회원님의 숙소에 대해서 알려주세요.</b></h3><br>'
+'<h6>에어비앤비에 등록된 모든 숙소는 각자의 개성이 있습니다. 회원님 숙소의 장점을 부각시켜 회원님 지역에서 머물 예정인 게스트에게 숙소를 어필하세요.</h6>'
+'<hr>'
+'<h4>숙소 이름</h4>'
+'<input type="text" placeholder="숙소 제목" class="host_regist_count2" id="host_manage_title"><br><br>'
+'<h4>요약</h4>'
+'<input type="text" placeholder="숙소에서 가까운 곳" class="host_regist_count3" id="host_manage_explaination"><br>'
+'<hr><a href="#" id="host_manage_submit_8"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_9 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h3><b>게스트가 숙소를 찾을 수 있도록 위치 정보를 제공하세요.</b></h3><br>'
+'<h6>게스트는 이 정보를 활용하여 숙소를 찾습니다.</h6>'
+'<div id="googleMap_manage" style="width:100%; height:380px;"></div>'
+'<input type="hidden" id="hosting_manage_map_lat">'
+'<input type="hidden" id="hosting_manage_map_long">'
+'<hr><a href="#" id="host_manage_submit_9"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_10 = 
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h3><b>여행객들에게 회원님의 숙소에 대해서 알려주세요.</b></h3><br>'
+'<h6>에어비앤비에 등록된 모든 숙소는 각자의 개성이 있습니다. 회원님 숙소의 장점을 부각시켜 회원님 지역에서 머물 예정인 게스트에게 숙소를 어필하세요.</h6>'
+'<hr><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_1"><span class="host_regist_input_text">필수 품목</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_2"><span class="host_regist_input_text">무선인터넷</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_3"><span class="host_regist_input_text">샴푸</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_4"><span class="host_regist_input_text">옷장/서랍장</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_5"><span class="host_regist_input_text">TV</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_6"><span class="host_regist_input_text">난방</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_7"><span class="host_regist_input_text">에어컨</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_8"><span class="host_regist_input_text">조식,커피,차</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_9"><span class="host_regist_input_text">책상/작업공간</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_10"><span class="host_regist_input_text">벽난로</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_11"><span class="host_regist_input_text">다리미</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_12"><span class="host_regist_input_text">헤어 드라이기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_convenience_13"><span class="host_regist_input_text">집에서 키우는 반려동물</span><br><br>'
+'<hr><a href="#" id="host_manage_submit_10"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right3_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_11 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h3><b>사진을 더하면 숙소를 실감하게 보여줄 수 있습니다.</b></h3><br>'
+'<h6>게스트가 접근할 수 있는 장소의 사진을 최소 1장 올려주세요. 나중에 언제든 사진을 수정하실 수 있습니다.</h6>'
+'<div id="fine-uploader-gallery_manage"></div>'
+'<hr><a href="#" id="host_manage_submit_11"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';
var hosting_manage_12 =
+'<div id="host_manage_detail_right1">'
+'<div id="host_manage_detail_right2">'
+'<div id="host_manage_detail_right2_2">'
+'<h3><b>숙소 안전</b></h3><br>'
+'<h6>드물기는 하지만 긴급 상황이 발생할 수 있습니다. 게스트가 긴급 상황에 대비할 수 있도록 해주세요.</h6>'
+'<hr><br>'
+'<h3><b>안전 체크리스트</b></h3><br>'	
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_1"><span class="host_regist_input_text">연기 감지기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_2"><span class="host_regist_input_text">일산화탄소 감지기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_3"><span class="host_regist_input_text">구급상자</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_4"><span class="host_regist_input_text">안전 카드</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_5"><span class="host_regist_input_text">소화기</span><br><br>'
+'<input type="checkbox" class="host_regist_input_box" id="host_manage_safety_fac_6"><span class="host_regist_input_text">침실에 잠금장치</span><br><br>'
+'<hr><a href="#" id="host_manage_submit_12"><input type="button" value="수정" class="btn btn-danger host_regist_next"></a>'
+'</div>'
+'</div>'
+'<div id="host_manage_detail_right_2">'
+'&nbsp;'
+'</div>'
+'</div>';


