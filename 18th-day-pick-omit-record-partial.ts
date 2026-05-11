// *****************************************************************************************//
// *****************************************************************************************//

// //Utility Types:-
// Utility types are predefined type transformations provided by TypeScript. They allow you to create new types based on existing ones, making it easier to work with complex type definitions. These utilities are especially useful in large codebases where reusing and modifying types is common.

// // Built-In Utility Types
// Let’s dive into some of the most commonly used utility types and see how they can be applied in a real-world scenario:  


//---------------------------------------------------------------------------------//
// Pick<T, K>
// The Pick utility type is used to create a new type by picking a set of properties from an existing type.

//Description:-
// 1. It is used when we want to create a new type by picking some properties from an existing type.
// 2. We can pass an array of properties to pick.
// 3. It return a new type with only the specified properties.
// 4. If T is an object type, Pick<T, K> returns a new object type with only the specified properties.
// 5. If T is a union type, Pick<T, K> returns a new union type with only the specified properties.
// 6. If K is a union type, Pick<T, K> returns a new type with only the specified properties.
// 7. If K is an array of properties, Pick<T, K> returns a new type with only the specified properties.
// 8. If K is a tuple of properties, Pick<T, K> returns a new type with only the specified properties.
// 9. If K is an empty array, Pick<T, K> returns a new type with all properties of T.
// 10. If K is an array of properties, Pick<T, K> returns a new type with all properties of T except the specified properties.

//syntax: 
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };

// Example:
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// }

// // Create a new type with only id and name
// type UserName = Pick<User, 'id' | 'name'>;

// const user: UserName = {
//   id: 1,
//   name: 'Alice'
// };
// console.log(user);

//---------------------------------------------------------------------------------
// Omit<T, K>
// The Omit utility type is used to create a new type by excluding a set of properties from an existing type.

//Description:-
// 1. It is used when we want to create a new type by excluding some properties from an existing type.
// 2. We can pass an array of properties to omit.
// 3. It return a new type with only the specified properties.
// 4. If T is an object type, Omit<T, K> returns a new object type with only the specified properties.
// 5. If T is a union type, Omit<T, K> returns a new union type with only the specified properties.
// 6. If K is a union type, Omit<T, K> returns a new type with only the specified properties.
// 7. If K is an array of properties, Omit<T, K> returns a new type with only the specified properties.
// 8. If K is a tuple of properties, Omit<T, K> returns a new type with only the specified properties.
// 9. If K is an empty array, Omit<T, K> returns a new type with all properties of T.
// 10. If K is an array of properties, Omit<T, K> returns a new type with all properties of T except the specified properties.

//syntax: 
// type Omit<T, K extends keyof T> = {
//   [P in Exclude<keyof T, K>]: T[P];
// };

// Example:
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// }

// // Create a new type by excluding id and name
// type UserWithoutIdAndName = Omit<User, 'id' | 'name'>;

// const user: UserWithoutIdAndName = {
//   age: 30,
//   email: 'alice@example.com'
// };
// console.log(user);

//---------------------------------------------------------------------------------
//Difference between Pick and Omit:
// 1. Pick<T, K> - picks a set of properties from T
// 2. Omit<T, K> - omits a set of properties from T
// 3. Pick<T, K> is the opposite of Omit<T, K>
// 4. Pick<T, K> returns a new type with only the specified properties.
// 5. Omit<T, K> returns a new type with only the specified properties.


//---------------------------------------------------------------------------------
// Record<K, T>
// The Record utility type is used to create a new type by mapping the keys of an existing type to a new type.

// Description:-
// 1. It is used to create a new type by mapping the keys of an existing type to a new type.
// 2. We can pass an array of keys to record.
// 3. It return a new type with only the specified keys.
// 4. If T is an object type, Record<T, K> returns a new object type with only the specified keys.
// 5. If T is a union type, Record<T, K> returns a new union type with only the specified keys.
// 6. If K is a union type, Record<T, K> returns a new type with only the specified keys.
// 7. If K is an array of keys, Record<T, K> returns a new type with only the specified keys.
// 8. If K is a tuple of keys, Record<T, K> returns a new type with only the specified keys.
// 9. If K is an empty array, Record<T, K> returns a new type with all keys of T.
// 10. If K is an array of keys, Record<T, K> returns a new type with all keys of T except the specified keys.

