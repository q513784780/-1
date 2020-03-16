class Cars {
		constructor() {

		}
		//总商品的数量
		goodstoll() {
			let oarrynumb = document.getElementsByClassName('pirceNumber');
			let sum = 0;
			for (let i = 0; i < oarrynumb.length; i++) {
				sum += Number(oarrynumb[i].innerHTML);
			}
			let oAllnum = document.getElementById('Allnumber');
			oAllnum.innerHTML = sum;
		}
		//总商品的价格  
		goodscost() {
			let oarrycost = document.getElementsByClassName('tollCost');
			let sum = 0;
			for (let i = 0; i < oarrycost.length; i++) {
				sum += Number(oarrycost[i].innerHTML);
			}
			let oAllcost = document.getElementById('Allcost');
			oAllcost.innerHTML = sum;
		}
		//小计的计算公式

		getgoodscost(num, price) {
			return num * price;
		}
		//增加商品的行为
		addgoods(btn) {
			let goodsnum = btn.previousElementSibling;
			goodsnum.innerHTML = Number(goodsnum.innerHTML) + 1;
			let price = btn.parentNode.previousElementSibling.firstElementChild;
			let tollprice = this.getgoodscost(goodsnum.innerHTML, price.innerHTML);
			let allprice = btn.parentNode.nextElementSibling.nextElementSibling.firstElementChild;
			allprice.innerHTML = tollprice;
			this.goodstoll();
			this.goodscost();
		}
		//减少商品的价格
		mingoods(btn) {
			let goodsnum = btn.nextElementSibling;
			if(goodsnum.innerHTML>0){
				goodsnum.innerHTML = Number(goodsnum.innerHTML) - 1;
				let price = btn.parentNode.previousElementSibling.firstElementChild;;
				let tollprice = this.getgoodscost(goodsnum.innerHTML, price.innerHTML);
				let allprice = btn.parentNode.nextElementSibling.nextElementSibling.firstElementChild;
				allprice.innerHTML = tollprice;
				this.goodstoll();
				this.goodscost();
			}

		}
		//删除
		goodsdel(btn) {
			let goodsline = btn.parentNode.parentNode;
			goodsline.remove();
			this.goodstoll();
			this.goodscost();
		}
		//事件
		eventaddgoods() {
			let obot = document.getElementsByTagName('button');
			let that = this;
			for (let i = 0; i < obot.length; i++) {
				if (i % 2 == 0) {
					obot[i].onclick = function() {
						that.mingoods(this);
					}
				} else {
					obot[i].onclick = function() {
						that.addgoods(this);
					}
				}
			}
			let del = document.getElementsByClassName('del');
			for (let i = 0; i < del.length; i++) {
				del[i].onclick = function() {
					that.goodsdel(this);
				}
			}

		}

	}
	let cars = new Cars();
	cars.eventaddgoods();
	
	
	let checkAllele = document.getElementsByClassName("all-products-ckb");
	for(let i = 0;i<checkAllele.length;i++){
		checkAllele[i].onclick = function() {
				let check = document.getElementsByName("p-item");
				if(this.checked == true){
					for(let i = 0;i<check.length;i++){
						check[i].checked = true;
					}
				}else{
					for(let i = 0;i<check.length;i++){
						check[i].checked = false;
					}
				}
			}
	}
	

