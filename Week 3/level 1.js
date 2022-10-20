//Question 1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
      let firstName = 'Beautifulone'
      let lastName =  'Awelewa'
      let country  = 'Nigeria'
      let city = 'Lagos State'
      let age = 22
      let isMarried = false
      let year = 2022
    console.log(typeof firstName)
    console.log(typeof lastName)
    console.log(typeof country )
    console.log(typeof city)
    console.log(typeof age)
    console.log(typeof isMarried)
    console.log(typeof year)
//Question 2 Check if type of '10' is equal to 10
     let type = '10'
     console.log(typeof '10')  // not equal to 10 
//Question 3 Check if parseInt('9.8') is equal to 10
     let num = '9.8'
     numInt = parseInt(num)
     console.log(parseInt(num))     // not equal to 10 
/*Question 4 Boolean value is either true or false.
    Write three JavaScript statement which provide truthy value.
    Write three JavaScript statement which provide falsy value */
      let isSingle = true
      let name = 'beautifulone'
      let number = 5     // Truthy values
  // Falsy values
      let number1 = 0
      let height = null
      let isSad = false
/*Question 5 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
    i. 4 > 3               //true
   ii. 4 >= 3              //true
  iii. 4 < 3               //false
   iv. 4 <= 3              //false
    v. 4 == 4              //true
   vi. 4 === 4             //true
  vii. 4 != 4              //false
 viii. 4 !== 4             //false
   ix. 4 != '4'            //true
    x. 4 == '4'            //true
   xi. 4 === '4'           //false
  xii. Find the length of python and jargon and make a falsy comparison statement. */
     /*let animal = 'python'
     let animal1 = 'jargon'
     console.log(animal.length)
     console.log(animal1.length)
     console.log(animal1.length !== animal.length)*/
//Confirming with console.log()
     console.log(4 > 3)
     console.log(4 >= 3)
     console.log(4 < 3)
     console.log(4 <= 3)
     console.log(4 == 4)
     console.log(4 === 4)
     console.log(4 != 4)
     console.log(4 !== 4)
     console.log(4 != '4')
     console.log(4 == '4')
     console.log(4 === '4')
   let animal = 'python'
   let animal1 = 'jargon'
      console.log(animal.length)
      console.log(animal1.length)
      console.log(animal.length !== animal1.length)
/*Question 6 Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
    i. 4 > 3 && 10 < 12    //true
   ii. 4 > 3 && 10 > 12    //false
  iii. 4 > 3 || 10 < 12    //true
   iv. 4 > 3 || 10 > 12    //true
    v. !(4 > 3)            //false
   vi. !(4 < 3)            //true
  vii. !(false)            //true
 viii. !(4 > 3 && 10 < 12) //false
   ix. !(4 > 3 && 10 > 12) //true
    x. !(4 === '4')        //true
   xi. There is no 'on' in both dragon and python.| */
//comfirming with console.log()
     console.log(4 > 3 && 10 < 12)
     console.log(4 > 3 && 10 > 12)
     console.log(4 > 3 || 10 < 12)
     console.log(4 > 3 || 10 > 12)
     console.log(!(4 > 3))
     console.log(!(4 < 3))
     console.log(!(false))
     console.log(!(4 > 3 && 10 < 12))
     console.log(!(4 > 3 && 10 > 12))
     console.log(!(4 === '4'))
   let wild = 'dragon'
   let wild1 = 'python'
   console.log(wild.includes('!on'))
   console.log(wild1.includes('!on'))
/*Question 7 Use the Date object to do the following activities
   i. What is the year today?
  ii. What is the month today as a number?
 iii. What is the date today?
  iv. What is the day today as a number?
   v. What is the hours now?
  vi. What is the minutes now?
 vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.*/
     const now = new Date()
     console.log(now.getFullYear())
     console.log(now.getMonth() +1)
     console.log(now.getDate())
     console.log(now.getDay())
     console.log(now.getHours())
     console.log(now.getMinutes())
     console.log(now.getSeconds())