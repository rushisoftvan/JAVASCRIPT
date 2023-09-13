function createTable(){

    var bodyRef = document.getElementsByTagName("body");
   
    var users = [{name:"rushikesh"},{name:"sunita"}]
      
    console.log(users);
  

   var table =  document.createElement("table");//<table></table>
    //var tr1 =  document.createElement("tr");//<tr></tr>
    //var tr2 =  document.createElement("tr");//<tr></tr>
    //var tr3 =  document.createElement("tr");//<tr></tr>
   // var td1 = document.createElement("td");  //<td></td>

    // td1.innerText="rushikesh";

    // tr1.appendChild(td1); 
     
    // table.appendChild(tr1);

    // bodyRef[0].appendChild(table);
    // console.log(bodyRef);
     

    for(let user of users){
        console.log(user);
         var tr = document.createElement("tr");
         var td = document.createElement("td");
         
         td.innerText= user.name;
         

         tr.appendChild(td);
         table.appendChild(tr);

    }

    
}


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
