// *****************************************************************************************//
// *****************************************************************************************//

// Generics in TypeScript:
// Generics are used to create reusable components.
// Generics are used to create components that can work with any type.

//Syntax:
// function <T>(arg: T): T {
//     return arg;
// }

// Example - 
// function identity<T>(arg: T): T {
//     return arg;
// }
// console.log(identity(10)); // 10
// console.log(identity("Hello")); // Hello
// console.log(identity(true)); // true

//Difference between any and generics:
// Any is used to create components that can work with any type.
// Generics are used to create components that can work with any type but with type safety.
// Example - 
// function identity<T>(arg: T): T {
//     return arg;
// }
// console.log(identity(10)); // 10
// console.log(identity("Hello")); // Hello
// console.log(identity(true)); // true

//Difference between function and generics:
// Function is used to create components that can work with any type.
// Generics are used to create components that can work with any type but with type safety.
// Example - 
// function identity<T>(arg: T): T {
//     return arg;
// }
// console.log(identity(10)); // 10
// console.log(identity("Hello")); // Hello
// console.log(identity(true)); // true

//Example with string:
// function identity<string>(arg: string): string {
//     return arg;
// }
// console.log(identity("Hello")); // Hello

//Example with number:
// function identity<number>(arg: number): number {
//     return arg;
// }
// console.log(identity(10)); // 10

//Example with boolean:
// function identity<boolean>(arg: boolean): boolean {
//     return arg;
// }
// console.log(identity(true)); // true

//Example with array:
// function identity<T>(arg: T[]): T[] {
//     return arg;
// }
// console.log(identity([1, 2, 3])); // [1, 2, 3]
// console.log(identity(["Hello", "World"]));// ["Hello", "World"]

//Example with object:
// function identity<T>(arg: T): T {
//     return arg;
// }
// console.log(identity({ name: "John", age: 25 })); // { name: "John", age: 25 }
// console.log(identity({ name: "John", age: 25, city: "New York" })); // { name: "John", age: 25, city: "New York" }

//Multiple type parameters:
// function identity<T, U>(arg1: T, arg2: U): [T, U] {
//     return [arg1, arg2];
// }
// console.log(identity(10, "Hello")); // [10, "Hello"]
// console.log(identity("Hello", true)); // ["Hello", true]

//Generics with classes:
// class identity<T> {
//     value: T;
//     constructor(value: T) {
//         this.value = value;
//     }
// }
// console.log(new identity(10)); // identity { value: 10 }
// console.log(new identity("Hello")); // identity { value: "Hello" }
// console.log(new identity(true)); // identity { value: true }


//Extend generic type:
// function identity<T extends { length: number }>(arg: T): T {
//     return arg;
// }
// console.log(identity([1, 2, 3])); // [1, 2, 3]
// console.log(identity("Hello")); // "Hello"
// console.log(identity(true)); // true

//Example with function that return object:
// function identity<T>(arg: T): T {
//     return arg;
// }
// console.log(identity({ name: "John", age: 25 })); // { name: "John", age: 25 }
// console.log(identity({ name: "John", age: 25, city: "New York" })); // { name: "John", age: 25, city: "New York" }

//Problem Set:
// // 1. Write a function that takes a key and a value and stores it in local storage.
// Solution:-
// function setLocalStorage(key:string, value:string):void {
//     localStorage.setItem(key, value);
// }
// setLocalStorage("name", "John");



// //2. Write a function that takes an array of any type and returns the reversed array. 
// // Solution:-
// function reverseArray<T>(arr: T[]): T[] {
//     return arr.reverse();
// }
// console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
// console.log(reverseArray(["Hello", "World"]));// ["World", "Hello"]

// //3. Write a function that takes two arrays and returns a new array with the elements of both arrays concatenated.
// // Solution:-
// function concatenateArrays<T>(arr1: T[], arr2: T[]): T[] {
//     return arr1.concat(arr2);
// }
// console.log(concatenateArrays([1, 2, 3], [4, 5, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(concatenateArrays(["Hello", "World"], ["TypeScript", "Generics"])); // ["Hello", "World", "TypeScript", "Generics"]

// //4. Write a function that takes an array and returns the first element of the array.
// // Solution:-
// function getFirstElement<T>(arr: T[]): T {
//     return arr[0];
// }
// console.log(getFirstElement([1, 2, 3])); // 1
// console.log(getFirstElement(["Hello", "World"]));// "Hello"

// //5. Write a function that takes an array and returns the last element of the array.
// // Solution:-
// function getLastElement<T>(arr: T[]): T {
//     return arr[arr.length - 1];
// }
// console.log(getLastElement([1, 2, 3])); // 3
// console.log(getLastElement(["Hello", "World"]));// "World"

// //6. Write a function that takes an array and returns an array with the elements of the array in reverse order.
// // Solution:-
// function reverseArray<T>(arr: T[]): T[] {
//     return arr.reverse();
// }
// console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
// console.log(reverseArray(["Hello", "World"]));// ["World", "Hello"]


// *****************************************************************************************//
// *****************************************************************************************//
