////改变三角符的样式和下拉搜索菜单
//$('html').click(
//		function(e) {
//			var target = $(e.target);
//			if (!target.is('.left_s .btn-default')
//					&& !target.is('.right_top  *')
//					&& !target.is('.daterangepicker *')
//					&& !target.is('.ranges *')) {
//				if ($('.s_type *').is(':visible')) {
//					$('#top_box').fadeIn();
//					$('.input-group-btn span').addClass("caret").removeClass(
//							"carets");
//				}
//				$('.s_type').hide();
//			}
//			if (target.is('.input-group-btn .btn-default')) {
//				$('#top_box'). fadeOut();
//				$('.s_type').toggle();
//				$('.input-group-btn span').toggleClass("caret carets");
//			}
//		});
$('.s_search_right').click(function() {
	$('#top_box'). fadeOut();
	$('.s_type').fadeIn();
	$('[name="display"]').val("2");
});
$('#cencel').click(function() {
	$('#top_box').fadeIn();
	$('.s_type').fadeOut();
	$('[name="display"]').val("1");
});
//toastr提示框
toastr.options = {
	"closeButton" : false,
	"debug" : false,
	"newestOnTop" : false,
	"progressBar" : false,
	"positionClass" : "toast-top-center",
	"preventDuplicates" : false,
	"onclick" : null,
	"showDuration" : "5000",
	"hideDuration" : "1000",
	"timeOut" : "1000",
	"extendedTimeOut" : "0",
	"showEasing" : "swing",
	"hideEasing" : "linear",
	"showMethod" : "fadeIn",
	"hideMethod" : "fadeOut"
};
//提示信息
$('[data-toggle="tooltip"]').tooltip();

//获取链接参数
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); // 构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg); // 匹配目标参数
	if (r != null)
		return encodeURI(r[2]);
	return null; // 返回参数值
}

function getTypeUrl(url,title){
	if(title=="火灾自动报警系统"){
		url="/automaticfirealarmsystem"+url
	}else if(title=="自动喷水灭火系统"){
		url="/sprinklersystem"+url
	}else if(title=="泡沫灭火系统"){
		url="/foamextinguishingsystem"+url
	}else if(title=="气体灭火系统"){
		url="/gasextinguishingsystem"+url
	}else if(title=="干粉灭火系统"){
		url="/powderextinguishingsystem"+url
	}else if(title=="细水雾灭火系统"){
		url="/watermistsystem"+url
	}else if(title=="排烟系统"){
		url="/smokeexhaustsystem"+url
	}else if(title=="防烟系统"){
		url="/smokepreventionsystem"+url
	}else if(title=="室内消防给水系统"){
		url="/indoorfirewatersystem"+url
	}else if(title=="室外消防给水系统"){
		url="/outdoorfirewatersystem"+url
	}else if(title=="疏散指示标志和应急照明"){
		url="/evacuationmarkslighting"+url
	}else if(title=="消防供电配电"){
		url="/firepowerdistribution"+url
	}else if(title=="火灾应急广播系统"){
		url="/firebroadcastingsystem"+url
	}else if(title=="消防电梯"){
		url="/fireelevator"+url
	}else if(title=="其他系统"){
		url="/othersystem"+url
	}else if(title=="防火分隔"){
		url="/fireseparation"+url
	}else if(title=="灭火器"){
		url="/fireextinguisher"+url
	}else if(title=="控制室联动控制设备功能"){
		url="/controlroomlinkagecontr"+url
	}else if(title=="其他设施"){
		url="/otherfacilities"+url
	}
	return url;
}