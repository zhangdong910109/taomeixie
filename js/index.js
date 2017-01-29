//商品分类导航展示
$(".main-nav-cata ul li").on("mouseenter",function(){
	var _index = $(this).index(),
		_width = $(".main-nav-cata").width();
	$(this).children("i").show();
	$(".show-nav").hide();
	$(".show-nav").eq(_index).show();
	$(".show-nav").animate({left:_width},500);
});
$(".main-nav-cata ul li").on("mouseleave",function(){
	$(this).children("i").hide();
});
$(".main-nav").on("mouseleave",function(){
	$(".show-nav").hide();
	$(".show-nav").animate({left:0},1);
	$(".main-nav-cata ul li").children("i").hide();
});
//banner淡入淡出轮播
$(function(){
 	var lis = $("#imgs li"),
 		currentIndex = 0,
 		nextIndex = 1,
 		len = lis.length;
 	
 	$(".banner-t").on("mouseenter",function(){
 		clearInterval(timer);
 	});
 	$(".banner-t").on("mouseleave",function(){
 		timer = setInterval(move,3000);
 	});
   	$("#pages a").on("click",function(){
   		if($(this).index() === currentIndex){
   			return;
   		}
   		nextIndex = $(this).index();
   		move();
   	});
 	var cirs = $("#pages a"); 
 		cirs[0].className = "curr";
 	var timer = setInterval(move,3000);
 	function move(){
   		$(lis[currentIndex]).fadeOut(1000);
 		$(lis[nextIndex]).fadeIn(1000);
 		cirs[currentIndex].className = "";
 		cirs[nextIndex].className = "curr";
 		currentIndex = nextIndex;
 		nextIndex++
 		if(nextIndex >= len){
 			nextIndex = 0;
 		}
 	}	
});
//banner右侧选项卡
$(function(){
	$(".tab-title a").first().addClass("hover");
	$(".tab-title a").on("mouseenter",function(){
	$(".tab-title a").removeClass("hover");
	$(this).addClass("hover");
	var _index = $(this).index();
	$(".tab").hide();
	$(".tab").eq(_index).show();
	});
});
//长期有货楼层排行榜
$(".keep-floor .top li").on("mouseenter",function(){
	if($(this).index()!== 0&&$(this).index()!== 1){
		if($(".big-top").length >= 1){
		$(".keep-floor .top li").removeClass("big-top");
		$(this).addClass("big-top");
		}
	}
});
//实时订单轮播
$(function(){
	$(".about-us .show-name a").eq(0).addClass("hover");
	$(".about-us .show-name a").eq(0).css("width",120);
	$(".about-us .show-name a").on("mouseenter",function(){
		$(".about-us .show-name a").removeClass("hover");
		$(this).addClass("hover");
		var _index = $(this).index();
		$(".us-l ul").hide();
		$(".us-l ul").eq(_index).show();
	});
	var lis = $(".about-us .order li"),
		len = lis.length,
		_height = $(lis[0]).height() + 2,
		timer = setInterval(move,3000);
	function move(){
		var _top = parseInt($(".us-l ul").css("top"));
		$(".us-l ul").animate({top:_top - _height},500,function(){
			if(_top <= -(len-4) * _height){
				_top =$(".us-l ul").css("top",0);	
			}
		});
	}
});

//关于我们展示
$(function(){
	//初始化
	$(".floor-box .us li").eq(0).addClass("click");
	$(".floor-box .show-box").eq(0).show();
	//点击事件
	$(".floor-box .us").on("click","li",function(){
		var _index = $(this).index();
		$(".floor-box .us li").removeClass("click");
		$(this).addClass("click");
		$(".floor-box .show-box").hide();
		$(".floor-box .show-box").eq(_index).show();
	});
});
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




















