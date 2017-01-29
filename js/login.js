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
	$(".login-bg").css("left",-500);
	$("#login-box").css("right",-500);
	$(".login-bg").show();
	$("#login-box").show();
	$(".login-bg").animate({left:35},1000);
	$("#login-box").animate({right:35},1000);
});
//返回顶部效果
$(".nav-rfloatbg .go-top").on("click",function(){
	$(window).scrollTop(0);
});
//登录验证
$("#login-btn").on("click",function(){
	if($("#username").val() === ""){
		$("#msg").html("用户名不能为空");
	}
	if($("#password").val() === ""){
		$("#msg").html("密码不能为空");
	}
	else{
		var xhr = new XMLHttpRequest();
		xhr.open("post","login.php",true);
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xhr.send("username="+ $("#username").val() + "&password=" + $("#password").val());
		xhr.onreadystatechange = function(){
			if(xhr.readyState === 4){
				if(xhr.status === 200){
					var data = xhr.responseText;
					$("#msg").html(data);
					top.location='index.html'; 
				}
			}
		};
	}
});