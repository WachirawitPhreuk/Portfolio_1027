window.onload = pageLoad;

function pageLoad(){
	document.getElementById('start').onclick = startGame;
}

function startGame(){
	alert("Ready");
	addBox();
	timeStart();
}

function timeStart(){
	var TIMER_TICK = 1000;
	var timer = null;
	var seconds = 30; //ตั้งไว้ 30 วิ
	var x = document.getElementById('clock');
	var remainingTime = seconds;
	
	timer = setInterval(function (){
		var allbox = document.querySelectorAll("#layer div");
		if(remainingTime === 0 && allbox.length > 0)
		{
			clearInterval(timer);
			x.innerHTML = null;
			alert("Game Over");
			clearScreen();
		}
		else if(remainingTime > 0 && allbox.length === 0)
		{
			clearInterval(timer);
			x.innerHTML = null;
			alert("You win!!");
			clearScreen();
		}
		else
		{
		x.innerHTML = remainingTime + "s";
        remainingTime--;
		}
	}, TIMER_TICK);
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	clearScreen();
	var numbox = document.getElementById('numbox').value;
	var gameLayer = document.getElementById('layer');
	var colorDrop = document.getElementById('color').value;

	for (var i =0; i<numbox;i++){
		var tempbox = document.createElement('div');
		tempbox.className = 'square';
		tempbox.id = "box"+i;
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";
		tempbox.style.backgroundColor = colorDrop;

		//add element to HTML node
		gameLayer.appendChild(tempbox);
		bindBox(tempbox);
	}
}

function bindBox(box){
	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
		box.parentNode.removeChild(box);
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ
	var allbox = document.querySelectorAll("#layer div");

	//delete all  div
	for (var i=0;i<allbox.length;i++){
		allbox[i].parentNode.removeChild(allbox[i]);
	}
}
