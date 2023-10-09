function postFunction() {
    
    var userInput = document.getElementById("text1").value;

    if(userInput == "") 
    {
        alert("just type something pls i beg of you");
        return;
    }

    if(document.getElementById("topic1").innerHTML == "") {
        document.getElementById("topic1").innerHTML = userInput;
    }

    else if(document.getElementById("comment1").innerHTML == "") {
        document.getElementById("comment1").innerHTML = userInput;
    }

    else if(document.getElementById("comment2").innerHTML == "") {
        document.getElementById("comment2").innerHTML = userInput;
    }

    document.getElementById("text1").value = "";
}

function clearFunction() {
    document.getElementById("topic1").innerHTML = null;
    document.getElementById("comment1").innerHTML = null;
    document.getElementById("comment2").innerHTML = null;
}