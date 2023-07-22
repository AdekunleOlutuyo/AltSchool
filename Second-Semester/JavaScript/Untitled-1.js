// Comments
// This is a one line comment
/* This is a multi
line comment*/

// let age = 30;

// age = 30.5;

// console.log(age)

const name = `Adekunle`;
const age = 30;
const rating = 5.0;
const isHandsome = true;
const x = null;
const y = undefined;

console.log(typeof age)

console.log(`My name is ${name} and I am ${30}`)


const s = `Hello World`

console.log(s.length);

console.log(s.toUpperCase());

console.log(s.toLowerCase());

console.log(s.substring(0, 5));

console.log(s.substring(0, 5).toUpperCase());



// Arrays - variables that hold multiple values
// they are zero based in every language

const numbers = new Array(1,2,3,4,5)

console.log(numbers);

const shoes = [`Nike`, `Adidas`, `Fendi`, `New Balance`]

// this is to add an item to the end of the array

shoes.push(`Reebok`); 

// this is to add an item to the front of the array

shoes.unshift(`Clarks`);

// this is to take the one at the bottom off

shoes.pop();

console.log(shoes.indexOf(`Fendi`));

console.log(Array.isArray(shoes));

console.log(shoes);


// Object Literals

const person = {
  firstName: `Adekunle`,
  lastName: `Olutuyo`,
  age: 30,
  hobbies: [`music`, `movies`, `fucking`],
  address: {
    street: `3 Ogunsola st`,
    city: `Ikosi-Ketu`,
    state: `LA`
  }
}

console.log(person);

console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);

console.log(person.address.city);

const {firstName, lastName} = person;

console.log(firstName);

const {address: {city}} = person;

console.log(city);


