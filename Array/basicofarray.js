// how to Create Array
  
var names = []; //empty array

var names = ["rushikesh","abhishek","sachin"];
noOfElement = names.length; //this property for no of  element is available in Array
console.log(noOfElement)


//how to add new element inside the array at last position
 names.push("sunny");
console.log(names);// output [ 'rushikesh', 'abhishek', 'sachin', 'sunny' ]



// how to add new element initial position 
    names.unshift("kishan",100	);
    console.log(names);   // output [ 'kishan', 100, 'rushikesh', 'abhishek', 'sachin', 'sunny' ]


// second example of add element initial position
    var user = [true,100,{name:"rushikesh",email:"sachin@gmail.com"}];
        console.log(user);//before adding element
        console.log(user[2].name) // access the object property from array
      user.unshift("sachin");
        console.log(user);            // output  [ 'sachin',true,100,{ name: 'rushikesh', email: 'sachin@gmail.com' } ]
  
  

// how to remove the element from first position by using shift method
    var numbers = [1,2,3,4,5,6,7,8];
     consloe.log(numbers);
    
     // remove the element from first position 
         numbers.shift()
  

    



    


