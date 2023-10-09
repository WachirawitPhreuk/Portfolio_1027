window.onload = loginLoad;
function loginLoad(){
	var form = document.getElementById("myLogin");
    form.onsubmit = checkLogin;
}

function checkLogin(){
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	const username = urlParams.get('username');
	const password = urlParams.get('password');

	var user = document.forms["myLogin"]["password"];
    var pass = document.forms["myLogin"]["password"];
	
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
	if(user.value!=username||pass.value != password) {
		alert("You either enter wrong username or password, try again, maybe?");
		return false;
	}

	alert("Welcome to the club, bud.");
}			