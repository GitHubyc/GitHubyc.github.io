//localization example for daterang picker
//change moment.js language to French
//example taken from: http://momentjs.com/docs/#/i18n/changing-language/
 moment.lang('zh-cn', {
    months : ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    monthsShort : ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
    weekdays : ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
    weekdaysShort : ["周日", "周一", "周二", "周三", "周四", "周五", "周六", "周日"],
    weekdaysMin : ["日", "一", "二", "三", "四", "五", "六", "日"],
    longDateFormat : {
        LT : "Ah.mm",
        L : "YYYY-MM-DD",
        LL : "YYYY-MM-DD",
        LLL : "YYYY-MM-DD.LT",
        LLLL : "YYYY-MM-DD.ddddLT"
    },
    calendar : {
        sameDay: "今天",
        nextDay: '明天',
        nextWeek: '下周',
        lastDay: '昨天',
        lastWeek: '上周',
        sameElse: 'L'
    },
    relativeTime : {
        future : "%s内",
        past : "%s前",
        s : "几秒",
        m : "1分钟",
        mm : "%d分钟",
        h : "1小时",
        hh : "%d小时",
        d : "1天",
        dd : "%d天",
        M : "1个月",
        MM : "%d个月",
        y : "1年",
        yy : "%d年"
    },
    ordinal : function (number) {
        return number + (number === 1 ? 'er' : 'ème');
    },
    week : {
        dow : 1, // Monday is the first day of the week.
        doy : 4  // The week that contains Jan 4th is the first week of the year.
    }
 });

 
//daterangepicker
$(function() {
  $('#dateTimeRange').daterangepicker({
        applyClass : 'btn-sm btn-blue btn-color ',
        cancelClass : 'btn-sm btn-default',
        format : 'YYYY-MM-DD HH:mm:ss',
        locale: {
            applyLabel: '确认',
            cancelLabel: '取消',
            fromLabel : '起始时间',
            toLabel : '结束时间',
            customRangeLabel : '自定义',
            firstDay : 1
        },
        ranges : {
            //'最近1小时': [moment().subtract('hours',1), moment()],
            '今日': [moment().startOf('day'), moment()],
            '昨日': [moment().subtract('days', 1).startOf('day'), moment().subtract('days', 1).endOf('day')],
            '最近7日': [moment().subtract('days', 6), moment()],
            '最近30日': [moment().subtract('days', 29), moment()],
            '本月': [moment().startOf("month"),moment().endOf("month")],
            '上个月': [moment().subtract(1,"month").startOf("month"),moment().subtract(1,"month").endOf("month")]
        },
        opens : 'left',	// 日期选择框的弹出位置
        separator : ' 至 ',
        showWeekNumbers : true,		// 是否显示第几周
        maxDate : moment(), //最大时间  
        dateLimit : { 
          days : 365
        }, //起止时间的最大间隔 
        //timePicker: true,
        //timePickerIncrement : 10,	// 时间的增量，单位为分钟
        //timePicker12Hour : false,	// 是否使用12小时制来显示时间
        startDate:moment().subtract('days', 29),
        endDate:moment()
    }, function(start, end, label) { // 格式化日期显示框
    	 
    })

});
