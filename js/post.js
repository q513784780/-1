//生成验证码的功能 
let Ocode = document.getElementById("code");
let Ophone = document.getElementById("newphone");
let Opwd = document.getElementById("pwd");
$(".yanzhen a")[0].onclick = function() {
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
		$(".yanzhen a").html(code);
	}
	createCode();
}

Ocode.onkeyup = function() {
	$(".yanzhen span").css("display", "block")
	if (Ocode.value == 0) {
		$(".yanzhen span").html("请输入验证码");
	} else if (Ocode.value != $(".yanzhen a").html()) {
		$(".yanzhen span").html("验证码输入有误");
	} else {
		flagCode = true;
		$(".yanzhen span").html("输入正确");
		setTimeout(function() {
			$(".yanzhen span")[0].style.display = "none";
		}, 3000)
	}
}

//获取短信验证码
let i = 0
$(".newPhone a")[0].onclick = function() {
	i++;
	if (i == 1) {
		let time = 10;
		timer = setInterval(function() {
			$(".newPhone a")[0].innerHTML = time;
			time--;
			if (time < 0) {
				i = 0;
				clearInterval(timer);
				$(".phonecode input")[0].value = "123456";
				$(".newPhone a")[0].style.fontSize = "12px";
				$(".newPhone a")[0].innerHTML = "获取短信验证码";
			}
		}, 1000);
	}
}

//手机注册 
Ophone.onkeyup = function() {
	$(".newPhone span")[0].style.display = "block";
	let phoneCodeVerification = /^[1][3,4,5,7,8][0-9]{9}$/;
	let num = Ophone.value;
	if (phoneCodeVerification.test(num) == false) {
		$(".newPhone span")[0].innerHTML = "请输入正确的手机号"
	} else {
		flagPhone = true;
		$(".newPhone span")[0].innerHTML = "可以注册";
		setTimeout(function() {
			$(".newPhone span")[0].style.display = "none";
		}, 3000)
	}
}

//密码验证
Opwd.onkeyup = function() {
	$(".phoneselect span")[0].style.display = "block";
	let reg = /[A-Za-z]+[0-9]+/;
	if (reg.test(Opwd.value) && Opwd.value.length >= 6 && Opwd.value.length <= 12) {
		flagPwd = true;
		$(".phoneselect span")[0].innerHTML = "可以注册"
		setTimeout(function() {
			$(".phoneselect span")[0].style.display = "none";
		}, 3000)
	} else {
		$(".phoneselect span")[0].innerHTML = "请输入6位至12位数字与字母且以字母开头";

	}
}

//确认密码
$(".phoneagin input")[0].onkeyup = function() {
	$(".phoneagin span")[0].style.display = "block";
	if ($(".phoneagin input")[0].value == Opwd.value && $(".phoneagin input")[0].value.value != "") {
		flagPwd = true;
		$(".phoneagin span")[0].innerHTML = "可以注册"
		setTimeout(function() {
			$(".phoneagin span")[0].style.display = "none";
		}, 3000)
	} else {
		$(".phoneagin span")[0].innerHTML = "密码不一致"
	}
}


//阿贾克斯实现注册功能
let flagName = false;
let flagPwd = false;
let flagPhone = false;
let flagCode = false;
let sub = document.getElementsByClassName("submit")[0];
sub.onclick = function() {
	if (flagPwd && flagPhone && flagCode) {
		let xhr;
		if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHttp");
		} else {
			xhr = new XMLHttpRequest();
		}

		xhr.open("GET", "php/post.php?usname=" + Ophone.value + "&" + "uspwd=" + Opwd.value, true);

		xhr.onreadystatechange = function() {
			if (xhr.status == 200 && xhr.readyState == 4) {
				fun(xhr.responseText);
			}
		}

		xhr.send();

		function fun(str) {
			alert(str)
		}
	} else {
		alert("请重新输入")
	}
}
