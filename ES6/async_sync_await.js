// synac ka matalb ek task hone ke bad hi dusra hoga
//async ka  sare kam ek sat suru kardo jo task ho jaye vo pahale response de do

//async 
// if our method asynac then it return promises
//     async makes a function return a Promise
//await makes a function wait for a Promise 

// async and await in javascript
// async and await return promise

//async  print also promise without using then and catch
//also using async delaying time

// await wait for promise return 
//await not work without async


// In promises we used to then and catch but if we use async we do not need to use then and  catch 
// async and await method replace the then and catch

//  let promise =  new Promise((resolve,reject)=>
//  {
//         setTimeout(()=>{
//            let api = true;
//            if(api){
//               resolve("I got value")
//            } 
//            else
//            {
//                reject("promises rejected")
//            }
//         },2000);
//  })
//    // promise.then((response)=>console.log(response)); // if promise return
   
//    async function check(){
//       let data = await promise; // promise ke liye wate karo and bad me chalao
//       console.log(data);
//       console.log("after await")
//    }
//    check();

//    // example 2 
       
//    async function getData(){
//          let data = await fetch("https://jsonplaceholder.typicode.com/users");
//           let response = await data.json();
//           console.log(response);
//          console.log("sachin");
//    }
//    getData();
    
    
         
 let check  = new Promise((resolve,reject)=>
   {
     setTimeout(()=>
     {
        let status = true;
        if(status)
        {
           resolve(3);
        }
        else{
            reject(5);
        }   
     },4000);
   }
   );
   
    //check.then(res => console.log(res)).catch(reject => console.log(reject));


    // now I am replacing the then and catch to async and await


    async function getCheck(){
       let data = await check;
       console.log(data);
       console.log("promises finish");
    }

    getCheck();
    









  

 

