//declaring a function without a parameter
function functionName() {
    let name = 'faith'
    console.log(name)
  }
  functionName() // calling function by its name and with parentheses
  console.log()

  // function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
square() // 4
  
  // function without parameter
  function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  
  addTwoNumbers() // a function has to be called by its name to be executed

  /*function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
  
}
printFullName() // calling a function*/

function printFullName (){
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
}
console.log(printFullName())


function addTwoNumbers() {
    let numOne = 2
    let numTwo = 3
    let total = numOne + numTwo
    return total

}

console.log(addTwoNumbers())

// function with one parameter
function functionName(parm1) {
  //code goes her
}
functionName() // during calling or invoking one argument needed

function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}

console.log(areaOfCircle(10)) // should be called with one argument

function square(number) {
  return number * number
}

console.log(square(10))

// function with two parameters
function functionName(parm1, parm2) {
  //code goes her
}
functionName() // during calling or invoking two arguments needed

// Function without parameter doesn't take input, so lets make a function with parameters
function sumTwoNumbers1(numOne, numTwo) {
  let sum = numOne + numTwo
  console.log(sum)
}
sumTwoNumbers1(10, 20) // calling functions
// If a function doesn't return it doesn't store data, so it should return

function length(base, height ) {
  let triangle = base * height
  console.log(triangle)
  return triangle
}

length(10, 30)
console.log(length(10, 30))

function ages(age1, age2) {
  let sumOfAges = age1 + age2
  return sumOfAges
}

ages()
console.log(ages(23, 24))

function sumTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo
  return sum
}

console.log(sumTwoNumbers(10, 20))

function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh')) 


