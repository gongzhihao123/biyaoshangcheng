$(function(){
	//头部图片的显示和隐藏
	$(".top-app").mouseenter(function(){
		$(".app").css("display","block")
	})
	$(".top-app").mouseleave(function(){
		$(".app").css("display","none")
	});
	
	//轮播图的效果
	var timer = setInterval(autoPlay,3000);
	   var index = 0;
	function autoPlay(){
		index++;
		if(index == $(".banner ul li").size()){
			index = 0;
		}
		$(".banner ul li").eq(index)
		                  .addClass("active")
		                  .siblings()
		                  .removeClass("active")
		$(".banner div img").eq(index)
		                    .fadeIn(1000)
		                    .siblings().fadeOut(1000)
	}
	autoPlay();
	$(".banner ul li").click(function(){
		index = $(this).index()-1;
		autoPlay();
	})
//	$(".banner .slider-left").click(function(){
//	    
//		$(this).index--;
//		if(index == -1){
//			index = 0
//		}
//		autoPlay();
//	})

 
     
})
$(function(){
	
	//手风琴效果
	   $(".nav ul").mouseenter(function(){
    	$(this).css({"background":"rgba(225,225,225,0.3)"});
    	$(".nav-list").css("display","block");
    	index = $(this).index();
    	$(".nav-list").eq(index).show()
    	                        .siblings()
    	                        .hide();
    })
    $(".nav-list").mousemove(function(){
    	$(this).css("display","block")
    	
    })
    $(".nav ul").mouseleave(function(){
    	$(this).css({"background":""});
    	$(".nav-list").css("display","none");
    })
     $(".nav-list").mouseleave(function(){
    	$(this).css({"background":""});
    	$(".nav-list").css("display","none");
    })
     $(".sift-show li").mouseenter(function(){
     	$(this).stop().animate({"width":620},1500)
     	              .siblings()
     	              .stop().animate({"width":82},1500)
     })
     
     
     
     //、定位
     $(".dw-btn").mouseenter(function(){
     	$(".dw-show ul").css("display","block");
     	$(".dw-btn img").css("display","none")
     })
      $(".dw-btn").mouseleave(function(){
     	$(".dw-show ul").css("display","none");
     	$(".dw-btn img").css("display","block")
     })
     $(".dw-con").click(function(){
     	$("html,body").animate({"scrollTop":0},1000)
     })
     
     //图片点击效果
     $(".list a i").mouseenter(function(){
     	$(this).children('img').css({"transform":"scale(1.2)"},{"transtion":"transform 2s"})
     });
     $(".list a i").mouseleave(function(){
     	$(this).children('img').css({"transform":"scale(1)"},{"transtion":"transform 2s"})
     });
     $(".list-nav a i").mouseenter(function(){
     	$(this).children('img').css({"transform":"scale(1.2)"},{"transtion":"transform 2s"})
     })
     $(".list-nav a i").mouseleave(function(){
     	$(this).children('img').css({"transform":"scale(1)"},{"transtion":"transform 2s"})
     })
     
     
     
     //吸顶效果
     $(function(){
	var TIMER;
	$(window).scroll(function(){
		clearTimeout(TIMER);
		if($(document).scrollTop()>591){
			TIMER=setTimeout(function(){
				$(".xid").css("display","block")
				$(".xid").addClass("topxd");
			
			},0)
		}else{
       TIMER=setTimeout(function(){
				$(".xid").removeClass("topxd")
				$(".xid").css("display","none")
			},0)
		}
	})
})
     //吸顶衍生效果
     $(".logos-right input").click(function(){
     	event.stopPropagation();
     	$(".logos-right ul").css("display","block");
     })
     $(".logos-right  div ul li").mousemove(function(){
     		 index = $(this).index();
     	 $(".logos-right ul li").eq(index).addClass("xid-c")
     		                              .siblings()
     		                              .removeClass("xid-c")
     	})
     $(".logos-right  div ul li").click(function(){
     	
     	 $(".logos-right input").val($(this).children('a').html());
     })
     $(document).click(function(evet){
     	$(".logos-right ul").css("display","none")
     })
})
