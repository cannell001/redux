const person = {
  name: "John",
  age: 65,
  location: {
    city: "Erie",
    temp: 32
  }
};

//console.log(`${person.name} is ${person.age}.`);

// const name = person.name;
// const age = person.age;

//console.log(`${name} is ${age}.`);

//with object destructuring

const { name, age } = person; //equivalent of lines 12 & 13
console.log(`${name} is ${age}.`);
