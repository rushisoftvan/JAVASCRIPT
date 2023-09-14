// Rest It  is use for function

// ... three.  


// Example 1 rest means varargs which is use in jabva
  const addItems = (...value)=>{
    console.log(value);
    
  }

  addItems(2,3,4,5);// result 3
  //addItems(3,4,5);//12
  

   // for loop in es 6 for array
    let numbers = [1,2,3,4,5,6,7];
    for(number of numbers)
    {
        console.log(number);
    }

    // for loop of object
    //TypeError: person is not iterable
    //  const person = {
    //     name : 'rakesh',
    //     city : 'ahmedabad',
    //     brand : 'apple'
    //  }
     
    //  for(entry of person){  
    //     console.log(entry);
    //  }

    // if we want to use object iterate then we will use 

    const person = 
          {
            name : 'rakesh',
            city : 'ahmedabad',
            brand : 'apple'
          }

          for(entry of Object.entries(person))
          {  

             
             console.log(entry);
             if(entry[1]=='rakesh')
             {
               console.log("rushikesh");
             }
             console.log()
            
          }
         