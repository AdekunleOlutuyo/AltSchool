// Functions

function sum() {
  let result = 20 + 30
  console.log(`The result is ${result}`)
}

sum()

let count = 0

//  Functions without parameters

function addToCount() {
   count = count + 1

   console.log("Count is: ", count)
}

addToCount()

// Functions with parameters

function displayName(firstName, lastName) {
  alert(firstName + " " + lastName)
}

displayName("Adekunkle", "Olutuyo")

//  functions with returns

function performMathOperation(number1, number2, operationType) {
  if (operationType == "add") {
    const result = number1 + number2
    return result
  } else if (operationType == "sub") {
    const result = number1 - number2
    return result
  } else if (operationType == "times") {
    const result = number1 * number2
    return result
  } else {
    alert("Invalid Operation")
  }
}

const timesResult = performMathOperation(2, 30, "times")
console.log(timesResult)


//  Function Expressions

const sayHello = function(){
  alert("Hello World")
}


// Call back Functions

function displayRealtor(displayType, showFullName, showId) {
  if (displayType == "full") {
    showFullName()
  } else {
    showId()
  }
}

function showFullName() {
  alert("Adekunle Olutuyo")
}

function showId() {
  alert("REMS02444")
}

displayRealtor("dwn", showFullName, showId)

// Arrow Functions

let sum = (a, b) => a + b;

sum()