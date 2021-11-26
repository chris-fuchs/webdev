const students = 
    [
    {"ID":"29724","FirstName":"Kippy","LastName":"Shallo","Gender":"2","DOB":"1991/10/22","Department":"IT","EMailID":"kshallo0@europa.eu","JoiningDate":"2017/03/03"},
    {"ID":"79488","FirstName":"Nerte","LastName":"Davet","Gender":"2","DOB":"2003/06/27","Department":"Art","EMailID":"ndavet1@vinaora.com","JoiningDate":"2018/06/30"},
    {"ID":"78236","FirstName":"Gilligan","LastName":"Samson","Gender":"1","DOB":"1991/11/30","Department":"IT","EMailID":"gsamson2@google.cn","JoiningDate":"2018/09/07"},
    {"ID":"14940","FirstName":"Gabbie","LastName":"Gray","Gender":"1","DOB":"1987/10/15","Department":"IT","EMailID":"ggray3@flickr.com","JoiningDate":"2018/08/06"},
    {"ID":"53679","FirstName":"Shellie","LastName":"Mouland","Gender":"1","DOB":"1990/12/10","Department":"Art","EMailID":"smouland4@example.com","JoiningDate":"2020/11/17"},
    {"ID":"70769","FirstName":"Damien","LastName":"Cumbes","Gender":"2","DOB":"1990/01/07","Department":"Art","EMailID":"dcumbes5@aboutads.info","JoiningDate":"2018/08/27"},
    {"ID":"35918","FirstName":"Eba","LastName":"Crofts","Gender":"0","DOB":"1997/09/07","Department":"Art","EMailID":"ecrofts6@t.co","JoiningDate":"2020/09/17"},
    {"ID":"85149","FirstName":"Serene","LastName":"Coneybeer","Gender":"2","DOB":"2002/07/13","Department":"IT","EMailID":"sconeybeer7@hostgator.com","JoiningDate":"2020/09/19"},
    {"ID":"07169","FirstName":"Rana","LastName":"Absalom","Gender":"0","DOB":"1992/03/13","Department":"IT","EMailID":"rabsalom8@tumblr.com","JoiningDate":"2018/11/17"},
    {"ID":"75379","FirstName":"Rorke","LastName":"Bubbings","Gender":"2","DOB":"1989/10/17","Department":"Art","EMailID":"rbubbings9@gnu.org","JoiningDate":"2020/04/13"},
    {"ID":"78145","FirstName":"Johnny","LastName":"Shingles","Gender":"1","DOB":"1982/09/28","Department":"IT","EMailID":"jshinglesa@weather.com","JoiningDate":"2020/04/30"},
    {"ID":"63656","FirstName":"Sorcha","LastName":"Fausch","Gender":"2","DOB":"1989/09/27","Department":"Art","EMailID":"sfauschb@state.gov","JoiningDate":"2017/03/06"},
    {"ID":"05677","FirstName":"Roxanne","LastName":"Bevir","Gender":"0","DOB":"2000/07/18","Department":"Art","EMailID":"rbevirc@networkadvertising.org","JoiningDate":"2019/07/20"},
    {"ID":"83102","FirstName":"Heindrick","LastName":"Safont","Gender":"0","DOB":"1997/10/13","Department":"Finance","EMailID":"hsafontd@wikispaces.com","JoiningDate":"2017/03/28"},
    {"ID":"84800","FirstName":"Emeline","LastName":"Milsap","Gender":"2","DOB":"2001/01/26","Department":"IT","EMailID":"emilsape@yellowpages.com","JoiningDate":"2020/01/31"},
    {"ID":"63944","FirstName":"Cornelle","LastName":"Bielefeld","Gender":"0","DOB":"1991/09/02","Department":"Finance","EMailID":"cbielefeldf@nydailynews.com","JoiningDate":"2018/08/14"},
    {"ID":"52566","FirstName":"Luce","LastName":"Kwietak","Gender":"2","DOB":"1986/09/09","Department":"Art","EMailID":"lkwietakg@vistaprint.com","JoiningDate":"2018/03/10"},
    {"ID":"01810","FirstName":"Ilario","LastName":"Grinyov","Gender":"0","DOB":"1994/09/19","Department":"Art","EMailID":"igrinyovh@myspace.com","JoiningDate":"2017/03/08"},
    {"ID":"14350","FirstName":"Lizette","LastName":"Bradane","Gender":"1","DOB":"1997/02/11","Department":"Art","EMailID":"lbradanei@msn.com","JoiningDate":"2019/12/02"},
    {"ID":"68217","FirstName":"Marlow","LastName":"Daggett","Gender":"0","DOB":"1986/02/01","Department":"Finance","EMailID":"mdaggettj@who.int","JoiningDate":"2019/05/11"},
    {"ID":"21784","FirstName":"Any","LastName":"Woolveridge","Gender":"1","DOB":"1990/09/30","Department":"Finance","EMailID":"awoolveridgek@bravesites.com","JoiningDate":"2020/04/10"},
    {"ID":"00474","FirstName":"Creight","LastName":"Heading","Gender":"2","DOB":"1992/10/03","Department":"Finance","EMailID":"cheadingl@pcworld.com","JoiningDate":"2018/06/09"},
    {"ID":"90765","FirstName":"Xenos","LastName":"Denisard","Gender":"2","DOB":"1981/02/18","Department":"Finance","EMailID":"xdenisardm@hubpages.com","JoiningDate":"2018/12/23"},
    {"ID":"34983","FirstName":"Kiley","LastName":"Rabbage","Gender":"2","DOB":"1985/03/28","Department":"Art","EMailID":"krabbagen@mayoclinic.com","JoiningDate":"2020/08/01"},
    {"ID":"49203","FirstName":"Elissa","LastName":"Dundin","Gender":"0","DOB":"1997/04/11","Department":"IT","EMailID":"edundino@people.com.cn","JoiningDate":"2020/10/08"},
    {"ID":"30824","FirstName":"Daisey","LastName":"Gilffilland","Gender":"0","DOB":"2001/12/13","Department":"IT","EMailID":"dgilffillandp@cyberchimps.com","JoiningDate":"2017/04/20"},
    {"ID":"04596","FirstName":"Connie","LastName":"Haseman","Gender":"1","DOB":"1990/08/17","Department":"Art","EMailID":"chasemanq@wikipedia.org","JoiningDate":"2019/10/01"},
    {"ID":"30349","FirstName":"Lenka","LastName":"Gosz","Gender":"1","DOB":"1983/11/07","Department":"Finance","EMailID":"lgoszr@buzzfeed.com","JoiningDate":"2019/11/06"},
    {"ID":"92216","FirstName":"Hannie","LastName":"Slora","Gender":"2","DOB":"1995/04/29","Department":"Art","EMailID":"hsloras@freewebs.com","JoiningDate":"2019/12/27"},
    {"ID":"85875","FirstName":"Natalina","LastName":"Braidwood","Gender":"0","DOB":"1994/10/05","Department":"Finance","EMailID":"nbraidwoodt@webeden.co.uk","JoiningDate":"2017/01/18"},
    {"ID":"32966","FirstName":"Seward","LastName":"Balma","Gender":"2","DOB":"1999/10/09","Department":"Art","EMailID":"sbalmau@aboutads.info","JoiningDate":"2018/10/05"},
    {"ID":"05221","FirstName":"Ludwig","LastName":"Allday","Gender":"2","DOB":"2001/07/20","Department":"Art","EMailID":"lalldayv@t.co","JoiningDate":"2019/09/13"},
    {"ID":"30090","FirstName":"Kimberli","LastName":"Guidelli","Gender":"0","DOB":"1992/04/28","Department":"IT","EMailID":"kguidelliw@latimes.com","JoiningDate":"2017/08/21"},
    {"ID":"87587","FirstName":"Nananne","LastName":"Redwin","Gender":"2","DOB":"1983/08/11","Department":"Finance","EMailID":"nredwinx@fc2.com","JoiningDate":"2019/04/04"},
    {"ID":"99912","FirstName":"Molly","LastName":"Worgen","Gender":"2","DOB":"2001/11/04","Department":"Finance","EMailID":"mworgeny@hexun.com","JoiningDate":"2018/09/10"},
    {"ID":"28729","FirstName":"Lennie","LastName":"Kellaway","Gender":"1","DOB":"1995/02/23","Department":"Art","EMailID":"lkellawayz@csmonitor.com","JoiningDate":"2019/02/05"},
    {"ID":"07415","FirstName":"Algernon","LastName":"Markie","Gender":"2","DOB":"1990/11/25","Department":"Art","EMailID":"amarkie10@theguardian.com","JoiningDate":"2020/12/01"},
    {"ID":"20186","FirstName":"Jojo","LastName":"Yesinov","Gender":"2","DOB":"1990/01/03","Department":"Finance","EMailID":"jyesinov11@google.ru","JoiningDate":"2020/03/16"},
    {"ID":"80744","FirstName":"Halsy","LastName":"Cullum","Gender":"1","DOB":"1989/01/03","Department":"Art","EMailID":"hcullum12@flickr.com","JoiningDate":"2020/07/15"},
    {"ID":"97734","FirstName":"Daile","LastName":"Fellis","Gender":"1","DOB":"2001/10/05","Department":"Art","EMailID":"dfellis13@posterous.com","JoiningDate":"2017/07/17"},
    {"ID":"48183","FirstName":"Christiano","LastName":"Bossel","Gender":"1","DOB":"2002/06/14","Department":"Art","EMailID":"cbossel14@admin.ch","JoiningDate":"2020/04/09"},
    {"ID":"82117","FirstName":"Berri","LastName":"Davenell","Gender":"0","DOB":"1998/06/21","Department":"Art","EMailID":"bdavenell15@usnews.com","JoiningDate":"2020/07/18"},
    {"ID":"84546","FirstName":"Tersina","LastName":"Dufton","Gender":"2","DOB":"1998/01/31","Department":"IT","EMailID":"tdufton16@loc.gov","JoiningDate":"2019/05/10"},
    {"ID":"82346","FirstName":"Phillip","LastName":"Skelly","Gender":"1","DOB":"1993/11/04","Department":"IT","EMailID":"pskelly17@telegraph.co.uk","JoiningDate":"2018/01/18"},
    {"ID":"86643","FirstName":"Philippa","LastName":"Burchatt","Gender":"0","DOB":"1980/06/30","Department":"IT","EMailID":"pburchatt18@gmpg.org","JoiningDate":"2018/11/08"},
    {"ID":"80154","FirstName":"Yolanthe","LastName":"Moret","Gender":"1","DOB":"1987/10/29","Department":"Art","EMailID":"ymoret19@si.edu","JoiningDate":"2019/01/16"},
    {"ID":"45121","FirstName":"Kevon","LastName":"Flynn","Gender":"1","DOB":"1991/11/28","Department":"IT","EMailID":"kflynn1a@wp.com","JoiningDate":"2019/05/18"},
    {"ID":"65934","FirstName":"Krystal","LastName":"Zanetto","Gender":"0","DOB":"1990/07/21","Department":"Art","EMailID":"kzanetto1b@joomla.org","JoiningDate":"2019/10/04"},
    {"ID":"12764","FirstName":"Gert","LastName":"Ofield","Gender":"0","DOB":"1988/05/16","Department":"Art","EMailID":"gofield1c@nymag.com","JoiningDate":"2017/10/25"},
    {"ID":"88036","FirstName":"Sandy","LastName":"O'Dogherty","Gender":"1","DOB":"2000/01/04","Department":"Finance","EMailID":"sodogherty1d@parallels.com","JoiningDate":"2020/02/04"},
    {"ID":"53138","FirstName":"Nissie","LastName":"Boddam","Gender":"2","DOB":"1982/11/02","Department":"IT","EMailID":"nboddam1e@artisteer.com","JoiningDate":"2018/04/24"},
    {"ID":"94283","FirstName":"Elspeth","LastName":"Ivakin","Gender":"2","DOB":"1990/05/23","Department":"Finance","EMailID":"eivakin1f@behance.net","JoiningDate":"2020/12/04"},
    {"ID":"01495","FirstName":"Lemmie","LastName":"Pinkie","Gender":"1","DOB":"1985/07/06","Department":"Finance","EMailID":"lpinkie1g@google.pl","JoiningDate":"2020/10/28"},
    {"ID":"70124","FirstName":"Lydon","LastName":"Ledwich","Gender":"1","DOB":"2000/05/19","Department":"Art","EMailID":"lledwich1h@boston.com","JoiningDate":"2017/04/25"},
    {"ID":"47302","FirstName":"Misty","LastName":"Dawes","Gender":"1","DOB":"1998/09/19","Department":"Finance","EMailID":"mdawes1i@cnn.com","JoiningDate":"2019/01/22"},
    {"ID":"18784","FirstName":"Martica","LastName":"Berrycloth","Gender":"1","DOB":"1983/10/18","Department":"Finance","EMailID":"mberrycloth1j@moonfruit.com","JoiningDate":"2019/07/22"},
    {"ID":"03481","FirstName":"Jacqueline","LastName":"Haselgrove","Gender":"1","DOB":"2002/01/29","Department":"Art","EMailID":"jhaselgrove1k@icq.com","JoiningDate":"2017/08/14"},
    {"ID":"51259","FirstName":"Lesley","LastName":"Hurdle","Gender":"2","DOB":"2003/11/01","Department":"Finance","EMailID":"lhurdle1l@opensource.org","JoiningDate":"2017/06/14"},
    {"ID":"29642","FirstName":"Cletis","LastName":"Matthaus","Gender":"0","DOB":"1985/07/26","Department":"Finance","EMailID":"cmatthaus1m@tmall.com","JoiningDate":"2020/10/22"},
    {"ID":"52841","FirstName":"Aviva","LastName":"Gloves","Gender":"0","DOB":"1980/11/05","Department":"IT","EMailID":"agloves1n@zdnet.com","JoiningDate":"2017/04/17"},
    {"ID":"36367","FirstName":"Karoly","LastName":"McNeilley","Gender":"2","DOB":"2001/04/13","Department":"Art","EMailID":"kmcneilley1o@4shared.com","JoiningDate":"2020/02/29"},
    {"ID":"33860","FirstName":"Jaquith","LastName":"Caughey","Gender":"1","DOB":"1998/03/05","Department":"IT","EMailID":"jcaughey1p@typepad.com","JoiningDate":"2017/09/24"},
    {"ID":"25612","FirstName":"Henry","LastName":"Camillo","Gender":"1","DOB":"1984/01/11","Department":"Finance","EMailID":"hcamillo1q@who.int","JoiningDate":"2018/08/11"},
    {"ID":"36141","FirstName":"Alley","LastName":"Hessel","Gender":"0","DOB":"1992/08/12","Department":"Art","EMailID":"ahessel1r@goo.ne.jp","JoiningDate":"2019/06/04"},
    {"ID":"49765","FirstName":"Job","LastName":"Goldstone","Gender":"2","DOB":"2002/11/20","Department":"IT","EMailID":"jgoldstone1s@g.co","JoiningDate":"2020/02/22"},
    {"ID":"92037","FirstName":"Moyna","LastName":"Underdown","Gender":"2","DOB":"1989/03/19","Department":"Art","EMailID":"munderdown1t@google.cn","JoiningDate":"2017/08/23"},
    {"ID":"80288","FirstName":"Kerby","LastName":"Mattisson","Gender":"2","DOB":"1982/06/28","Department":"Finance","EMailID":"kmattisson1u@oaic.gov.au","JoiningDate":"2020/10/08"},
    {"ID":"91475","FirstName":"Tricia","LastName":"Grogono","Gender":"1","DOB":"1986/04/29","Department":"IT","EMailID":"tgrogono1v@opera.com","JoiningDate":"2019/07/12"},
    {"ID":"67281","FirstName":"Anna","LastName":"De Gogay","Gender":"2","DOB":"1996/12/16","Department":"IT","EMailID":"adegogay1w@nature.com","JoiningDate":"2018/07/03"},
    {"ID":"74978","FirstName":"Elmira","LastName":"Tetla","Gender":"1","DOB":"1998/05/27","Department":"Art","EMailID":"etetla1x@discovery.com","JoiningDate":"2018/12/09"},
    {"ID":"42947","FirstName":"Philippine","LastName":"Vuittet","Gender":"1","DOB":"1995/01/06","Department":"IT","EMailID":"pvuittet1y@dailymotion.com","JoiningDate":"2019/04/22"},
    {"ID":"28033","FirstName":"Graig","LastName":"Tatteshall","Gender":"0","DOB":"1990/10/26","Department":"Art","EMailID":"gtatteshall1z@adobe.com","JoiningDate":"2018/09/25"},
    {"ID":"93376","FirstName":"Alaster","LastName":"Lorenzo","Gender":"0","DOB":"1985/12/10","Department":"IT","EMailID":"alorenzo20@sogou.com","JoiningDate":"2020/01/11"},
    {"ID":"78748","FirstName":"Carissa","LastName":"Cockerell","Gender":"2","DOB":"1988/11/10","Department":"Finance","EMailID":"ccockerell21@opera.com","JoiningDate":"2018/05/28"},
    {"ID":"11867","FirstName":"Joshia","LastName":"Ditter","Gender":"2","DOB":"1988/02/05","Department":"Finance","EMailID":"jditter22@issuu.com","JoiningDate":"2018/05/24"},
    {"ID":"80730","FirstName":"Zandra","LastName":"Barrable","Gender":"0","DOB":"1997/05/24","Department":"Art","EMailID":"zbarrable23@simplemachines.org","JoiningDate":"2020/02/24"},
    {"ID":"01809","FirstName":"Sonya","LastName":"Stonnell","Gender":"2","DOB":"1990/05/10","Department":"Finance","EMailID":"sstonnell24@google.com.br","JoiningDate":"2017/07/03"},
    {"ID":"50828","FirstName":"Felix","LastName":"Kissack","Gender":"0","DOB":"1990/09/08","Department":"IT","EMailID":"fkissack25@cornell.edu","JoiningDate":"2020/01/27"},
    {"ID":"78854","FirstName":"Sanderson","LastName":"Wickham","Gender":"0","DOB":"1981/11/23","Department":"IT","EMailID":"swickham26@businessinsider.com","JoiningDate":"2018/08/16"},
    {"ID":"74146","FirstName":"Jerome","LastName":"Avramovsky","Gender":"2","DOB":"1998/09/12","Department":"Finance","EMailID":"javramovsky27@yellowbook.com","JoiningDate":"2020/11/04"},
    {"ID":"64710","FirstName":"Adriena","LastName":"Middleton","Gender":"1","DOB":"1994/08/13","Department":"Finance","EMailID":"amiddleton28@trellian.com","JoiningDate":"2019/04/10"},
    {"ID":"32972","FirstName":"Belia","LastName":"Grigorushkin","Gender":"2","DOB":"1988/02/27","Department":"Finance","EMailID":"bgrigorushkin29@amazon.de","JoiningDate":"2020/09/20"},
    {"ID":"87093","FirstName":"Wynny","LastName":"Gobel","Gender":"1","DOB":"1983/10/30","Department":"IT","EMailID":"wgobel2a@archive.org","JoiningDate":"2019/06/20"},
    {"ID":"05964","FirstName":"Jon","LastName":"Shimwell","Gender":"2","DOB":"1987/07/07","Department":"Finance","EMailID":"jshimwell2b@msn.com","JoiningDate":"2018/01/22"},
    {"ID":"39081","FirstName":"Dominique","LastName":"Kinkade","Gender":"0","DOB":"1980/09/02","Department":"Finance","EMailID":"dkinkade2c@msu.edu","JoiningDate":"2019/08/03"},
    {"ID":"46892","FirstName":"Lillian","LastName":"Kaley","Gender":"0","DOB":"1996/07/06","Department":"IT","EMailID":"lkaley2d@tinyurl.com","JoiningDate":"2017/10/30"},
    {"ID":"27879","FirstName":"Lyndsie","LastName":"Cabrales","Gender":"2","DOB":"1982/06/27","Department":"Finance","EMailID":"lcabrales2e@seattletimes.com","JoiningDate":"2018/06/30"},
    {"ID":"88198","FirstName":"Algernon","LastName":"Benedick","Gender":"0","DOB":"2003/08/05","Department":"Finance","EMailID":"abenedick2f@yellowbook.com","JoiningDate":"2018/03/09"},
    {"ID":"79224","FirstName":"Irwinn","LastName":"Gebbie","Gender":"1","DOB":"1998/09/27","Department":"Finance","EMailID":"igebbie2g@ezinearticles.com","JoiningDate":"2020/08/26"},
    {"ID":"11693","FirstName":"Dari","LastName":"Smitheram","Gender":"2","DOB":"1998/11/28","Department":"Art","EMailID":"dsmitheram2h@google.co.jp","JoiningDate":"2017/06/06"},
    {"ID":"86687","FirstName":"Carley","LastName":"Tooth","Gender":"2","DOB":"1997/01/01","Department":"Art","EMailID":"ctooth2i@4shared.com","JoiningDate":"2017/08/15"},
    {"ID":"58700","FirstName":"Osborn","LastName":"Adamczyk","Gender":"0","DOB":"1999/10/19","Department":"IT","EMailID":"oadamczyk2j@usda.gov","JoiningDate":"2018/04/21"},
    {"ID":"77528","FirstName":"Christie","LastName":"Lineker","Gender":"1","DOB":"1991/11/22","Department":"Art","EMailID":"clineker2k@merriam-webster.com","JoiningDate":"2019/10/29"},
    {"ID":"40575","FirstName":"Carce","LastName":"Cathee","Gender":"0","DOB":"1981/05/08","Department":"IT","EMailID":"ccathee2l@hud.gov","JoiningDate":"2020/05/03"},
    {"ID":"98438","FirstName":"Patton","LastName":"Pitson","Gender":"2","DOB":"1987/09/22","Department":"Art","EMailID":"ppitson2m@globo.com","JoiningDate":"2018/09/20"},
    {"ID":"04940","FirstName":"Karney","LastName":"Doghartie","Gender":"1","DOB":"1992/04/16","Department":"Art","EMailID":"kdoghartie2n@ted.com","JoiningDate":"2017/03/07"},
    {"ID":"38399","FirstName":"Addison","LastName":"Kupec","Gender":"2","DOB":"1983/04/17","Department":"IT","EMailID":"akupec2o@homestead.com","JoiningDate":"2017/09/21"},
    {"ID":"13968","FirstName":"Mab","LastName":"Rivelin","Gender":"0","DOB":"2003/07/16","Department":"Finance","EMailID":"mrivelin2p@npr.org","JoiningDate":"2018/05/04"},
    {"ID":"62215","FirstName":"Lelia","LastName":"Gasnell","Gender":"2","DOB":"1992/04/15","Department":"Finance","EMailID":"lgasnell2q@twitpic.com","JoiningDate":"2017/06/02"},
    {"ID":"68845","FirstName":"Cross","LastName":"Raspel","Gender":"2","DOB":"2003/11/21","Department":"Finance","EMailID":"craspel2r@ca.gov","JoiningDate":"2020/09/10"}
]





