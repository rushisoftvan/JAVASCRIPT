//----------------promises----------------------------------------------------------
 
//before

// function login(){
//     setTimeout(()=>
//     {
//       console.log("login");  //Redirecting. login
     
//     },0);
// }

//login();
//console.log("Redirecting");


// the output is 
// redirecting 
// loging 


function logIn(cb){
    setTimeout(()=>
    {
      console.log('login');
       cb();
     },0);
}

logIn(()=>
{
  console.log("Redirecting");
});

