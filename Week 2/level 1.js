//Question 1 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'
      let challenge = '30 Days Of JavaScript'
//Question 2 Print the string on the browser console using console.log()
       console.log(challenge)
//Question 3 Print the length of the string on the browser console using console.log()
       console.log(challenge.length)
//Question 4 Change all the string characters to capital letters using toUpperCase() method
       console.log(challenge.toUpperCase())
//Question 5 Change all the string characters to lowercase letters using toLowerCase() method
       console.log(challenge.toLowerCase())
//Question 6 Cut (slice) out the first word of the string using substr() or substring() method
       challenge = '30 Days Of JavaScript'
       console.log(challenge.substr(2,6))
       console.log(challenge.substring(2,7))
//Question 7 Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript
        challenge = '30 Days Of JavaScript'
        console.log(challenge.slice(-18))
        console.log(challenge.slice(0,2))
//Question 8 Check if the string contains a word Script using includes() method
        challenge = '30 Days Of JavaScript'
        console.log(challenge.includes('Script'))
//Question 9 Split the string into an array using split() method
        challenge = '30 Days Of JavaScript'
        console.log(challenge.split())
//Question 10 Split the string 30 Days Of JavaScript at the space using split() method
         challenge = '30 Days Of JavaScript'
         console.log(challenge.split(' '))
//Question 11 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
         let media = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'  
         console.log(media.split(','))
//Question 12 Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
         challenge = '30 Days Of JavaScript'
         console.log(challenge.replace('30 Days Of JavaScript' ,'30 Days Of Python' ))
//Question 13 What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
         challenge = '30 Days Of JavaScript'
         console.log(challenge.charAt(15))
//Question 14 What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
         challenge = '30 Days Of JavaScript'
         console.log(challenge.charCodeAt('J'))
//Question 15 Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
         challenge = '30 Days Of JavaScript'
         console.log(challenge.indexOf('a'))
//Question 16 Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
         challenge = '30 Days Of JavaScript'
         console.log(challenge.lastIndexOf('a'))
//Question 17 Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
          let because = 'You cannot end a sentence with because because because is a conjunction'
          console.log(because.indexOf('because'))
//Question 18 Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
           because = 'You cannot end a sentence with because because because is a conjunction'
           console.log(because.lastIndexOf('because'))
//Question 19 Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction
           because = 'You cannot end a sentence with because because because is a conjunction'
           console.log(because.search('because')) 
//Question 20 Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
           let trim = '  30 Days Of JavaScript  '
           console.log(trim.trim(' '))
//Question 21 Use startsWith() method with the string 30 Days Of JavaScript and make the result true
           challenge = '30 Days Of JavaScript'
           console.log(challenge.startsWith(30))
//Question 22 Use endsWith() method with the string 30 Days Of JavaScript and make the result true
           challenge = '30 Days Of JavaScript'
           console.log(challenge.endsWith('t'))
//Question 23 Use match() method to find all the a’s in 30 Days Of JavaScript
           challenge = '30 Days Of JavaScript'
           console.log(challenge.match(/a/gi))
//Question 24 Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
           let merge = '30 Days of'
           console.log(merge.concat(' javascript '))
//Question 25 Use repeat() method to print 30 Days Of JavaScript 2 times
           challenge = '30 Days Of JavaScript'
           console.log(challenge.repeat( 2 ))