const students = [ 
    {
        "ID":"22342",
        "FirstName":"Tom",
        "LastName": "Holland",
        "Gender": "1",
        "DOB": "1995/08/25",
        "Department": "IT",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2019/05/01"
    },

    {
        "ID":"76533",
        "FirstName":"Tommi",
        "LastName": "Holland",
        "Gender": "1",
        "DOB": "1995/08/25",
        "Department": "Finance",
        "EmailID": "tomholland@gmail.com",
        "JoiningDate": "2020/10/01"
    }
]

let itDep = students.filter(function(person) {
    return person.Department == "IT"
})

//console.log("IT Dep:")
//console.log(itDep)

let summerSem = students.filter(function(person) {
    if(person.JoiningDate.split("/")[1]>=4 && person.JoiningDate.split("/")[1]<=09) {
        return person
    }
})

let winterSem = students.filter(function(person) {
    if(person.JoiningDate.split("/")[1]<=3 || person.JoiningDate.split("/")[1]>=10) {
        return person
    } 
})

//console.log("SummerSemester:")
//console.log(summerSem)

//console.log("WinterSemester:")
//console.log(winterSem)



function departmentSelector() {
    let list = getStudentListByDepartment(document.forms["depForm"]["depSel"].value);
    //console.log(list)
    displayList(list)
}


function semesterSelector() {

}




function getStudentListByDepartment(departmentName) {
    return students.filter(person => person.Department == departmentName)
}


function displayList(list) {
    console.log(list)
    studentListDOM = getElementsByClassName(contentListItem)
    studentListDOM[0]
}