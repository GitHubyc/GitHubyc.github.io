

$(".lawsregulations_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});

$(".notice_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});

$(".propagandatraining_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});

$("#KeySite_add").click(function() {
	getIframe('/keysite/add');
});

$(".KeySite_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});

$(".KeySite_edit").each(function(num) {
	$(this).on("click", function() {
		getIframe('/keysite/edit');
	});
});
$(".KeySite_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/keysite/details');
	});
});

$("#HouseInfo_add").click(function() {
	getIframe('/house/add');
});


$(".UnitEmployee_details").click(function() {
	getIframe('/unit/build');
});

$("#FireFacilities_edit").click(function() {
	getIframe('/firefacilities/edit');

});

//火灾自动报警系统
$("#AutomaticFireAlarmSystem_add").click(function() {
	getIframe('/automaticfirealarmsystem/add');
});
$(".AutomaticFireAlarmSystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".AutomaticFireAlarmSystem_edit").click(function() {
	getIframe('/automaticfirealarmsystem/edit');
});
$(".AutomaticFireAlarmSystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/automaticfirealarmsystem/details');
	});
});

//自动喷水灭火系统
$("#SprinklerSystem_add").click(function() {
	getIframe('/sprinklersystem/add');
});
$(".SprinklerSystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".SprinklerSystem_edit").click(function() {
	getIframe('/sprinklersystem/edit');
});
$(".SprinklerSystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/sprinklersystem/details');
	});
});

//泡沫灭火系统
$("#FoamExtinguishingSystem_add").click(function() {
	getIframe('/foamextinguishingsystem/add');
});
$(".FoamExtinguishingSystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".FoamExtinguishingSystem_edit").click(function() {
	getIframe('/foamextinguishingsystem/edit');
});
$(".FoamExtinguishingSystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/foamextinguishingsystem/details');
	});
});

//气体灭火系统
$("#GasExtinguishingSystem_add").click(function() {
	getIframe('/gasextinguishingsystem/add');
});
$(".GasExtinguishingSystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".GasExtinguishingSystem_edit").click(function() {
	getIframe('/gasextinguishingsystem/edit');
});
$(".GasExtinguishingSystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/gasextinguishingsystem/details');
	});
});

//干粉灭火系统
$("#PowderExtinguishingSystem_add").click(function() {
	getIframe('/powderextinguishingsystem/add');
});
$(".PowderExtinguishingSystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".PowderExtinguishingSystem_edit").click(function() {
	getIframe('/powderextinguishingsystem/edit');
});
$(".PowderExtinguishingSystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/powderextinguishingsystem/details');
	});
});

//细水雾灭火系统
$("#WaterMistSystem_add").click(function() {
	getIframe('/watermistsystem/add');
});
$(".WaterMistSystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".WaterMistSystem_edit").click(function() {
	getIframe('/watermistsystem/edit');
});
$(".WaterMistSystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/watermistsystem/details');
	});
});

//排烟系统
$("#SmokeExhaustSystem_add").click(function() {
	getIframe('/smokeexhaustsystem/add');
});
$(".SmokeExhaustSystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".SmokeExhaustSystem_edit").click(function() {
	getIframe('/smokeexhaustsystem/edit');
});
$(".SmokeExhaustSystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/smokeexhaustsystem/details');
	});
});

//防烟系统
$("#SmokePreventionSystem_add").click(function() {
	getIframe('/smokepreventionsystem/add');
});
$(".SmokePreventionSystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".SmokePreventionSystem_edit").click(function() {
	getIframe('/smokepreventionsystem/edit');
});
$(".SmokePreventionSystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/smokepreventionsystem/details');
	});
});

//室内消防给水系统
$("#IndoorFireWaterSystem_add").click(function() {
	getIframe('/indoorfirewatersystem/add');
});

$(".IndoorFireWaterSystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".IndoorFireWaterSystem_edit").click(function() {
	getIframe('/indoorfirewatersystem/edit');
});
$(".IndoorFireWaterSystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/indoorfirewatersystem/details');
	});
});

//室外消防给水系统
$("#OutdoorFireWaterSystem_add").click(function() {
	getIframe('/outdoorfirewatersystem/add');
});
$(".OutdoorFireWaterSystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".OutdoorFireWaterSystem_edit").click(function() {
	getIframe('/outdoorfirewatersystem/edit');
});
$(".OutdoorFireWaterSystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/outdoorfirewatersystem/details');
	});
});

