//Question 1 Declare an empty array;
      const arr = Array()
//Question 2 Declare an array with more than 5 number of elements
      const hobbies = ['Singing', 'Reading', 'Sleeping', 'WorkOuts', 'Coding']
//Question 3 Find the length of your array
      console.log(hobbies.length)
//Question 4 Get the first item, the middle item and the last item of the array
       console.log(hobbies.slice(0, -4))
       console.log(hobbies.slice(2,-2))
       console.log(hobbies.slice(4,))
      /*hobbies.splice(1,1)
      console.log(hobbies)
      hobbies.splice(2,1) */
      console.log(hobbies)
//Question 5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
      const mixedDataTypes = ['awele', 23, true,["door","cars" ], '1','10', false, ''  ]
      console.log(mixedDataTypes.length)
//Question 6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
      const companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
//Question 7 Print the array using console.log()
      console.log(companies)
//Question 8 print the number of companies in the array
      console.log(companies.length)
//Question 9 print the first company,middle and last company
         console.log(companies.slice(0,-6))
         console.log(companies.slice(3,-3))
         console.log(companies.slice(6,))
      /*companies.splice(1, 2,)
      console.log(companies)
      companies.splice(2,2)
      console.log(companies) */

//Question 10 Print out each company
       const companies1 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
       companies1.forEach((companies) => console.log(companies))
       console.log(companies1 [0])
       console.log(companies1[1])
       console.log(companies1[2])
       console.log(companies1[3])
       console.log(companies1[4])
       console.log(companies1[5])
       console.log(companies1[6])
//Question 11 Change each company name to uppercase one by one and print them out
       const arr1 = companies[0]
       console.log(arr1.toUpperCase())
       const arr2 = companies[1]
       console.log(arr2.toUpperCase())
       const arr3 = companies[2]
       console.log(arr3.toUpperCase())
       const arr4 = companies[3]
       console.log(arr4.toUpperCase())
       const arr5 = companies[4]
       console.log(arr5.toUpperCase())
       const arr6 = companies[5]
       console.log(arr6.toUpperCase())
       const arr7 = companies[6]
       console.log(arr7.toUpperCase())
//Question 12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies
       const Companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
       console.log(`${Companies.slice(0, -1).join(', ')}, and ${Companies.slice(-1)} are big IT companies`)
//Question 13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
       const Companies1 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
       console.log(Companies1.includes('piggyvest')? Companies1[companies1.indexOf('piggyvest')] : 'Not a company')
//Question 14 Filter out companies which have more than one 'o' without the filter method
       const itcompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
       
//Question 15 Sort the array using sort() method
       const ITcompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
       ITcompanies.sort()
       console.log(ITcompanies)
//Question 16 Reverse the array using reverse() method
       const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
       itCompanies.reverse()
       console.log(itCompanies)
//Question 17 Slice out the first 3 companies from the array
       const itcompanies1 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] 
       console.log(itcompanies1.slice(3,))
//Question 18 Slice out the last 3 companies from the array
       console.log(itcompanies1.slice(0,-3))
//Question 19 Slice out the middle IT company or companies from the array
       console.log(`${itcompanies1.slice(0,-4).join(', ')} ${itcompanies.slice(4).join(', ')}`)
//Question 20 Remove the first IT company from the array
       itcompanies1.shift()
       console.log(itcompanies1)
//Question 21 Remove the middle IT company or companies from the array
       console.log(`${itcompanies.slice(0, -4).join(', ')}, ${itcompanies.slice(4).join(', ')}`)
//Question 22 Remove the last IT company from the array
       itcompanies.pop()
       console.log(itcompanies)
//Question 23 Remove all IT companies
       itcompanies.splice()
       console.log(itcompanies.splice()) 