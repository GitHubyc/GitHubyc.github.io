


// 切换隐患列表tab
$('.x_top  h5 a').click(function() {
	var index = $(this).index();
	$(this).addClass("font_blue").siblings().removeClass("font_blue");
	$(".s_content ").each(function() {
		$(".s_content").eq(index).show(200).siblings(".s_content").hide();
	});
});

// 切换日周月tab
$('.gzsj_title_tab span').click(function() {
	var index = $(this).index();
	$(this).addClass("blue").siblings().removeClass("blue");
	$(".gzsj ul").each(function() {
		$(".gzsj ul").eq(index).show(200).siblings("ul").hide();
	});
});

// 建筑防火设施tab
$(".table .search_btn").each(function(index) {
	$(this).on("click", function() {
		$(".search_box").eq(index).show().siblings(".search_box").hide();
	});
});

// 移动绿色按钮
$(".gzsj .line_btn").each(function() {
	$(this).on("click", function() {

		var num = parseInt($(this).css('left')) == NaN ? 0 : 15;
		num = parseInt($(this).css('left')) == 15 ? 0 : 15;
		$(this).toggleClass("line_btn_col").animate({
			left : num + 'px'
		})

	});
});

// 获取移动端旋转的高度
$('.scroll-view').css('height', $(window).height() - 60);
$(window).resize(function() {
	var hg = window.screen.height;
	$('.scroll-view').css('height', hg - 60);
});



$('.col_left_menu .list_tb_a li').bind(
		{
			click : function() {
				var index = $(this).index();
				$(this).append('<span class="icon_caret"></span>').addClass(
						"bg_blue").siblings().removeClass("bg_blue");
				$(".col_right_tb .list_box_row").eq(index).show().siblings(
						".col_right_tb .list_box_row").hide();
				$(this).siblings().children("span").remove();
				$('.m_content .list_tb_a li').children("i").each(
						function() {
							var str = $(this).attr("class");
							var arr = str.split(' ');
							var lastStr = arr[arr.length - 1];
							$(this).removeClass(lastStr);
							$(this).addClass(
									lastStr.substring(lastStr.length,
											lastStr.length - 1) == 1 ? lastStr
											.substring(0, lastStr.length - 1)
											: lastStr)
						});
				var str = $(this).children("i").attr("class");
				var arr = str.split(' ');
				var lastStr = arr[arr.length - 1];
				$(this).children("i").removeClass(lastStr).addClass(
						lastStr + '1');
			}

		});


function changeState(el) {
	if (el.readOnly)
		el.checked = el.readOnly = false;
	else if (!el.checked)
		el.readOnly = el.indeterminate = true;
}

$(".lists_box").each(function() {
	var j = $(this).index();
	$('.lists_box').eq(j).find('.active').not(":eq(0)").hide();

});

$('.lists_click a').click(
		function() {
			var index = $(this).index();
			var i = $(this).parents(".lists_box").index();
			$('.lists_box').eq(i).find('.active').eq(index).show(200).siblings(
					'.active').hide();
		});

