//Question 1 create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
let personAccount = {
    firstName: "Faith Kalu",
    lastName: "Onyeani",
    incomes: [
      [800000, "July"],
      [950000, "August"],
      [1000000, "September"],
    ],
    expenses: [
      [250000, "July"],
      [300000, "August"],
      [450000, "September"],
    ],
    totalIncome: function () {
      return this.incomes.reduce((a, b) => [a[0] + b[0], "Total"])[0];
    },
    totalExpense: function () {
      return this.expenses.reduce((a, b) => [a[0] + b[0], "Total"])[0];
    },
    accountInfo: function () {
      return `${this.firstName} ${
        this.lastName
      }'s account has a balance of ₦${this.accountBalance()}`;
    },
    addIncome: function (money) {
      this.incomes.push(parseInt(money));
    },
    addExpense: function (money) {
      this.expenses.push(parseInt(money));
    },
    accountBalance: function () {
      return this.totalIncome() - this.totalExpense();
    },
  };
  console.log(personAccount.accountInfo());

//Question 2 **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
    const users = [
        {
            _id: 'ab12ex',
            username: 'Alex',
            email: 'alex@alex.com',
            password: '123123',
            createdAt:'08/01/2020 9:00 AM',
            isLoggedIn: false
        },
        {
            _id: 'fg12cy',
            username: 'Asab',
            email: 'asab@asab.com',
            password: '123456',
            createdAt:'08/01/2020 9:30 AM',
            isLoggedIn: true
        },
        {
            _id: 'zwf8md',
            username: 'Brook',
            email: 'brook@brook.com',
            password: '123111',
            createdAt:'08/01/2020 9:45 AM',
            isLoggedIn: true
        },
        {
            _id: 'eefamr',
            username: 'Martha',
            email: 'martha@martha.com',
            password: '123222',
            createdAt:'08/01/2020 9:50 AM',
            isLoggedIn: false
        },
        {
            _id: 'ghderc',
            username: 'Thomas',
            email: 'thomas@thomas.com',
            password: '123333',
            createdAt:'08/01/2020 10:00 AM',
            isLoggedIn: false
        }
        ];

        const products = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
    ] 
/* Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
b. Create a function called signIn which allows user to sign in to the application */
     
    // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const signUp = (userDetails) => {
    if (
      typeof userDetails == "object" &&
      userDetails != null &&
      !Array.isArray(userDetails)
    ) {
      let userExists = () => {
        for (let user of users) {
          if (user._id == userDetails._id || user.email == userDetails.email) {
            return true;
          }
        }
        return false;
      };
  
      let keysComplete = () => {
        if (
          userDetails.hasOwnProperty("_id") &&
          userDetails.hasOwnProperty("username") &&
          userDetails.hasOwnProperty("email") &&
          userDetails.hasOwnProperty("password")
        ) {
          return true;
        }
        return false;
      };
  
      if (userExists()) {
        return "This user already has an account";
      } else if (userExists() == false && !keysComplete()) {
        return "Input missing some data";
      } else if (userExists() == false && keysComplete()) {
        userDetails.createdAt = new Date().toLocaleString().replace(",", "");
        userDetails.isLoggedIn = false;
        users.push(userDetails);
        return "User added Successfully";
      }
    } else {
      return "Please input a valid object";
    }
  };
  console.log(
    signUp({
      _id: "ghderc",
      username: "Thomas",
      email: "thomas@thomas.com",
      password: "123333",
    })
  );
  
  // b. Create a function called signIn which allows user to sign in to the application
  const signIn = (userDetails) => {
    if (
      typeof userDetails == "object" &&
      userDetails != null &&
      !Array.isArray(userDetails)
    ) {
      const emailExists = () => {
        for (let user of users) {
          if (user.email == userDetails.email) {
            return { value: true, index: users.indexOf(user) };
          }
        }
        return { value: false, index: null };
      };
      if (!emailExists().value) {
        return "Email does not exist";
      } else if (
        emailExists().value &&
        !(users[emailExists().index].password == userDetails.password)
      ) {
        return "Password incorrect";
      } else if (
        emailExists().value &&
        users[emailExists().index].password == userDetails.password
      ) {
        return `Hello ${
          users[emailExists().index].username
        }. You have signed in successfully!`;
      }
    } else {
      return "Please input a valid object";
    }
  };
  console.log(signIn({ email: "thomas@thomas.com", password: "123333" }));
  
