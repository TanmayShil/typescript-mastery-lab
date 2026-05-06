// *****************************************************************************************//
// *****************************************************************************************//


// JSON  -> JavaScript Object Notation
// JSON is a light-weight data-interchange format.
// JSON is used to store and transport data.
//Browser does not understand Object/array-object(key/value pairs), so we need to convert Object/array-object into string format.

// JSON format:
// JSON is written in key/value pairs.
// JSON is written in JavaScript object syntax.
// JSON is written in JavaScript array syntax.
// JSON is written in JavaScript string syntax.


// JSON Methods:-
// JSON.stringify() -> Object/array-object to String
// JSON.parse() -> String to Object/array-object


// 1. Object to String(JSON.stringify()):-
// type Person = {
//     name: string,
//     age: number,
//     isStudent: boolean,
//     address: {
//         city: string,
//         state: string
//     }
// }
// const person: Person = {
//     name: "John",
//     age: 30,
//     isStudent: true,
//     address: {
//         city: "New York",
//         state: "New York"
//     }
// }

// const personString = JSON.stringify(person);
// console.log(personString);
// console.log(typeof personString);


// 2. String to Object(JSON.parse()):-
// const personStringToObject = JSON.parse(personString as string);
// console.log(personStringToObject);
// console.log(typeof personStringToObject);

// console.log(personStringToObject.address.city); // error because it is object not object

// -------------------------------------------------------xxxxxxxxxxxxx---------------------------------------------------


// Problem Set:-

// //  1. JSON.stringify(value, replacer, space) 
// let person1 = {
//     name: "John",
//     age: 30,
//     isStudent: true,
//     address: {
//         city: "New York",
//         state: "New York"
//     }
// }
// // Stringify with replacer
// let result1 = JSON.stringify(person1, ["name", "address"]);
// console.log("1. Object to String with replacer:", result1);


// // 2. JSON.parse(text, reviver)
// const personString = '{"name":"John","age":30,"isStudent":true,"address":{"city":"New York","state":"New York"}}';
// const personStringToObject = JSON.parse(personString as string);
// console.log("2. String to Object:", personStringToObject);

// // 3. JSON.parse() with reviver
// const personStringWithDate = '{"name":"John","age":30,"isStudent":true,"address":{"city":"New York","state":"New York"},"birthDate":"1990-01-01"}';
// const personStringWithDateToObject = JSON.parse(personStringWithDate as string, (key, value) => {
//     if (key === "birthDate") {
//         return new Date(value);
//     }
//     return value;
// });
// console.log("3. String to Object with reviver:", personStringWithDateToObject);


// // 4. JSON.parse() with reviver and replacer
// const personStringWithDateAndReplacer = '{"name":"John","age":30,"isStudent":true,"address":{"city":"New York","state":"New York"},"birthDate":"1990-01-01"}';
// const personStringWithDateAndReplacerToObject = JSON.parse(personStringWithDateAndReplacer as string, (key, value) => {
//     if (key === "birthDate") {
//         return new Date(value);
//     }
//     return value;
// });
// console.log("4. String to Object with reviver and replacer:", personStringWithDateAndReplacerToObject);


// // 5. JSON.stringify() with reviver and replacer
// const personStringWithDateAndReplacerAndStringify = '{"name":"John","age":30,"isStudent":true,"address":{"city":"New York","state":"New York"},"birthDate":"1990-01-01"}';
// const personStringWithDateAndReplacerAndStringifyToObject = JSON.stringify(personStringWithDateAndReplacerAndStringify, (key, value) => {
//     if (key === "birthDate") {
//         return new Date(value);
//     }
//     return value;
// });
// console.log("5. String to Object with reviver and replacer and stringify:", personStringWithDateAndReplacerAndStringifyToObject);




//------------------------------------------------------------------------------------------//
//------------------------------------------------------------------------------------------//
// //shallow copy - doesn't copy nested objects. nested object is same reference
// let obj1 = {
//     name: "John",
//     age: 30,
//     address: {
//         city: "New York",
//         state: "New York"
//     }
// }
// let obj2 = { ...obj1 };
// console.log(obj2); //address same reference
// console.log(obj1 === obj2); //false
// console.log(obj1.address === obj2.address); //true

// //deep copy - copies nested objects. nested object is different reference
// let obj3 = JSON.parse(JSON.stringify(obj1));
// console.log(obj3);
// console.log(obj1 === obj3); //false
// console.log(obj1.address === obj3.address); //false

// //using structuredClone
// let obj4 = structuredClone(obj1);
// console.log(obj4);
// console.log(obj1 === obj4); //false
// console.log(obj1.address === obj4.address); //false

//Difference between shallow copy and deep copy
//Shallow copy - doesn't copy nested objects. nested object is same reference
//Deep copy - copies nested objects. nested object is different reference


// *****************************************************************************************//
// *****************************************************************************************//





