// - Clone array & spread operator.

// clone : Duplicate
// clone : it's means  not copy

//Copy
// var arr1 = [1,2,3];
// var arr2 = arr1;
// console.log("Before :");
// console.log("Value of Arr1 : ",arr1);
// console.log("Value of Arr2 : ",arr2);
// arr1.push(100);
// arr2.push(2000);
// console.log("After : ");
// console.log("Value of Arr1 : ",arr1);
// console.log("Value of Arr2 : ",arr2);



// 1) using concat()
// var arr1 = [1,2,3];
// var arr2 = arr1.concat("zafar",5000);
// console.log("Before :");
// console.log("Value of Arr1 : ",arr1);
// console.log("Value of Arr2 : ",arr2);
// arr1.push(100);
// // arr2.push(2000);
// console.log("After : ");
// console.log("Value of Arr1 : ",arr1);
// console.log("Value of Arr2 : ",arr2);


// 2) using slice() :
// var arr1 = [1,2,3];
// var arr2 = arr1.slice(1,2);
// console.log("Before :");
// console.log("Value of Arr1 : ",arr1);
// console.log("Value of Arr2 : ",arr2);
// // arr1.push(100);
// arr2.push(2000);
// console.log("After : ");
// console.log("Value of Arr1 : ",arr1);
// console.log("Value of Arr2 : ",arr2);


// 3) spread Operator :  ...
// var arr1 = [1,2,3];
// var arr2 = [...arr1,500,700];
// console.log("Before :");
// console.log("Value of Arr1 : ",arr1);
// console.log("Value of Arr2 : ",arr2);
// // arr1.push(100);
// // arr2.push(2000);
// console.log("After : ");
// console.log("Value of Arr1 : ",arr1);
// console.log("Value of Arr2 : ",arr2);


// var Arr = [..."1234567890"];
// console.log(Arr);


////////////////////////////////////////////////////
var Arr = [11,12,13,14,15];
//    - For loop.
// for (let i = 0; i < Arr.length; i++) {
//     console.log("index:",i,"Values:",Arr[i]);
// }

//    - While loop in array.
// var i = 0;
// while (i<Arr.length) {
//     console.log("index:",i,"Values:",Arr[i]);
//     i++;
// }

//    - For of loop.
// only values
// for (const value of Arr) {
//     console.log(value);
// }

//    - For in loop.
//value with index 
// for (const i in Arr) {
//     console.log("index:",i,"Values:",Arr[i]);
// }

// foreach loop : 
Arr.forEach(value => {
    console.log(value);
});


/////////////////////////////////////////////////////
//    - Array destructuring.
//    - use const for creating arrays.



/////////////////////////

// Basic Array Operations
// Create an Array:

// Create an array of your favorite fruits and log it to the console.
// -------------------------------------------
// Access Elements:

// Given the array let colors = ["red", "green", "blue", "yellow"];, log the first and last elements.
// -------------------------------------------
// Add and Remove Elements:

// Add a new color to the end of the colors array.
// Remove the first element from the colors array.
// Add a new color to the beginning of the colors array.
// Remove the last element from the colors array.
// -------------------------------------------
// Find the Length:

// Log the length of the colors array.
// -------------------------------------------
// All for Loops
// For Loop:

// Write a for loop to iterate over the colors array and log each color to the console.
// -------------------------------------------
// For...of Loop:

// Write a for...of loop to iterate over the colors array and log each color to the console.
// -------------------------------------------
// ForEach Loop:

// Use the forEach method to iterate over the colors array and log each color to the console.
// -------------------------------------------
// Cloning Arrays
// Shallow Copy using Slice:

// Create a shallow copy of the colors array using the slice method.
// -------------------------------------------
// Shallow Copy using Spread Operator:

// Create a shallow copy of the colors array using the spread operator.
// -------------------------------------------
// Concat Method:

// Create a new array by concatenating the colors array with another array of additional colors.