//Question 1 Using console.log() print out the following statement:
// The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
      console.log('There is no exercise better for the heart than reaching down and lifting people up.')
//Question 2 Using console.log() print out the following quote by Mother Teresa:
// "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
       console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
//Question 3 Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
       let num = '10'
       console.log(typeof '10') 
       let numInt = parseInt(num)
       console.log(numInt)
/*Hi mentor please if you are seeing this i sincerly do not understand what i did here as answer to the question
in my head i think its supposed to be this way
     let num = '10'
     console.log(typeof 10) number
      let numInt = parseInt(num)
         console.log(typeof parseInt(num) 10 but its giving number
abi i am the one confused about the question and its supposed to be
       let num = '10'
      console.log(type of 10) string
       num = '10'
      let numInt = parseInt(num)
       console.log(numInt) 10 which is a number */
//Question 4 Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
        let num1 = '9.8'
        let numFloat = parseFloat(num1)
        console.log(parseFloat(num1))
        num1 = '9.8'
        numInt = parseInt(num1)
        console.log(Math.round(parseInt(num)))
//Question 5 Check if 'on' is found in both python and jargon
        let language = 'python'
        console.log(language.includes('on'))
//Question 6 I hope this course is not full of jargon. Check if jargon is in the sentence.
        let course = "I hope this course is not full of jargon."
        console.log(course.includes('jargon'))
//Question 7 Generate a random number between 0 and 100 inclusively
        let randomnum = Math.random() * 100;
        console.log(randomnum)
        let random = Math.floor(Math.random() * 100) + 1;
        console.log(random)
/*trying to understanding math.random();
        let randomnum = Math.random()
        console.log(randomnum)
        let random = Math.floor(Math.random() * 10) + 1; 
        console.log(random) */
//Question 8 Generate a random number between 50 and 100 inclusively
         let rnum = Math.random() *100;
         console.log(rnum)
         let number = Math.floor(Math.random() * 100 ) + 1;
         console.log(number)
//Question 9 Generate a random number between 0 and 255 inclusively
          let n = Math.random() * 255;
          console.log(n)
          let M = Math.floor(Math.random() *255) + 1;
          console.log(M)
//Question 10 Access the 'JavaScript' string characters using a random number.
           let js = 'javaScript'
           let letter = js[7]
           console.log(letter)
//Question 11 Use console.log() and escape characters to print the following pattern.
/*1 1 1 1 1
  2 1 2 4 8
  3 1 3 9 27
  4 1 4 16 64
  5 1 5 25 125 */
            console.log('1\t1\t1\t1\t1')
            console.log('2\t1\t2\t4\t8')
            console.log('3\t1\t3\t9\t27')
            console.log('4\t1\t4\t16\t64')
            console.log('5\t1\t5\t25\t125')
// Question 12 Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
            let slice ='You cannot end a sentence with because because because is a conjunction'
            console.log(slice.length)
            console.log(slice.substr(30,24))