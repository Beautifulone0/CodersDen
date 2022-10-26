import { countries } from "./countries.js";
import { webTechs } from "./webTechs.js";
//Question 1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
     console.log(countries)
     console.log(webTechs)
//Question 2 First remove all the punctuations and change the string to array and count the number of words in the array
      let txt = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
      const words =txt.split(" ")
      console.log(words)
      console.log(words.length)
/*Question 3 In the following shopping cart add, remove, edit items
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
 add 'Meat' in the beginning of your shopping cart if it has not been already added
 add Sugar at the end of you shopping cart if it has not been already added
 remove 'Honey' if you are allergic to honey
 modify Tea to 'Green Tea'*/ 
      const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
      shoppingCart.unshift('Meat')
      console.log(shoppingCart)
      shoppingCart.push('Sugar')
      console.log(shoppingCart)
      shoppingCart.splice(4, 1)
      console.log(shoppingCart)
      shoppingCart[3] = 'Green Tea'
      console.log(shoppingCart)
//Question 4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
      console.log(countries.includes('Ethiopia') ? countries[countries.indexOf('ETHIOPIA')] : countries.push('Ethiopia'))
//Question 5 In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
      console.log(webTechs.includes("Sass") ? "Sass is a CSS preprocess" : webTechs.push("Sass"))
//Question 6 Concatenate the following two variables and store it in a fullStack variable.
      const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
      const backEnd = ['Node','Express', 'MongoDB']
      const fullStack = frontEnd.concat(backEnd)
      console.log(fullStack)

/********************** Excersise level three ********************************/
/*Question 1 The following is an array of 10 students ages:
 const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
 Sort the array and find the min and max age
 Find the median age(one middle item or two middle items divided by two)
 Find the average age(all items divided by number of items)
 Find the range of the ages(max minus min)
 Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the */
   //Sort the array and find the min and max age
      const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
      ages.sort()
      console.log(ages)
      console.log(ages[0], ages[ages.length-1])
  //Find the median age(one middle item or two middle items divided by two)
      console.log(ages.length % 2 === 0 ? (ages[Math.ceil(ages.length / 2) - 1] + ages[Math.floor(ages.length / 2)]) /2
       : ages[Math.ceil(ages.length / 2) - 1]
   )
  //Find the average age(all items divided by number of items)
      let sum = 0;
      for (const age of ages) {sum += age;}
      console.log(sum / ages.length)
  //Find the range of the ages(max minus min)
      console.log(ages[ages.length - 1] - ages[0]);
 //Compare the value of (min - average) and (max - average), use abs()
       console.log(
      Math.abs(ages[0] -ages[Math.ceil(ages.length / 2) - 1] -
      (ages[ages.length - 1] - ages[Math.ceil(ages.length / 2) - 1])));
 //method 1.Slice the first ten countries from the countries array
      console.log(countries.slice(0, 10));
 //Find the middle country(ies) in the countries array
      console.log(countries[Math.ceil(countries.length / 2) - 1]);
      console.log(countries[Math.floor(countries.length / 2)]);
 //Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
      console.log(countries.length % 2 === 0 ? countries.slice(0, Math.ceil(countries.length / 2) - 1)
      : countries.slice(0, Math.round(countries.length / 2)))