const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  
//Question 1 Find the person who has many skills in the users object.
    let userSkills = [],
    usersArr = Object.entries(users);
    for (let user of usersArr) {
    userSkills.push([user[0], user[1].skills]);
    }
    let mostSkills = userSkills.reduce((a, b) =>
    a[1].length > b[1].length ? a : b
    )[0];
    console.log(mostSkills)
//Question 2. Count logged in users, count users having greater than equal to 50 points from the following object.
    let loggedInUsers = 0,
    usersAbove50Points = 0;
    for (let user of usersArr) {
    if (user[1].isLoggedIn) loggedInUsers++;
    if (user[1].points >= 50) usersAbove50Points++;
    }
    console.log(loggedInUsers);
    console.log(usersAbove50Points); 
//Question 3 Find people who are MERN stack developer from the users object
   let mernStackDevs = []
   for (let mern of usersArr) {
    if (
      mern[1].skills.includes('MongoDB')&& 
      mern[1].skills.includes('Express')&&
      mern[1].skills.includes('React')&&
      mern[1].skills.includes('Node')
    ) {
      mernStackDevs.push(mern[0])
    }
   }
   console.log(mernStackDevs)
//Question 4 Set your name in the users object without modifying the original users object
   const newUsers = Object.assign({}, users);
   newUsers.Faith = {
    email: "awelebeautifulone@gmail.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 23,
    isLoggedIn: false,
    points: 90,
   };
//Question 5  Get all keys or properties of users object
console.log(Object.keys(newUsers));
//Question 6 Get all the values of users object
   const getValues = Object.values(newUsers)
   console.log(getValues)
//Question 7 Use the countries object to print a country name, capital, populations and languages
   const countries = {
    Nigeria: {
    capital: 'FCT Abuja',
    population: 6000,
    langauges: ['igbo', 'hausa', 'yoruba', 'benin', 'ijaw', 'akwaibom'],
  },
}
console.log(countries)