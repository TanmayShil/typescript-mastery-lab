// *****************************************************************************************//
// *****************************************************************************************//

// Statements in TypeScript 
// Statements decide which code should run next. They are the backbone of any program's logic. 



// 1. Conditional Statements (if, else, else if)
// These statements allow you to execute certain blocks of code only if a condition is met.

// Syntax:
// if (condition) {
//   // block of code to execute if condition is true
// }

// else if (condition) {
//   // block of code to execute if condition is false
// }

// else {
//   // block of code to execute if all conditions are false
// }


// Example 1(if-else):
// let age: number = 20;
// if (age >= 18) {
//   console.log("You are eligible for voting.");
// }else {
//   console.log("You are not eligible for voting.");
// }

// Example 2(else if):
// let temperature: number = 25;
// if (temperature > 30) {
//   console.log("It's a hot day!");
// }else if (temperature > 20) {
//   console.log("It's a pleasant day.");
// }else {
//   console.log("It's a cold day.");
// }

// Example 3(nested if-else):
// let num: number = -5;
// if (num >= 0) {
//   if (num === 0) {
//     console.log("Number is zero.");
//   } else {
//     console.log("Number is positive.");
//   }
// } else {
//   console.log("Number is negative.");
// }


// --------------------------------------------------------------------------------------------------------------
//  2. Ternary Operator (Conditional Operator)
// It's a shorthand for a simple if-else statement.
// Syntax: condition ? exprIfTrue : exprIfFalse

// Example 1(basic ternary operator):
// let age: number = 20;
// let canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote);  // "Yes"

// Example 2(nested ternary operator):
// let num: number = -5;
// let result = num >= 0 ? (num === 0 ? "Zero" : "Positive") : "Negative";
// console.log(result);  // "Negative"

// --------------------------------------------------------------------------------------------------------------
// 3. Switch Statement
// The switch statement is used to perform different actions based on different conditions. It is a more readable alternative to a long if-else if-else chain.

// a. break - used to exit the switch statement 
// b. continue - used to skip the current iteration and continue to the next iteration 
// c. default - used to execute the code if no match is found
// d. fall-through - when break is not used, the code will continue to execute the next case 
// e. switch expression can be any type - string, number, boolean, enum, object
// f. switch can be used as expression - switch expression return value
// g. switch expression is evaluated only once
// h. switch case can be any expression
// i. switch case can have multiple conditions


// Syntax:
// switch (expression) {
//   case value1: 
//     // code to execute if expression === value1
//     break;
//   case value2: 
//     // code to execute if expression === value2
//     break;
//   default: 
//     // code to execute if no match is found
// }

// Example 1(basic switch statement):
// let fruit: string = "apple";
// switch (fruit) {
//   case "apple":
//     console.log("Apple");
//     break;
//   case "banana":
//     console.log("Banana");
//     break;
//   case "orange":
//     console.log("Orange");
//     break;
//   default:
//     console.log("Other");
// }

// Example 2(switch with fall-through):
// let day: string = "Monday";
// switch (day) {
//   case "Saturday":
//   case "Sunday":
//     console.log("It's a weekend!");
//     break;
//   default:
//     console.log("It's a weekday.");
// }

// Example 3(switch with multiple cases):
// let score: number = 85;
// switch (score) {
//   case 90:
//     console.log("A");
//     break;
//   case 80:
//     console.log("B");
//     break;
//   case 70:
//     console.log("C");
//     break;
//   case 60:
//     console.log("D");
//     break;
//   case 50:
//     console.log("F");
//     break;
//   default:
//     console.log("Invalid score");
// }


//----------------------------------------------------------------------------------------------

//loops -  used to execute a block of code multiple times

// 1. for loop - used to execute a block of code multiple times with a specified number of times

// Syntax:
// for (initialization; condition; increment) {
//   // code to execute 
// }

// Example 1 (basic for loop):
// for (let i: number = 0; i < 10; i++) {
//   console.log(i); 
// }

// Example 2 (for loop with break): 
// for (let i: number = 0; i < 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i); 
// }

