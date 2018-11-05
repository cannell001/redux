const person = {
  name: "John",
  age: 65,
  location: {
    city: "Erie",
    temp: 32
  }
};

// const { name, age } = person; //equivalent of lines 12 & 13
// console.log(`${name} is ${age}.`);

if (person.location.city && person.location.temp) {
  console.log(`it's ${person.location.temp} in ${person.location.city}.`);
}

// const { city, temp } = person.location;
//
// if (city && temp) {
//   console.log(`it's ${temp} in ${city}.`);
// }

//renaming Syntax
const { city, temp: temperature } = person.location;

if (city && temperature) {
  console.log(`it's ${temperature} in ${city}.`);
}

//Default values

// const { name = "Anonymous", age } = person; //equivalent of lines 12 & 13
// console.log(`${name} is ${age}.`);

//Default & Rename

const { name: firstName = "Anonymous", age } = person; //equivalent of lines 12 & 13
console.log(`${firstName} is ${age}.`);
