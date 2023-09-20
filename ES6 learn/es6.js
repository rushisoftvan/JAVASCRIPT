


// function learn()
// {  
//     var x = 10;
//     if(true){
//          let x = 10;
//          var y=20;

//          console.log(x);
//     }
//     console.log(x);
// }
// console.log(x)
// learn();0



// hoisting   if you do thing it will be work 
// what java script do it will read all declaretion and put where it call  

/*

note : java script hoist only declare variable

*/
 hello(); // first use

 function hello(){
    console.log("hello"); // then declare
 }   // it is call hoisting 

 // hoisting for variable
    console.log("hoisting variable")

    // var x;// declarition 
    // console.log(x);
    // x=7;  // assignment


    console.log(x);  // output is undefined
    var x=7;    // what will do here java script what will be happen here it will take declare variable  so that why output wiil be undefined
      
    // default parameter
function  sum(a=2, b=7){
    console.log(a);
    console.log(b)
   console.log(`the sum is ${a+b}` );
}
sum();
sum(10,10);


// rest parameter

//  function getBikes(bikeName){
//    console.log(bikeName);
//  }
//  getBikes();
 
// rest parameter deep
 //when we give like ...parameter that is means it take as array []


//  proper example

 function getNames(...names){
    console.log(names)
 }
 getNames("rushikehs", "sachin");

 function sumValue(... value){
   console.log("rest parameter completed") 
    var result=0;
    for(var va of value)
    {
        result = result+va;
    }
    console.log(result);
    console.log("rest parameter completed")

 }

 sumValue(5,5,7,8);  // 


 // spread operater
   
 function spreadExampleOne(){
    console.log("spreadExampleOne  startd");
     
     let numbers1 = [2,3,4];
     let numbers2 = [4,5,6,...numbers1];
     console.log(numbers1); //  [ 2, 3, 4 ]
     console.log(numbers2); // [ 4, 5, 6, 2, 3, 4 ]

    

    console.log("spreadExampleOne end");
 }
spreadExampleOne();


function spreadExampleTwo()
{
    console.log("spreadExampleTwo start");
       
    let object1 = 
                 {
                    name: "sachin"
                 }
      let object2 = {...object1}
      console.log(object1);
      console.log(object2);
      console.log(object1==object2);     

     

    console.log("spreadExampleTwo close");
}
spreadExampleTwo();

// for loop 

function forLoopExampleOne(){
    console.log("forLoopExampleOne started");
    let name="rushikesh";
    let count =0;
    for(let char of name){
         
       if(char=='s')
       {  
          count++;
       }
       
    }
    console.log(count);

    console.log("forLoopExampleOne closed");
    
}

forLoopExampleOne();


// template letarals

function templateExampleOne(){
     console.log("templateExampleOne stated");

     console.log("templateExampleOne close");
}
templateExampleOne();


function templateExampleTwo(){
    console.log("templateExampleTwo started");
        let name = "sachin";
        console.log(` Result :My Name is ${name}`);
     console.log("templateExampleTwo close");
}
templateExampleTwo();

// Destructing example one

    function destructingExampleOne(){
          let user = 
          {
              name:"sachin",
              email: "sachi@gmail.com"
          };        
       //console.log(user.name);
       let {name,email} = user;
          console.log(name);
    }

    destructingExampleOne();

    // Destructing example two


    function destructingExampleTwo(){
        console.log("destructingTwo started");
          
         

        console.log("tdestructingTwo close");

    }

     // we can create the session 
     document.cookie="name=rushikesh";
     // cockies store only in 4 kb , Local storage 10 mb , where to status storage
 

     function readJsonDataFile(){
        
      fetch("./data.json")
      .then(resp => resp.json())
      .then(data => console.log(data));

     }
     readJsonDataFile();




   