
var loginAttempts = 0;

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
}
