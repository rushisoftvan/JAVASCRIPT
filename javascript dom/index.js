
function changeText(){
    var text = document.getElementById("text");
    console.log(text);
    text.innerHTML="change";
    text.style.color="green";

    
}

function showTable(){
    var showTable = document.getElementById("showtable");
    var users = [{name:"rusikesh",mobileNo:"6473"},{name:"sachin",mobileNo : "6756"}]
    var table = document.createElement("table");
    
    console.log(users);

    for(let user of users){
        var tr = document.createElement("tr");
        var td1 = document.createElement("td");
        var td2 = document.createElement("td");

         td1.innerText = user.name;
         td2.innerText= user.mobileNo;
         

         tr.appendChild(td1);
         tr.appendChild(td2);
        
         table.appendChild(tr);

    }

    showTable.appendChild(table);


}

var names = [];
function saveDataInOneArray(){
    var name = document.getElementById("name");
    //var save = documnet.getElementById("savebutton");
    //savebutton.innerText = "savedData"
    //console.log(form);
    names.push(name.value);
    console.log(names);
}
