class Student {
 constructor(name){
    this.name=name;
 }
 sayHello()
 {
    console.log(this.name);
 }
}

let student =  new Student("rushikesh");
console.log(student);
student.sayHello();
let student2 = student;
console.log(student2==student);
student2.name="sachin";
console.log(student);

// let student2 =  new Student("rushikesh");
// console.log(student2);
// console.log(student===student2); // false


class Animal
{
   constructor(name,speed){
    this.name=name;
    this.speed=speed;
   }

     run(){
       console.log(`The name of ${this.name} and speed is  ${this.speed}`) ;
     }
}

class Cow extends Animal
 {
    constructor(name,speed,color){
        super(name,speed)
        this.color=color;
    }
    hide(){
        console.log(`the name of cow ${this.name} is hide`);
    }   
 } 

  cow =  new Cow("rani",200,"black");
 cow.hide();
 cow.run();
 
 
// Private and protected properties and methods
// declare the filed in javascript class by using _ 

//    class TeaMachine{

//         waterAmountInLtr; // the amount of water inside // 
//        constructor(power,waterAmountInLtr){
//         this.power=power;
//         this._waterAmountInLtr=waterAmountInLtr;
//        }

      

//    }
    class Person
    {
        #name;
        #email;
        #mobileNo="7620611"
        constructor(name,email){
           this.#name=name;
           this.#email=email
        }
        getEmail(){
          console.log(this.#email);
        }
        getName(){
            console.log(this.#name);
        }
    }

    let person = new Person("rushikesh",'ru@gmail.com');
    console.log(person.getEmail());
    
    
     // console.log(person.email);// output undifined

     //Class checking: "instanceof"

   let isPerson =new Person("abhi","sachin@gmail.com") instanceof Person; // true
   console.log(isPerson);



// static method  inside class

class Message
{
    static getMessage(){
        console.log("message");
    }
}

// variable static variable
// I have observe there we can not call the static member after creating object 
// we can 

class Car
{
      static name="jimmy";
      constructor(year){
         this.year = year;
      }

      
}
  let car =  new Car(2323);
    console.log(car.year);// we can not call by static method by reference
    console.log(Car.name);

   
    

  
    
      
    
    
      
      
      
    

    
    
       

   
