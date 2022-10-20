//Write a program which tells the number of days in a month.
     let month = prompt('input a month').toLocaleLowerCase()
     switch(true){
     case (month === 'january' || month === 'march' || month === 'july' || month === 'august' || month === 'october' || month === 'december' ):
     console.log(`${month} has 31 days`)
     break;
     case(month === 'september' || month === 'april' || month === 'may' || month === 'june' || month === 'november'):
     console.log(`${month} has 30 days`)
     break;
     case(month === 'february'):
     console.log(`${month} has 28 days`)
     break;
     default:
     console.log(`you didnt pick a correct month`)
}