// Example 3 (for loop with continue): 
// for (let i: number = 0; i < 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i); 
// }

//--------------------------------------------------------------------------------------
// 2. while loop - used to execute a block of code multiple times while a condition is true
// Syntax:
// while (condition) {
//   // code to execute 
// }

// Example 1 (basic while loop):
// let i: number = 0;
// while (i < 10) {
//   console.log(i); 
//   i++;
// }

// Example 2 (while loop with break): 
// let i: number = 0;
// while (i < 10) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i); 
//   i++;
// }

// Example 3 (while loop with continue): 
// let i: number = 0;
// while (i < 10) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i); 
//   i++;
// }

//--------------------------------------------------------------------------------------
// 3. do while loop - used to execute a block of code multiple times do while a condition is true

// Syntax:
// do {
//   // code to execute 
// } while (condition);

// Example 1 (basic do while loop):
// let i: number = 0;
// do {
//   console.log(i); 
//   i++;
// } while (i < 10);

// Example 2 (do while loop with break): 
// let i: number = 0;
// do {
//   if (i === 5) {
//     break;
//   }
//   console.log(i); 
//   i++;
// } while (i < 10);

// Example 3 (do while loop with continue): 
// let i: number = 0;
// do {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i); 
//   i++;
// } while (i < 10);

// ### difference while and do while loop ###
//  while - checks the condition first and then executes the code
//  do while - executes the code first and then checks the condition

// let condition: boolean = false;

// // while loop - condition is checked first, so code inside the loop never executes
// while (condition) {
//   console.log("This will never print (while loop)");
// }

// // do while loop - code inside the loop executes at least once before checking the condition
// do {
//   console.log("This will print once (do while loop)");
// } while (condition);


//--------------------------------------------------------------------------------------
// 4. for...in loop - used to iterate over the properties of an object

// Syntax:
// for (key in object) {
//   // code to execute 
// }

// Example 1 (basic for...in loop):
// let obj: object = { name: "John", age: 30, city: "New York" };
// for (let key in obj) {
//   console.log(obj[key]); 
// }

// Example 2 (for...in loop with break): 
// let obj: object = { name: "John", age: 30, city: "New York" };
// for (let key in obj) {
//   if (key === "age") {
//     break;
//   }
//   console.log(obj[key]); 
// }

// Example 3 (for...in loop with continue): 
// let obj: object = { name: "John", age: 30, city: "New York" };
// for (let key in obj) {
//   if (key === "age") {
//     continue;
//   }
//   console.log(obj[key]); 
// }

//--------------------------------------------------------------------------------------
// 5. for...of loop - used to iterate over the values of an iterable object

// Syntax:
// for (value of iterable) {
//   // code to execute 
// }

// Example 1 (basic for...of loop):
// let arr: number[] = [1, 2, 3, 4, 5];
// for (let value of arr) {
//   console.log(value); 
// }

// Example 2 (for...of loop with break): 
// let arr: number[] = [1, 2, 3, 4, 5];
// for (let value of arr) {
//   if (value === 3) {
//     break;
//   }
//   console.log(value); 
// }

// Example 3 (for...of loop with continue): 
// let arr: number[] = [1, 2, 3, 4, 5];
// for (let value of arr) {
//   if (value === 3) {
//     continue;
//   }
//   console.log(value); 
// }

//--------------------------------------------------------------------------------------
//  ### difference for...in and for...of loop ###
//  for...in - used to iterate over the properties of an object
//  for...of - used to iterate over the values of an iterable object
// type obj = {
//   name: string;
//   age: number;
//   city: string;
// }
// let arr: number[] = [1, 2, 3, 4, 5];
// let obj: obj = { name: "John", age: 30, city: "New York" };

// // for...in loop - iterates over the properties of an object
// for (let key in obj) {
//   console.log(obj[key as keyof typeof obj]);  // we have to cast the key to keyof typeof obj to access the value
// }

// // for...of loop - iterates over the values of an iterable object
// for (let value of arr) {
//   console.log(value); 
// }


// *****************************************************************************************//
// *****************************************************************************************//