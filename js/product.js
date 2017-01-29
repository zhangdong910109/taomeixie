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
//购物车hover效果
$(".top-cart").on("mouseenter",function(){
	$(".top-cart .cart-info").css("background-color","white");
	$(".top-cart .cart-box").show();
	$(".top-cart .cart-info").css("border-bottom","1px solid white");
	
});
$(".top-cart").on("mouseleave",function(){
	$(".top-cart").css("background","#f7f7f7");
	$(".top-cart .cart-info").css("border-bottom","1px solid #ccc");
	$(".top-cart .cart-box").hide();
});
//返回顶部效果
$(".nav-rfloatbg .go-top").on("click",function(){
	$(window).scrollTop(0).animate(1000);
});
//左侧二级菜单效果
$(".first-class .move").on("click",function(){
//	$(this).addClass("gomove");
	$(this).toggleClass("gomove");
	var _index = $(this).parent().siblings();
	if($(_index).css("display")==="none"){
		$(_index).show();
	}
	else{
		$(_index).hide();
	}
		
});
//热销榜
$(".main-left .product-top li").on("mouseenter",function(){
	if($(this).index()!== 0&&$(this).index()!== 1){
		if($(".big-top").length >= 1){
		$(".main-left .product-top li").removeClass("big-top");
		$(this).addClass("big-top");
		}
	}
});

$(function(){
	//选择颜色
	$(".product-show .color label").eq(0).children("span").show();
	$(".product-show .color label").on("click",function(){
		$(".product-show .color label").children("span").hide();
		$(this).children("span").show();
	});
	//选择尺寸
	$(".product-show .size label").eq(0).children("span").show();
	$(".product-show .size label").on("click",function(){
		$(".product-show .size label").children("span").hide();
		$(this).children("span").show();
	});
	//选择件数
	//加
	$(".product-show .spinner-arrow-up").on("click",function(){
		var _val = parseInt($(".product-show .spinner-text").val())+1;
		var _max = parseInt($(".product-show #storage").html());
		if(_val <=_max){
			$(".product-show .spinner-text").val(_val);
		}
		
	});
	//减
	$(".product-show .spinner-arrow-down").on("click",function(){
		var _val = parseInt($(".product-show .spinner-text").val())-1;
		if(_val > 0){
			$(".product-show .spinner-text").val(_val);
		}
	});
});
//放大镜效果
$(function(){
	$(".jqzoom").imagezoom();
	$("#thumblist li a").click(function(){
		$(this).parents("li").addClass("tb-selected").siblings().removeClass("tb-selected");
		$(".jqzoom").attr('src',$(this).find("img").attr("mid"));
		$(".jqzoom").attr('rel',$(this).find("img").attr("big"));
	});
});
