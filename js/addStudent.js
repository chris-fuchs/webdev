/*window.onload = function() {
    dobDatepicker = document.getElementById("dob")
    
    let currentDate = new Date();
    let cDay = currentDate.getDate()
    if(cDay<10) {
        cDay = "0"+cDay
    }
    let cMonth = currentDate.getMonth() + 1
    let cYear = currentDate.getFullYear()
    let today = cYear + "-" + cMonth + "-" + cDay
    //dobDatepicker.min = ""
    dobDatepicker.max = "2021-12-05"
    //document.forms["addStudentForm"]["studentID"].max = "2021-12-05"
} */


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

    if(!getYearsOfDifference(dob)) {
        alert("Age must be between 17 and 60!")
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
  
function getYearsOfDifference(givenDate) {
    var ageDifMs = Date.now() - givenDate
    var ageDate = new Date(ageDifMs);
    var result = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (result<60 && result<17) {
        return true
    } else {
        return false
    }
}