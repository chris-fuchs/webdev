const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])(?=.{8,})/;
var bar;
var passwordStrengthLabel = "";
var oldPasswordStrengthLabel = "";
var pw;

window.onload = function() {
    const password = document.getElementById("passwordInput");
    password.addEventListener("input", passwordCheck);
    bar = document.getElementById("bar");
    passwordStrengthLabel = document.getElementById("passwordStrength");

    const email = document.getElementById("email");
    email.addEventListener("input", validateEmail);
};

// use regex to validate email
function validateEmail() {
    const email = document.forms["registrationForm"]["email"].value;
    emailCheckmark = document.getElementById("emailCheckmark");
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRegex.test(email)) {
        emailCheckmark.style.display = "block";
        //console.log("valid email: "+emailCheckmark.style.display);
        //emailCheckmark.visibility = "visible";
    } else {
        emailCheckmark.style.display = "none";
        //console.log("invalid email: "+emailCheckmark.style.display);
        //emailCheckmark.visibility = "hidden";
    }
}

function passwordCheck() {
    pw = document.forms["registrationForm"]["passwordInput"].value;

    oldPasswordStrengthLabel = passwordStrengthLabel;
    passwordStrength = checkPasswordForComplexity(pw);
    
    if(oldPasswordStrengthLabel != passwordStrength) {
        passwordCheckmark = document.getElementById("passwordCheckmark");
        if(passwordStrength=="weak") {
            bar.className = "w3-red";
            bar.style = "height:24px;width:33%";
            passwordStrengthLabel.innerHTML = "<b>Weak</b>";
            passwordCheckmark.style.display = "none";

        } else if(passwordStrength=="medium") {
            bar.className = "w3-orange";
            bar.style= "height:24px;width:66%";
            passwordStrengthLabel.innerHTML = "<b>Medium</b>";
            passwordCheckmark.style.display = "block"
        } else if(passwordStrength=="strong"){
            bar.className = "w3-green";
            bar.style = "height:24px;width:100%";
            passwordStrengthLabel.innerHTML = "<b>Strong</b>";
            passwordCheckmark.style.display = "block"
        } else if(passwordStrength=="no") {
            bar.className = "w3-red";
            bar.style = "height:24px;width:0%";
            passwordStrengthLabel.innerHTML = "<b>No Password</b>";
            passwordCheckmark.style.display = "none";
        }
    }
}

// check password for complexity with regex with following critera:
// at least 8 characters
// at least one upper case letter
// at least one lower case letter
// at least one number
// at least one special character (!@#$%^&*)
function checkPasswordForComplexity(pw) {
    if(regex.test(pw) && pw.length>=8) {
        return "strong";
    } else if(pw.length>=8) {
        return "medium";
    } else if(pw.length>0) {
        return "weak";
    } else {
        return "no";
    }
}