//Question 3. The products array has three elements and each of them has six properties.
  // a. Create a function called rateProduct which rates the product
  const rateProduct = (rateObject) => {
    if (
      typeof rateObject == "object" &&
      rateObject != null &&
      !Array.isArray(rateObject)
    ) {
      let productExists = () => {
        for (let product of products) {
          if (product._id == rateObject.productId) {
            return true;
          }
        }
        return false;
      };
  
      let index, rateIndex;
      if (productExists()) {
        for (let product of products) {
          if (product._id == rateObject.productId) {
            index = products.indexOf(product);
            break;
          }
        }
        for (let rating of products[index].ratings) {
          if (rating.userId == rateObject.userId) {
            rateIndex = products[index].ratings.indexOf(rating);
          }
        }
      }
  
      let userHasRated = () => {
        for (let rating of products[index].ratings) {
          if (rating.userId == rateObject.userId) {
            return true;
          }
        }
        return false;
      };
  
      let keysComplete = () => {
        if (
          rateObject.hasOwnProperty("userId") &&
          rateObject.hasOwnProperty("rate") &&
          rateObject.hasOwnProperty("productId")
        ) {
          return true;
        }
        return false;
      };
  
      if (!productExists()) {
        return "Invalid product";
      } else if (userHasRated() && keysComplete()) {
        products[index].ratings[rateIndex].rate = rateObject.rate;
        return `User's rating updated for ${products[index].name}`;
      } else if (!keysComplete()) {
        return "Input missing some data";
      } else if (
        userHasRated() == false &&
        keysComplete() &&
        typeof rateObject.rate != "number"
      ) {
        return "Invalid value for rate";
      } else if (
        userHasRated() == false &&
        keysComplete() &&
        typeof rateObject.rate == "number"
      ) {
        products[index].ratings.push({
          userId: rateObject.userId,
          rate: rateObject.rate,
        });
        return `New user rating added successfully for ${products[index].name}`;
      }
    } else {
      return "Please input a valid object";
    }
  };
  console.log(rateProduct({ userId: "fg12cy", rate: 6, productId: "hedfcg" }));
  
  //b. Create a function called averageRating which calculate the average rating of a product
  const averageRating = (productId) => {
    let productExists = () => {
      for (let product of products) {
        if (product._id == productId) {
          return true;
        }
      }
      return false;
    };
  
    let index,
      total = 0;
    if (productExists()) {
      for (let product of products) {
        if (product._id == productId) {
          index = products.indexOf(product);
          break;
        }
      }
  
      let ratingIsEmpty = () => {
        if (productExists() && !products[index].ratings.length) {
          return true;
        }
        return false;
      };
  
      if (!ratingIsEmpty) {
        for (let rating of products[index].ratings) {
          total += rating.rate;
        }
  
        return total / products[index].ratings.length;
      } else {
        return "No available ratings for this product";
      }
    } else {
      return "Product does not exist";
    }
  };
  console.log(averageRating("aegfal"));
  
//Question 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
  const likeProduct = (productId, userId) => {
    let productExists = () => {
      for (let product of products) {
        if (product._id == productId) {
          return true;
        }
      }
      return false;
    };
    let index;
    if (productExists()) {
      for (let product of products) {
        if (product._id == productId) {
          index = products.indexOf(product);
          break;
        }
      }
    }
  
    let productIsLiked = () => {
      if (productExists() && products[index].likes.length) {
        return true;
      }
      return false;
    };
  
    if (!productExists()) {
      return "No such product";
    } else if (productExists() && typeof userId != "string") {
      return "Invalid value for userId";
    } else if (!productIsLiked()) {
      products[index].likes.push(userId);
      return "Product liked";
    } else if (productIsLiked()) {
      products[index].likes.pop();
      return "Product unliked";
    }
  };
  console.log(likeProduct("aegfal", 2));
  console.log(products[1]);   