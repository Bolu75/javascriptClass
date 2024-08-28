// //Outputting data
// // alert("Hello World!");
// // confirm("Are you sure you want to delete this?");
// // prompt("what is your name?");
// // document.write("Hello world");
// console.log("Hello world!");

// // Creation of programs concatenation
// let firstName = prompt("Enter your first name:");
// let lastName = prompt("Enter your last name:");
// console.log(firstName + " " + lastName);
// console.log(
//   "Your first name is " + firstName + "and your last name is" + lastName
// );
// // example
// // let secondName = prompt("David:");
// // let Age = prompt("27years old:");
// // console.log("Your second name is " + secondName + "and your age is" + Age);
// //Template literals
// // console.log(`${firstName} ${lastName}`);
// // console.log(`Your first name is ${firstName} and your surname is ${lastName}`);
// //example 2 using template literals
// let secondName = prompt("David:");
// let Age = prompt("27years old:");
// console.log(
//   `Your second name is ${secondName} and your age is ${Age} years old`
// );
// //classwork 2
// let Name = prompt("What is your name");
// let greeting = prompt("Hi");
// console.log(`Hi, Your name is ${Name}`);

// let number1 = prompt(first number);
// let number2 = prompt(second number);
// console.log(`sum`)
// //example on sum
// let first_number= parseInt(prompt("Enter any number: "));
// let second_number= parseInt(prompt("Enter another number"));
// console.log(`${first_number} + ${second_number}=${first_number + second_number}`);
// let x = 20;
// --x;
// const y = 23;
// var v= 54
// //assignment
// let firstName = prompt("Carlton:");
// let lastName = prompt("Gate:");
// let Age = prompt("40 years old:");
// console.log(
//   `Hi, your names are ${firstName, lastName} and your age is ${Age} years old`
// );
// let favouriteColor = prompt("Yellow:");
// let favouriteAnimal = prompt("Lion:");
// console.log(
//   `your favourite color is ${favouriteColor} and your favourite animal is ${favouriteAnimal }`
// );
// let firstName = prompt("Michael:");
// let birthYear = prompt("1998:");
// console.log(
//   `your first name is ${firstName} and you are ${birthYear } 26 years old`
// );

// ASSIGNMENT
// let userName = prompt("What is your name? ");
// console.log(`${userName}`);

// let firstName = prompt("enter your first name: ");
// let secondName = prompt("enter your second name: ");
// let current_year = new Date().getFullYear();
// let birth_year = prompt("enter your year of birth here: ");
// console.log(
//   `Hello ${firstName} ${secondName} you are ${
//     current_year - birth_year
//   } years old`
// );
// let Name = prompt("enter your name");
// console.log(`Hello ${Name}`);

// let first_number = prompt("input first number");
// let second_number = prompt("input second number");

// let favouriteColor = prompt("enter your favorite color: ");
// let favouriteAnimal = prompt("enter your favorite animal: ");
// console.log(
//   `Hello ${favouriteColor} and ${favouriteAnimal} are your favourites`
// );
// let Name = prompt("enter your name");
// let current_year = new Date().getFullYear();
// let birth_year = prompt("enter your year of birth here: ");
// console.log(`hi ${Name} you are ${current_year - birth_year} years old`);

// let homeTown = prompt("enter your hometown: ");
// let favouriteFood = prompt("enter your favoritefood: ");
// console.log(
//   `Hello you are from ${homeTown} and  yor favourite food is ${favouriteFood}`
// );

// let city = prompt("what city did you visit:");
// let Date = prompt("when did you visit:");
// console.log(`you visited ${city} on ${date}`);

// let title = prompt("what is the title of the book you just read:");
// let author = prompt("who wrote the book:");
// console.log(`the book ${title} was written by ${author}`);

// let favouriteMovie = prompt("what is yor favourite movie:");
// let Date = prompt("when was it released:");
// console.log(`you watched ${favoriteMovie} and it was released on ${date}`);

// let favouriteFruit = prompt("what is yor favourite fruit:");
// let duration = prompt("how many times do you eat this fruit in a week:");
// console.log(
//   `your favourite fruit is ${favoriteFruit} and you eat it ${duration} times in a week`
// );
// let favouriteSubject = prompt("what is yor favourite subject:");
// let gradeLevel = prompt("what grade level are you in(figure only):");
// console.log(
//   `your favourite subject is ${favoriteSubject} and you are in grade ${gradeLevel}`
// );
// // arrays
// // let tunde = array("pink", "red", "purple", "blue");
// let colors = ["pink", "red", "purple", "blue", "yellow"];
// console.log(colors[1]);
// // to remove the last element from the array
// colors.pop();
// console.log(colors);
// //to remove the first element of the array
// colors.shift();
// console.log(colors);
// //to reverse the order of the elements in the array
// colors.reverse();
// colors[0] = "Green";
// console.log(colors);

// let grade = prompt("What was your grade?");
// if (grade == "A") {
//   console.log("Grade A");
// } else if (grade == "B") {
//   console.log("Grade B");
// } else if (grade == "C") {
//   console.log("Grade C");
// } else if (grade == "D") {
//   console.log("Fail");
// } else {
//   console.log("unknown result");
// }

// switch (true) {
//   case grade == "A":
//     console.log("Grade A");
//     break;
//   case grade == "A":
//     console.log("Grade A");
//     break;
//   case grade == "B":
//     console.log("Grade B");
//     break;
//   case grade == "C":
//     console.log("Grade C");
//     break;
//   case grade == "D":
//     console.log("Grade D");
//     break;
//   default:
//     console.log("Unknown Result");
// }
// let x = 0;
// while (x <= 100) {
//   console.log(x);
//   x++;
// }

// for (let x=0; x <= 100; x++) {
//   console.log(x);
// }

// let favorite_color = prompt("enter your favorite color:");
// let favorite_animal = prompt("enter your favorite animal:");
// console.log(
//   `Your favorite color is ${favorite_color} and your best animal is ${favorite_animal}`
// );

let firstName = prompt("enter your first name:");
let currentYear = new Date().getFullYear();
let birth_year = prompt("enter your birth year");
console.log(
  `your first name is ${firstName} and you are ${
    currentYear - birth_year
  } years old`
);
// get a long string,lrngth of the String, turn it in array and say how many characters are in the string

let description =
  "hello my name is Boluwatife. How are you, I am curently studying Javascript";
console.log(description.length);

let atmPin =prompt("whats your atm pin:");
let cardNumber= prompt("what's your card number");
if (atmPin == "1274") ;
if (cardNumber == "0102734567"){
console.log("do you want to withdraw?")}
else {
     console.log("unknown result");
   };
  // wowwww


