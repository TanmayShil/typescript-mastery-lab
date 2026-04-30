// *****************************************************************************************//
// *****************************************************************************************//


//spread operator(...) spread operator is used to spread the elements of an array or object.


//----------------------------------------------------------------------------
//array spread operator - 
// const array1 = [1, 2, 3];
// const array2 = [...array1, 4, 5, 6];
// console.log("Array 2: ", array2); // [1, 2, 3, 4, 5, 6]

// //some better examples of array spread operator -

//concatenation of arrays
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];
// console.log("Array 3: ", arr3); // [1, 2, 3, 4, 5, 6]

// //adding elements to an array
// const arr4 = [...arr1, 4, 5, 6];
// console.log("Array 4: ", arr4); // [1, 2, 3, 4, 5, 6]

// //remove duplicates from an array
// const arr5 = [...new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4])];
// console.log("Array 5: ", arr5); // [1, 2, 3, 4]

// //copying arrays
// const arr6 = [...arr1];
// console.log("Array 6: ", arr6); // [1, 2, 3]




//-----------------------------------------------------------------------------
//object spread operator
// const object1 = { name: "John", age: 30 };
// const object2 = { ...object1, city: "New York" };
// console.log("Object 2: ", object2); // { name: "John", age: 30, city: "New York" }


// //some better examples of object spread operator -

// adding properties to an object
// const obj1 = { name: "John", age: 30 };
// const obj2 = { ...obj1, city: "New York" };
// console.log("Object 2: ", obj2); // { name: "John", age: 30, city: "New York" }

// merging objects
// const obj3 = { ...obj1, ...obj2 };
// console.log("Object 3: ", obj3); // { name: "John", age: 30, city: "New York" }

// copying objects
// const obj4 = { ...obj1 };
// console.log("Object 4: ", obj4); // { name: "John", age: 30 }





//-----------------------------------------------------------------------------
//array of objects - 
// const products =[
//     {name:"Tshirt", price:500, category:"Men"},
//     {name:"Kurta", price:700, category:"Women"},
//     {name:"Saree", price:1500, category:"Women"},
//     {name:"Jean", price:1500, category:"Men"}
// ]

// //adding items to the array of objects
// const addingProducts = [...products, {name:"Saree", price:1500, category:"Women"}];
// console.log("Adding Products: ", addingProducts); 

// //updating item in the array of objects
// const updatedProducts = products.map(product => 
//     product.name === "Tshirt" ? { ...product, price: 600 } : product
// );
// console.log("Updated Products: ", updatedProducts);

// //removing item from the array of objects
// const removedProducts = products.filter(product => product.name !== "Tshirt");
// console.log("Removed Products: ", removedProducts);
                            



//--------------------------------------------------------------------------------------
//object of objects - 
// const userObjects = {
//     user1: { name: "John", age: 30 },
//     user2: { name: "Jane", age: 25 },
//     user3: { name: "Bob", age: 35 }
// }

//adding user to the object of objects
// const addUserObjects = { ...userObjects, user4: { name: "Alice", age: 28 } };
// console.log("Added User Objects: ", addUserObjects); // { user1: { name: 'John', age: 30 },
                                                             //   user2: { name: 'Jane', age: 25 },
                                                             //   user3: { name: 'Bob', age: 35 },
                                                             //   user4: { name: 'Alice', age: 28 } }

//updating user in the object of objects
// const updatedUserObjects = { ...userObjects, user1: { name: "John", age: 31 } };
// console.log("Updated User Objects: ", updatedUserObjects); // { user1: { name: 'John', age: 31 },
                                                             //   user2: { name: 'Jane', age: 25 },
                                                             //   user3: { name: 'Bob', age: 35 } }

//removing user from the object of objects
// const removedUserObjects = { ...userObjects, user1: undefined };
// console.log("Removed User Objects: ", removedUserObjects); // { user1: undefined,
                                                             //   user2: { name: 'Jane', age: 25 },
                                                             //   user3: { name: 'Bob', age: 35 } }






//--------------------------------------------------------------------------------------
//rest parameter
// const sum = (...numbers: number[]) => {
//     return numbers.reduce((acc, current) => acc + current, 0);
// };
// console.log("Sum: ", sum(1, 2, 3, 4, 5)); // 15


// //some better examples of rest parameter -

// Problem 1: - Sum all the parameters
// const sum = (...numbers: number[]) => {
//     return numbers.reduce((acc, current) => acc + current, 0);
// };
// console.log("Sum: ", sum(1, 2, 3, 4, 5)); // 15


// Problem 2: - Filter out all even numbers from an array
// const filterEven = (...numbers: number[]) => {
//     return numbers.filter(number => number % 2 === 0);
// };
// console.log("Filter Even: ", filterEven(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // [2, 4, 6, 8, 10]


//Problem 3: - Create a function that can accept any number of arguments and return the average of those arguments.
// const average = (...numbers: number[]) => {
//     return numbers.reduce((acc, current) => acc + current, 0) / numbers.length;
// };
// console.log("Average: ", average(1, 2, 3, 4, 5)); // 3


// *****************************************************************************************//
// *****************************************************************************************//