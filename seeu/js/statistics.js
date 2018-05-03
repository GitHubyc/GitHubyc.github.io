/**
 * Highcharts 在 4.2.0 开始已经不依赖 jQuery 了，直接用其构造函数既可创建图表
 */
$(function() {
	$('#container').highcharts(
			{
				chart : {
					type : 'spline'
				},
				title : {
					text : '每日巡查',
					x : -475,
					style : {
						'fontSize' : '14px'
					}
				},
				scrollbar : {
					enabled : true
				},
				legend : {
					enabled : false
				},
				xAxis : {
					categories : [ '00:01~01:00', '01:01~02:00', '02:01~03:00',
							'03:01~04:00', '04:01~05:00', '05:01~06:00',
							'06:01~07:00', '07:01~08:00', '08:01~09:00',
							'09:01~10:00', '10:01~11:00', '11:01~12:00',
							'12:01~13:00', '13:01~14:00', '14:01~15:00',
							'15:01~16:00', '16:01~17:00', '17:01~18:00',
							'18:01~19:00', '19:01~20:00', '20:01~21:00',
							'21:01~22:00', '22:01~23:00', '23:01~24:00' ],
					min : 0,
					max : 10
				},
				yAxis : {
					title : {
						text : '巡查数 (次)'
					},
					plotLines : [ {
						value : 0,
						width : 1,
						color : '#808080'
					} ]
				},
				tooltip : {
					valueSuffix : '次'
				},
				exporting : {
					enabled : false
				},
				credits : {
					enabled : false
				// 不显示LOGO
				},
				series : [ {
					data : [ 1, 2, 3, 4, 5, 6, 6, 6, 7, 12, 13, 9, 7, 6, 4, 9,
							13, 9, 13, 9, 12, 14, 2, 9 ],
					showInLegend: false
    }]
});

	
	var chart = $('#fireControlInstrumen').highcharts({
				chart : {
					type : 'spline'
				},
				title : {
					text : '每日巡查',
					x : -420,
					style : {
						'fontSize' : '14px'
					}
				},
				scrollbar : {
					enabled : true
				},
				legend : {
					enabled : false
				},
				xAxis : {
					categories : [ '00:01~01:00', '01:01~02:00', '02:01~03:00',
							'03:01~04:00', '04:01~05:00', '05:01~06:00',
							'06:01~07:00', '07:01~08:00', '08:01~09:00',
							'09:01~10:00', '10:01~11:00', '11:01~12:00',
							'12:01~13:00', '13:01~14:00', '14:01~15:00',
							'15:01~16:00', '16:01~17:00', '17:01~18:00',
							'18:01~19:00', '19:01~20:00', '20:01~21:00',
							'21:01~22:00', '22:01~23:00', '23:01~24:00' ],
					min : 0,
					max : 10
				},
				yAxis : {
					title : {
						text : '巡查数 (次)'
					},
					plotLines : [ {
						value : 0,
						width : 1,
						color : '#808080'
					} ]
				},
				tooltip : {
					valueSuffix : '次'
				},
				exporting : {
					enabled : false
				},
				credits : {
					enabled : false
				// 不显示LOGO
				},
				series : [ {
					data : [ 1, 2, 3, 4, 5, 6, 6, 6, 7, 12, 13, 9, 7, 6, 4, 9,
							13, 9, 13, 9, 12, 14, 2, 9 ],
					showInLegend : false
				} ]
			});
	// 生成表格
	HighchartsToTable($("#fireControlInstrumen"),
			$("#tb_fireControlInstrumen"), ("巡查数 (次)"));

	$('#zhuxt')
			.highcharts(
					{
						chart : {
							type : 'column'
						},
						title : {
							text : '实时数据',
							x : -340,
							style : {
								'fontSize' : '14px'
							}
						},
						xAxis : {
							categories : [ '日巡查', '月检查', '消防控制检查', '电子巡更',
									'电子巡更' ],
							crosshair : true
						},
						yAxis : {
							min : 0,
							title : {
								enabled : false
							}
						},
						exporting : {
							enabled : false
						},
						credits : {
							enabled : false
						// 不显示LOGO
						},
						tooltip : {
							headerFormat : '<span style="font-size:10px">{point.key}</span><table>',
							pointFormat : '<tr><td style="color:{series.color};padding:0">{series.name}: </td>'
									+ '<td style="padding:0"><b>{point.y:.1f} 次数</b></td></tr>',
							footerFormat : '</table>',
							shared : true,
							useHTML : true
						},
						plotOptions : {
							column : {
								pointPadding : 0,
								borderWidth : 0
							}
						},
						series : [ {
							name : '已检查',
							color : '#3385ff',
							data : [ 49.9, 71.5, 106.4, 129.2, 144.0 ]
						}, {
							name : '异常',
							color : '#ff6a5e',
							data : [ 83.6, 78.8, 98.5, 93.4, 106.0 ]
						}, {
							name : '已整改',
							color : '#807E7F',
							data : [ 48.9, 38.8, 39.3, 41.4, 47.0 ]
						}, {
							name : '未整改',
							color : '#FFA02E',
							data : [ 42.4, 33.2, 34.5, 39.7, 52.6 ]
						} ]
					});
});

