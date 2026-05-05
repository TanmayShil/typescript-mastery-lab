// *****************************************************************************************//
// *****************************************************************************************//


// Number Methods in TypeScript:
// There are 22 Built-in methods in Number:- 

// 1. Number.isFinite(value)
// The isFinite() method determines whether the passed value is a finite number.


// 2. Number.isInteger(value)
// The isInteger() method determines whether the passed value is an integer.


// 3. Number.isNaN(value)
// The isNaN() method determines whether the passed value is NaN.


// 4. Number.isSafeInteger(value)
// The isSafeInteger() method determines whether the passed value is a safe integer.

// 5. Number.parseFloat(string)
// The parseFloat() method parses a string argument and returns a floating-point number.

// 6. Number.parseInt(string)
// The parseInt() method parses a string argument and returns an integer.

// 7. Number.prototype.toFixed(digits)
// The toFixed() method returns a string representing the given number using fixed-point notation.


// 8. Number.prototype.toString()
// The toString() method returns a string representing the number.


// 9. Number.MAX_VALUE
// The MAX_VALUE property returns the maximum value of a number.

// 10. Number.MIN_VALUE
// The MIN_VALUE property returns the minimum value of a number.

// 11. Number.NaN
// The NaN property returns the Not-a-Number value.

// 12. Number.POSITIVE_INFINITY
// The POSITIVE_INFINITY property returns the positive infinity value.

// 13. Number.NEGATIVE_INFINITY
// The NEGATIVE_INFINITY property returns the negative infinity value.



// -------------------------------------------------------xxxxxxxxxxxxx---------------------------------------------------


// Math Methods in TypeScript:

// 1. Math.abs(x)
// The abs() method returns the absolute value of x.
// Example - 
// const number = -10;
// const absoluteNumber = Math.abs(number);
// console.log(absoluteNumber); // 10

// 2. Math.asin(x)
// The asin() method returns the arcsine of x in radians.
// Example -
// const number = 0.5;
// const arcsineNumber = Math.asin(number);
// console.log(arcsineNumber); // 0.5235987755982989

// 3. Math.asinh(x)
// The asinh() method returns the hyperbolic arcsine of x in radians.
// Example - 
// const number = 1;
// const hyperbolicArcsineNumber = Math.asinh(number);
// console.log(hyperbolicArcsineNumber); // 0.881373587019543


// 4. Math.ceil(x)
// The ceil() method returns the smallest integer greater than or equal to x.
// Example -
// const number = 10.5;
// const ceilingNumber = Math.ceil(number);
// console.log(ceilingNumber); // 11

// 4. Math.round(x)
// The round() method returns the nearest integer to x.
// Example -
// const number = 10.5;
// const roundNumber = Math.round(number);
// console.log(roundNumber); // 11

// // difference between Math.ceil() and Math.round()
// const number = 10.5;
// const ceilingNumber = Math.ceil(number);
// const floorNumber = Math.floor(number);
// const roundNumber = Math.round(number);
// console.log(ceilingNumber); // 11
// console.log(floorNumber); // 10
// console.log(roundNumber); // 11

// 5. Math.floor(x)
// The floor() method returns the largest integer less than or equal to x.
// Example -
// const number = 10.5;
// const floorNumber = Math.floor(number);
// console.log(floorNumber); // 10

// 6. Math.fround(x)
// The fround() method returns the nearest single-precision floating-point value to x.
// Example -
// const number = 10.5;
// const froundNumber = Math.fround(number);
// console.log(froundNumber); // 10

// //difference between Math.floor() and Math.fround()
// const number = 10.5;
// const floorNumber = Math.floor(number); // nearest smallest integer
// const froundNumber = Math.fround(number); // nearest single-precision floating-point value
// console.log(floorNumber); // 10
// console.log(froundNumber); // 10


// 7. Math.max(...values)
// The max() method returns the largest of the given numbers.
// Example -
// const number = 10.5;
// const maxNumber = Math.max(number);
// console.log(maxNumber); // 10

// 8. Math.min(...values)
// The min() method returns the smallest of the given numbers.
// Example -
// const number = 10.5;
// const minNumber = Math.min(number);
// console.log(minNumber); // 10

// 9. Math.pow(x, y)
// The pow() method returns x to the power of y.
// Example -
// const number = 10.5;
// const powNumber = Math.pow(number);
// console.log(powNumber); // 10

