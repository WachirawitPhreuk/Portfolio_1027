window.onload = pageLoad;
function pageLoad(){
	var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
    form.onreset = resetForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย

    var newPassword = document.forms["myForm"]["password"][0];
    var checkPassword = document.forms["myForm"]["password"][1];

    if(newPassword.value != checkPassword.value)
    {
        document.getElementById('errormsg').innerHTML = "Passwords do not match.";
        alert("Passwords do not match.");
        return false;
    }

    alert("Changing path, woo-woo!!!");
}

function resetForm() {
    document.getElementById("firstname").innerHTML = null;
    document.getElementById("lastname").innerHTML = null;
    document.getElementById("gender").innerHTML = null;
    document.getElementById("bday").innerHTML = null;
    document.getElementById("email").innerHTML = null;
    document.getElementById("username").innerHTML = null;
    document.getElementById("password").innerHTML = null;
}