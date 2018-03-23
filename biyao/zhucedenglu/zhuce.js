//随机生成验证码
window.onload=function(){
	   var strBrr=[];
	function getCode(){
		for(var i=1;i<=4;i++){
			var code=rand(48,122)
			if(code>=58&&code<=64||code>=91&&code<=96){
				i--
			}else{
				strBrr[i]=String.fromCharCode(code);
			}
		}
		return strBrr.join("")
	}
	
	$id("yt").innerHTML=getCode();
	$id("yt").onclick=function(){
		$id("yt").innerHTML=getCode();
	   $id("yt").style.color=getColor();
	}
		$id("yt").style.color=getColor();
	return false;	
}
//注册页面
$(function(){
	//正则验证
	var flaguser = null;
    $("#user input").blur(function(){
    	var reg = /^(13|15|18)\d{9}$/;
    	flaga = reg.test($(this).val());
    	if(flaga){
    		flaguser = true;
    		$("#user span").html("正确")
    	}else{
    		flaguser = false;
    		$("#user span").html("请输入正确的手机号")
    	}
    })
    var flagyz = null;
    $("#yz input").blur(function(){
    	if($("#yz input").val() == $("#yt").html()){
    		flagyz = true;
    		$("#yz span").html("正确")
    	}else{
    		flagyz = false;
    		$("#yz span").html("验证码错误")
    	}
    })
    var flagpwd = null;
    $("#pwd input").blur(function(){
    	var reg = /^\w{6,32}$/;
    	flagmm = reg.test($(this).val()) 
    	if(flagmm){
    		flagpwd = true;
    		$("#pwd span").html("正确");
    	}else{
    		flagpwd = false;
    		$("#pwd span").html("密码格式错误")
    	}
    })
    var flagcheck = null;
    $("#check input").blur(function(){
    	if($(this).val() == $("#pwd input").val()){
    		flagcheck = true;
    		$("#check span").html("密码一致")
    	}else{
    		flagcheck = false;
    		$("#check span").html("密码不一致")
    	}
    })
   function tong(){
   	if($("#deal input").prop("checked")){
   		return true;
   	}else{
   	   return false;
   	}
   }
   $("#sub").click(function(){
   	arr = getCookie("cookielist");
   	if(flaguser&&flagyz&&flagpwd&&flagcheck&&tong()){
   		var json = {
   			 uname : $("#user input").val(),
		    upwd : $("#pwd input").val()
   		}
   		arr.push(json);
   		setCookie("cookielist",JSON.stringify(arr),7)
   		location.href = "denglu.html"
   	}else{
   		return false;
   	}
   })
})
