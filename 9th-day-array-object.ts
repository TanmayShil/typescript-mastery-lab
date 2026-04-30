// *****************************************************************************************//
// *****************************************************************************************//


// Array-Object Methods - 
// interface Student {
//     id: number;
//     name: string;
//     age: number;
//     degree: string;
//     isActive?: boolean;
// }

// const students: Student[] = [
//     {id: 1, name: "John", age: 30, degree: "B.E", isActive: true},
//     {id: 2, name: "Ravi", age: 20, degree: "BCA", isActive: false},
//     {id: 3, name: "Mohan", age: 35, degree: "B.Tech", isActive: true},
//     {id: 4, name: "Mohan", age: 40, degree: "B.Tech"},
// ];
// console.log("Original Array: ", students);



//---------------------------------------------------------------
// 1. forEach() & map()  - forEach() does not return any new array but map() does. forEach() is used to iterate over the array and map() is used to transform the array.
// Example - 
// const names = students.forEach((student: Student) => student.name);
// console.log("Names: ", names); // undefined

// const ages = students.map((student: Student) => student.age);
// console.log("Ages: ", ages); // [30, 20, 35, 40]



//---------------------------------------------------------------
// 2. filter() - It is used to create a new array with all elements that pass the test implemented by the provided function.
// Example - 
// const ages = students.filter((student: Student) => student.age > 30);
// console.log("Ages: ", ages); // [{id: 3, name: "Mohan", age: 35, degree: "B.Tech", isActive: true}, {id: 4, name: "Mohan", age: 40, degree: "B.Tech"}]




//----------------------------------------------------------------------
// 3. some() & every() - some() checks if at least one element passes the test implemented by the provided function. every() checks if all elements pass the test implemented by the provided function.
// Example - 
// const isAnyStudentActive = students.some((student: Student) => student.isActive);
// console.log("Is Any Student Active? ", isAnyStudentActive); // true

// const areAllStudentsActive = students.every((student: Student) => student.isActive);
// console.log("Are All Students Active? ", areAllStudentsActive); // false



//----------------------------------------------------------------------
// 4. find() , findIndex() & findLast() , findLastIndex() - find() returns the first element that passes the test implemented by the provided function. findLast() returns the last element that passes the test implemented by the provided function. findIndex() returns the index of the first element that passes the test implemented by the provided function. findLastIndex() returns the index of the last element that passes the test implemented by the provided function.
// Example - 
// const findJohn = students.find((student: Student) => student.name === "John");
// console.log("Find John: ", findJohn); // {id: 1, name: "John", age: 30, degree: "B.E", isActive: true}

// const findLastJohn = students.findLast((student: Student) => student.name === "John");
// console.log("Find Last John: ", findLastJohn); // {id: 1, name: "John", age: 30, degree: "B.E", isActive: true}

// const findJohnIndex = students.findIndex((student: Student) => student.name === "John");
// console.log("Find John Index: ", findJohnIndex); // 0

// const findLastJohnIndex = students.findLastIndex((student: Student) => student.name === "John");
// console.log("Find Last John Index: ", findLastJohnIndex); // 0





//----------------------------------------------------------------------
// 5. reduce() - It is used to reduce the array to a single value.
// Example - 
// const sumOfAges = students.reduce((acc: number, student: Student) => acc + student.age, 0);
// console.log("Sum of Ages: ", sumOfAges); // 125




//-----------------------------------------------------------------------
// 6. sort() - It is used to sort the array.
// Example - 
// const sortedStudents = students.sort((a: Student, b: Student) => a.age - b.age);
// console.log("Sorted Students: ", sortedStudents); // [{id: 2, name: "Ravi", age: 20, degree: "BCA", isActive: false}, {id: 1, name: "John", age: 30, degree: "B.E", isActive: true}, {id: 3, name: "Mohan", age: 35, degree: "B.Tech", isActive: true}, {id: 4, name: "Mohan", age: 40, degree: "B.Tech"}]




