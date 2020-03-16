function fun() {
	let smallbox = document.getElementById("SmallBox");
	let mask = document.getElementById("Mask");
	let bigbox = document.getElementById("BigBox");

	class Magnifier {
		constructor(smallbox, mask, bigbox) {
			this.small = smallbox;
			this.mask = mask;
			this.big = bigbox;
		}


		onmouseover() {
			let that = this;
			this.small.onmouseover = function() {
				that.mask.style.display = 'block'
				that.big.style.display = 'block';
			}
		}


		onmousemove() {
			let that = this;
			this.small.onmousemove = function(evt) {
				let e = evt || event;

				let left = e.pageX - that.small.offsetLeft - that.mask.offsetWidth / 2;
				let top = e.pageY - that.small.offsetTop - that.mask.offsetHeight / 2;

				if (left < 0) {
					left = 0;
				}
				let maxLeft = that.small.offsetWidth - that.mask.offsetWidth;

				if (left > maxLeft) {
					left = maxLeft;
				}

				if (top < 0) {
					top = 0;
				}

				let maxTop = that.small.offsetHeight - that.mask.offsetHeight;

				if (top > maxTop) {
					top = maxTop
				}

				that.mask.style.left = left + "px";
				that.mask.style.top = top + "px";

				let x = that.big.offsetWidth * left / that.mask.offsetWidth;
				let y = that.big.offsetHeight * top / that.mask.offsetHeight;

				that.big.style.backgroundPositionX = -x + "px";
				that.big.style.backgroundPositionY = -y + "px";

			}
		}

		onmouseout() {
			let that = this;
			this.small.onmouseout = function() {
				that.mask.style.display = "none";
				that.big.style.display = "none";
			}
		}

		eventBind() {
			this.onmouseover();
			this.onmousemove();
			this.onmouseout();
		}

	}
	let Bigmirror = new Magnifier(smallbox, mask, bigbox);
	Bigmirror.eventBind();
}
fun();

//改变放大镜高度
function fun1() {
	let Obig = document.getElementById("BigBox");
	let Otop = document.getElementsByClassName("vanclHead")[0];
	window.onscroll = function() {
		let scro = document.documentElement.scrollTop;
		if (scro > 167) {
			Obig.style.top = "337px"
		} else {
			Obig.style.top = "234px"
		}
	}
}

fun1();


// 放大镜更换照片
$(function() {
	$(".color a").click(function() {
		i = $(this).index();
		$(this).css({
			"border": "2px solid #b81c22",
		});
		$(".color a").not(this).css({
			"border": "1px solid black"
		});
		
		$("#SmallBox").css({
			"background":"url(imgs/" + i + ".jpg)"
		});
		$("#BigBox").css({
			"background":"url(imgs/" + i + ".jpg) no-repeat ",
			"background-size":"900px 800px"
		})
		
		switch (i){
			case 2:
			$(".smallpicture a").css({
				"background":"url(img/ff.jpg)"
			})
			break;
			case 1:
			$(".smallpicture a").css({
				"background":"url(img/jj.jpg)"
			})
			break;	
		}
		
	})

})

//去购物车
$("#carsDiv").click(function(){
	$("#Eject").css({
		"display":"block"
	});
})

$(".close1").click(function(){
		$("#Eject").css("display","none")
	})

