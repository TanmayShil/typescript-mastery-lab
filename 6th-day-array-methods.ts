// *****************************************************************************************//
// *****************************************************************************************//

// Array Methods - Array methods are built-in functions that can be used to manipulate arrays.


//-------------------------------------------------------------------------------------
// 1. Accessing Elements of an Array
// Example:
// const arr:string[] = ["apple", "banana", "cherry"];
// console.log(arr[0]);  // "apple"
// console.log(arr[1]);  // "banana"
// console.log(arr[2]);  // "cherry"



//-------------------------------------------------------------------------------------------------
// 2. length property - The length property returns the length of an array.
// Example:
// const arr:string[] = ["apple", "banana", "cherry"];
// console.log(arr.length);  // 3



//----------------------------------------------------------------------------------------
// 3. Modifying the Array Elements
// Example:
// const arr:string[] = ["apple", "banana", "cherry"];
// arr[0] = "orange";
// console.log(arr);  // ["orange", "banana", "cherry"]



//-----------------------------------------------------------------------------------------
// 4. push() method - The push() method adds one or more elements to the end of an array.
// Example:
// const arr:number[] = [1, 2, 3];
// arr.push(4);
// console.log(arr);  // [1, 2, 3, 4]


//--------------------------------------------------------------------------
// 5. pop() method - The pop() method removes the last element from an array.
// Example:
// const arr:number[] = [1, 2, 3];
// arr.pop();
// console.log(arr);  // [1, 2]


//--------------------------------------------------------------------------
// 6. shift() method - The shift() method removes the first element from an array.
// Example:
// const arr:number[] = [1, 2, 3];
// arr.shift();
// console.log(arr);  // [2, 3]


//--------------------------------------------------------------------------
// 7. unshift() method - The unshift() method adds one or more elements to the beginning of an array.
// Example:
// const arr:number[] = [1, 2, 3];
// arr.unshift(4);
// console.log(arr);  // [4, 1, 2, 3]




//--------------------------------------------------------------------------
// 8. concat() method - The concat() method is used to merge two or more arrays.
// Example:
// const arr1:number[] = [1, 2, 3];
// const arr2:number[] = [4, 5, 6];
// console.log(arr1.concat(arr2));  // [1, 2, 3, 4, 5, 6]




//--------------------------------------------------------------------------
// 9. join() method - The join() method is used to join all elements of an array into a string.
// Example:
// const arr:string[] = ["apple", "banana", "cherry"];
// console.log(arr.join(" "));  // "apple banana cherry"
// console.log(arr.join(""));  // "applebananacherry"
//console.log(arr.join("-"));  // "apple-banana-cherry"




//--------------------------------------------------------------------------
// 10. slice() method - The slice() method extracts a section of an array and returns it as a new array.
// Example:
// const arr:number[] = [1, 2, 3, 4, 5];
// console.log(arr.slice(1, 3));  // [2, 3]
// console.log(arr.slice(2));  // [3, 4, 5]
// console.log(arr.slice(0, -1));  // [1, 2, 3, 4]



//--------------------------------------------------------------------------
// 11. splice() method - The splice() method is used to add, remove, or replace elements in an array.
// Example:
// const arr:number[] = [1, 2, 3, 4, 5];
// arr.splice(1, 2, 3);  // [1, 2, 3, 4, 5]
// console.log(arr);  // [1, 2, 3, 4, 5]


//****************************************************************   */
// difference between slice and splice
// slice() method extracts a section of an array and returns it as a new array.
// splice() method is used to add, remove, or replace elements in an array.
// slice() method does not modify the original array.
// splice() method modifies the original array.
// Example - 
// const arr: number[] = [1, 2, 3, 4, 5];

// // slice() - does not modify original array
// const slicedArr = arr.slice(1, 3);
// console.log(slicedArr); // [2, 3]
// console.log(arr); // [1, 2, 3, 4, 5] (original array is unchanged)

// // splice() - modifies original array
// arr.splice(1, 2, 99);
// console.log(arr); // [1, 99, 4, 5] (original array is modified)
//****************************************************************   */



//--------------------------------------------------------------------------------
//12. fill() method - The fill() method is used to fill an array with a specified value.
// Example:  
// const arr:number[] = [1, 2, 3, 4, 5];
// arr.fill(0);  
// console.log(arr);  // [0, 0, 0, 0, 0]



//--------------------------------------------------------------------------------
//13. flat() method - The flat() method is used to flatten an array.
// Example:  
// const arr:number[] = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10]];
// console.log(arr.flat());  // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]



//-------------------------------------------------------------------------------
//14. indexOf() method - The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
// Example:  
// const arr:number[] = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3));  // 2
// console.log(arr.indexOf(6));  // -1



//-------------------------------------------------------------------------------
//15. includes() method - The includes() method checks if an array contains a specified element.
// Example:  
// const arr:number[] = [1, 2, 3, 4, 5];
// console.log(arr.includes(3));  // true
// console.log(arr.includes(6));  // false



//-------------------------------------------------------------------------------------
// 16. reverse() method - The reverse() method reverses the order of the elements in an array in place and returns the reversed array.
// Example:
// const arr:number[] = [1, 2, 3, 4, 5];
// arr.reverse();
// console.log(arr);  // [5, 4, 3, 2, 1]



//--------------------------------------------------------------------------------
//17. at() method - The at() method returns the element at a specified index in an array.
// Example:  
// const arr:number[] = [1, 2, 3, 4, 5];
// console.log(arr.at(2));  // 3
// console.log(arr.at(-1));  // 5



//--------------------------------------------------------------------------------
//18. toSorted() method - The toSorted() method returns a new array with the elements sorted in ascending order.
// Example:  
// const arr:number[] = [1, 2, 3, 4, 5];
// console.log(arr.toSorted());  // [1, 2, 3, 4, 5]



//--------------------------------------------------------------------------------
//19. toReversed() method - The toReversed() method returns a new array with the elements in reverse order.
// Example:  
// const arr:number[] = [1, 2, 3, 4, 5];
// console.log(arr.toReversed());  // [5, 4, 3, 2, 1]



//--------------------------------------------------------------------------------
//20. toSpliced() method - The toSpliced() method returns a new array with the elements in reverse order.
// Example:  
// const arr:number[] = [1, 2, 3, 4, 5];
// console.log(arr.toReversed());  // [5, 4, 3, 2, 1]


