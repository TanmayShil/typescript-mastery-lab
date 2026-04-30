// *****************************************************************************************//
// *****************************************************************************************//

// Operators in TypeScript 
// "Operators are the backbone of programming. They allow us to manipulate variables and values and perform logical operations. 


// let a:number = 10;  
// let b:number = 20;

// // arithmetic operators
// console.log(a + b); // addition 
// console.log(a - b); // subtraction
// console.log(a * b); // multiplication
// console.log(a / b); // division
// console.log(a % b); // modulo
// console.log(a ** b); // exponentiation
// console.log(a++) // post increment 
// console.log(++a) // pre increment 
// console.log(a--) // post decrement 
// console.log(--a) // pre decrement
// console.log(a ++ b) // post increment and addition assignment
// console.log(a -- b) // post decrement and subtraction assignment

// // assignment operators
// console.log(a += b); // addition assignment 
// console.log(a -= b); // subtraction assignment
// console.log(a *= b); // multiplication assignment
// console.log(a /= b); // division assignment
// console.log(a %= b); // modulo assignment
// console.log(a **= b); // exponentiation assignment
// console.log(a ++= b); // increment assignment 
// console.log(a --= b); // decrement assignment

// // comparison operators
// console.log(a == b); // equality - only check value
// console.log(a != b); // inequality - only check value
// console.log(a === b); // strict equality - check value as well as type
// console.log(a !== b); // strict inequality - check value as well as type
// console.log(a > b); // greater than
// console.log(a < b); // less than
// console.log(a >= b); // greater than or equal to
// console.log(a <= b); // less than or equal to

// // logical operators
// console.log(a && b); // logical AND - checks truthiness of both operands
// console.log(a || b); // logical OR - checks truthiness of either operand
// console.log(!a); // logical NOT - inverts the truthiness of an operand

// // conditional (ternary) operator
// let age:number = 18;
// let canVote = age >= 18 ? "Yes" : "No"; // conditional (ternary) operator - checks a condition and returns one of two values
// console.log(canVote); // "Yes" 


// // typeof operator
// console.log(typeof a);  // "number" 
// console.log(typeof b);  // "number" 

// // void operator
// console.log(void a);   // undefined 

// // as operator - used to cast a value to a specific type.
// let a: any = 10;
// console.log(a as number);  // number 

// // delete operator - used to remove a property from an object.
// type User = {
//     name: string;
//     age?: number;
// }
// let user:User = { name: "John", age: 30 };
// delete user.age;   // true
// console.log(user.age);   // undefined


// // comma operator - evaluates each of its operands (from left to right) and returns the value of the last operand.
// let i:number , j:number, k:number;
// i = 10;
// j = 20;
// k = 30;
// console.log(i, j, k);

// // instanceof operator - returns true if an object is an instance of a particular class or constructor.
// type Person = {
//     name: string;
//     age: number;
// }
// let person:Person = {
//   name: "John",
//   age: 30
// };
// console.log(person instanceof Object);

// // in operator - returns true if a property exists in an object.
// type obj = {
//     name: string;
//     age: number;
// }
// let obj:obj = { name: "John", age: 30 };
// console.log("name" in obj);  

// // void operator - used to evaluate an expression and return undefined.
// console.log(void a);  

// // ?? operator - return right operand when left operand is null or undefined.
// let x:number | null | undefined = null;
// console.log(x ?? 10);  


// // Optional Chaining - "?". When you try to access a nested property, it checks if the intermediate property exists. If it doesn't, it stops and returns undefined instead of throwing an error.
// type User = {
//     address?: {
//         street: string;
//         city: string;
//     }
// }
// const user:User = { 
//     address: {
//         street: "123 Main St",
//         city: "New York"
//     } 
// };

// // Safe access
// console.log(user?.address?.city); 

// // Safe access when address is null/undefined
// const anotherUser:User = { };
// console.log(anotherUser?.address?.city); // Returns undefined without error



// *****************************************************************************************//
// *****************************************************************************************//