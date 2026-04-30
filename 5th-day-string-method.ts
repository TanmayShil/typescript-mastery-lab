// *****************************************************************************************//
// *****************************************************************************************//

// String Methods - String methods are built-in functions that can be used to manipulate strings.


//------------------------------------------------------------------------------------------------
// 1. length property - The length property returns the length of a string.
// Example:
// const str:string = "Hello World";
// console.log(str.length);  // 11


//-------------------------------------------------------------------------------------------------
// 2. toUpperCase() and toLowerCase() method - The toUpperCase() method converts a string to uppercase and toLowerCase() method converts a string to lowercase.
// Example:
// const str:string = "Hello World";
// console.log(str.toUpperCase());  // "HELLO WORLD"
// console.log(str.toLowerCase());  // "hello world"



//------------------------------------------------------------------------------------------------
// 3. trim() method - The trim() method removes whitespace from both ends of a string.
// Example:
// const str:string = "   Hello World   ";
// console.log(str.length) //15
// console.log(str.trim());  // "Hello World"
// console.log(str.trim().length)//11




//------------------------------------------------------------------------------------------------
// 4. charAt() method - The charAt() method returns the character at a specified index in a string.
// Example:
// const str:string = "Hello World";
// console.log(str.charAt(0));  // "H"
// console.log(str.charAt(6));  // "W"
// console.log(str.charAt(11)); // ""



// ------------------------------------------------------------------------------------------------
//5.includes() method - The includes() method checks if a string contains another string and returns true or false.
// Example:
// const str:string = "Hello World";
// console.log(str.includes("Hello"));  // true
// console.log(str.includes("World"));  // true
// console.log(str.includes("Bye"));  // false



// ------------------------------------------------------------------------------------------------
// 6. indexOf() method - The indexOf() method returns the index of the first occurrence of a substring in a string. If the substring is not found, it returns -1.
// Example:
// const str:string = "Hello World";
// console.log(str.indexOf("Hello"));  // 0
// console.log(str.indexOf("World"));  // 6
// console.log(str.indexOf("Bye"));  // -1




// ------------------------------------------------------------------------------------------------
// 7. replace() and replaceAll() method - The replace() method replaces a specified value with another value in a string. The replaceAll() method replaces all occurrences of a specified value with another value in a string.
// Example:
// const str:string = "Hello World";
// console.log(str.replace("Hello", "Hi"));  // "Hi World"
// console.log(str.replaceAll("Hello", "Hi"));  // "Hi World"
// console.log(str.replace("lo", "Hi"));  // "Hello World"
// console.log(str.replaceAll("lo", "Hi"));  // "Hi World"



//------------------------------------------------------------------------------------------------
// 8. search() method - The search() method searches a string for a specified value and returns the position of the match.
// Example:
// const str:string = "Hello World";
// console.log(str.search("Hello"));  // 0
// console.log(str.search("World"));  // 6
// console.log(str.search("Bye"));  // -1



//------------------------------------------------------------------------------------------------
// 9. slice() method - The slice() method extracts a section of a string and returns it as a new string.
// Example:
// const str:string = "Hello";
// console.log(str.slice(0, 2));  // "He"
// console.log(str.slice(2));  // "llo"
// console.log(str.slice(0, -1));  // "Hell"


//------------------------------------------------------------------------------------------------
// 10. substring() method - The substring() method extracts a section of a string and returns it as a new string.
// Example:
// const str:string = "Hello";
// console.log(str.substring(0, 2));  // "He"
// console.log(str.substring(2));  // "llo"
// console.log(str.substring(0, -1));  // "Hell"


//******************************************************************************************************
//difference between slice and substring
// slice() method extracts a section of a string and returns it as a new string.
// substring() method extracts a section of a string and returns it as a new string.
// slice() method can take negative values
// substring() method cannot take negative values
//*****************************************************************************************************


//-------------------------------------------------------------------------------------------------
//11. padStart() and padEnd() method - The padStart() method pads a string with another string at the beginning. The padEnd() method pads a string with another string at the end.
// Example:
// const str:string = "Hello";
// console.log(str.padStart(10, "*"));  // "*****Hello"
// console.log(str.padEnd(10, "*"));  // "Hello*****"



//------------------------------------------------------------------------------------------------
// 12. split() method - The split() method splits a string into an array of substrings.
// Example:
// const str:string = "Hello World";
// console.log(str.split(" "));  // ["Hello", "World"]
// console.log(str.split(""));  // ["H", "e", "l", "l", "o", " ", "W", "o", "r", "l", "d"]



//------------------------------------------------------------------------------------------------
// 13. repeat() method - The repeat() method returns a new string containing a specified number of copies of the string.
// Example:
// const str:string = "Hello";
// console.log(str.repeat(3));  // "HelloHelloHello"


//------------------------------------------------------------------------------------------------
// 14. concat() method - The concat() method is used to join two or more strings.
// Example:
// const str1:string = "Hello";
// const str2:string = "World";
// console.log(str1.concat(str2));  // "HelloWorld"


//------------------------------------------------------------------------------------------------
// 15. at() method - The at() method returns the character at a specified index in a string.
// Example:
// const str:string = "Hello";
// console.log(str.at(0));  // "H"
// console.log(str.at(2));  // "l"
// console.log(str.at(-1)); // "o"



// *****************************************************************************************//
// *****************************************************************************************//
