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

// print details in variable "person"
console.log(person);

// targeting specific details
console.log(person.firstName, person.lastName);

// more specific targeting using indexof
console.log(person.hobbies[1]);

console.log(person.address.city);

const {firstName, lastName} = person;

console.log(firstName);

const {address: {city}} = person;

console.log(city);

person.email = `tuyo@gmail.com`;

console.log(person);


// Arrays

const todos = [
  {
    id: 1,
    text: 'Take out trash',
    isCompleted: false
  },
  {
    id: 2,
    text: 'Grocery Shopping',
    isCompleted: true
  },
  {
    id: 3,
    text: 'Talk to bae',
    isCompleted: true
  },
];

console.log(todos)

console.log(todos[1].text)

//  Convert arrays to JSON
//  This is how you send data to servers


const todoJSON = JSON.stringify(todos);

console.log(todoJSON);

// For Loops

for(let i = 0; i <= 10; i++) {
  console.log(`For loop number ${i}`);
}

// While loops

let i = 0
while(i < 10) {
  console.log(`While loop number ${i}`);
  i++;
}

// Do.....While Loop



// Loop through Arrays

for(let i =0; i < todos.length; i++) {
  console.log(todos[i].text);
}

// for of loop

for(let todo of todos) {
  console.log(todo.text);
}


// String Methods
//  Every sting has a set of specific methods

let message = "leave me alone right now, i hate you pls";

message.toUpperCase();

console.log(message.toUpperCase());

message = "        i hate you         ";

console.log(message.trim().toUpperCase());

//  Stings Methods wtih arguments

let max = 'dont you go there any more';

console.log(max.indexOf('n'));

//  slice is is going extract a portion of a string and then give it to us as a new string

let text = "Will you be coming tomorrow?";

console.log(text.slice(12));

let newText = "haha";

console.log(newText.repeat(50));


// Template Literals; these allows us to embed expressions which will be evaluated and then turned into a resulting stirng.
//  We use backticks `` not regukar quotes ''

let myAge = `hello ${20 + 10}`;

console.log(myAge);

//  Decision Making

// Boolean Logic

let hisAge = 30;

console.log(hisAge >= 18);

//  CONDITIONALS

//  if statement

if (1 + 1 === 2){
  console.log("MATH STILL WORKS")
}
 
//  Else-if Statements

const rent = Math.random()*(1000000 - 200000) + 200000;

if (rent <= 500000){
  console.log('Get Apartment')
} else if ( rent > 500000) {
  console.log('Keep Searching')
}

//  Else statements; this is going to be the last thing if nothing else matches your conditionals

let today = prompt("Enter the day")
if (today == "monday") {
  alert ("Today is Monday")
} else {
  alert("Today is not Monday")
}

//  Conditional Operator Tenary operator(operates on three values) "?"

let canVote = (age > 18) ? true : false

console.log(canVote)

//  Nested Conditionals



//  Switch Statements

const day = 1;

switch (day) {
  case 1:
    console.log("Today na Monday")
    break;
  case 2:
    console.log("Today na Tuesday")
    break;
  case 3:
    console.log("Today na Wednesday")
    break;
  case 4:
    console.log("Today na Thursday")
    break;
  case 5:
    console.log("Today na Friday")
    break;
}



// Logical Operators

// true && true ---- true

// true && false ---- false

// false && false ---- false

// false && true ---- false 

// Logical AND &&; Both sides must be true for the entire thing to be true

const password = prompt("Enter your password");

if (password.length >= 6 && password.indexOf(' ') === -1) {
  console.log ("Valid Password") 
  } else {
    console.log ("Invalid format")
  }

//  Logical OR || only one needs to be true



// Logical NOT; this negates whatever statement you set














