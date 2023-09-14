// ...spread if we want to clone the object we will use it

const languages = ['c', 'java', 'javascript',];
const newLanguages = [...languages]; // this is the clone object of languages object
console.log(languages === newLanguages); // it will return the false because both are different array
console.log(newLanguages);

//Note : if we will use the like this newLanguages=languages that means both are pointed to same value

// if we want to add extra element inside the newLanguages object

const firstLanguages = ['React', ...languages];
const secondLanguage = [...languages, '.net'];
console.log(firstLanguages);


//  example 2 

let student = {
    name: "ruhsikesh",
    isPlayer: true
}

//let player = student;
//player.name='kishan';
// console.log(student); //{ name: 'kishan', isPlayer: true } beacause both object are same

// if we will use spread then it will different object

let newPlayer = { ...student };
console.log(newPlayer === student);// false
newPlayer.name = 'sumit';
console.log(newPlayer); // there are both object are different
console.log(student);

//example 3

const setting =
{
    volume: 10,
    brightness: 80,
    address: {
        city: 'ahmedabad'
    }

}

const  newSetting = {...setting};

// we can override the value of main object property in over clone object
const overRideSetting = {...setting,volume:24}; 
console.log(overRideSetting);

console.log(setting['address']===newSetting['address']);
console.log(newSetting);


