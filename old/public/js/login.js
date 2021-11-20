
var loginAttempts = 0;

window.onload = function() {
    alert("!!! Development Stage !!!\n\nAdmin-Login-Data:\n  Name: Admin\n  Password: Admin\n\nStaff-Login-Data:\n  For Name and Password:\n  any Characters of your choosing")
}

function validateAdminLogin() {
    var name = document.forms["adminForm"]["adminName"].value;
    var password = document.forms["adminForm"]["adminPassword"].value;

    if(name=="Admin" && password=="Admin") {
        return true;
    } else if (name== null || name== "") {
        alert("First Name cannot be empty");
        return false;
    } else if(password== null || password== "") {
        alert("Password cannot be empty");
        return false;
    } else {
        loginAttempts++;
        if(loginAttempts>=3) {
            document.forms["adminForm"]["adminName"].disabled = true;
            document.forms["adminForm"]["adminPassword"].disabled = true;
        }
        alert("Login Credencials Incorrect");
        return false;
    }
    return true;
}

function validateStaffLogin() {
    var name = document.forms["staffForm"]["staffName"].value;
    var password = document.forms["staffForm"]["staffPassword"].value;

    if (name== null || name== "") {
        alert("First Name cannot be empty");
        return false;
    } 
    else if (password== null || password== "") {
        alert("Password cannot be empty");
        return false;
    }
    return true;
}


function validateInput(input) {
    var inputValue = input.value;
    if(inputValue== null || inputValue== "") {
        alert("Input cannot be empty");
        return false;
    }
    return true;
}         

