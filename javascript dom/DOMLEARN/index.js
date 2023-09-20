
function getBook(){
    var output
    var book = document.querySelector("#item").value;
    console.log(book);
    console.log("getBook");
    output+=`<table>`
    reSet();
}

function reSet(){
   document.querySelector("#item").value=""; 
}


