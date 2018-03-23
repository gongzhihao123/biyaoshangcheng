$(function(){
//	数量改动
	$.Num = function(){
		let num = $("#shop-num").html();
	$("#minus").click(function(){
		 --num;
		if(num<=0){
			num=0;
			$("#minus").css("color","#ccc")
		}
		$("#shop-num").html(num);
		let index = $("#shop-num").html();
//		//总金额
		$(".main-top-right p i").html($(".main-top-right span i").html()*index)
//		//商品总价
			 $(".main-bottom-right span p").html($(".main-top-right span i").html()*index)
//			 //总数
	 $(".main-bottom-right b p").html(index)
			 
	})
	$("#increase").click(function(){
		++num;
		$("#shop-num").html(num);
		let index = $("#shop-num").html();
//		//总金额
	$(".main-top-right p i").html($(".main-top-right span i").html()*index)
	//商品总价
	$(".main-bottom-right span p").html($(".main-top-right span i").html()*index)
//	 //总数
//	 $(".main-bottom-right b p").html(index)
	})
	}
//	
    


		//购物车
		var arr = getCookie("shoplist");
		var html ="";
		for(var i = 0;i<arr.length;i++){
			var shopinfo = arr[i];
			html +=`<div class="main-top-left">
		 				<input type="radio" id="left-check" class="check"/>
		 				<a href=""><img src="../shouye/img/${shopinfo.url}.jpg"/></a>
		 				<div class="xinxi">
		 					<p>${shopinfo.name}</p>
		 					<span>颜色：<i>黑色</i></span>
		 					<b>尺寸：<i>S</i></b>
		 				</div>
		 			</div>
		 			<div class="main-top-right">
			 			<span>￥<i>${shopinfo.price}</i></span>
			 			<div class="shop-num">
			 				<li id="minus">-</li>
			 				<li id="shop-num">${shopinfo.count}</li>
			 				<li id="increase">+</li>
			 			</div>
			 			<p>￥<i>${shopinfo.count*shopinfo.price}</i></p>
			 			<a href="javaScript:;"></a>
		 		    </div>
	 	        </div>`
		}
		$(".main-top").html(html);
			//结算
	function jiesuan(){
				//获取被选中的复选框的商品数量  累加
		var sumCount = 0;
		var sumMoney = 0;
		$(".check:checked").each(function(){
			sumCount += parseInt( $(this).parent().parent().find(".shop-num").html() );
			sumMoney += parseInt( $(this).parent().parent().find(".main-top-right p i").html() );
		})
		$(".main-bottom-right b p").html( sumCount );
		$(".main-bottom-right span p").html( sumMoney );
	}
		//全选
	$("#bottom-left-check").click(function(){
		$(".check").prop("checked",$(this).prop("checked"));
		jiesuan();
	})
	$("#tit-check").click(function(){
		$(".check").prop("checked",$(this).prop("checked"));
		jiesuan();
	})
	//删除
$(".main-top-right a").click(function(){
		var pid = $(this).parent().find(".count").data("id");
		var pname =  $(this).parent().find(".count").data("name");
		//操作cookie
		for( var i = 0 ; i < arr.length ; i++){
			if( arr[i].id == pid && arr[i].name == pname ){
				//操作数组 
				arr.splice( i,1 );
				//将数组重新存入到cookie
				setCookie("shoplist",JSON.stringify(arr));
				break;
			}
		}
		$(this).parent().parent().remove();
	})

  $.Num();	
})
	