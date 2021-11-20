 function validateAndAddStudentForm() {

    var studentID = document.forms["addStudentForm"]["studentID"].value;
    var fname = document.forms["addStudentForm"]["fname"].value;
    var sname = document.forms["addStudentForm"]["sname"].value;
    var dob = document.forms["addStudentForm"]["dob"].value;
    var gender = document.forms["addStudentForm"]["gender"].value;
    var dep = document.forms["addStudentForm"]["department"].value;
    var email = document.forms["addStudentForm"]["email"].value;


    if(studentID== null || studentID== "") {
        alert("Student ID cannot be empty");
        return false;
    }

    if(fname== null || fname== "") {
        alert("First Name cannot be empty");
        return false;
    }

    if(dep== null || dep== "") {
        alert("Department cannot be empty");
        return false;
    }

    if(email== null || email== "") {
        alert("E-Mail cannot be empty");
        return false;
    }

    if(!validateEmail(email)) {
        alert("E-Mail not in correct form")
        return false;
    }
    return true;
}


function validateEmail(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email)
}
  