$('#yuanxt').highcharts({
	chart : {
		plotBackgroundColor : null,
		plotBorderWidth : null,
		plotShadow : false,
		spacing : [ 0, 0, 0, 0 ]
	},
	title : {
		text : ''
	},
	tooltip : {
		pointFormat : ' <b>{point.percentage:.1f}%</b>'
	},
	plotOptions : {
		pie : {
			allowPointSelect : true,
			cursor : 'pointer',
			dataLabels : {
				enabled : false
			},
			showInLegend : true
		}
	},
	exporting : {
		enabled : false
	},
	credits : {
		enabled : false
	// 不显示LOGO
	},
	series : [ {
		type : 'pie',
		innerSize : '80%',
		data : [ {
			name : '合格',
			y : 80,
			color : '#5281de'
		}, {
			name : '不合格',
			y : 20,
			color : '#ee5e5e'
		} ]
	} ]
});

$('#zhuxt1').highcharts({
	chart : {
		type : 'column'
	},
	title : {
		text : '实时数据',
		x : -400,
		style : {
			'fontSize' : '14px'
		}
	},
	xAxis : {
		type : 'category'
	},
	yAxis : {
		title : {
			enabled : false
		}
	},
	legend : {
		enabled : false
	},
	exporting : {
		enabled : false
	},
	credits : {
		enabled : false
	// 不显示LOGO
	},
	tooltip : {
		pointFormat : '<b>{point.y:.1f} </b>'
	},
	plotOptions : {
		column : {
			pointPadding : 0.4,
			borderWidth : 0,
			dataLabels : {
				enabled : true,
				borderRadius : 50,
				backgroundColor : '#ee5e5e',
				borderWidth : 2,
				borderColor : '#f6aeae',
				y : -6,
				format : ' '
			}
		}
	},
	series : [ {
		data : [ {
			name : '人员1',
			y : 30,
			color : '#f49696'
		}, {
			name : '人员2',
			y : 80,
			color : '#d2def3',
			dataLabels : {
				backgroundColor : '#5281d1',
				borderWidth : 2,
				borderColor : '#adc3e9'
			}
		}, {
			name : '人员3',
			y : 30,
			color : '#f49696'
		}, {
			name : '人员4',
			y : 80,
			color : '#d2def3',
			dataLabels : {
				backgroundColor : '#5281d1',
				borderWidth : 2,
				borderColor : '#adc3e9'
			}
		}, {
			name : '人员5',
			y : 80,
			color : '#d2def3',
			dataLabels : {
				backgroundColor : '#5281d1',
				borderWidth : 2,
				borderColor : '#adc3e9'
			}
		}, {
			name : '人员6',
			y : 80,
			color : '#d2def3',
			dataLabels : {
				backgroundColor : '#5281d1',
				borderWidth : 2,
				borderColor : '#adc3e9'
			}
		}, {
			name : '人员7',
			y : 80,
			color : '#d2def3',
			dataLabels : {
				backgroundColor : '#5281d1',
				borderWidth : 2,
				borderColor : '#adc3e9'
			}
		} ]
	} ]
});

function HighchartsToTable(div, table, unitName) {
	// 获取图表对象
	var chart = div.highcharts();
	if (chart != null) {
		// 获取X轴集合对象
		var categories = chart.xAxis[0].categories;
		// 获取series集合
		var seriesList = chart.series;
		// 获取标题
		var title = chart.title.textStr;
		// 先清空原表格内容
		table.html("");
		// 获取表格div对象
		var tableObj = table;
		// 定义行元素<tr></tr>
		var tr;
		// 定义表格体<table></table>
		var tab;
		tab = $("<table class='table table-hover text-center'></table>")
		tab.appendTo(tableObj);
		// 第一行，放置标题
		tr = $("<tr></tr>");
		tr.appendTo(tab);
		var td = $("<td colspan='"
				+ categories.length
				+ 1
				+ "' style=\"border:solid #ececec; border-width:0px 1px 1px 0px; padding:5px 0px;text-align: left;\" >数据表格<b style=\"font-size:14px;font-family:'Times New Roman','Microsoft YaHei';float:right\">"
				+ unitName + "</b>" + "</td>");
		td.appendTo(tr);
		// 下一行，放置数据
		tr = $("<tr ></tr>")
		tr.appendTo(tab);
		td = $("<td style=\"border:solid #ececec; border-width:0px 1px 1px 0px; padding:5px 0px;\">序</td>");
		td.appendTo(tr);
		for ( var i = 0; i < categories.length; i++) {
			td = $("<td style=\"border:solid #ececec; border-width:0px 1px 1px 0px; padding:5px 0px;\">"
					+ categories[i] + "</td>");
			td.appendTo(tr);
		}
		// 分批插入数据
		for ( var i = 0; i < seriesList.length; i++) {
			tr = $("<tr></tr>");
			tr.appendTo(tab);
			// 先加入一个序列名称
			td = $("<td style=\"border:solid #ececec; border-width:0px 1px 1px 0px; padding:5px 0px;\">"
					+ i + "</td>");
			td.appendTo(tr);
			// 遍历数据点追加数据值
			for ( var j = 0; j < seriesList[i].data.length; j++) {
				td = $("<td style=\"border:solid #ececec; border-width:0px 1px 1px 0px; padding:5px 0px;align:center\">"
						+ seriesList[i].data[j].y + "</td>");
				td.appendTo(tr);
			}
		}
	}
}