var searchField;
var modal;
var btn;
var span;

window.onload = function() {
/*
    const myRequest = new Request('students.json');
    fetch(myRequest)
    .then(response => response.json().then(data => {
        students = data
    }))
    .catch(console.error);*/


    modal = document.getElementById("modal");
    span = document.getElementsByClassName("close")[0];


    searchField = document.getElementById("searchField");
    searchField.addEventListener("input", searchList);
    displayList(students)
    test()
};


function test() {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'get'
    }).then(response => response.json())
    .then(jsonData => printNameAndCity(jsonData))
    .catch(err => {console.log(err)})
}

function printNameAndCity(jsonData) {
    for(person in jsonData) {
        console.log("------------------------------------")
        console.log("Name: ",jsonData[person].name)
        console.log(" City: ",jsonData[person].address.city)
    }
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    let body = document.getElementById("body")
    body.style.overflow = "scroll"
  }
}

// see comment after this function to reactive 'add student' as model
    function showAddStudentModal() {
        window.location.href = "addStudent.html"
    }

// Comment out and remove dummy function prior to this one to reactive 'add student' as modal
// function showAddStudentModal() {
//     console.log("showAddStudentModal triggerd")
//     modal.style.display = "block";
//     let body = document.getElementById("body")
//     body.style.overflow = "hidden"
// }

