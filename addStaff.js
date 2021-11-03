function validateAndAddStaffForm() {

    var staffID = document.forms["addStaffForm"]["staffID"].value;
    var fname = document.forms["addStaffForm"]["fname"].value;
    var sname = document.forms["addStaffForm"]["sname"].value;
    var dob = document.forms["addStaffForm"]["dob"].value;
    var gender = document.forms["addStaffForm"]["gender"].value;
    var email = document.forms["addStaffForm"]["email"].value;


    if(staffID== null || stafftID== "") {
        alert("Staff ID cannot be empty");
        return false;
    }

    if(fname== null || fname== "") {
        alert("First Name cannot be empty");
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
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }