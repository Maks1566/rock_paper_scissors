let player1 = true;
let player2 = false;

let chpl1 = document.querySelector(".choice-player-1");
let chpl2 = document.querySelector(".choice-player-2");
chpl1.style.backgroundImage = "url(a.svg)";
chpl2.style.backgroundImage = "url(a.svg)";

let step1 = null;
let step2 = null;

let infob = document.querySelector(".infob");
let playb = document.querySelector(".playb");

playb.onclick = function(){
	chpl1.style.backgroundImage = "none";
	chpl2.style.backgroundImage = "none";
	chpl1.style.backgroundImage = "url(a.svg)";
	chpl2.style.backgroundImage = "url(a.svg)";
	playb.style.display = "none";
	infob.innerHTML = "Ход игрока 1";
	player1 = true;
}

let choice = function(){
	infob.innerHTML = "Результаты";

	if(step1 == "Камень"){
		chpl1.style.backgroundImage = "url(kam.svg)";
	}else if(step1 == "Ножницы"){
		chpl1.style.backgroundImage = "url(noz.svg)";
	}else if(step1 == "Бумага"){
		chpl1.style.backgroundImage = "url(bum.svg)";
	}

	if(step2 == "Камень"){
		chpl2.style.backgroundImage = "url(kam.svg)";
	}else if(step2 == "Ножницы"){
		chpl2.style.backgroundImage = "url(noz.svg)";
	}else if(step2 == "Бумага"){
		chpl2.style.backgroundImage = "url(bum.svg)";
	}
}

let result = function(){
	if(step1 == "Камень" && step2 == "Ножницы"){
		alert("Первый игрок победил");
		playb.style.display = "block";
	}else if(step1 == "Камень" && step2 == "Бумага"){
		alert("Второй игрок победил");
		playb.style.display = "block";
	}else if(step1 == "Камень" && step2 == "Камень"){
		alert("Ничья. Переигровка");
		chpl1.style.backgroundImage = "none";
		chpl2.style.backgroundImage = "none";
		chpl1.style.backgroundImage = "url(a.svg)";
		chpl2.style.backgroundImage = "url(a.svg)";
		infob.innerHTML = "Ход игрока 1";
		player1 = true;
	}

	if(step1 == "Ножницы" && step2 == "Камень"){
		alert("Второй игрок победил");
		playb.style.display = "block";
	}else if(step1 == "Ножницы" && step2 == "Бумага"){
		alert("Первый игрок победил");
		playb.style.display = "block";
	}else if(step1 == "Ножницы" && step2 == "Ножницы"){
		alert("Ничья. Переигровка");
		chpl1.style.backgroundImage = "none";
		chpl2.style.backgroundImage = "none";
		chpl1.style.backgroundImage = "url(a.svg)";
		chpl2.style.backgroundImage = "url(a.svg)";
		infob.innerHTML = "Ход игрока 1";
		player1 = true;
	}

	if(step1 == "Бумага" && step2 == "Камень"){
		alert("Первый игрок победил");
		playb.style.display = "block";
	}else if(step1 == "Бумага" && step2 == "Ножницы"){
		alert("Второй игрок победил");
		playb.style.display = "block";
	}else if(step1 == "Бумага" && step2 == "Бумага"){
		alert("Ничья. Переигровка");
		chpl1.style.backgroundImage = "none";
		chpl2.style.backgroundImage = "none";
		chpl1.style.backgroundImage = "url(a.svg)";
		chpl2.style.backgroundImage = "url(a.svg)";
		infob.innerHTML = "Ход игрока 1";
		player1 = true;
	}
}

document.addEventListener("keydown", function(e){
		console.log(e.code)
		if(player1 == true && player2 == false){
			if(e.code == "KeyA"){
				player1 = false;
				step1 = "Камень";
				player2 = true;
				infob.innerHTML = "Ход игрока 2";
			}
			else if(e.code == "KeyS"){
				player1 = false;
				step1 = "Ножницы";
				player2 = true;
				infob.innerHTML = "Ход игрока 2";
			}
			else if(e.code == "KeyD"){
				player1 = false;
				step1 = "Бумага";
				player2 = true;
				infob.innerHTML = "Ход игрока 2";
			}
		}
		if(player1 == false && player2 == true){
			if(e.code == "KeyJ"){
				player2 = false;
				step2 = "Камень";
				setTimeout(choice, 500);
				setTimeout(result, 1500);
			}
			else if(e.code == "KeyK"){
				player2 = false;
				step2 = "Ножницы";
				setTimeout(choice, 500);
				setTimeout(result, 1500);
			}
			else if(e.code == "KeyL"){
				player2 = false;
				step2 = "Бумага";
				setTimeout(choice, 500);
				setTimeout(result, 1500);
			}
		}
	})