InitMainTable()
$('.s_search').click(function() {
	$("#tb_departments").bootstrapTable('destroy'); 
	InitMainTable()
});

   function InitMainTable() {
	   var table = $('#tb_departments').bootstrapTable({
            url: '/build/unitinfo',         // 请求后台的URL（*）
            method: 'POST',                      // 请求方式（*）
            striped: true,                      // 是否显示行间隔色
            cache: false,                       // 是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   // 是否显示分页（*）
            sortable: false,                     // 是否启用排序
            sortOrder: "asc",                   // 排序方式
            queryParams:function (params) {
                var temp = {   // 这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
                    	pageSize: params.limit,   // 页面大小
                        currentPage:params.offset/params.limit+1,  // 页码
                        buildname: $("[name='search']").val()
                    };
                    return JSON.stringify(temp);
                },// 请求服务器时所传的参数
            sidePagination: 'client',   // 分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       // 初始化加载第一页，默认第一页
            pageSize: 12,                       // 每页的记录行数（*）
            pageList: [12, 24],        // 可供选择的每页的行数（*）
            search: false,                       // 是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            singleSelect: true,
            showColumns: false,                  // 是否显示所有的列
            showRefresh: false,                  // 是否显示刷新按钮
            minimumCountColumns: 2,             // 最少允许的列数
            clickToSelect: true,                // 是否启用点击选中行
            height: 500,                        // 行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            showToggle:false,                    // 是否显示详细视图和列表视图的切换按钮
            cardView: false,                    // 是否显示详细视图
            detailView: false,                   // 是否显示父子表
            responseHandler:function (res) {
            	                return res.data;
            	            },
            	           
            columns: [{checkbox: true},{
                field: 'plcBuildCode',
                title: '建筑编码',
                align   : 'center'
            },{  field: 'buildName',
            	title: '建筑名称',
            	 align   : 'center'
        	},{  field: 'buildAddress',
        		title: '建筑地址',
        		 align   : 'center'
    },]

        });
	   $('#tb_departments').click(function(){  
		   var data = table.bootstrapTable('getSelections')[0];  
		   if(typeof(data) == 'undefined') {  
			alert('请选择一列数据!'); 
		   }else{  
			   parent.$('[name="buildCode"]').val(data.buildCode)
			   parent.$('[name="plcBuildCode"]').val(data.plcBuildCode)
			   parent.$('[name="buildName"]').val(data.buildName)
			   var aa = parent.layer.getFrameIndex(window.name); // 获取窗口索引
				parent.layer.close(aa);
				
		   }  

		   });  
	  
};



