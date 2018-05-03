
//设置content大小,百分比数据相对图片;
var bgW = $('.bg').width();
$('.content').css({'width': bgW,'height':"100%"});

//设置页面尺寸变化时content相应变化;
$(window).resize(function(){
    var bgReW = $('.bg').width();
    var bgReH = $('.bg').height();
    $('.content').css({'width': bgReW,'height':bgReH});
})

//点击更换背景
$('.rightBox>input').focus(function(){
    var _className = $('input:focus').attr("class");//返回点击input的className
   
    $(this).css({'background':'url("../img/'+ _className +'_p.png") no-repeat left top','background-size': '100% 100%'})
}).blur(function(){
    var _className = $(this).attr("class");//返回点击input的className

    $(this).css({'background':'url("../img/'+ _className +'_n.png") no-repeat left top','background-size': '100% 100%'})
})
$('.LoginBtn').focus(function(){
    $(this).css({'background':'url("../img/LoginBtn_p.png") no-repeat left top','background-size': '100% 100%'})
}).blur(function(){
    $(this).css({'background':'url("../img/LoginBtn_n.png") no-repeat left top','background-size': '100% 100%'})
})



$('.LoginBtn').click(function(){
	window.location.href='index.html'
})

$("body").bind('keyup',function(event) { 
  if(event.keyCode==13){ 
	  window.location.href='index.html'
  }   
}); 
function getlogin(){
	
	  
    var UserID = $('.UserID').val();
   var PassWord = $('.PassWord').val();
   var data={"username":UserID,"password":PassWord};
   $.ajax({
	    url: '/login',
	    type: 'post',	
	    contentType: "application/json; charset=utf-8",
        data: JSON.stringify(data),
        dataType: "json",
        timeout:3000, //超时时间
        beforeSend:function(XMLHttpRequest){ 
        layer.load(1);
        	}, 
	    success: function(data) {
	    	if (data.status == 200) {
	    		layer.closeAll('loading');
				location.href = "/index";
			} else{
				toastr.error(data.message);
			}    	
	    }
	});
}