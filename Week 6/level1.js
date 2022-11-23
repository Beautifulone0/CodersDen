//Question 1 Iterate 0 to 10 using for loop, do the same using while and do while loop
     for(let i = 0; i<= 10; i++){
        console.log(i)
}
    //while loop
     let i = 0
     while (i <= 10) {
        console.log(i)
        i++
     }
    // do while loop
     let b = 0
     do {
        console.log(b)
        b++
     } while (b <= 10)

//Question 2 Iterate 10 to 0 using for loop, do the same using while and do while loop
     for (let i = 10; i >= 0; i--) {
        console.log(i) ;
     }
    //while loop
     let a = 10
     while (a >= 0) {
        console.log(a);
        a--
     }
    //do while loop
     let c = 10
     do {
        console.log(c);
        c--
     } while (c >= 0);

//Question 3 Iterate 0 to n using for loop
     let n = 15
     for(let i = 0; i<= n; i++) {
        console.log(i)
     }

/*Question 4 Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    ####### */
      let p ="";
      for(let i = 0; i <=6; i++) {
         console.log((p += "#"))
      } 
/*Question 5 Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 */
    for(let i = 0; i<= 10; i++ ) {
      console.log(`${i} * ${i} = ${i * i}`)
    } 
/*Question 6  
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */
     for(let i = 0; i<= 10; i++) {
         console.log(`${i} ${i** 2} ${i** 3}`)
     } 
//Question 7 Use for loop to iterate from 0 to 100 and print only even numbers
      for(let i = 0; i<=100; i+= 2) {
         console.log(i)
      }
//Question 8 Use for loop to iterate from 0 to 100 and print only odd numbers
      for(let i =0; i<=100; i+=2) {
         console.log(i)
      }
//Question 9 Use for loop to iterate from 0 to 100 and print only prime numbers
    for (let f = 3; f <= 100; f++) {
    for (let k= 3; k <= f; k++) {
      if(f % k == 0 && k !=f) {
         break;
      } else if (f % k == 0) {
         console.log(f)
      }
    }
    }

//Question 10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum +=i;
    }
    console.log(`The total number is ${sum}`)

//Question 11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i <= 100; i++) {
      i % 2 === 0 ? (sumEven += i) : (sumOdd += i);
    }
    console.log(`The sum of all even numbers from 0 to 100 is ${sumEven}. And the sum of all odd numbers from 0 to 100 is ${sumOdd}`)

//Question 12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
    let arr = []
    let addEven = 0;
    let addOdd = 0;
    for (let i = 0; i <= 100; i++) {
       i % 2 === 0 ? (arr[0] = addEven += i) : (arr[0] = addOdd += i)
     }
       console.log(arr)

//Question 13 Develop a small script which generate array of 5 random numbers
    let arrScript = []
    for (let i = 0; i < 5; i++) {
      arrScript.push(Math.floor(Math.random() * 9));
    }
    console.log(arrScript)
   
//Question 14 Develop a small script which generate array of 5 random numbers and the numbers must be unique
    let arrRan = []
    for (let i = 0; i <= 4 ; i++ ) {
      arrRan.push(Math.floor(Math.random() * 5))
    }
    console.log(arrRan)
//Question 15 Develop a small script which generate a six characters random id:
    let ranId = Math.random().toString(26).substr(2, 6); 
    console.log(ranId)