function closeModal() {
    modal.style.display = "none";
    let body = document.getElementById("body")
    body.style.overflow = "scroll"
}





function searchList() {
    document.forms["depForm"]["depSel"].value = "Department"
    document.forms["semForm"]["semSel"].value = "StartingSemester"
    let result = students.filter(function(person) {
        if (person.ID.toLowerCase().includes(searchField.value.toLowerCase())) {
            return person;
        } else if(person.FirstName.toLowerCase().includes(searchField.value.toLowerCase())) {
            return person
        } else if(person.LastName.toLowerCase().includes(searchField.value.toLowerCase())) {
            return person
        } else if(person.EMailID.toLowerCase().includes(searchField.value.toLowerCase())) {
            return person
        } else if(person.DOB.toLowerCase().includes(searchField.value.toLowerCase())) {
            return person
        } else if(person.Department.toLowerCase().includes(searchField.value.toLowerCase())) {
            return person
        }
        switch(person.Gender) {
            case "0":
                console.log("male detected")
                if("Male".includes(searchField.value)) {
                    return person
                }
                break;
            case "1":
                if("Female".includes(searchField.value)) {
                    return person
                }
                break;
            case "2":
                if("Diverse".includes(searchField.value)) {
                    return person
                }
                break;
        }
    })

    displayList(result)
}


