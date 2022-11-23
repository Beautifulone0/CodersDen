//Question 1 Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// const userIdGeneratedByUser =function(){
//   let arrId = []
//   const noCharacters = +prompt('give number of characters')
//   const noIds = +prompt("give number of id");
//   for(let i=0; i<noIds; i++){
//     arrId.push(`${Math.floor(Math.random() * 10000000)
//       .toString(16)
//       .slice(-noCharacters)
//       .toUpperCase()
//       .padEnd(noCharacters, "0")}`)
//   }
//       return arrId.join(' ')
// }
// console.log( userIdGeneratedByUser()

//Question 2 Write a function name rgbColorGenerator and it generates rgb colors.
     function rgbColorGenerator () {
     let randValue = (value) => {
      return Math.round(Math.random() * value);
     };
     return `rgb(${randValue(255)},${randValue(255)},${randValue(255)})`;
    };
     console.log(rgbColorGenerator());

//Question 3 rite a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
     function arrayOfHexaColors (n) {
     let colours = []
    for(let i=0; i< n;i++){
      colours.push(`#${Math.round(Math.random() * 10000000).toString(16).slice(-6).padEnd(0,6)}`)
    }
     return colours
    }
     console.log(arrayOfHexaColors(3))

//Question 4 Write a function arrayOfRgbColors which return any number of RGB colors in an array
     function arrayOfRgbColors (n) {
     let colours = []
     for(let i=0; i< n;i++){
         let randValue = (value) => {
       return Math.round(Math.random() * value);
     };
       colours.push(`rgb(${randValue(255)},${randValue(255)},${randValue(255)})`)
     }
     return colours
   }
   console.log(arrayOfRgbColors(3))

//Question 5 Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
     const convertHexaToRgb = (hexa) => `rgb(${parseInt(hexa.slice(1,3),16)},${parseInt(hexa.slice(3,5),16)},${blue = parseInt(hexa.slice(5),16)})`;
     console.log(convertHexaToRgb('#a3e12f'));

//Question 6 Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
     const convertRgbToHexa = (red, green, blue) => `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
     console.log(convertRgbToHexa(163, 225, 47));

//Question 7 //Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
     function generateColors (str, n) {
     if (str.toLowerCase() === 'hexa' && !isNaN(n)) {
      let hexcolors = [];
      let i = 0
      while(i < n){
        hexcolors.push(`#${Math.floor(Math.random() * 0x1000000).toString(16).padEnd(6, "0")}`)
        i++;
      }
      return hexcolors;
    } else if (str.toLowerCase() === 'rgb' && !isNaN(n)) {
      let rgbcolors = [];
      let i = 0;
      while(i < n){
        rgbcolors.push(`rgb(${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)}, ${Math.round(Math.random() * 256)})`);
        i++;
      }
      return rgbcolors;
     } else {
      return 'You have entered invalid parameters'
     }
    }
     console.log(generateColors('hexa', 2));
     console.log(generateColors('rgb', 2))

//Question 8 ////Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
      function shuffleArray (arr){
      return arr.sort((a,b)=> Math.random() - Math.random())
    }
     console.log(shuffleArray([2,3,4,5,6,4,6]))
     
//Question 9 Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
     function factorial  (integer) {
      let solution = 1;
      if (integer === 0 || integer === 1) { 
        return 1;
      } else if ( integer > 1) { 
        for (let i = 1; i <= integer; i++ ) {
          
          solution *= i;
        }
        return solution;
      }
    }
     console.log(factorial(3));
     
//Question 10 Call your function isEmpty, it takes a parameter and it checks if it is empty or not
     function isEmpty (param) {
      return (param === undefined || param === null || param.length === 0) || (typeof param === 'string' && param.trim().length === 0) || (param.constructor === Object && Object.keys(param).length === 0) ? true : false;
    }
     console.log(isEmpty());
    
//Question 11 Call your function sum, it takes any number of arguments and it returns the sum.
     function sumFunc (...anyNumber) {
      let sum = 0;
      for(let num of anyNumber){
        sum += num;
      }
      return sum;
    }
     console.log(sumFunc(5, 10, 15, 20));
    
//Question 12 Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. 
    function sumOfArrayItems (...array) {
        let sum = 0;
        for (let i = 0; i <= array.length; i++) {
         sum += i;
        }
        return sum;
       };
        console.log(sumOfArrayItems(1, 2, 3, 4, 5,));
//Question 13 Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
    function average (...array) {
        let sum = 0;
        for (let i = 0; i <= array.length; i++) {
         sum += array[i];
         if (!isNaN(array[i]) && typeof array[i] === "number") {
          sum += array[i];
        } else {
          return "the items are not all numbers";
        }
        }
        return sum / array.length;
    }
       console.log(average([14, 15, 16, 17, 18, 19]))
//Question 14 Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
     function modifyArray (arr) {
      if (arr.length < 5) {
        return 'not found'
      } else if (arr.length >= 5) {
        return arr;
      }
     }
     console.log(modifyArray(['Google', 'Facebook','Apple','IBM', ]))
//Question 15 Write a function called isPrime, which checks if a number is prime number.
      function isPrime (primeNum) {
        if (primeNum < 2) {
          return false;
        } else if (primeNum >= 2) {
          for (let i = 2; i <= primeNum; i++) {
            if (primeNum % i == 0) {
              return true;
            }
          }
        }
      };
      console.log(isPrime("13"))
//Question 16 Write a functions which checks if all items are unique in the array.
      const arrayUnique = (arr) => arr.length === new Set(arr).size;
      console.log(arrayUnique([1, 1, 2, 3])); 
//Question 17 Write a function which checks if all the items of the array are the same data type.
      const numArray = [10, 8, 9, 4, 5];
      const arrayMix = [1, 2, 3, "foo", 123, true];
     const arrayType = (arr) =>
     arr.filter((i) => typeof i === typeof arr[0]).length === arr.length;
     console.log(arrayType(numArray));
     console.log(arrayType(arrayMix));
//Question 18 JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
   const isValidVariable = (str) =>
   str.match(/[^0-9a-zA-Z\$\_]/g) == null
    ? "valid variable"
    : "invalid variable";
console.log(isValidVariable("khjgc_"));
//Question 19 Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
     const sevenRandomNumbers = () => {
     let set = new Set();
     while (set.size <= 7) {
      set.add(Math.floor(Math.random() * 10) | 0);
     }
     let randomArray = [...set];
     return randomArray;
     };
    console.log(sevenRandomNumbers());
//Question 20 Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
     const reverseCountries = (arr) => {
     const newCountries = [...arr];
     return newCountries.reverse();
     };
     console.log(reverseCountries(countries));
     