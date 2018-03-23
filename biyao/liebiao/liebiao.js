$(function(){
	//获取内容
	$.getJSON("nav1.json","",function(data){
		var str = "";
		$.each(data.info, function(i,item) {	
			str += `<li>
					<a href="xiangqing.html">
						<i><img src="img/${item.url}.jpg" /></i>
						<dl>
							<dt>${item.name}</dt>
							<dd>￥${item.price}</dd>
						</dl>
					</a>
					    <button data-name='${item.name}' data-price='${item.price}' data-src='${item.url}' data-id='${item.id}'>加入购物车</button>
				</li>`
		$(".list").html(str)
		});
	})
//	点击跳转
	$(".list li img").click(function(){	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          location.href = "../shouye/xiangqing.html";
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
     $(".list li i").mouseenter(function(){
     	$(this).children('img').css({"transform":"scale(1.2)"},{"transtion":"transform 2s"})
     });
     $(".list li i").mouseleave(function(){
     	$(this).children('img').css({"transform":"scale(1)"},{"transtion":"transform 2s"})
     });
     
     
     //添加购物车
     	//为每一个button按钮添加一个单击事件  委托
		$(".list").on("click","button",function(){
			var  arr = [];
			var flag = true;//如果值为true  就想数组中添加产品
			var json = {
				id : $(this).data("id"),
				name : $(this).data("name"),
				price : $(this).data("price"),
				src : $(this).data("src"),
				count : 1
			}
		//将cookie中的数据取出来  判断当前的商品在cookie中是否存在  如果存在就cound++ 
			var oldCookie = getCookie("list");
			if( oldCookie.length != 0 ){//说明有cookie数据
				arr = oldCookie;//将取出来的cookie数据存入到数组中  
				for( var i = 0 ; i < arr.length ; i++ ){
					//说明当前操作的商品已经存入到购物车了  
					if( json.id  == arr[i].id && json.name == arr[i].name ){
						arr[i].count++;
						flag = false;
						break;
					}
				}
			}
			if( flag ){
				arr.push( json );
			}
			
			setCookie("shoplist",JSON.stringify(arr));
			
			if( !confirm("点击确定，继续购物，点击取消，去购物车结算") ){
				location.href = "gouwuche.html";
			}
		})
})