//-----------------------------------------------------------------------
// 7. slice() & splice()  - 
// slice() - It is used to extract a section of an array and return a new array.
// splice() - It is used to add, remove or replace elements in an array.
//Example - 
// const sliceStudents = students.slice(1, 3);
// console.log("Slice Students: ", sliceStudents); // [{id: 2, name: "Ravi", age: 20, degree: "BCA", isActive: false}, {id: 3, name: "Mohan", age: 35, degree: "B.Tech", isActive: true}]

// const spliceStudents = students.splice(1, 2, {id: 5, name: "Riya", age: 25, degree: "B.Sc", isActive: true});
// console.log("Splice Students: ", spliceStudents); // [{id: 2, name: "Ravi", age: 20, degree: "BCA", isActive: false}, {id: 3, name: "Mohan", age: 35, degree: "B.Tech", isActive: true}]






//----------------------------------------------------------------------
// 8. from() & copyWithin() & fill() - from() is used to create a new array from an array-like object. copyWithin() is used to copy the elements of an array to another position in the array. fill() is used to fill the array with a specific value.
// Example - 
// const fromStudents = Array.from(students);
// console.log("From Students: ", fromStudents); // [{id: 1, name: "John", age: 30, degree: "B.E", isActive: true}, {id: 2, name: "Ravi", age: 20, degree: "BCA", isActive: false}, {id: 3, name: "Mohan", age: 35, degree: "B.Tech", isActive: true}, {id: 4, name: "Mohan", age: 40, degree: "B.Tech"}]

// const copyWithinStudents = students.copyWithin(1, 3);
// console.log("Copy Within Students: ", copyWithinStudents); // [{id: 1, name: "John", age: 30, degree: "B.E", isActive: true}, {id: 4, name: "Mohan", age: 40, degree: "B.Tech"}, {id: 3, name: "Mohan", age: 35, degree: "B.Tech", isActive: true}, {id: 4, name: "Mohan", age: 40, degree: "B.Tech"}]

// const fillStudents = students.fill({id: 5, name: "Riya", age: 25, degree: "B.Sc", isActive: true}, 1, 3);
// console.log("Fill Students: ", fillStudents); // [{id: 1, name: "John", age: 30, degree: "B.E", isActive: true}, {id: 5, name: "Riya", age: 25, degree: "B.Sc", isActive: true}, {id: 5, name: "Riya", age: 25, degree: "B.Sc", isActive: true}, {id: 4, name: "Mohan", age: 40, degree: "B.Tech"}]



//----------------------------------------------------------------------
// 9. at() & toAt() & with() - at() is used to get the element at a specific index. toAt() is used to get the element at a specific index from the end. with() is used to replace the element at a specific index.
// Example - 
// const atStudents = students.at(1);
// console.log("At Students: ", atStudents); // {id: 2, name: "Ravi", age: 20, degree: "BCA", isActive: false}

// const toAtStudents = students.toAt(1);
// console.log("To At Students: ", toAtStudents); // {id: 2, name: "Ravi", age: 20, degree: "BCA", isActive: false}

// const withStudents = students.with(1, {id: 5, name: "Riya", age: 25, degree: "B.Sc", isActive: true});
// console.log("With Students: ", withStudents); // [{id: 1, name: "John", age: 30, degree: "B.E", isActive: true}, {id: 5, name: "Riya", age: 25, degree: "B.Sc", isActive: true}, {id: 3, name: "Mohan", age: 35, degree: "B.Tech", isActive: true}, {id: 4, name: "Mohan", age: 40, degree: "B.Tech"}]




//----------------------------------------------------------------------
// 10. flat() & flatMap() - flat() is used to flatten the array. flatMap() is used to flatten the array and map it to a new array.
// Example - 
// const flatStudents = students.flat();
// console.log("Flat Students: ", flatStudents); // [{id: 1, name: "John", age: 30, degree: "B.E", isActive: true}, {id: 2, name: "Ravi", age: 20, degree: "BCA", isActive: false}, {id: 3, name: "Mohan", age: 35, degree: "B.Tech", isActive: true}, {id: 4, name: "Mohan", age: 40, degree: "B.Tech"}]

// const flatMapStudents = students.flatMap((student: Student) => student.name);
// console.log("Flat Map Students: ", flatMapStudents); // ["John", "Ravi", "Mohan", "Mohan"]



// *****************************************************************************************//
// *****************************************************************************************//