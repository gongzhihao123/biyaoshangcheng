$(function(){
	$(".msgdl").click(function(){
		$(this).css("color","#523669");
		$(".pwddl").css("color","#808080");
		$("section").css("display","block");
		$(".btn ul").css("display","none")
		
	})
	$(".pwddl").click(function(){
		$(this).css("color","#523669");
		$(".btn ul").css("display","block");
		$("section").css("display","none");
		$(".msgdl").css("color","#808080")
	})
})
//登录页面的正则检测
$(function(){
	var flagcell = null;
	$("#cell input").blur(function(){
		var reg = /^(13|15|18)\d{9}$/;
		 flaga= reg.test($(this).val())
		if(flaga){
			flagcell=true;
			$("#cell span").html("正确")
		}else{
			flagcell=false;
			$("#cell span").html("请输入正确的手机号")
		}
	})
	var flagpwd = null;
	$("#pwd input").blur(function(){
		var reg=/^\w{6,32}$/;
		flags=reg.test($(this).val())
		if(flags){
			flagpwd=true;
			$("#pwd span").html("正确")
		}else{
			flagpwd=false;
			$("#pwd span").html("密码错误")
		}
	})
	function tong(){
   	if($(".con input").prop("checked")){
   		return true;
   	}else{
   	   return false;
   	}
   }
	$("#tj").click(function(){
		if(flagcell&&flagpwd&&tong()){
		var arr = getCookie("cookielist");
		var flag = true;
		for(let i=0;i<arr.length;i++){
		if($("#cell input").val() == arr[i].uname && $("#pwd input").val()==arr[i].upwd){
		location.href="shouye.html";
			flag = true;
		}else{
			flag = false;
			continue;
		}
		}
		if(flag = false){
			alert("用户名或密码错误")
		}
		
		}
		
	})
})
