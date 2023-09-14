// var keyword scope function level
// let keyword scope block level scope
// const keyword scope block level 



function getName() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log(i); // here we can get error  let block level scope // if we will take var it will work beause var has globel sopee
}


// difference between let and const

//  const x = 2;
//    x=5;
//    console.log(x); // we will get error TypeError: Assignment to constant variable

let y = 2;
console.log(y);
y = 5;
console.log(y);  // we will not get error we can change the value of if we assign the value we can change


//3.  multiline string

let name = `rushikesh`;
console.log(name);

//default parameter es 6
const sum = (a = 5, b = 6) => a + b;
console.log(sum()); // when we will not pass the value.
console.log(sum(7, 8));//15

// Template Literals
//before template
let v = 10;
let item = "mobile" + v;
console.log(item);

//after template literals we do not need to concate
let speed = 50;
let message = `This is speed of bike : ${speed}`;
console.log(message);

//6 Destructuring Assignment : 

// before destructuring Assignment
let mobiles = ["vivo", "nokia", "mi"];
console.log(mobiles[0], mobiles[1], mobiles[2]);

// after  Destructuring Assignment 
let [x, a, z] = ["hero", "tvs", "bajaj"];
console.log(x);
console.log(a);
console.log(z);

let obj = 
{
  type: "javascript",
  dbname: "mysql"

};

let { type, dbname } = obj;
console.log(type);
console.log(dbname);


var sumResult = sum(5, 6);
console.log(sumResult);


// this is primitive
const lastName = "malvadkar"; //String 
console.log(typeof lastName);

//this is object
const city = new String("ahmedabad");
console.log(typeof city);// object


//console.log(window);
//alert("abhishek");
//console.log(navigator); // which is use for get 

const book1 = 
{
  title: "bookone",
  year: "2023",
  author: "sachin",
  getSummery: function () 
  {
    return `the title of book is ${this.title} and year of book is ${this.year} and author is book of ${this.author}}`
  }

};
console.log(book1.getSummery());   // output the title of book is bookone and year of book is 2023 and author is book of sachin}  


// constructor 

class Person 
{
  constructor(name, email)
   {
    this.name = name;
    this.email = email;
   }
}

const person = new Person("rusikesh", "rushi@gmail.com");
console.log(person);






