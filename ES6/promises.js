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


// function logIn(cb){
//     setTimeout(()=>
//     {
//       console.log('login');
//        cb();
//      },0);
// }

// logIn(()=>
// {
//   console.log("Redirecting");
// });



// example 1
function logIn() {
  return new Promise((resolve, reject) => {
       setTimeout(()=>{
         console.log("loging");
         resolve()
        },0);

  });
}

logIn().then(()=>console.log("redirecting")).catch(()=>console.log("something wrong"));


//example 2
function getData()
{
  
  fetch("https://jsonplaceholder.typicode.com/users").
then(res => res.json())
.then(data => 
  {
       for(user of data)
       {
          if(user['id']==1)
          {  
             
              console.log(user);
          }   
       }
       checkIsRushikeh();

  });
}
getData();
 

function checkIsRushikeh()
  {
    let names = ["rushikesh","abhi","sachin"];

    names.filter(name =>
       {
         if(name==="rushikesh")
         {
              console.log("true");
         }
       });
  }




