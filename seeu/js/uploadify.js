//附件上传
$(function() {  
	var data={
		"authorization":$("[name='token']").val()
	}
	 $("#updateimg").uploadify({ 
		   'auto':true,       //是否允许自动上传
           'multi':true,
           'Debug':true,
		   'swf' : '/js/uploadify/uploadify.swf', //引入flash
		   'buttonText':'<span class="btn btn-blue btn-color" > 添加建筑图片<i class="glyphicon glyphicon-plus" style="margin-left: 5px;"></i></span>',     //设置button文字
		    'removeCompleted': true,//是否移除掉队列中已经完成上传的文件。false为不移除
		   'removeTimeout': 1,//设置上传完成后删除掉文件的延迟时间，默认为3秒。
		   'width':"120",      //按钮宽度
		   'height':"20",
		   'fileTypeDesc' : '*.jpg;*.JPG;*.jpeg;*.png;等图片文件', 
           'fileTypeExts' : '*.jpg;*.JPG;*.jpeg;*.png;',
           'fileSizeLimit' : '5024000000',  
           'queueID'  : 'uploader_queue',
		   'method':'post',//提交方式
		   'multi':'false',      //是否多文件上传
		   'fileObjName' : 'buildImage',   //文件对象名称,用于后台获取文件对象时使用
		   'preventCaching':'true',   //防止浏览器缓存
		   'formData':data, //动态传参
		   'queueID': 'queue',  //显示在某个div的位置  queue div的id 
		   'uploader' : 'http://localhost:5555/upload',    //提交后台方法路径
		   'onFallback' : function() {//检测FLASH失败调用  
		     alert("您未安装FLASH控件，无法上传图片！请安装FLASH控件后再试。");  
		    
		    },  
		    
		    'onUploadSuccess':function(data){  
		    	alert("成功")
		      $(".Img").attr("src","")		     
		            //alert(file.name+"上传"+Data.result);
		          },
		          
		        onError: function(event, queueID, file)   
		             {    
		              alert(" 上传失败");    
		             },
		          'onQueueComplete':function(stats) {  
		//版本不一样方法也存在差异
		        
		         },
		  }); 	   
});