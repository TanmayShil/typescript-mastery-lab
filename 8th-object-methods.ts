// *****************************************************************************************//
// *****************************************************************************************//

//Object - Object is a collection of key-value pairs.

// syntax:
// const objectName = {
//     key1: value1,
//     key2: value2,
//     key3: value3,
// }

// Example:
// type Person = {
//     name: string;
//     age: number;
//     city: string;
// } 
// //or
// interface Person {
//     name: string;
//     age: number;
//     city: string;
// }

// const person:Person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// console.log(person);  // { name: "John", age: 30, city: "New York" }

// // Accessing properties
// console.log(person.name);  // "John"
// console.log(person.age);   // 30
// console.log(person.city);  // "New York"

// // Modifying properties
// person.age = 31;
// console.log(person.age);   // 31

// // Adding properties
// person.gender = "Male";
// console.log(person.gender);  // "Male"

// // Deleting properties
// delete person.city;
// console.log(person.city);  // undefined




//------------------------------------------------------------------------------------------------
// Object methods - Object methods are methods that can be called on an object.
// interface Obj{
//     name: string;
//     age: number;
//     city: string;
// }
// let obj:Obj = {
//     name: "John",
//     age: 30,
//     city: "New York"
// } 




//----------------------------------------------------------------------------
// 1. Object.keys() - returns an array of object's own enumerable property names
// let keys = Object.keys(obj);
// console.log(keys);  // ["name", "age", "city"]



//--------------------------------------------------------------------------
// 2. Object.values() - returns an array of object's own enumerable property values
// let values = Object.values(obj);
// console.log(values);  // ["John", 30, "New York"]



//--------------------------------------------------------------------------
// 3. Object.entries() - returns an array of object's own enumerable property [key, value] pairs
// let entries = Object.entries(obj);
// console.log(entries);  // [["name", "John"], ["age", 30], ["city", "New York"]]



//--------------------------------------------------------------------------
// 4. Object.assign() - copies the values of all enumerable own properties from one or more source objects to a target object
// let target = {};
// Object.assign(target, obj);
// console.log(target);  // { name: "John", age: 30, city: "New York" }




//-----------------------------------------------------------------------------
// 5. Object.create() - creates a new object with the specified prototype
// let proto = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
// let obj2 = Object.create(proto);
// console.log(obj2);  // { name: "John", age: 30, city: "New York", greet: [Function: greet] }
// obj2.greet(); // Hello, my name is John




//--------------------------------------------------------------------------------
// 6. Object.freeze() - prevents the modification of existing properties and the addition of new properties
// Example - 
// const obj = {};
// Object.freeze(obj);
// obj.name = 'John';
// console.log(obj);  // {}



//----------------------------------------------------------------------------
// 7. Object.seal() - prevents the addition of new properties but allows the modification of existing properties
// Example - 
// const obj = {};
// Object.seal(obj);
// obj.name = 'John';
// console.log(obj);  // { name: 'John' }




//----------------------------------------------------------------------------
// 8. Object.preventExtensions() - prevents the addition of new properties
// Example - 
// const obj = {};
// Object.preventExtensions(obj);
// obj.name = 'John';
// console.log(obj);  // { name: 'John' }




//----------------------------------------------------------------------------
// 9. Object.isExtensible() - checks if an object can have new properties added
// Example - 
// const obj = {};
// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj));  // false





//----------------------------------------------------------------------------
// 10. Object.isSealed() - checks if an object is sealed
// Example - 
// const obj = {};
// Object.seal(obj);
// console.log(Object.isSealed(obj));  // true





//----------------------------------------------------------------------------
// 11. Object.isFrozen() - checks if an object is frozen
// Example - 
// const obj = {};
// Object.freeze(obj);
// console.log(Object.isFrozen(obj));  // true




//----------------------------------------------------------------------------
// 12. Object.is() - checks if two objects are the same
// Example - 
// const obj = {};
// const obj2 = {};
// console.log(Object.is(obj, obj2));  // false



//----------------------------------------------------------------------------
// 13. Object.fromEntries() - returns an array of object's own enumerable property [key, value] pairs
// Example - 
// const obj = {};
// Object.fromEntries(obj);
// console.log(Object.fromEntries(obj));  // {}



//----------------------------------------------------------------------------
// 14. call() - calls a function with a given value as `this` and arguments provided individually
// Example 1:- 
// function greet(){
//     console.log(this);
// }
// greet.call({name: 'John'});  // { name: 'John' }


// Example 2:- 
// function greet(age: number){
//     console.log(this.name + " is " + age + " years old");
// }
// greet.call({name: 'John'}, 30);  // John is 30 years old


//----------------------------------------------------------------------------
// 15. apply() - calls a function with a given value as `this` and arguments provided as an array
// Example 1:- 
// function greet(){
//     console.log(this);
// }
// greet.apply({name: 'John'});  // { name: 'John' }


// Example 2:- 
// function greet(age: number){
//     console.log(this.name + " is " + age + " years old");
// }
// greet.apply({name: 'John'}, [30]);  // John is 30 years old



//----------------------------------------------------------------------------
// 16. bind() - returns a new function that has the same body and this of the original function, but with `this` value bound to the first argument.
// Example 1(simple):- 
// let obj1 = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     greet: function(){
//         console.log(this.name + " is " + this.age + " years old");
//     }
// }
// let obj2 = {
//     name: "Ravi",
//     age: 30,
//     city: "Mumbai",
// }
// let boundGreet = obj1.greet.bind(obj2);
// boundGreet();



// Example 2(intermediate - using call()):- 
// let obj1 = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     greet: function(message: string): void {
//         console.log(message + ", " + this.name + " is " + this.age + " years old");
//     }
// }
// let obj2 = {
//     name: "Ravi",
//     age: 30,
//     city: "Mumbai",
// }

// // Call method bind with the arguments
// obj1.greet.call(obj2, "Hello"); //Hello, Ravi is 30 years old




// Example 3(bind - advanced - using apply()):- 
// let obj1 = {
//     name: "John",
//     age: 30,
//     city: "New York",
//     greet: function(message: string): void {
//         console.log(message + ", " + this.name + " is " + this.age + " years old");
//     }
// }
// let obj2 = {
//     name: "Ravi",
//     age: 30,
//     city: "Mumbai",
// }

// // Call method bind with the arguments
// obj1.greet.apply(obj2, ["Hello"]); //Hello, Ravi is 30 years old




// *****************************************************************************************//
// *****************************************************************************************//
