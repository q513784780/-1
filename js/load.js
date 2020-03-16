$("#help").hover(function() {
	$("#help").css({
		"color": "#b42025",
		"text-decoration": "underline"
	})
}, function() {
	$("#help").css({
		"color": "#000",
		"text-decoration": "none"
	})
})



$(".inputPlay").click(function() {
	i = $(this).index();
	$(this).css({
		"backgroundColor": "#b42025",
		"color": "white"
	}).siblings().css({
		"backgroundColor": "#f5f5f5",
		"color": "#656565"
	})

	$(".user_infor").eq(i).css({
		"display": "block"
	}).siblings().css({
		"display": "none"
	})
})


let i = 0;
$("label").click(function() {

	i++;

	$(this).css({
		"z-index": 8
	})


	$("label").not(this).css({
		"z-index": 10
	})

})

//后台连接判断登录用户名
let name = document.getElementById("vanclUserName");
let pwd = document.getElementById("vanclUserpwd");
let flagPhone = false;

$("#Again")[0].onclick = function() {
	let code;

	function createCode() {
		code = "";
		let selectChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N",
			"O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
		];
		for (let i = 0; i < 4; i++) {
			let charIndex = Math.floor(Math.random() * 36);
			code += selectChar[charIndex];
		}
		$("#WordCode").html(code);
	}
	createCode();
}


name.onkeyup = function() {
	$(".name .tips")[0].style.display = "block";
	let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
	let num = name.value;
	if (phoneCodeVerification.test(num) == false) {
		$(".name .tips")[0].innerHTML = "请输入正确的手机号"
	} else {
		flagPhone = true;
		$(".name .tips")[0].innerHTML = "正确";
		setTimeout(function() {
			$(".name .tips")[0].style.display = "none";
		}, 3000)
	}
}


pwd.onkeyup = function() {
	$(".pwd .tips")[0].style.display = "block";
	let reg = /[A-Za-z]+[0-9]+/;
	if (reg.test(pwd.value) && pwd.value.length >= 6 && pwd.value.length <= 12) {
		$(".pwd .tips")[0].innerHTML = ""
	} else {

		$(".pwd .tips")[0].innerHTML = "不正确"
		setTimeout(function() {
			$(".pwd .tips")[0].style.display = "none";
		}, 3000)

	}
}

//阿贾克斯进行用户名的验证
let Oinput = document.getElementById("load");

Oinput.onclick = function() {
	if (flagPhone) {
		let xhr;
		if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHttp");
		} else {
			xhr = new XMLHttpRequest();
		}
		xhr.open("GET", "php/load.php?username=" + name.value, true);
		xhr.onreadystatechange = function() {
			if (xhr.status == 200 && xhr.readyState == 4) {
				fun(xhr.responseText);
			}
		}
		xhr.send();
	}

	function fun(str) {
		if (str == 1) {
			alert("欢迎亲")
			location.href = "post.html"
			
		} else if (str == 0) {
			alert("用户名不存在");
		}
	}

}
