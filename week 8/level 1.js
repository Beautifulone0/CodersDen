//Question 1 Create an empty object called dog
 let dog = {}
//Question 2 Print the the dog object on the console
   console.log(dog)
// Question 3 Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
  dog.name = "spike"
  dog.legs =   4
  dog.color = 'black'
  dog.age = 16
  dog.bark = function () {
    return 'woof woof'
  }
//Question 4 Get name, legs, color, age and bark value from the dog objec
console.log(dog.name)
console.log(dog.legs)
console.log(dog.color)
console.log(dog.age)
console.log(dog.bark())
//Question 5 Set new properties the dog object: breed, getDogInfo
dog.breed = 'german shepard'
dog.getDogInfo = function () {
    return `My dog is ${this.name} he is a ${this.breed} breed, he is ${this.age}   
    and barks ${this.bark()}`;
}
console.log(dog.getDogInfo())