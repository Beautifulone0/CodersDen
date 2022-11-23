//Question 1 Declare a function fullName and it print out your full name
      function fullName() {
        let fullName = 'faith kalu'
        console.log(fullName)
      }
      fullName('faith kalu')

//Question 2 Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
      function fullName1(firstName, lastName) {
       let fullName = `${firstName}, ${lastName}`
       console.log(fullName)
      }
      fullName1('faith kalu',  'Onyeani')

//Question 3 Declare a function addNumbers and it takes two two parameters and it returns sum.
       function numbers(numOne, numTwo) {
        let add = numOne + numTwo
        return add
      }
      console.log(numbers(22, 1))

//Question 4 An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
       function areaOfRectangle(length, width) {
         let area = length * width
         return area
       }
       console.log(areaOfRectangle(3, 6))

//Question 5 A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
       function perimeterOfRectangle (length, width) {
            let perimeter = 2 *(length + width)
            return perimeter
       }
       console.log(perimeterOfRectangle(3, 6))
      
//Question 6 A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
       function volumeOfRectPrism(length, width, height) {
            let volume = length * width * height
            return volume
       }
       console.log(volumeOfRectPrism(3, 6, 10))

//Question 7 Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
        function areaOfCircle (r) {
            let area = Math.PI* r * r
            return area
        }
        console.log(areaOfCircle(18))

//Question 8 Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
        function circumferenceOfCricle(r) {
            let circumference = 2 *(Math.PI * r)
            return circumference
        }
        console.log(circumferenceOfCricle(18))

//Question 9 Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
         function densityOfSubstance(mass, volume) {
            let density = mass / volume
            return density
         }
         console.log(densityOfSubstance(10, 2))

//Question 10 Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
         function speedOfMovingObject (totalDistance, totalTime) {
            let speed = totalDistance / totalTime
            return speed
         }
         console.log(speedOfMovingObject(130, 60))

//Question 11 Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight
        function weightOfSubstance(mass, gravity) {
            let weight = mass * gravity
            console.log(weight)
        }
        weightOfSubstance(30,9.81)

//Question 12 Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

        function celsiusToFahrenheit() {
          let oC = 100
          let num = 9/5
          let of = (oC * num) + 32
          console.log(`${of}oF`)
        }
        celsiusToFahrenheit()

/*Question 13 Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.
  The same groups apply to both men and women.
  Underweight: BMI is less than 18.5
  Normal weight: BMI is 18.5 to 24.9
  Overweight: BMI is 25 to 29.9
  Obese: BMI is 30 or more */
     /* function bodyMassIndex() {
       let weightInKg = 270
       let height = 3
       let bmi =weightInKg / (height * height)
       console.log(bmi) 

       bmi <= 18.5 ? console.log('Underweight') : console.log('Not underweight')
       bmi > 18.5 && bmi <= 24.9 ? console.log('Normal weight') : console.log('Not normal weight')
       bmi > 25 && bmi <= 29.9 ? console.log('Over weight') : console.log('Not over weight')
       bmi = 30 ? console.log('obese') : console.log('Too fat see your doctor')
      }

      bodyMassIndex() */
      function bodyMassIndex(weight, height) {
        let bmi = weight / (height * height)
        return bmi <= 18.5 
        ? 'Underweight'
        :bmi > 18.5 && bmi <= 24.9
        ? 'Normal'
        :bmi > 25 && bmi <= 29.9
        ? 'Over weight'
        :bmi > 30
        ?'Obese'
        :''
       }
       console.log(bodyMassIndex(180, 3))

//Question 14 Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer
      function checkSeason (month) {
         
        return month === 'september'|| month === 'October'|| month === 'November'
        ? 'Autum'
        : month === 'december'|| month ==='january'|| month ==='february'
        ? 'Winter'
        : month === 'march'|| month === 'april'|| month === 'may'
        ? 'Spring'
        : month === 'june'|| month === 'july'|| month === 'august'
        ? 'Summer'
        : ''
      }
      console.log(checkSeason('august'))


//Question 15 Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method
        function findmax (num1, num2, num3) {
        return num1 > num2 
        ? num1
        : num2 > num3 
        ? num2
        : num3 > num2
        ? num3
        : ''
       }
       console.log(findmax(255, 20, 15))
       console.log(findmax(-255, -20, 15))