// syntax: 
// type Record<K extends string | number | symbol, T> = {
//   [P in K]: T;
// };

// Example:
// const grades: Record<string, number> = {
//   'Alice': 90,
//   'Bob': 85,
//   'Charlie': 95
// };
// console.log(grades);

//---------------------------------------------------------------------------------
// Partial<T>
// The Partial utility type is used to create a new type by making all properties of an existing type optional.

// Description:-
// 1. It is used to create a new type by making all properties of an existing type optional.
// 2. We can pass an array of properties to partial.
// 3. It return a new type with only the specified properties.
// 4. If T is an object type, Partial<T> returns a new object type with only the specified properties.
// 5. If T is a union type, Partial<T> returns a new union type with only the specified properties.
// 6. If K is a union type, Partial<T> returns a new type with only the specified properties.
// 7. If K is an array of properties, Partial<T> returns a new type with only the specified properties.
// 8. If K is a tuple of properties, Partial<T> returns a new type with only the specified properties.
// 9. If K is an empty array, Partial<T> returns a new type with all properties of T.
// 10. If K is an array of properties, Partial<T> returns a new type with all properties of T except the specified properties.

// syntax: 
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };

// Example:
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// }

// // Create a new type by making all properties optional
// type PartialUser = Partial<User>;

// const user: PartialUser = {
//   name: 'Alice'
// };
// console.log(user);


//---------------------------------------------------------------------------------
//Readonly<Type>
// The Readonly utility type is used to create a new type by making all properties of an existing type readonly.

// Description:-
// 1. It is used to create a new type by making all properties of an existing type readonly.
// 2. We can pass an array of properties to readonly.
// 3. It return a new type with only the specified properties.
// 4. If T is an object type, Readonly<T> returns a new object type with only the specified properties.
// 5. If T is a union type, Readonly<T> returns a new union type with only the specified properties.
// 6. If K is a union type, Readonly<T> returns a new type with only the specified properties.
// 7. If K is an array of properties, Readonly<T> returns a new type with only the specified properties.
// 8. If K is a tuple of properties, Readonly<T> returns a new type with only the specified properties.
// 9. If K is an empty array, Readonly<T> returns a new type with all properties of T.
// 10. If K is an array of properties, Readonly<T> returns a new type with all properties of T except the specified properties.

// syntax: 
// type Readonly<T> = {
//   readonly [P in keyof T]: T[P];
// };

// Example:
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// }

// // Create a new type by making all properties readonly
// type ReadonlyUser = Readonly<User>;

// const user: ReadonlyUser = {
//   id: 1,
//   name: 'Alice',
//   age: 30,
//   email: [EMAIL_ADDRESS]'
// };
// console.log(user);



//---------------------------------------------------------------------------------
//Mutable<Type>
// The Mutable utility type is used to create a new type by making all properties of an existing type mutable.

// Description:-
// 1. It is used to create a new type by making all properties of an existing type mutable.
// 2. We can pass an array of properties to mutable.
// 3. It return a new type with only the specified properties.
// 4. If T is an object type, Mutable<T> returns a new object type with only the specified properties.
// 5. If T is a union type, Mutable<T> returns a new union type with only the specified properties.
// 6. If K is a union type, Mutable<T> returns a new type with only the specified properties.
// 7. If K is an array of properties, Mutable<T> returns a new type with only the specified properties.
// 8. If K is a tuple of properties, Mutable<T> returns a new type with only the specified properties.
// 9. If K is an empty array, Mutable<T> returns a new type with all properties of T.
// 10. If K is an array of properties, Mutable<T> returns a new type with all properties of T except the specified properties.

// syntax: 
// type Mutable<T> = {
//   -readonly [P in keyof T]: T[P];
// };

// Example:
// interface User {
//   id: number;
//   name: string;
//   age: number;
//   email: string;
// }

// // Create a new type by making all properties mutable
// type MutableUser = Mutable<User>;

// const user: MutableUser = {
//   id: 1,
//   name: 'Alice',
//   age: 30,
//   email: [EMAIL_ADDRESS]'
// };
// console.log(user);

