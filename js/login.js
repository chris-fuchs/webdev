
var loginAttempts = 0;

window.onload = function() {
    alert("!!! Development Stage !!!\n\nAdmin-Login:\n  Name: Admin\n  Password: Admin\n\nStaff-Login:\n  Name: any\n  Password: any")
}

function validateAdminLogin() {
    var name = document.forms["adminForm"]["name"].value;
    var password = document.forms["adminForm"]["password"].value;

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
            document.forms["adminForm"]["name"].disabled = true;
            document.forms["adminForm"]["password"].disabled = true;
        }
        alert("Login Credencials Incorrect");
        return false;
    }
    return true;
}

function validateStaffLogin() {
    var name = document.forms["staffForm"]["name"].value;
    var password = document.forms["staffForm"]["password"].value;

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

