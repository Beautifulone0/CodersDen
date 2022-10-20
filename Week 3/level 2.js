//Quesion 1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
      /*Enter base: 2
      Enter height: 10
      The area of the triangle is 100 */
    let base = prompt('Enter the base of a triangle: ');
    let height = prompt('Enter the height of a triangle: ');
    let area = (base * height) / 2
    console.log(area) 
//Question 2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
    let a = prompt('Enter side a') 
    let b = prompt('Enter side b')
    let c = prompt('Enter side c')
    const perimeter = a + b + c
    console.log(perimeter)
//Quesion 3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
    let length = prompt('Get length of rectangle')
    let width = prompt('Get width of rectangle')
    const areaOfRectangle = (length * width)
    const perimeterOfRecangle = 2 * (length + width)
    console.log(areaOfRectangle)
    console.log(perimeterOfRecangle)
//Question 4 Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
   let radius = prompt('Enter radius of a circle')
   let pi = 3.14
   const areaOfCircle = (pi * radius * radius)
   const circumferenceOfCircle = (2 * pi * radius)
   console.log(areaOfCircle)
   console.log(circumferenceOfCircle)
//Question 5 Calculate the slope, x-intercept and y-intercept of y = 2x -2
//Question 6 Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
//Question 7 Compare the slope of above two questions.
//Question 8 Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0
//Question 9 Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
   let hours = prompt('Enter hours')
   let ratePerHour = prompt('Enter rate per hour')
   let weeklyEarning = (hours * ratePerHour)
   console.log(weeklyEarning)
//Question 10 If the length of your name is greater than 7 say, your name is long else say your name is short
   let nameLength = 11
   let output = (nameLength >= 7) ? "your name is long" : "your name is short"
   console.log(output)
//Question 11 Compare your first name length and your family name length and you should get this output
/*let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
Your first name, Asabeneh is longer than your family name, Yetayeh */
   let firstName = 'beautifulone'
   let familyName = 'awelewa'
   let result = ('beautifulone'.length !== 'awelewa'.length) ? 'Your first name, beautifulone is longer than your family name, awelewa' : 'Your family name, awelewa is longer than your first name, beautifulone'
   console.log (result)
//Question 12 Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
   let myAge = 23
   let yourAge = 18
   let result1 = (myAge >= yourAge) ? 'I am 5 years older than you' : 'you are 5 years younger than me'
   console.log(result1)
//Question 13 Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
   let year = prompt('Enter the year you were born')
   let yearOfBirth = (year >= 18) ? 'you are eligible to drive' : 'you are not eligble to drive'
   console.log(yearOfBirth)
//Question 14 Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
   /*let numberOfYears = prompt('Enter number years you lived')
   let now = new Date()
   let answer = (console.log(now.getSeconds(numberOfYears)))
   console.log(answer)*/
   let userYear = +prompt('enter year')
   let answer = (` You lived ${(userYear) * 24 * 60 * 60 * 365} seconds `) 
   console.log(answer)
/*Question 15 Create a human readable time format using the Date time object
   i. YYYY-MM-DD HH:mm
  ii. DD-MM-YYYY HH:mm
 iii. DD/MM/YYYY HH:mm */
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let year1 = now.getFullYear();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    console.log(`${year1}-${month}-${date} ${hour}:${minutes} \n
    ${date}-${month}-${yeary1} ${hour}:${minutes} \n
    ${date}/${month}/${year1} ${hour}:${minutes} \n`);