// *****************************************************************************************//
// *****************************************************************************************//

// Functions - Functions are blocks of code that perform a specific task. They are reusable and can be called multiple times.

// Syntax:
// function functionName(parameter1: type, parameter2: type): returnType {
//   // code to execute 
// }




// --------------------------------------------------------------------------------
 // // 1. Pure Functions / named Functions
 // Pure functions are functions that always return the same output for the same input and have no side effects. 
 // They are deterministic and easy to test.
 
 // Example :
//  function add(a: number, b: number): number {
//     return a + b;
//  }  
 // console.log(add(2, 3));



// --------------------------------------------------------------------------------
// // 2. Impure Functions - Impure functions are functions that have side effects or do not always return the same output for the same input. 
 // They are non-deterministic and hard to test.

 // Example :
// function getRandomNumber(): number {
//     return Math.random();
// }
// console.log(getRandomNumber()); 



// --------------------------------------------------------------------------------
// //3. void Function - A void function is a function that does not return any value. It is used to perform an action but not to compute a value.

// // Example:
// function add(a: number, b: number): void {
//     console.log(a + b);
// }
// add(2, 3);  // 5 



// --------------------------------------------------------------------------------
// //4. anonymous Functions - A anonymous function is a function that does not have a name. It is used to perform a specific task and can be called multiple times.

// // Example:
// const add = (a: number, b: number): number => {
//     return a + b;
// }
// console.log(add(2, 3));  // 5 



// --------------------------------------------------------------------------------
// //5. Arrow Functions - Arrow functions are a more concise way to write function expressions in JavaScript/TypeScript.

// Example:
// const add = (a: number, b: number): number => {
//     return a + b;
// }
// console.log(add(2, 3));  // 5 
// // or
// const add = (a: number, b: number): number => a + b;
// console.log(add(2, 3));  // 5 



// --------------------------------------------------------------------------------
// //6. Recursive Functions - A recursive function is a function that calls itself. It is used to perform a specific task and can be called multiple times.

// Example:
// function factorial(n: number): number {
//   if (n === 0 || n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// }
// console.log(factorial(5));  // 120



//--------------------------------------------------------------------------------
// // 7. higher order functions - A higher order function is a function that takes another function as an argument or returns a function.

// Example:
// function add(a: number, b: number): number {
//     return a + b;
// }
// function higherOrderFunction(add: (a: number, b: number) => number, a: number, b: number): number {
//     return add(a, b);
// }
// console.log(higherOrderFunction(add, 2, 3));  // 5 



// --------------------------------------------------------------------------------
// // 8. Closures - A closure is a function that has access to its own scope, as well as the scope of its outer function.
// // Example:
// function outerFunction(): () => number {
//   let count: number = 0;
//   return function innerFunction(): number {
//     count++;
//     return count;
//   };
// }
// const closure = outerFunction();
// console.log(closure());  // 1
// console.log(closure());  // 2
// console.log(closure());  // 3



// --------------------------------------------------------------------------------
// //9. Callback Function - A callback function is a function that is passed as an argument to another function.
// // Example:
// function add(a: number, b: number): number {
//     return a + b;
// }
// function callbackFunction(add: (a: number, b: number) => number, a: number, b: number): number {
//     return add(a, b);
// }
// console.log(callbackFunction(add, 2, 3));  // 5 



// --------------------------------------------------------------------------------
// //10. IIFE (Immediately Invoked Function Expression) - An IIFE is a function that is executed immediately after it is defined.
// // Example:
// (function add(a: number, b: number): number {
//     console.log(a + b);
// })(2, 3);

// //Another way
// const add = (function (a: number, b: number): number {
//     return a + b;
// })(2, 3);
// console.log(add);



// --------------------------------------------------------------------------------
// //11. Functions as first-class citizens - Functions are first-class citizens in TypeScript, which means they can be treated as values. They can be passed as arguments to other functions, returned from other functions, and assigned to variables.

// Example:
// function add(a: number, b: number): number {
//     return a + b;
// }
// function higherOrderFunction(add: (a: number, b: number) => number, a: number, b: number): number {
//     return add(a, b);
// }
// console.log(higherOrderFunction(add, 2, 3));  // 5 

// // Or
// const add = (a: number, b: number): number => a + b;
// const higherOrderFunction = (add: (a: number, b: number) => number, a: number, b: number): number => add(a, b);
// console.log(higherOrderFunction(add, 2, 3));  // 5 



// *****************************************************************************************//
// *****************************************************************************************//




