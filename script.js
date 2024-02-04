// alert (test)
function addNewWEField(){
    // console.log("Adding new field"); 

    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control');
    newNode.classList.add('weField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById('weAddButton');

    weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewAQField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control');
    newNode.classList.add('aqField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let aqOb=document.getElementById("aq");
    let aqAddButtonOb=document.getElementById('aqAddButton');

    aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewSKField(){
    let newNode=document.createElement('textarea')
    newNode.classList.add('form-control');
    newNode.classList.add('skField');
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");

    let skOb=document.getElementById("sk");
    let skAddButtonOb=document.getElementById('skAddButton');

    skOb.insertBefore(newNode, skAddButtonOb);
}

//generating CV
function generateCV()
{
    // console.log("generating CV"); 


    let nameField=document.getElementById('nameField').value;

    let nameT1=document.getElementById('nameT1');

    nameT1.innerHTML = nameField;

    // direct
    document.getElementById('nameT2').innerHTML = nameField;

    //contact
    document.getElementById('contactT').innerHTML = document.getElementById("contactField").value;

    //email
    document.getElementById('emailT').innerHTML = document.getElementById("emailField").value;

    //address
    document.getElementById('addressT').innerHTML = document.getElementById("addressField").value;

    //facebook
    document.getElementById('fbT').innerHTML = document.getElementById("fbField").value;


    //instagram
    document.getElementById('instaT').innerHTML = document.getElementById("instaField").value;


    //linkedIn
    document.getElementById('linkedT').innerHTML = document.getElementById("linkedField").value;


    //youtube
    document.getElementById('ytT').innerHTML = document.getElementById("ytField").value;


    //objective
    document.getElementById('objectiveT').innerHTML = document.getElementById("objectiveField").value;


    //work experience
    let wes = document.getElementsByClassName('weField');
    let str = "";

    for (let e of wes) {
    str = str + `<li>${e.value}</li>`;
    }

    document.getElementById('weT').innerHTML = str;


    //academic qualification
    let aqs = document.getElementsByClassName('aqField');
    let str3 = "";

    for (let e of aqs) {
    str3 = str3 + `<li>${e.value}</li>`;
    }

    document.getElementById('aqT').innerHTML = str3;



    //skills
    let sks = document.getElementsByClassName('skField');
    let str2 = "";

    for (let e of sks) {
    str2 = str2 + `<li>${e.value}</li>`;
    }

    document.getElementById('skT').innerHTML = str2;

    document.getElementById('cv-form').style.display='none';
    document.getElementById('cv-template').style.display='block';

}


    function printCV() {
        window.print();
        }

