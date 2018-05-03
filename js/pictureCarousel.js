function carouselImg(){
	var imgJson = 
		[{'img':'img/test1.jpg'},
		 {'img':'img/test2.jpg'},
		 {'img':'img/test3.jpg'},
		 {'img':'img/test4.jpg'},
		 {'img':'img/test5.jpg'}];
		var li = '';
		for(var i=0;i<imgJson.length;i++){
			li = li + '<li><a href="#"><img src="'+imgJson[i].img+'" class="imgs" width="400px" height="200px" alt="puss in boots1"></a></li>';
		}
		$("#imgList").append(li) ; 
		
		var curIndex = 0, //当前index
      imgLen = $(".imgList li").length; //图片总数
     // 定时器自动变换2.5秒每次
  var autoChange = setInterval(function(){ 
    if(curIndex < imgLen-1){ 
      curIndex ++; 
    }else{ 
      curIndex = 0;
    }
    //调用变换处理函数
    changeTo(curIndex); 
  },2500);
   //左箭头滑入滑出事件处理
  $("#prev").hover(function(){ 
    //滑入清除定时器
    clearInterval(autoChange);
  },function(){ 
    //滑出则重置定时器
    autoChangeAgain();
  });
  //左箭头点击处理
  $("#prev").click(function(){ 
    //根据curIndex进行上一个图片处理
    curIndex = (curIndex > 0) ? (--curIndex) : (imgLen - 1);
    changeTo(curIndex);
  });
  //右箭头滑入滑出事件处理
  $("#next").hover(function(){ 
    //滑入清除定时器
    clearInterval(autoChange);
  },function(){ 
    //滑出则重置定时器
    autoChangeAgain();
  });
  //右箭头点击处理
  $("#next").click(function(){ 
    curIndex = (curIndex < imgLen - 1) ? (++curIndex) : 0;
    changeTo(curIndex);
  });
  //对右下角按钮index进行事件绑定处理等
  $(".indexList").find("li").each(function(item){ 
    $(this).hover(function(){ 
      clearInterval(autoChange);
      changeTo(item);
      curIndex = item;
    },function(){ 
      autoChangeAgain();
    });
  });
  //清除定时器时候的重置定时器--封装
  function autoChangeAgain(){ 
      autoChange = setInterval(function(){ 
      if(curIndex < imgLen-1){ 
        curIndex ++;
      }else{ 
        curIndex = 0;
      }
    //调用变换处理函数
      changeTo(curIndex); 
    },2500);
    }
  function changeTo(num){ 
    var goLeft = num * 400;
    $(".imgList").animate({left: "-" + goLeft + "px"},500);
    $(".infoList").find("li").removeClass("infoOn").eq(num).addClass("infoOn");
    $(".indexList").find("li").removeClass("indexOn").eq(num).addClass("indexOn");
  }
}
  
  
  
  
  
  