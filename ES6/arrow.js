
// arrow function

const a = 4;
const b = 2;

// Traditional anonymous function (no parameters)
(function () {
  return a + b + 100;
});

// convert to arrow function 

var result = () => a + b + 100;
console.log(result());


//1. map function

var names = ["rushi", "sachin", "kishan"];

var listOfLength = names.map(name => name.length);
console.log(listOfLength);
console.log(names);

//2 forEach function

var numbers = [1, 2, 3, 4, 5, 6, 7];
numbers.forEach(number => console.log(number));



// 