// 10. Math.random()
// The random() method returns a pseudo-random number between 0 and 1.
// Example -
// const randomNumber = Math.random();
// console.log(randomNumber); // 0.xxxxxxx

// 11. Math.sign(x)
// The sign() method returns the sign of x.
// Example -
// const number = 10.5;
// const signNumber = Math.sign(number);
// console.log(signNumber); // 10

// 12. Math.sin(x)
// The sin() method returns the sine of x in radians.
// Example -
// const number = 10.5;
// const sinNumber = Math.sin(number);
// console.log(sinNumber); // 0.5235987755982989

// 13. Math.cos(x)
// The cos() method returns the cosine of x in radians.
// Example -
// const number = 10.5;
// const cosNumber = Math.cos(number);
// console.log(cosNumber); // 0.5235987755982989

// 14. Math.tan(x)
// The tan() method returns the tangent of x in radians.
// Example -
// const number = 10.5;
// const tanNumber = Math.tan(number);
// console.log(tanNumber); // 0.5235987755982989


// 15. Math.sqrt(x)
// The sqrt() method returns the square root of x.
// Example -
// const number = 10.5;
// const sqrtNumber = Math.sqrt(number);
// console.log(sqrtNumber); // 10

//Problem Set:-

// 1. Write a function that takes a radius and returns the area of the circle.
// Solution:-
// const radius:number = 10.5;
// const area:number = Math.PI * radius * radius;
// console.log(area); // 10.5


// 2. Write a function that takes a number and returns the square root of the number.
// Solution:-
// const number:number = 10.5;
// const squareRootNumber:number = Math.sqrt(number);
// console.log(squareRootNumber); // 10.5

// 3. Write a function that takes a number and returns the cube root of the number.
// Solution:-
// const number:number = 10.5;
// const cubeRootNumber:number = Math.cbrt(number);
// console.log(cubeRootNumber); // 10.5

// 4. Write a function that takes a number and returns the power of 2.
// Solution:-
// const number:number = 10.5;
// const powerOfTwo:number = Math.pow(number, 2);
// console.log(powerOfTwo); // 10.5

// 5. Write a function that takes a number and returns the floor of the number.
// Solution:-
// const number:number = 10.5;
// const floorNumber:number = Math.floor(number);
// console.log(floorNumber); // 10

// 6. Write a function that takes a number and returns the ceil of the number.
// Solution:-
// const number:number = 10.5;
// const ceilNumber:number = Math.ceil(number);
// console.log(ceilNumber); // 11

// 7. Write a function that takes a number and returns the round of the number.
// Solution:-
// const number:number = 10.5;
// const roundNumber:number = Math.round(number);
// console.log(roundNumber); // 11

// 8. Write a function that takes a number and returns the sign of the number.
// Solution:-
// const number:number = 10.5;
// const signNumber:number = Math.sign(number);
// console.log(signNumber); // 10

// 9. Write a function that takes a number and returns the absolute value of the number.
// Solution:-
// const number:number = 10.5;
// const absoluteNumber:number = Math.abs(number);
// console.log(absoluteNumber); // 10

// 10. Write a function that takes a number and returns the minimum value among the numbers.
// Solution:-
// const number:number = 10.5;
// const minNumber:number = Math.min(number);
// console.log(minNumber); // 10

// 11. Write a function that takes a number and returns the maximum value among the numbers.
// Solution:-
// const number:number = 10.5;
// const maxNumber:number = Math.max(number);
// console.log(maxNumber); // 10

// 12. Write a function that takes a number and returns the random number.
// Solution:-
// const number:number = 10.5;
// const randomNumber:number = Math.random();
// console.log(randomNumber); // 10

// 13. Write a function that takes a number and returns the sine of the number in radians.
// Solution:-
// const number:number = 10.5;
// const sinNumber:number = Math.sin(number);
// console.log(sinNumber); // 10

// 14. Write a function that takes a number and returns the cosine of the number in radians.
// Solution:-
// const number:number = 10.5;
// const cosNumber:number = Math.cos(number);
// console.log(cosNumber); // 10


// -------------------------------------------------------xxxxxxxxxxxxx---------------------------------------------------

// Date Methods in TypeScript :-

// 1. Date()
// The Date() method returns the current date and time.
// Example -
// const date = new Date();
// console.log(date); // 2022-01-01T00:00:00.000Z

// 2. Date.now()
// The Date.now() method returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
// Example -
// const date = Date.now();
// console.log(date); // 1641032400000

