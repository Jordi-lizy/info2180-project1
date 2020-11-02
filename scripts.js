/* Add your JavaScript to this file */

var email;
var popupmsg;
var button;

window.onload = function(){
    email = document.getElementById("email");
    popupmsg = document.getElementsByClassName("message")[0];
    button = document.getElementsByClassName("btn")[1];
    this.button.addEventListener("click",message);
}

function message(){
    email = document.getElementById("email").value;
    if (email == ""){
        popupmsg.innerHTML = "Please enter a valid email address."
        event.preventDefault();
    }
    else{
        popupmsg.innerHTML = "Thank you! Your email address "+email+" has been added to our mailing list!"
        event.preventDefault();

    }
}

