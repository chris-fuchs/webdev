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
};

function passwordCheck() {
    pw = document.forms["addStaffForm"]["passwordInput"].value;

    oldPasswordStrengthLabel = passwordStrengthLabel;
    passwordStrength = checkPasswordForComplexity(pw);
    
    if(oldPasswordStrengthLabel != passwordStrength) {
        if(passwordStrength=="weak") {
            bar.className = "w3-red";
            bar.style = "height:24px;width:33%";
            passwordStrengthLabel.innerHTML = "<b>Weak</b>";

        } else if(passwordStrength=="medium") {
            bar.className = "w3-orange";
            bar.style= "height:24px;width:66%";
            passwordStrengthLabel.innerHTML = "<b>Medium</b>";
        } else if(passwordStrength=="strong"){
            bar.className = "w3-green";
            bar.style = "height:24px;width:100%";
            passwordStrengthLabel.innerHTML = "<b>Strong</b>";
        } else if(passwordStrength=="no") {
            bar.className = "w3-red";
            bar.style = "height:24px;width:0%";
            passwordStrengthLabel.innerHTML = "<b>No Password</b>";
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
    if(regex.test(pw)) {
        return "strong";
    } else if(pw.length>=8) {
        return "medium";
    } else if(pw.length>0) {
        return "weak";
    } else {
        return "no";
    }
}




