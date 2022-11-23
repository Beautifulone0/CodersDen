//Question 1 Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation
 function linEquation (a, b, c) {
    let value = b / a
    let slope = -a / b 
    let intercept = c / a
    console.log(value, slope, intercept)
 }
 linEquation(2, 5, -7)

//Question 2 Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
    function quadEquation (a, b, c) {
        const num1 = -b + Math.sqrt((b ** 2 - 4 * a * c) / 2 * a)
        const num2 = - b - Math.sqrt(((b ** 2 - 4 * a * c) / 2) * a)
        return `${num1}${num2}`
    }
     console.log(quadEquation(1, 4, 4));
//Question 3 Declare a function name printArray. It takes array as a parameter and it prints out each value of the array
     function printArray (array) {
        let values = 'faith, favour, divine, junior, winner, godswill'
        return values.split()
     }
     console.log(printArray())
     
//Question 4 Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
     function showDateTime () {
       const now = new Date()
       let date = now.getDate()
       let month = now.getMonth() + 1
       let year = now.getFullYear()
       let time = now.getTime()
       let minutes = now.getMinutes()
       let seconds = now.getSeconds()
       return `${date}/${month}/${year} ${minutes}:${seconds}`
     }
     console.log(showDateTime())

//Question 5 Declare a function name swapValues. This function swaps value of x to y.
     function swapValues (x, y) {
       let b = y
       y = x
       x = b
       return `${x} ${y}`
     }
     console.log(swapValues(4, 3))

//Question 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method)
    function reverse (array) {
     let newArr = []
     for(let array = 10; array >= 1; array--) {
          newArr.push(array)
     }
     console.log(newArr)
    }
    reverse()

//Question 7 Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
     function capitalizeArray (...array) {
     for(let i = 0; i < array.length; i++) {
          array[i].toUpperCase()
      }
      return array
     }
     console.log(capitalizeArray('beatifulone0', 'faith'))

//Question 8 Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
      function addItem (...item) {
          let newItem = []
          newItem.push(item)
          return item
      }
      console.log(addItem('milk', 'milo', 'sardine', 'bread'))

//Question 9 Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
      function removeItem (index) {
          let array = ['favour', 'faith', 'divine',1, 2, 3]
          return array.filter((item) => item !== array[index] )
      }
      console.log(removeItem(1))

//Question 10 Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
      function sumOfNumbers (number) {
          let newNumbers = 0
          for(let i = 0; i <= number; i++)
           newNumbers += i;
          return newNumbers
      }
      console.log(sumOfNumbers(10))

//Question 11 Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
      function sumOfOdds(num) {
      let sum = 0;
      for (let i = 1; i <= num; i += 2) {
       sum += i;
      }
      return sum;
     };
      console.log(sumOfOdds(10));

//Question 12 Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range
      function sumOfEven (num) {
      let sum = 0;
      for (let i = 0; i <= num; i += 2) {
       sum += i;
      }
      return sum;
     };
      console.log(sumOfEven(10))

//Question 13 Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number
      function evensAndOdds (num) {
      let even = 0;
      let odd = 0;
      for (let i = 0; i <= num; i++) {
       i % 2 === 0 ? even++ : odd++;
      }
      return `The number of odds are ${odd}.
       The number of evens are ${even}.`;
     };
      console.log(evensAndOdds(10))

//Question 14 Write a function which takes any number of arguments and return the sum of the arguments
      function numArguments (...array) {
      let sum = 0;
      for (let i = 0; i <= array.length; i++) {
       sum += i;
      }
      return sum;
     };
      console.log(numArguments(1, 2, 3, 4, 5,));

//Question 15 Write a function which generates a randomUserIp.
      function randomUserIp ()  {
      let Ip =
       Math.floor(Math.random() * 100) + "." + Math.floor(Math.random() * 100) + "." + Math.floor(Math.random() * 100) + "." + Math.floor(Math.random() * 100);
      return Ip;
     };
      console.log(randomUserIp());

//Question 16 Write a function which generates a randomMacAddress
      function randomMacAddress () {
        let macAddress = [];
       for (let r = 0; r <= 5; r++) {
      macAddress.push(
      Math.floor(Math.random() * 100)
        .toString(10)
        .slice(-3)
        .toUpperCase()
        .padStart(2, "0")
       );
      }
      return macAddress.join(":");
     };
      console.log(randomMacAddress());

//Question 17 Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
       function randomHexaNumberGenerator () {
       return `#${Math.floor(Math.random() * 1000000)
       .toString(16)
       .padEnd(6, "0")}`;
     };
      console.log(randomHexaNumberGenerator());

//Question 18 Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.// 41XTDbE
      function userIdGenerator () {
      return `${Math.floor(Math.random() * 1000000)
      .toString(16)
      .toUpperCase()
      .padEnd(7, "0")}`;
     };
      console.log(userIdGenerator());