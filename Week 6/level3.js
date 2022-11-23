//Question 1 Copy countries array(Avoid mutation)
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
     const countriesArr = countries.slice()
      console.log(countriesArr)

//Question 2 Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
      const sort = countriesArr.sort()
      console.log(sort)

//Question 3 Sort the webTechs array and mernStack array
      const webTechs = [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Node",
      "MongoDB",
     ];
     const sorted = webTechs.sort()
     console.log(sorted)

//Question 4 Extract all the countries contain the word 'land' from the countries array and print it as array
     const countriesLand = [];
     for (let i = 0; i < countries.length; i++) {
     countries[i].includes("land") ? countriesLand.push(countries[i]) : 'All this countries are without land';
     }
     console.log(countriesLand)

//Question 5 Find the country containing the hightest number of characters in the countries array  
       let countriesL = "";
       for (let i = 0; i < countries.length; i++) {
       countriesL.length > countries[i].length ? countriesL : (countriesL = countries[i])
       }
       console.log(countriesL)

//Question 6 Extract all the countries contain the word 'land' from the countries array and print it as array
       let land = "";
        for (let i = 0; i < countries.length; i++) {
       land.length > countries[i].length ? land : (land = countries[i]) 
       }
       console.log(land)

//Question 7 Extract all the countries containing only four characters from the countries array and print it as array
        const countriesF = countries.filter((country)=> country.length === 4)
        console.log(countriesF)

//Question 8 Extract all the countries containing two or more words from the countries array and print it as array
       const Words = [];
       for (let count of countries) {
       if (count.length > 2) {
        Words.push(count);
        }
       }
       console.log(Words);
//Question 9 Reverse the countries array and capitalize each country and stored it as an array
       let reverseC = []
       for (let reverse of countries.reverse()) {
            reverseC.push(reverse.toUpperCase())
       }
       console.log(reverseC)