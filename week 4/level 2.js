/*Question 1 Write a code which can give grades to students according to theirs scores:
  80-100, A
  70-89, B
  60-69, C
  50-59, D
  0-49, F */
     let scores = prompt('Enter your score')
     if(scores >= 80 && scores <= 100){
     console.log(`You scored ${scores} and have an A`)
     }else if(scores >= 70 && scores <= 89){
     console.log(`You scored ${scores} and have an B`)
     }else if(scores >= 60 && scores <= 69){
     console.log(`You scored ${scores} and have an C`)
     }else if(scores >= 50 && scores <= 59){
     console.log(`You scored ${scores} and have an D`)
     }else if(scores >= 0 && scores <= 49){
     console.log(`You scored ${scores} and have an F`)
     }else{
     console.log(`you didnt enter a number between 0 and 100`)
     }
/*Question 2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
  September, October or November, the season is Autumn.
  December, January or February, the season is Winter.
  March, April or May, the season is Spring
  June, July or August, the season is Summer */
     let season = prompt("What month").toLocaleLowerCase();
     switch (true) {
     case season === "september" || season === "october" || season === "november":
      console.log("the season is autumn");
      break;
     case season === "december" || season === "january" || season === "february":
      console.log("the season is winter");
      break;
     case season === "march" || season === "april" || season === "may":
      console.log("the season is spring");
      break;
     case season === "june" || season === "july" || season === "august":
      console.log("the season is summer");
      break;
     default:
      console.log("you didnt put a correct month");
     }
//Question 3 Check if a day is weekend day or a working day. Your script will take day as an input.
     let day = prompt("What day").toLocaleLowerCase();
     switch (day) {
     case "monday":
     console.log(`${day} is a working day`);
     break;
     case "tuesday":
     console.log(`${day} is a working day`);
     break;
     case "wednesday":
     console.log(`${day} is a working day`);
     break;
     case "thursday":
     console.log(`${day} is a working day`);
     break;
     case "friday":
     console.log(`${day} is a working day`);
     break;
     case "saturday":
     console.log(`${day} is a weekend `);
     break;
     case "sunday":
     console.log(`${day} is a weekend `);
     break;
     default:
     console.log(`not a day of the week`);
}