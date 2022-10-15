// var let const

// var name = "mark"; // Functional Scope
// let name = "mark"; // Block Scope
//const name = "mark" // Block Scope ,  we cannot change -> constant

// sampleFunction();

// Number = 30, 30.1 30.2131231

// String = 'mark'
// String = "mark"
// String = `mark`

//String Methods

// let name = "Mark Harji Mating";
// console.log(name);
// const finalName = name.replace(" &&toReplace&&", "FirstName");
// console.log(finalName);

// console.log(name);
// const finalName = name.split(" ");
// console.log(finalName);
// const fullName = finalName.join("+");
// console.log(fullName.toUpperCase());

// const firstName= "mark"
// const lastName = "mating"
// const age = 25;

//Object

// const user = {
//   // key : value
//   firstName: "mark",
//   lastName: "mating",
//   age: 25,

//   printFullName() {
//     console.log(this.firstName, this.lastName);
//   },
// };

// user.firstName = "raffeeh";

// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.age);

// const targetKey = "firstName"; // user input

// user[targetKey] = "mark";
// console.log(user[targetKey]);

// user.printFullName();

//Arrays

// const tempArray = [1, 2, 3, 4, 5];

// for (let index = 0; index < tempArray.length; index++) {
//   console.log(tempArray[index]);
// }

//Functions

// function sampleFunction() {
//   const pi = 3.14;

//   pi = 4.14;
//   for (var index = 0; index < 5; index++) {
//     console.log(index);
//   }

//   console.log(pi);
// }

// arrow functions

// const squareNumber = (number) => number * number;

// function squareNumberFn(number, lastName) {
//   return number * number;
// }

// What is the difference between arguments and parameters.

// higher order functions

const users = [
  {
    name: "mark",
    age: 25,
  },
  {
    name: "arvin",
    age: 20,
  },
  {
    name: "anwar",
    age: 35,
  },
  {
    name: "raffeeh",
    age: 27,
  },
];

//Map -> returns a new array

const usersWithoutAge = users.map((user) => {
  return {
    name: user.name,
  };
});

console.log(usersWithoutAge);

//Filter -> returns a new array
//boolean - true or false

const usersAtTwentys = users.filter((user) => user.age >= 20 && user.age < 30);

console.log(usersAtTwentys);

//Reduce

const sumOfAges = users.reduce((acc, user) => {
  console.log(typeof acc);
  return acc + user.age;
}, 0);
// acc         sumOfAges
// 0            25
// 25           45
// 45           80
// 80           107

console.log(sumOfAges);

// Destructuring

const user = {
  age: 25,
};

const adminUser = {
  name: "raffeeh",
  age: 27,
};

const { name: firstName = "mark" } = user;
const { name: firstNameAdmin } = adminUser;

console.log(firstName, firstNameAdmin);

const [firstUser] = users;

console.log(firstUser);

//Ternary operators and Truthy
const age = 17;

// if (age > 18) {
//   adult = true;
// } else if(){}
// else {
//   adult = false;
// }

const type = "text";

// switch(type){
//     case 'text':
//         return 'text'
//     case 'number':
//         return 'number'
// }

const adult = age > 18 ? "adult" : age > 13 ? "teenager" : "minor";

// let adult = "";
// if (age > 18) {
//   adult = "adult";
// } else if (age > 13) {
//   adult = "teenager";
// } else {
//   adult = "minor";
// }

console.log(adult);

// Truthy

// false && true -> false
// false && false -> false
// true && false -> false
// true && true -> true

// const adult = age < 18 && "minor";

// const final = true || "minor";

const users = [
  {
    name: "mark",
    lastName: "mating",
    age: 25,
  },
  {
    name: "arvin",
    lastName: "Maraasin",
    age: 20,
  },
  {
    name: "anwar",
    lastName: "gustaham",
    age: 35,
  },
  {
    name: "raffeeh",
    lastName: "balahim",
    age: 27,
  },
];

// return [{ fullname : 'mark mating'}, { fullname : 'arvin Maraasin'}, { fullname : 'anwar gustaham'},{ fullname : 'raffeeh balahim'}]
// return [ { fullname : 'anwar gustaham'}] // return user in their 30s
// return 'markarvinanwarraffeeh' // concat names
// return [true,true,false,true] // return if in their 20s
//  return display all users with vowels in their firstName
// return an array -> change the first letter of the firstName into 'Engineering'
// return an array -> count how many letters of the last name
// return an array -> odd or even ( number of letters in lastName)
// sum of all last name letters
// sort by age
