let id
let idCheckmark
let fname
let fnameCheckmark
let email
let emailCheckmark

window.onload = function() {
    id = document.getElementsByClassName("ID")[0]
    id.addEventListener("input", validateIDAndChangeCheckmark);
    idCheckmark = document.getElementById("IDCheckmark")
    
    fname = document.getElementById("fname");
    fname.addEventListener("input", validateFnameAndChangeCheckmark);
    fnameCheckmark = document.getElementById("fnameCheckmark")
 
    email = document.getElementById("email");
    email.addEventListener("input", validateEmailAndChangeCheckmark);
    emailCheckmark = document.getElementById("emailCheckmark")
}

function validateIDAndChangeCheckmark() {
    if(id.value.length==5 && id.value.match(/^[0-9]+$/) != null) {
        idCheckmark.style.display = "block"
    } else {
        idCheckmark.style.display = "none"
    }
}

function validateFnameAndChangeCheckmark() {
    if(fname.value.length>1) {
        fnameCheckmark.style.display = "block"
    } else {
        fnameCheckmark.style.display = "none"
    }
}

function validateEmailAndChangeCheckmark() {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email.value)) {
        emailCheckmark.style.display = "block";
        //console.log("valid email: "+emailCheckmark.style.display);
        //emailCheckmark.visibility = "visible";
    } else {
        emailCheckmark.style.display = "none";
        //console.log("invalid email: "+emailCheckmark.style.display);
        //emailCheckmark.visibility = "hidden";
    }
}