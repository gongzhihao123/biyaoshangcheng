$(function(){
	//头部图片的显示和隐藏
	$(".top-app").mouseenter(function(){
		$(".app").css("display","block")
	})
	$(".top-app").mouseleave(function(){
		$(".app").css("display","none")
	});
	
	   //吸顶效果
     $(function(){
	var TIMER;
	$(window).scroll(function(){
		clearTimeout(TIMER);
		if($(document).scrollTop()>840){
			TIMER=setTimeout(function(){
//				$(".view-tit").css("display","block")
				$(".view-tit").addClass("topxd");
				$(".view-tit span").css("display","block")
			
			},0)
		}else{
       TIMER=setTimeout(function(){
				$(".view-tit").removeClass("topxd")
//				$(".view-tit").css("display","none")
			    $(".view-tit span").css("display","none")
			},0)
		}
	})
})
     //图片点击切换效果
     $(".main-img li").click(function(){
     	$(".main-img span img").eq($(this).index())
     	.show()
     	.siblings()
     	.hide()
     })
     $(".measure-btn li").click(function(){
     	$(".measure-btn li").eq($(this).index()).children('i').addClass('inset')
     	                              .parent()
     	                              .siblings()
     	                              .children()
     	                              .removeClass('inset')                              
     })
     $(".view-tit li").click(function(){
     	$(this).addClass('view-active')
     	       .siblings()
     	       .removeClass('view-active');
     	   let index = $(this).index();
     	   console.log($(".case-right>div"));
     	   $(".case-right>div").eq(index).show()
     	                                 .siblings()
     	                                 .hide()
//   	  
     })
     
     
     
     //购物数量
     jQuery.amount = function(){
     	 var index = $(".amount").html();
     $(".minus").click(function(){
     	   index = --index;
     	     if(index<=1){
     	     	index = 1
     	     }
     	$(".amount").html(index)
     })
     $(".add").click(function(){
//      let index = $(".amount").html();
        index++;
        $(".amount").html(index)
     })
     }
     $.amount();//函数调用
     //鼠标滑过效果
     $(".main-shop-show li").mouseenter(function(){
     	$(this).children('div').css("display","block") 	                     
     });
     $(".main-shop-show li").mouseleave(function(){
     	$(this).children('div').css("display","none") 	                     
     });
     $(".left-top-logo").mouseenter(function(){
     	$(".left-top-case").css("display","block")
     })
      $(".left-top-logo").mouseleave(function(){
     	$(".left-top-case").css("display","none")
     })
      
      
      //图片点击效果
       $(".recommend-show li i").mouseenter(function(){
     	$(this).children('img').css({"transform":"scale(1.2)"},{"transtion":"transform 2s"})
     });
     $(".recommend-show li i").mouseleave(function(){
   	$(this).children('img').css({"transform":"scale(1)"},{"transtion":"transform 2s"})
     });
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
     //点击跳转
     $(".now-buy").click(function(){
     	location.href = "gouwuche.html"
     })
     $(".shopart").click(function(){
     	location.href = "gouwuche.html"
     })	
     
     //购买商品
//   $(".main-bottm ul").on("click","li",function(){
//   	var flag = true;
//   	var json ={
//   		src : 
//   	}
//   })
      
})
