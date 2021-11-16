const staff = 
[{"ID":"72040","FirstName":"Christyna","LastName":"Pilipets","Gender":"2","DOB":"1993/06/11","EMailID":"cpilipets0@smugmug.com"},
{"ID":"25170","FirstName":"Randolph","LastName":"Wraith","Gender":"0","DOB":"1992/08/15","EMailID":"rwraith1@furl.net"},
{"ID":"59341","FirstName":"Rory","LastName":"Baddiley","Gender":"2","DOB":"1982/04/13","EMailID":"rbaddiley2@cornell.edu"},
{"ID":"95277","FirstName":"Elladine","LastName":"Hedditch","Gender":"1","DOB":"1983/02/02","EMailID":"ehedditch3@bizjournals.com"},
{"ID":"12899","FirstName":"Codie","LastName":"MacIan","Gender":"0","DOB":"1993/12/05","EMailID":"cmacian4@istockphoto.com"},
{"ID":"76224","FirstName":"Raphael","LastName":"De Michele","Gender":"0","DOB":"2002/08/27","EMailID":"rdemichele5@dell.com"},
{"ID":"58955","FirstName":"Tristam","LastName":"Creese","Gender":"0","DOB":"1984/03/17","EMailID":"tcreese6@omniture.com"},
{"ID":"32573","FirstName":"Jonell","LastName":"Scollick","Gender":"2","DOB":"2001/07/01","EMailID":"jscollick7@sciencedaily.com"},
{"ID":"78748","FirstName":"Mikaela","LastName":"Duinbleton","Gender":"1","DOB":"1994/10/03","EMailID":"mduinbleton8@ovh.net"},
{"ID":"20053","FirstName":"Kelley","LastName":"Brandt","Gender":"1","DOB":"1993/03/26","EMailID":"kbrandt9@creativecommons.org"},
{"ID":"66687","FirstName":"Martie","LastName":"Diviny","Gender":"1","DOB":"1986/01/10","EMailID":"mdivinya@usnews.com"},
{"ID":"49679","FirstName":"Gayle","LastName":"Squire","Gender":"2","DOB":"2002/03/30","EMailID":"gsquireb@nih.gov"},
{"ID":"66570","FirstName":"Freddie","LastName":"Bursnoll","Gender":"1","DOB":"1997/09/19","EMailID":"fbursnollc@loc.gov"},
{"ID":"55819","FirstName":"Reinald","LastName":"Ewbanks","Gender":"2","DOB":"1997/04/29","EMailID":"rewbanksd@nih.gov"},
{"ID":"60851","FirstName":"Aurelia","LastName":"Petruskevich","Gender":"0","DOB":"2000/06/28","EMailID":"apetruskeviche@amazon.co.jp"},
{"ID":"99540","FirstName":"Powell","LastName":"Robun","Gender":"2","DOB":"1986/02/04","EMailID":"probunf@google.com.hk"},
{"ID":"47126","FirstName":"Lia","LastName":"Puttan","Gender":"1","DOB":"1980/07/01","EMailID":"lputtang@techcrunch.com"},
{"ID":"02919","FirstName":"Eddi","LastName":"Ogle","Gender":"1","DOB":"1986/02/17","EMailID":"eogleh@ihg.com"},
{"ID":"89893","FirstName":"Barbette","LastName":"Murray","Gender":"0","DOB":"1993/09/22","EMailID":"bmurrayi@mapquest.com"},
{"ID":"98526","FirstName":"Romy","LastName":"Woodvine","Gender":"2","DOB":"1986/12/09","EMailID":"rwoodvinej@walmart.com"},
{"ID":"91146","FirstName":"Cissy","LastName":"Southers","Gender":"1","DOB":"1986/05/28","EMailID":"csouthersk@senate.gov"},
{"ID":"63578","FirstName":"Cristin","LastName":"Bellinger","Gender":"1","DOB":"1980/10/01","EMailID":"cbellingerl@youtu.be"},
{"ID":"86453","FirstName":"Paton","LastName":"Hardisty","Gender":"0","DOB":"2003/05/28","EMailID":"phardistym@squarespace.com"},
{"ID":"84069","FirstName":"Jemie","LastName":"Antonsen","Gender":"1","DOB":"2003/10/04","EMailID":"jantonsenn@biblegateway.com"},
{"ID":"41924","FirstName":"Shaine","LastName":"Hickin","Gender":"1","DOB":"2003/10/08","EMailID":"shickino@dedecms.com"},
{"ID":"32794","FirstName":"Amabelle","LastName":"Angood","Gender":"0","DOB":"1998/10/03","EMailID":"aangoodp@europa.eu"},
{"ID":"47331","FirstName":"Julieta","LastName":"Andrewartha","Gender":"0","DOB":"1998/01/22","EMailID":"jandrewarthaq@so-net.ne.jp"},
{"ID":"78651","FirstName":"Magdalene","LastName":"Keogh","Gender":"0","DOB":"1989/03/13","EMailID":"mkeoghr@ted.com"},
{"ID":"44359","FirstName":"Elane","LastName":"Abriani","Gender":"0","DOB":"1999/06/10","EMailID":"eabrianis@techcrunch.com"},
{"ID":"39180","FirstName":"Kinna","LastName":"Agnew","Gender":"2","DOB":"1989/11/05","EMailID":"kagnewt@seesaa.net"},
{"ID":"68362","FirstName":"Cyndy","LastName":"Massimo","Gender":"1","DOB":"1984/02/16","EMailID":"cmassimou@freewebs.com"},
{"ID":"25284","FirstName":"Doe","LastName":"Kellock","Gender":"0","DOB":"2003/11/24","EMailID":"dkellockv@amazon.com"},
{"ID":"44186","FirstName":"Paddie","LastName":"Bachmann","Gender":"0","DOB":"1982/08/01","EMailID":"pbachmannw@xing.com"},
{"ID":"57121","FirstName":"Thatch","LastName":"Braunfeld","Gender":"0","DOB":"1994/05/15","EMailID":"tbraunfeldx@yolasite.com"},
{"ID":"41771","FirstName":"Cynthia","LastName":"Sterry","Gender":"1","DOB":"2003/03/13","EMailID":"csterryy@uol.com.br"}]


window.onload = function() {
    displayList(staff)
};


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

        /*
        var p = document.createElement("p")
        p.className = "contentAttribute"
        var text = document.createTextNode(list[student].ID)
        p.appendChild(text)
        contentListItem.appendChild(p)
        
        var p = document.createElement("p")
        p.className = "contentAttribute"
        var text = document.createTextNode(list[student].FirstName)
        p.appendChild(text)
        contentListItem.appendChild(p)

        var p = document.createElement("p")
        p.className = "contentAttribute"
        var text = document.createTextNode(list[student].LastName)
        p.appendChild(text)
        contentListItem.appendChild(p)

        var p = document.createElement("p")
        p.className = "contentAttribute"
        var text = document.createTextNode(list[student].DOB)
        p.appendChild(text)
        contentListItem.appendChild(p)


        var p = document.createElement("p")
        p.className = "contentAttribute"

        var genderAsText
        switch(list[student].Gender) {
            
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
        p.appendChild(text)
        contentListItem.appendChild(p)


        var p = document.createElement("p")
        p.className = "contentAttribute"
        var text = document.createTextNode(list[student].Department)
        p.appendChild(text)
        contentListItem.appendChild(p)

        var p = document.createElement("p")
        p.className = "contentAttribute"
        var text = document.createTextNode(list[student].EMailID)
        p.appendChild(text)
        contentListItem.appendChild(p)
        */
        var contentList = document.getElementById("contentListOfStaff")
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