//疏散指示标志和应急照明
$("#Evacuationmarkslighting_add").click(function() {
	getIframe('/evacuationmarkslighting/add');
});
$(".Evacuationmarkslighting_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".Evacuationmarkslighting_edit").click(function() {
	getIframe('/evacuationmarkslighting/edit');
});
$(".Evacuationmarkslighting_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/evacuationmarkslighting/details');
	});
});

//消防供电配电
$("#FirePowerDistribution_add").click(function() {
	getIframe('/firepowerdistribution/add');
});
$(".FirePowerDistribution_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".FirePowerDistribution_edit").click(function() {
	getIframe('/firepowerdistribution/edit');
});
$(".FirePowerDistribution_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/firepowerdistribution/details');
	});
});

//火灾应急广播系统
$("#Firebroadcastingsystem_add").click(function() {
	getIframe('/firebroadcastingsystem/add');
});
$(".Firebroadcastingsystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".Firebroadcastingsystem_edit").click(function() {
	getIframe('/firebroadcastingsystem/edit');
});
$(".Firebroadcastingsystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/firebroadcastingsystem/details');
	});
});

//消防电梯
$("#FireElevator_add").click(function() {
	getIframe('/fireelevator/add');
});
$(".FireElevator_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".FireElevator_edit").click(function() {
	getIframe('/fireelevator/edit');
});
$(".FireElevator_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/fireelevator/details');
	});
});

//其他系统
$("#OtherSystem_add").click(function() {
	getIframe('/othersystem/add');
});
$(".OtherSystem_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".OtherSystem_edit").click(function() {
	getIframe('/othersystem/edit');
});
$(".OtherSystem_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/othersystem/details');
	});
});

//防火分离系统
$("#FireSeparation_add").click(function() {
	getIframe('/fireseparation/add');
});
$(".FireSeparation_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".FireSeparation_edit").click(function() {
	getIframe('/fireseparation/edit');
});
$(".FireSeparation_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/fireseparation/details');
	});
});

//灭火器
$("#FireExtinguisher_add").click(function() {
	getIframe('/fireextinguisher/add');
});
$(".FireExtinguisher_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".FireExtinguisher_edit").click(function() {
	getIframe('/fireextinguisher/edit');
});
$(".FireExtinguisher_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/fireextinguisher/details');
	});
});

//控制室联动控制设备功能
$("#Controlroomlinkagecontr_add").click(function() {
	getIframe('/controlroomlinkagecontr/add');
});
$(".Controlroomlinkagecontr_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".Controlroomlinkagecontr_edit").click(function() {
	getIframe('/controlroomlinkagecontr/edit');
});
$(".Controlroomlinkagecontr_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/controlroomlinkagecontr/details');
	});
});

//其他设施
$("#OtherFacilities_add").click(function() {
	getIframe('/otherfacilities/add');
});
$(".OtherFacilities_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".OtherFacilities_edit").click(function() {
	getIframe('/otherfacilities/edit');
});
$(".OtherFacilities_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/otherfacilities/details');
	});
});

//消防物联
$(".FireControlInstrumentation_details").each(function(num) {
	$(this).on("click", function() {
		getIframe('/firecontrolinstrumentation/details');
	});
});

