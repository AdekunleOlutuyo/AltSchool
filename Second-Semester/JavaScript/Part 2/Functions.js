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