//-----------------------------------------------------------------------------------------------------------------------------------------
//                                                                                                                                       
//                                                 Higher-Order Array Methods                                                            
//                                                                                                                                       
//-----------------------------------------------------------------------------------------------------------------------------------------





//-------------------------------------------------------------------------------------
// 1. forEach() method - The forEach() method executes a provided function once for each array element.
// Example:
// const arr:number[] = [1, 2, 3];
// arr.forEach((item, index) => {
//     console.log(`Index: ${index}, Value: ${item}`);
// });
// Output: Index: 0, Value: 1
//         Index: 1, Value: 2
//         Index: 2, Value: 3



//-------------------------------------------------------------------------------------
// 2. map() method - The map() method creates a new array by applying a function to each element of the original array.
// Example:
// const arr:number[] = [1, 2, 3];
// const squaredArr = arr.map(item => item * item);
// console.log(squaredArr);  // [1, 4, 9]


//********************************************************* */
// map vs foreach
// map - returns a new array
// foreach - does not return a new array
// Example - 
// let arr:number[] = [1, 2, 3];
// let mapArr = arr.map(item => item * item); // returns a new array
// let forEachArr = arr.forEach(item => item * item); // does not return a new array
// console.log(mapArr); // [1, 4, 9]
// console.log(forEachArr); // undefined

//********************************************************* */


//-------------------------------------------------------------------------------------
// 3. filter() method - The filter() method creates a new array with all elements that pass a test provided by a function.
// Example:
// const arr:number[] = [1, 2, 3, 4, 5];
// const evenArr = arr.filter(item => item % 2 === 0);
// console.log(evenArr);  // [2, 4]



//********************************************************* */
// map vs filter
// map - when we want to transform each element of the array into something else
// filter - when we want to filter out elements from the array based on a condition
// Example - 
// let arr:number[] = [1, 2, 3];
// let mapArr = arr.map(item =>{
//     if(item > 2){
//         return item;
//     }
// }); 
// let filterArr = arr.filter(item => item > 2); 
// console.log(mapArr); // [1, 4, 9]
// console.log(filterArr); // [3]

//********************************************************* */


//-------------------------------------------------------------------------------------
// 4. reduce() method - The reduce() method executes a reducer function on each element of the array, resulting in a single output value.
// Example:
// const arr:number[] = [1, 2, 3, 4, 5];
// const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum);  // 15



//-------------------------------------------------------------------------------------
// 5. find() method - The find() method returns the first element in the array that satisfies a provided testing function.
// Example:
// const arr:number[] = [1, 2, 3, 4, 5];
// const found = arr.find(item => item > 3);
// console.log(found);  // 4



//-------------------------------------------------------------------------------------
// 6. findIndex() method - The findIndex() method returns the index of the first element in the array that satisfies a provided testing function.
// Example:
// const arr:number[] = [1, 2, 3, 4, 5];
// const index = arr.findIndex(item => item > 3);
// console.log(index);  // 3



//-------------------------------------------------------------------------------------
// 7. some() method - The some() method checks if at least one element in the array satisfies a provided testing function.
// Example:
// const arr:number[] = [1, 2, 3, 4, 5];
// const hasEven = arr.some(item => item % 2 === 0);
// console.log(hasEven);  // true



//-------------------------------------------------------------------------------------
// 8. every() method - The every() method checks if all elements in the array satisfy a provided testing function.
// Example:
// const arr:number[] = [1, 2, 3, 4, 5];
// const allEven = arr.every(item => item % 2 === 0);
// console.log(allEven);  // false



//-------------------------------------------------------------------------------------
// 9. sort() method - The sort() method sorts the elements of an array in place and returns the sorted array.
// Example:
// const arr:number[] = [1, 5, 2, 4, 3];
// arr.sort((a, b) => a - b);  // Ascending order
// console.log(arr);  // [1, 2, 3, 4, 5]

// const arr2:number[] = [1, 5, 2, 4, 3];
// arr2.sort((a, b) => b - a);  // Descending order
// console.log(arr2);  // [5, 4, 3, 2, 1]




//---------------------------------------------------------------------------------------
// 10. flatMap() method - The flatMap() method first maps each element using a mapping function, then flattens the result into a new array.
// Example:
// const arr:number[] = [1, [2, [3, [4]]], 5];
// const flatMapArr = arr.flatMap(item => item);
// console.log(flatMapArr);  // [1, 4, 9]



// *****************************************************************************************//
// *****************************************************************************************//