function departmentSelector() {
    let value = document.forms["depForm"]["depSel"].value
    if(value!="Department") {
        document.forms["semForm"]["semSel"].value = "StartingSemester"
        searchField.value = ''
        let list = getStudentListByDepartment(value)
        displayList(list)
    } else {
        document.forms["semForm"]["semSel"].value = "StartingSemester"
        searchField.value = ''
        displayList(students)
    }
}


function semesterSelector() {
    let value = document.forms["semForm"]["semSel"].value;

    if(value!="StartingSemester") {
        let studentList = getStudentListBySemester(value)
    document.forms["depForm"]["depSel"].value = "Department";
    searchField.value = ''
    displayList(studentList)
    } else {
        document.forms["depForm"]["depSel"].value = "Department"
        searchField.value = ''
        displayList(students)
    }

    
}


function getStudentListBySemester(semester) {
    if(semester=="sum") {
        let summerSem = students.filter(function(person) {
            var month = parseInt(person.JoiningDate.split("/")[1])
            if(month>3 && month<10) {
                return person
            }
        })
        return summerSem 
    } else if (semester=="wint") { 
        let winterSem = students.filter(function(person) {
            let month = parseInt(person.JoiningDate.split("/")[1])
            if(month<4 || month>9) {
                return true
            } 
        })
        return winterSem
    } 
}


