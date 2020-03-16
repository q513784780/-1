let i = 0;
let time;
//第一张显示，其余的隐藏
//show显示函数
//每一张遍历显示
function showTime(){
		time = setInterval(function(){
			i++;
			if(i > 6){
			i = 0;
			}	
			Show();					
		},4000);
	};
	
	function Show(){
		$(".ig").stop(true,true);
		$(".ig").eq(i).fadeIn(500).siblings(".ig").fadeOut(500);
		$(".tabs li").eq(i).addClass("bg").siblings(".tabs li").removeClass('bg');
	}
	//定时显示	

$(function(){
	$(".ig").eq(0).show().siblings(".ig").hide();
	showTime();
	$(".tabs li").hover(function(){
		i = $(this).index();
		Show();
		clearInterval(time);
	},function(){
		showTime();
	});
	//鼠标点击左键
	$(".pre").click(function(){
		clearInterval(time);
		if(i == 0){
			i = 7;
		}
		i--;
		Show();
		showTime();
	});
	//鼠标点击右键
	$(".next").click(function(){
		clearInterval(time);
		if(i == 6){
			i = -1;
		}
		i++;
		Show();
		showTime();
	});
	
	$(".ig img").hover(function(){
		clearInterval(time);
	},function(){
		showTime();
	})
	
});
