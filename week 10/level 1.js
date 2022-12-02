//Question 1 create an empty set
const emptySet = new Set()
console.log(emptySet)
//Question 2 Create a set containing 0 to 10 using loop
const set = new Set()
for (let i = 0; i <= 10; i++) {
  set.add(i)
}
console.log(set)
//Question 3 Create a set containing 1 to 10 using loop
const set2 = new Set()
for (let i = 1; i <= 10; i++) {
  set2.add(i)
}
console.log(set2)
//Question 3 Remove an element from a set
  set2.delete(10)
  console.log(set2)
//Question 4 Clear a set
  set2.clear()
  console.log(set2)
//Question 5 Create a set of 5 string elements from array
  const setOf5 = [
    'Jackson',
    'Output',
    'To',
    'Faith',
    'console',
    'Love is the best thing in the world',
    'Jackson',
    'Faith',
  ]
  const setOfNew5 = new Set(setOf5)
  console.log(setOfNew5)
//Question 6 Create a map of countries and number of characters of a country
  const countriesAndNumbers = [
    ['Canada', 6],
    ['America', 7],
    ['Europe', 6],
    ['Japan', 5],
    ['France', 6],
    ['Germany', 7]
  ]
  const countriesAndNumbersMap = new Map(countriesAndNumbers)
  console.log(countriesAndNumbersMap)
  console.log(countriesAndNumbersMap.size)