// 3. Date.parse(dateString)
// The Date.parse() method parses a date string and returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
// Example -
// const date = Date.parse("2022-01-01T00:00:00.000Z");
// console.log(date); // 1641032400000

// 4. Date.UTC(year, month, day, hour, minute, second, millisecond)
// The Date.UTC() method returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.
// Example -
// const date = Date.UTC(2022, 0, 1, 0, 0, 0, 0);
// console.log(date); // 1641032400000

// 5. getDate()
// The getDate() method returns the day of the month.
// Example -
// const date = new Date();
// console.log(date.getDate()); // 1

// 6. getDay()
// The getDay() method returns the day of the week.
// Example -
// const date = new Date();
// console.log(date.getDay()); // 1

// 7. getFullYear()
// The getFullYear() method returns the full year.
// Example -
// const date = new Date();
// console.log(date.getFullYear()); // 2022

// 8. getHours()
// The getHours() method returns the hours.
// Example -
// const date = new Date();
// console.log(date.getHours()); // 0

// 9. getMinutes()
// The getMinutes() method returns the minutes.
// Example -
// const date = new Date();
// console.log(date.getMinutes()); // 0

// 10. getSeconds()
// The getSeconds() method returns the seconds.
// Example -
// const date = new Date();
// console.log(date.getSeconds()); // 0

// 11. getMilliseconds()
// The getMilliseconds() method returns the milliseconds.
// Example -
// const date = new Date();
// console.log(date.getMilliseconds()); // 0

// 12. getTime()
// The getTime() method returns the time in milliseconds.
// Example -
// const date = new Date();
// console.log(date.getTime()); // 1641032400000

// 13. setDate()
// The setDate() method sets the day of the month.
// Example -
// const date = new Date();
// date.setDate(1);
// console.log(date); // 2022-01-01T00:00:00.000Z

// 14. setDay()
// The setDay() method sets the day of the week.
// Example -
// const date = new Date();
// date.setDay(1);
// console.log(date); // 2022-01-01T00:00:00.000Z

// 15. setFullYear()
// The setFullYear() method sets the full year.
// Example -
// const date = new Date();
// date.setFullYear(2022);
// console.log(date); // 2022-01-01T00:00:00.000Z

// 16. setHours()
// The setHours() method sets the hours.
// Example -
// const date = new Date();
// date.setHours(0);
// console.log(date); // 2022-01-01T00:00:00.000Z

// 17. setMinutes()
// The setMinutes() method sets the minutes.
// Example -
// const date = new Date();
// date.setMinutes(0);
// console.log(date); // 2022-01-01T00:00:00.000Z

// 18. setSeconds()
// The setSeconds() method sets the seconds.
// Example -
// const date = new Date();
// date.setSeconds(0);
// console.log(date); // 2022-01-01T00:00:00.000Z

// 19. setMilliseconds()
// The setMilliseconds() method sets the milliseconds.
// Example -
// const date = new Date();
// date.setMilliseconds(0);
// console.log(date); // 2022-01-01T00:00:00.000Z

// 20. setTime()
// The setTime() method sets the time in milliseconds.
// Example -
// const date = new Date();
// date.setTime(1641032400000);
// console.log(date); // 2022-01-01T00:00:00.000Z

// Problem Set:-

// 1. Write a function that takes a date string and returns the date in the format "DD-MM-YYYY".
// Solution:-
// const dateString:string = "2022-01-01T00:00:00.000Z";
// const date:Date = new Date(dateString);
// const formattedDate:string = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
// console.log(formattedDate); // 2022-01-01

// 2. Write a function that takes a date and returns the day of the week.
// Solution:-
// const date:Date = new Date();
// const dayOfWeek:string = date.toLocaleString('en-US', { weekday: 'long' });
// console.log(dayOfWeek); // Monday

// 3. Write a function that takes a date and returns the month name.
// Solution:-
// const date:Date = new Date();
// const monthName:string = date.toLocaleString('en-US', { month: 'long' });
// console.log(monthName); // January

// 4. Write a function that takes a date and returns the year.
// Solution:-
// const date:Date = new Date();
// const year:number = date.getFullYear();
// console.log(year); // 2022

// 5. Write a function that takes a date and returns the date in the format "DD-MM-YYYY HH:MM:SS".
// Solution:-
// const date:Date = new Date();
// const formattedDate:string = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
// console.log(formattedDate); // 2022-01-01 00:00:00




// *****************************************************************************************//
// *****************************************************************************************//