//---------------------------------------------------------------------------------
// Problem Set:-

// // 1. write a function that takes an array of strings and returns an array of strings with the first letter of each string capitalized.

// function capitalizeFirstLetter<T extends string>(arr: T[]): T[] {
//   return arr.map((str: T) => {
//     return str.charAt(0).toUpperCase() + str.slice(1) as T;
//   });
// }

// console.log(capitalizeFirstLetter(["hello", "world", "typescript"]));// ["Hello", "World", "Typescript"]


//-----------------------------------------------------------------------------------
// // 2. Create a function that takes an object and a list of keys, and returns a new object with only the specified keys.

// function pick<T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
//   const result = {} as Pick<T, K>;
//   keys.forEach((key) => {
//     result[key] = obj[key];
//   });
//   return result;
// }

// console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"]));// { a: 1, c: 3 }


//-----------------------------------------------------------------------------------
// // 3. Create a function that takes an object and a list of keys, and returns a new object with all keys except the specified keys.

// function omit<T, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
//   const result = {} as Omit<T, K>;
//   keys.forEach((key) => {
//     result[key] = obj[key];
//   });
//   return result;
// }

// console.log(omit({ a: 1, b: 2, c: 3 }, ["a", "c"]));// { a: 1, c: 3 }


//-----------------------------------------------------------------------------------
// // 4. Create a function that takes an object and a list of keys, and returns a new object with all properties optional.

// function partial<T>(obj: T): Partial<T> {
//   const result = {} as Partial<T>;
//   for (const key in obj) {
//     result[key] = obj[key];
//   }
//   return result;
// }

// console.log(partial({ a: 1, b: 2, c: 3 }));// { a: 1, b: 2, c: 3 }


//-----------------------------------------------------------------------------------
// // 5. Create a function that takes an object and a list of keys, and returns a new object with all properties required.

// function required<T>(obj: T): Required<T> {
//   const result = {} as Required<T>;
//   for (const key in obj) {
//     result[key] = obj[key];
//   }
//   return result;
// }

// const required = <T>(obj: T): Required<T> => {
//   return obj;
// };
// console.log(required({ a: 1, b: 2, c: 3 }));// { a: 1, b: 2, c: 3 }


//-----------------------------------------------------------------------------------
// // 6. Create a function that takes an object and a list of keys, and returns a new object with all properties readonly.

// function readonly<T>(obj: T): Readonly<T> {
//   const result = {} as Readonly<T>;
//   for (const key in obj) {
//     result[key] = obj[key];
//   }
//   return result;
// }

// console.log(readonly({ a: 1, b: 2, c: 3 }));// { a: 1, b: 2, c: 3 }


//-----------------------------------------------------------------------------------
// // 7. Create a function that takes an object and a list of keys, and returns a new object with all properties mutable.

// function mutable<T>(obj: T): Mutable<T> {
//   const result = {} as Mutable<T>;
//   for (const key in obj) {
//     result[key] = obj[key];
//   }
//   return result;
// }

// console.log(mutable({ a: 1, b: 2, c: 3 }));// { a: 1, b: 2, c: 3 }


//-----------------------------------------------------------------------------------
// // 8. Create a function that takes an object and a list of keys, and returns a new object with all properties readonly and mutable.

// function readonlyAndMutable<T>(obj: T): ReadonlyAndMutable<T> {
//   const result = {} as ReadonlyAndMutable<T>;
//   for (const key in obj) {
//     result[key] = obj[key];
//   }
//   return result;
// }

// console.log(readonlyAndMutable({ a: 1, b: 2, c: 3 }));// { a: 1, b: 2, c: 3 }


//-----------------------------------------------------------------------------------
// // 9. Create a function that takes an object and a list of keys, and returns a new object with all properties readonly and mutable.

// function readonlyAndMutable<T>(obj: T): ReadonlyAndMutable<T> {
//   const result = {} as ReadonlyAndMutable<T>;
//   for (const key in obj) {
//     result[key] = obj[key];
//   }
//   return result;
// }

// console.log(readonlyAndMutable({ a: 1, b: 2, c: 3 }));// { a: 1, b: 2, c: 3 }


// *****************************************************************************************//
// *****************************************************************************************//

