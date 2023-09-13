// if we want to extracte the value from the array
  
      var numbers = [1,2,3,4,5,6,7,8];
        console.log(numbers);
      var newNumbers = numbers.slice(1,4); // output it will create the new array with  extracte element [ 2, 3, 4 ]
          console.log(newNumbers);

   // how array indexOf method 
        var names = ["ruhsi","sachin","mahesh"];
        var name =  names.indexOf("ruhsi") // note It element is wrong then it will return  -1
            console.log(name); // output 
         
  // if two element are same indexOfmethod
       var items = ["mobile","cloths","tv","tv"];
        var result =  items.indexOf("tv");
        console.log(result);

//   includes() method of array it is use for check this element available or note
       var workerName = ["ruhsuikesh","mahesh","sachin","abhi"];
       var isElement = workerName.includes("sachin"); //output true
       console.log(isElement);


 // forEach method in array and add 100 of every element
     var shopNumbers = [233,453,345,234,789];
          shopNumbers.forEach(number => number+100);
          
         
         
      
     



     
