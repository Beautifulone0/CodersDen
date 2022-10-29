//Question 1 Develop a small script which generate any number of characters random id:
     function makeid(length) {
        let result = "";
        let characters = 
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(let i= 0; i < length; i++ ){
            result += characters.charAt(Math.random() * characters.length);
        }
        return result;
     }
     console.log(makeid(15))

//Question 2 Write a script which generates a random hexadecimal number.
     const result = Math.random().toString(20).substring(2, 8);
     console.log(result)

//Question 3 Write a script which generates a random rgb color number.
     let red = Math.floor(Math.random() * 225)
     let green = Math.floor(Math.random()* 225)
     let blue = Math.floor(Math.random()  * 225)
     console.log(`RGB ${red}, ${green}, ${blue}` )

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
//Question 4 Using the above countries array, create the following new array.
     const newCountries = [];
     for (let i = 0; i < countries.length; i++) {
     newCountries.push(countries[i].toUpperCase());
     }
     console.log(newCountries);

//Question 5 Using the above countries array, create an array for countries length'.
     const countriesLength = [];
     for (let i = 0; i < countries.length; i++) {
     countriesLength.push(countries[i].length)
     }
     console.log(countriesLength)

//Question 6 Use the countries array to create the following array of arrays
     const arrOfarr = [];
     for (let i = 0; i < countries.length; i++){
        arrOfarr.push([countries[i],countries[i].slice(0,3).toUpperCase(),countries[i].length])
     }
     console.log(arrOfarr)

//Question 7 In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
     const countriesLand = [];
     for (let i = 0; i < countries.length; i++) {
     countries[i].includes("land") ? countriesLand.push(countries[i]) : 'All this countries are without land';
     }
     console.log(countriesLand)

//Question 8 In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
     const countriesAi = []
     for (let i = 0; i < countries.length; i++) {
        countries[i].endsWith("ia") ? countriesAi.push(countries[i]) : 'There are no countries containing the word ai'
     }
     console.log(countriesAi)

//Question 9 Using the above countries array, find the country containing the biggest number of characters
     let countriesL = "";
     for (let i = 0; i < countries.length; i++) {
        countriesL.length > countries[i].length ? countriesL : (countriesL = countries[i])
     }
     console.log(countriesL)

//Question 10 Using the above countries array, find the country containing only 5 characters
      const countriesF = countries.filter((country)=> country.length === 5)
      console.log(countriesF)

      const webTechs = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Redux",
        "Node",
        "MongoDB",
      ];

//Question 11 Find the longest word in the webTechs array
      let longestWord = "";
      for (let i = 0; i < webTechs.length; i++) {
        longestWord.length > webTechs[i].length ? longestWord : (longestWord = webTechs[i]);
      }
      console.log(longestWord)

//Question 12 Use the webTechs array to create the following array of arrays:
     let webArr = []
     for (let i = 0 ; i < webTechs.length; i++) {
        webArr.push(webTechs[i], webTechs[i].length)
     }
     console.log(webArr)

//Question 13 An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
      let acronym ="";
      for (men of 'mernStack') {
        acronym += men [0];
      }
      console.log(acronym.toUpperCase())

//Question 14 Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
      for (const tech of webTechs) {
        console.log(tech)
      }

//Question 15 This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
     const fruits = ["banana", "orange", "mango", "lemon"].reverse();
     const reversefruits = [];
     /*for (let i = 0; i < fruits; i++){
        reversefruits.push(fruits[i].reverse())
     }
     console.log(reversefruits)*/
     console.log(fruits);

//Question 16 Print all the elements of array as shown below.
      const fullStack = [
     ["HTML", "CSS", "JS", "React"],
     ["Node", "Express", "MongoDB"],
     ].flat();
     for (let stack of fullStack) {
     console.log(stack);
     }