//每日巡查
$(".Workday_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/work/day/details');
	});
});
$(".Workday_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});

//每月检查
$(".Workmonth_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/work/month/details');
	});
});
$(".Workmonth_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});

//控制室检查
$(".Workcontrol_detail").each(function(num) {
	$(this).on("click", function() {
		getIframe('/work/control/details');
	});
});
$(".Workcontrol_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});

//标签按钮
$(".Label_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$(".Label_edit").click(function() {
	getIframe('/label/edit');
});
$(".Label_details").click(function() {
	getIframe('/label/details');
});

$(".Label_check_details").click(function() {
	getIframe('/label/check/details');
});

//管理处信息
$(".Managementinformation_edit").click(function() {
	getIframe('/managementinformation/edit');
});
$(".Managementinformation_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});
$("#Managementinformation_add").click(function() {
	getIframe('/managementinformation/add');
});

//消防警力信息
$(".Firepoliceforce_details").click(function() {
	getIframe('/firepoliceforce/details');
});
$(".Firepoliceforce_edit").click(function() {
	getIframe('/firepoliceforce/edit');
});
$("#Firepoliceforce_add").click(function() {
	getIframe('/firepoliceforce/add');
});
//派出所
$(".Policestation_edit").click(function() {
	getIframe('/policestation/edit');
});
$("#Policestation_add").click(function() {
	getIframe('/policestation/add');
});
$(".Policestation_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});

//管理大队
$(".Brigadepersonnel_list").click(function() {
	getIframe('/brigadepersonnel/list');
});

//消防民警
$("#Firepolice_add").click(function() {
	getIframe('/firepolice/add');
});

//关闭iframe
$('#closeIframe').click(
		function() {
			var index = parent.layer.getFrameIndex(window.name); //获取窗口索引
			var chk_value = [];
			var chk_name = [];
			var chk_value1 = [];

			$('input[name="facilitieType"]:checked').each(function() {
				chk_value.push($(this).val());
				chk_name.push($(this).siblings('label').text());

			});

			$("input[name='facilitieType']").each(function() {
				if ($(this).prop('checked') == false) {
					chk_value1.push($(this).val());
				}
			});

			parent.$('.box_tab_jz').empty();
			$.each(chk_value, function(index, value) {
				value = value - 1;
				var txt = $("<li></li>").html(
						chk_name[index] + '<span class="bg_y">0</span>');
				parent.$('.box_tab_jz').append(txt);
				parent.$('.box_tab_jz li').first().addClass("bg_blue");
				parent.$('.box_tab_jz li').first().find("span").addClass(
						"bg_y1").removeClass("bg_y");
			});

			$.each(chk_value1, function(index, value) {
				value = value - 1;
				parent.$('.content_row').eq(value).remove();
			});

			parent.layer.close(index);
		});

$(".HouseInfo_del").each(function(index) {
	$(this).on("click", function() {
		//    	var text=parseInt($(".list_table dl").eq(index).find("h5").text().replace(/[^0-9]/ig, ""));
		var data = {};
		getdel("xxx/xxx", "post", data);
	});
});

$(".HouseInfo_edit").each(function(num) {
	$(this).on("click", function() {
		var p = $(".floor_line").eq(num).find("p .font_blue").text();
		if (p == '一般单位') {
			getIframe('/house/edit/ybdw');
		} else if (p == '重点单位') {
			getIframe('/house/edit/zddw');
		} else if (p == '三小产所') {
			getIframe('/house/edit/sxcs');
		} else if (p == '工矿企业') {
			getIframe('/house/edit/gkqy');
		}
	});
});

$(".HouseInfo_detail").each(function(num) {
	$(this).on("click", function() {
		var p = $(".floor_line").eq(num).find("p .font_blue").text();
		if (p == '一般单位') {
			getIframe('/house/details/ybdw');
		} else if (p == '重点单位') {
			getIframe('/house/details/zddw');
		} else if (p == '三小产所') {
			getIframe('/house/details/sxcs');
		} else if (p == '工矿企业') {
			getIframe('/house/details/gkqy');
		}

	});
});
function getIframe(url) {
	var index = layer.open({
		type : 2,
		content : url,
		area : [ '1024px', '768px' ],
		maxmin : true,
		scrollbar : false
	});
	//layer.full(index);
}
function getdel(url) {
	layer.confirm('是否确定删除？', {
		btn : [ '确定', '取消' ]
	//按钮
	}, function(index) {
		layer.close(index);
		$.ajax({
			url : url,
			type : "DELETE",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			success : function(data) {
				//刷新父页面
				setTimeout(function() {
					if (data.status == 200) {
						toastr.success(data.msg)
						window.parent.location.reload();
					} else {
						toastr.error(data.msg)
					}
				}, 500);

			},
			error : function() {
				toastr.error('服务无响应')
			}
		});
	});
}

function getdelete(url){
	layer.confirm('是否确定删除？', {
		  btn: ['确定','取消'] //按钮
		}, function(index){
			layer.close(index);
			$.ajax({
	 		    url:url,
	 		    type: "DELETE",	
	 		    contentType: "application/json; charset=utf-8",
	 	        dataType: "json",
	 		    success: function(data) {
	 		    	if(data.status==200){
         		    	toastr.success(data.msg)
         		   	var href=$(".x_top1 .btn-color").attr("href");	 		    		
	 		    		$("#ok").load(href);
	 		    		$(window).unbind('beforeunload');
         		    	}else{
         		    	toastr.error(data.msg)
         		    	}		    	 		    	
	 		    },
	 		    error:function(){
	 		    	toastr.error('服务无响应')
	 		}
	 		});	
		});	 
}
