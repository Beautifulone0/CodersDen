//Question 1 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
       let number = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
       console.log(number.match(/Love/gi))
//Question 2 Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
       let string = 'You cannot end a sentence with because because because is a conjunction'
       console.log(string.match(/because/gi))
//Question 3 Clean the following text and find the most frequent word (hint, use replace and regular expressions).
//const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
        let clean = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
        console.log(clean.replace('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching', 'I am a teacher and I love teaching.There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher! This 30 Days Of JavaScript is also the result of love of teaching '))
          clean ='I am a teacher and I love teaching.There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher! This 30 Days Of JavaScript is also the result of love of teaching '
        console.log(clean.match(/a/gi))
//this question i dont seem to get it i am not understanding at all the hint use replace and regular expressions
//Question 4 Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
        let phrase = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
        let reg = /\d+/g;
        console.log(phrase.match(reg))