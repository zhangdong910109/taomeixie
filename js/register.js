//右侧固定菜单栏
$(".nav-rfloatbg .nav ul li").on("click",function(){
	var _index = $(this).index();
	$(".nav-rfloatbg .nav ul li").children("i").hide();
	$(".nav-rfloatbg .nav-box").show();
	var that = $(this);
	$(".nav-rfloatbg .nav-box").animate({right:-230},200,function(	
	){
		$(".nav-rfloatbg .nav-box").animate({right:34},200);
		$(that).children("i").show();
	});
	$(".nav-rfloatbg .nav-body").hide();
	$(".nav-rfloatbg .nav-body").eq(_index).show();
});
$(".nav-rfloatbg .close").on("click",function(){
	$(".nav-rfloatbg .nav ul li").children("i").hide();
	$(".nav-rfloatbg .nav-box").animate({right:-230},200,function(){
		$(".nav-rfloatbg .nav-box").hide();
	});
	
});
//中间部分动态加载
$(function(){
	$(".register-bg").css("right",-500);
	$("#register-box").css("left",-500);
	$(".register-bg").show();
	$("#register-box").show();
	$(".register-bg").animate({right:35},1000);
	$("#register-box").animate({left:35},1000);
});
//返回顶部效果
$(".nav-rfloatbg .go-top").on("click",function(){
	$(window).scrollTop(0);
});
//注册会员操作
//密码强度
	$("#password").on("keyup",function(){
		var _password = $(this).val(),
			reg1 = /^[0-9a-zA-Z]{4,6}$/,
			reg2 = /^(\d+|[0-9a-zA-Z]+){7,10}$/,
			reg3 = /^(\d+|[a-zA-Z]+|[!#$%*&x22]+){11,16}$/; 
		if(reg1.test(_password)){
			$("#passwordStrength").css("background-position","0 -13px");
		}
		if(reg2.test(_password)){
			$("#passwordStrength").css("background-position","0 -26px");
		}
		if(reg3.test(_password)){
			$("#passwordStrength").css("background-position","0 -39px");
		}
	});
//注册按钮事件
$("#register-btn").on("click",function(){
	if($("#username").val() === ""){
		$("#msg").html("用户名不能为空");
	}
	if($("#password").val() === ""){
		$("#msg").html("密码不能为空");
	}
	if($("#email").val() === ""){
		$("#msg").html("邮箱不能为空");
	}
	if($("#phone").val() === ""){
		$("#msg").html("手机号不能为空");
	}
	if($("#qq").val() === ""){
		$("#msg").html("QQ不能为空");
	}
	if($("#weixin").val() === ""){
		$("#msg").html("旺旺或者微信不能为空");
	}
	if($("#url").val() === ""){
		$("#msg").html("网店地址不能为空");
	}
	if($("#password").val() !== $("#password-again").val()){
		$("#msg").html("两次密码输入不一致");
	}
	else{
		var xhr = new XMLHttpRequest();
		xhr.open("post","register.php",true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send("username="+ $("#username").val() + "&password=" + $("#password").val()+ "&email=" + $("#email").val()+ "&phone=" + $("#phone").val()+ "&name=" + $("#name").val()+ "&qq=" + $("#qq").val()+ "&weixin=" + $("#weixin").val()+ "&url=" + $("#url").val());
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					var data = xhr.responseText;
					$("#msg").html(data);
					top.location='login.html';
				}
			}
		};
	}
});