function getStudentListByDepartment(departmentName) {
    return students.filter(person => person.Department == departmentName)
}


function displayList(list) {
    destroyCurrentList()
    elements = document.getElementsByClassName("contentListItem")

    
    for(student in list) {
        var contentListItem = document.createElement("li")
        contentListItem.className = "contentListItem"

        let parameterList = list[student]
        for(let s in parameterList) {

            if(s!="JoiningDate") {

            var p = document.createElement("p")
            p.className = "contentAttribute"

            let parameter = parameterList[s]
            if(s!="Gender") {
                var text = document.createTextNode(parameter)
            } else {
                var genderAsText
                switch(parameter) {
                    case "0":
                        genderAsText = "Male"
                        break
                    case "1":
                        genderAsText = "Female"
                        break
                    case "2":
                        genderAsText = "Diverse"
                        break
                }
                var text = document.createTextNode(genderAsText)
            }
            
            p.appendChild(text)
            contentListItem.appendChild(p)
            }
        }

        var contentList = document.getElementById("contentListOfStudents")
        contentList.appendChild(contentListItem)
    } }


    function destroyCurrentList() {
        elements = document.getElementsByClassName("contentListItem")
        let elementsLength = elements.length
        // https://stackoverflow.com/a/9882349/8054877!
        for(let i = 1; i<elementsLength; i++) {
            elements[i].remove()
            i--
            elementsLength = elements.length
        }
    }


    function openTab(evt, tabName) {
        var i, x, tablinks;
        x = document.getElementsByClassName("city");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        console.log(tablinks.length)
        for (i = 0; i < tablinks.length; i++) {
            console.log(i,". Iteration")
            tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
        }
        let currentTarget = evt.currentTarget
        let firstElementChild = currentTarget.firstElementChild
        console.log("firstElementChild: ",firstElementChild)
        firstElementChild.className += " w3-border-red";
      }