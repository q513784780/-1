//下拉导航

	$(function() {
		$(".itms").mousemove(function() {
			$(this).find(".subNav").slideDown();
		});
		$(".itms").mouseleave(function() {
			$(this).find(".subNav").stop(true, true).slideUp();
		});
	});


	//回到顶部

	$(function() {
		$(".gotop").click(function() {
			$(window).scrollTop(0);
		})
	})


	function fun() {
		let Osearch = document.getElementById("searchGoods");
		//文本框
		Osearch.onmouseover = function() {
			Osearch.style.border = "1px solid blue"
		}
		Osearch.onmouseout = function() {
			Osearch.style.border = null;
		}
	}
	fun();

	//倒计时

	function FreshTime() {
		let Endtime = new Date("2019/11/11,12:20:12");
		let Nowtime = new Date();
		let leftTime = parseInt((Endtime.getTime() - Nowtime.getTime()) / 1000);
		d = parseInt(leftTime / 3600 / 24);
		h = parseInt((leftTime / 3600) % 24);
		m = parseInt((leftTime / 60) % 60);
		d = parseInt(leftTime % 60);

		let Our = document.getElementsByClassName("Our")[0];
		let Min = document.getElementsByClassName("Min")[0];
		let Sec = document.getElementsByClassName("Sec")[0];

		Our.innerHTML = h;
		Min.innerHTML = m;
		Sec.innerHTML = d;

		if (m < 10) {
			Min.innerHTML = "0" + m;
		}

		if (d < 10) {
			Sec.innerHTML = "0" + d;
		}

		if (leftTime <= 0) {
			clearInterval(sh);
		}
	}

	FreshTime();
	let sh;
	sh = setInterval(FreshTime, 1000);


	// function dialog() {
	// 	$("body").append(
	// 		"<a id='Topheader' style='display:block;z-index:9999;position:absolute;top:0;left:160px;width:1200px;height:600px;background:url(img/top.jpg)'></a>"
	// 	)
	// 	$("body").css({
	// 		"opacity":".4",
	// 		"background-color":"black",
	// 		"position":"relative",
	// 		"z-index":"600"
	// 	})
	// }
	
// 	dialog();
// 