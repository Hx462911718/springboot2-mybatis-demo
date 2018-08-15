$(function(){
	$(".user").hover(function(){
		$(".user .downlist").toggle();
	});
	$(".navbar li a").click(function(){
		$(this).addClass("active");
		$(this).parents().siblings().children().removeClass("active");
	});
	$(".sidebar h2").click(function(){
		if(!$(".sidebar").is(".collapse")){
            $(".sidebar").stop().animate({width:"11px"},"fast",function(){
				$(".sidebar").addClass("collapse");
			})
        }
		/*else{
            $(".sidebar").stop().animate({width:"200px"},"fast",function(){$(".sidebar").removeClass("collapse")});
        }*/
    });
	$(".sidebar").click(function(){
		if($(".sidebar").is(".collapse")){
            $(".sidebar").stop().animate({width:"200px"},"fast",function(){$(".sidebar").removeClass("collapse")});
        }
	});
    //一级菜单
    $(".s-menu > li > a").click(function () {
        $(this).addClass("active");
		$(this).parent().siblings().children(".s-menu > li > a").removeClass("active");
    });
	
	//标准作业图
	$(".searchbox-button").click(function () {
        $(".search-result").slideDown();
		$(".mark").fadeIn();
    });
	//鼠标经过列表的每一条记录，对应的mark的a会出现
	$(".thing-list li").hover(function(){
		var numble=$(this).index();
		$(this).addClass("light").siblings().removeClass("light");
		$(".mark > a").eq(numble).addClass('high').siblings().removeClass('high');
	},function(){
		$(this).removeClass("light");
		$(".mark > a").eq(numble).removeClass('high');
	});
	//鼠标不在这个区域内，mark会消失
	$(".thing-list").mouseleave(function(){
		$(".mark > a").removeClass('high');
	});
	
	
	//点击列表的每一条记录，对应的mark的a会出现
	$(".thing-list li").click(function(){
		$(".search-result").hide();
		var num=$(this).index();
		$(".mark > a").eq(num).show().siblings().fadeOut();
	});
	$(".thing-list li.normal").click(function(){
		$(".search-result").hide();
		$(".list-detail.un-normal").hide();
		$(".list-detail.normal").show();
	});
	$(".thing-list li.un-normal").click(function(){
		$(".search-result").hide();
		$(".list-detail.normal").hide();
		$(".list-detail.un-normal").show();
	});
	//返回
	$(".list-detail.normal .list-detail-return").click(function(){
		$(".list-detail.normal").hide();	
		$(".list-detail.un-normal").hide();
		$(".search-result").show();
		$(".mark > a").fadeIn();
	});
	$(".list-detail.un-normal .list-detail-return").click(function(){
		$(".list-detail.un-normal").hide();
		$(".list-detail.normal").hide();	
		$(".search-result").show();
		$(".mark > a").fadeIn();
	});
	//点击列表的每一条记录，对应的mark的a会出现
	$(".mark > a").hover(function(){
		var Snum=$(this).index();
		$(this).addClass("high").siblings().removeClass("high");
		$(".thing-list li").eq(Snum).addClass('light').siblings().removeClass('light');
	},function(){
		$(this).removeClass("light");
		$(".thing-list li").eq(Snum).removeClass('light');
	});
	$(".mark > a.marks-normal").click(function(){
		$(".search-result").hide();
		$(".list-detail.un-normal").hide();	
		$(".list-detail.normal").show();	
	});
	$(".mark > a.marks-abnormal").click(function(){
		$(".search-result").hide();
		$(".list-detail.normal").hide();	
		$(".list-detail.un-normal").show();	
	});

	
	$("input[type=radio][name=aaa].input-radio").click(function(){
		$(this).addClass("active");	
		$(".input-radio").not(this).removeClass("active");
		//$(this).parent().siblings().children("input[type=radio][name=aaa].input-radio").removeClass("active");
	});
	//标准作业图-右边
	$(".layer-box li:not(:eq(3))").click(function(){  
		var index=$(this).index();
		$(this).children(".sion").addClass('active');
		$(this).siblings().children(".sion").removeClass('active');
		$(".layer-con >.layer-pane").eq(index).addClass('active').siblings().removeClass('active');
	});
	$(".layer-box li:eq(3)").click(function(){  
		$(this).children().toggleClass('active');
		$(this).siblings().children().removeClass('active');
		$(".layer-con >.layer-pane.layer-pane4").toggleClass('active').siblings().removeClass('active');
	});
	$(".layer-head .close").click(function(){
		$(this).parent().parent(".layer-pane").removeClass('active');
		$(".layer-box li:eq(0) .sion,.layer-box li:eq(1) .sion,.layer-box li:eq(2) .sion,.layer-box li:eq(3) .sion").removeClass("active");
	});
	$(".layer-ul.radio-chosen li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	$(".layer-ul.more-chosen li").click(function(){
		$(this).toggleClass("active");
	});
	
	
	$(".ceng-jian").click(function(){
		$(this).toggleClass("active");
		$(".ceng-big-box").slideToggle();
	});
	$(".ceng-title").click(function(){
		$(this).children(".ceng-title i").toggleClass("on");
		$(this).siblings(".ceng-cont").slideToggle();
	});
	$(".layel-ul.radio-chosen li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	$(".layel-ul.more-chosen li").click(function(){
		$(this).toggleClass("active");
	});
	
	//页码
	$(".paging > p > a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");	
	});
	$(".page > a").click(function(){
		$(this).addClass("active").siblings().removeClass("active");	
	});
	
	

	
	$(".nav-pills > a").click(function () {
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".cus-date > label").eq(index).addClass('active').siblings().removeClass('active');
	});
	
	
	//树控件的折叠展开
	$(".tree-box .tree-box-info").click(function(){
		$(this).toggleClass("current");
		$(this).siblings(".tree-con").toggleClass("fold");
	});
	$(".tree-con .tree-top .close").click(function(){
		$(".tree-box .tree-box-info").removeClass("current");
		$(".tree-box .tree-con").removeClass("fold");
	});

	
	//tab【太多tab】
	$('a[data-toggle=tab]').click(function(){
       $(this).parent().addClass("active").siblings().removeClass("active");
       selector = $(this).attr("data-target");
	   $(selector).addClass("active").siblings().removeClass("active");
       $(selector).siblings().css("display","none")
       $(selector).fadeIn("fast");
   });
   
   

	//新弹出窗口 sidebar maincontent
	function posContent(){
		$(".pop-window").height($(window).height()-30)
		$(".sidebar").height($(window).height()-$(".header").height()-2)
		$(".sidebar .sidebar-cc").height($(window).height()-$(".header").height()-$(".sidebar h2").height()-2)
		$(".main-box").height($(window).height()-$(".header").height()-2)
		$(".sidebar .s-pop").height($(window).height()-$(".header").height()-2)
	}
	posContent()
	$(window).resize(posContent);
	$(".nicescroll").niceScroll({cursorcolor: "#a1cded"});
	$(".nicescroll-v").niceScroll({cursorcolor: "#a1cded"});
	$(".nicescroll-h").niceScroll({cursorcolor: "#a1cded"});
	
	//modal 弹出框可拖动
	$(".modal").each(function(){
		$(this).drags({handle:".modal-header"});
	});
	//解决Modal弹出时页面左右移动问题
	$('.modal').on('shown.bs.modal',
    function(){
		var body_scrollHeight = $('body')[0].scrollHeight;
		var docHeight = document.documentElement.clientHeight;
		if(body_scrollHeight > docHeight){
		  $('body').css({
			'overflow' : 'hidden',
			'margin-right' : '15px'
		  });
		  //$('.modal').css({'overflow-y':'scroll'})
		}else{
		  $('body').css({
			'overflow' : 'auto',
			'margin-right' : '0'
		  });
		  //$('.modal').css({'overflow-y':'auto'})
		}
	  });
	$('.modal').on('hidden.bs.modal',
    function(){
		var body_scrollHeight = $('body')[0].scrollHeight;
		var docHeight = document.documentElement.clientHeight;
		if(body_scrollHeight > docHeight){
		  $('body').css({
			'overflow' : 'auto',
			'margin-right' : '0'
		  });
		}else{
		  $('body').css({
			'overflow' : 'auto',
			'margin-right' : '0'
		  });
		}
	  });
})

