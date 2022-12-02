const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
       { product: 'banana', price: 3 },
       { product: 'mango', price: 6 },
       { product: 'potato', price: ' ' },
       { product: 'avocado', price: 8 },
       { product: 'coffee', price: 10 },
       { product: 'tea', price: '' },
]

//Question 1 Explain the difference between forEach, map, filter, and reduce.
/* forEach iterates the element in an array.its used only with arrays it takes a callback function with elements, index parameter and array itself where the index and the array optional.
   map iterates an elements in an array and modify the array it takes a callback function with elements, index , array parameter and return a new array
   filter it filters out items the meet the filtering conditions and return a new array.
   reduce it takes a callback function, the call back function takes accumulator, current, and optional initial value as a parameter and returns a single value
*/
//Question 2 Define a callback function before you use it in forEach, map, filter or reduce
/* A callback function is a fuction that can be passed as parameter to other funtions */
//Question 3 Use forEach to console.log each country in the countries array.
countries.forEach((countries => console.log(countries)))
//Question 4 Use forEach to console.log each name in the names array.
names.forEach((names => console.log(names)))
//Question 5 Use forEach to console.log each number in the numbers array.
numbers.forEach((numbers => console.log(numbers)))
//Question 6 Use map to create a new array by changing each country to uppercase in the countries array.
const newCountries = countries.map(countries => countries.toUpperCase())
console.log(newCountries)
//Question 7 Use map to create an array of countries length from countries array.
const countriesLength = countries.map((countries => countries.length))
console.log(countriesLength)
//Question 8 Use map to create a new array by changing each number to square in the numbers array
const squareNumbers = numbers.map((numbers => numbers * numbers))
console.log(squareNumbers)
//Question 9 Use map to change to each name to uppercase in the names array
const namesToUppercase = names.map((names => names.toUpperCase()))
console.log(namesToUppercase)
//Question 10 Use map to map the products array to its corresponding prices.
const productsPrices = products.map((price) =>  price.price)
console.log(productsPrices)
//Question 11 Use filter to filter out countries containing land.
const fiteredCountries = countries.filter((countries => countries.includes('land')))
console.log(fiteredCountries)
//Question 12 Use filter to filter out countries having six character.
const sixCharacterCountries = countries.filter((countries => countries.length === 6))
console.log(sixCharacterCountries)
//Question 13 Use filter to filter out countries containing six letters and more in the country array.
const sixLetterCountries = countries.filter((countries => countries.length >= 6))
console.log(sixLetterCountries)
//Question 14 Use filter to filter out country start with 'E';
const countriesStartsWithE = countries.filter((countries => countries.startsWith('E')))
console.log(countriesStartsWithE)
//Question 15 Use filter to filter out only prices with values.
const pricesWithValues = products.filter(((products) => (products)))
console.log(pricesWithValues)
//Question 16 Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const lists = [1, 2, 3, 'Faith', 'Awelewa', 'Beautifulone']
const newGetStringLists = lists.filter((lists => typeof lists === 'string' ))
console.log(newGetStringLists)

const getStringLists = arr => {
      return arr.filter(item => typeof item ==='string')
}
console.log(getStringLists([1, 2, 3, 'Faith', 'Awelewa', 'Beautifulone']))

/*function getStringLists1 (arr) {
      const newArr = []
      for (let i = 0; i <=arr.length; i++) {
       if (typeof arr[i] === "string") {
            newArr.push(arr[i]);
       }
       console.log(newArr)
      }
}
getStringLists1([1, 2, 3, 'Faith', 'Awelewa', 'Beautifulone'])*/
//Question 17 Use reduce to sum all the numbers in the numbers array.
const sumNumbers = numbers.reduce((sum, number) => sum + number)
console.log(sumNumbers)
//Question 18 Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const countrySentence = countries.reduce((countries, country) => countries.concat(country + ', '))
console.log(countrySentence)
//Question 19 Explain the difference between some and every
/* some checks if some of the elements are similar in one aspects it returns a boolean while every Check if all the elements are similar in one aspect It returns boolean*/
//Question 20 Use some to check if some names' length greater than seven in names array
const isNamesLengthGreaterThanSeven = names.some((name, index) => name.length > index)
console.log(isNamesLengthGreaterThanSeven)
//Question 21 Use every to check if all the countries contain the word land
const isLand = countries.every((country) => country.includes('land'))
console.log(isLand)
//Question 22 Explain the difference between find and findIndex.
/* find returns the first element which satisfies the condition while findIndex return the position of the first element which satisfies the condition */
//Question 23 Use find to find the first country containing only six letters in the countries array
const countryWithOnly6Letters = countries.find((country) => country.length <= 6)
console.log(countryWithOnly6Letters)
//Question 24 Use findIndex to find the position of the first country containing only six letters in the countries array
const countryWithOnly6LettersIndex = countries.findIndex((country) => country.length <= 6)
console.log(countryWithOnly6LettersIndex)
//Question 25 Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1
const countryWithNorwayIndex = countries.findIndex((country) => country.includes('Norway'))
console.log(countryWithNorwayIndex)
//Question 26 Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1
const positionOfRussia = countries.findIndex((countries => countries.includes('Russia')));
console.log(positionOfRussia)