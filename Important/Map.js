// Map :
// The JavaScript Map object holds key-value pairs and preserves the original insertion order.
// It supports any value, including objects and primitives, as keys or values. This feature allows for efficient data retrieval and manipulation, making Map a versatile tool for managing collections.


// var obj = {
//     fname : "Raj",
//     1 : 12345
// };

// console.log(obj);

// for (const key in obj) {
//     console.log(key,typeof key);
// }

// How to Create a Map : 
// var myMap = new Map();

// // how to Add new Key Value Pair : 
// myMap.set("Fname","Raj");
// myMap.set(1,1234);



// myMap.forEach(
//     (value,key) => {
//     console.log(value,key,typeof key);
// });

// console.log(myMap.get(1));

// console.log(myMap.entries());
// console.log(myMap.keys());
// console.log(myMap.values());


// console.log(myMap.has("name"));
// console.log(myMap);

// myMap.clear();

// myMap.delete(1);

// console.log(myMap.size);

//////////////////////////////////
//////////////////////////
// Create a Map:

// Create a Map and add key-value pairs. Print the Map.
/////////////////////
// Check for Key:

// Given a Map, check if it contains a specific key. Print the result.
/////////////////////

// Remove a Key:

// Remove a key from a Map. Print the Map before and after removal.
/////////////////////

// Convert Array to Map:

// Convert an array of key-value pairs to a Map. Print the Map.


// var Arr = [11,12,13,14,15];
// console.log(Arr);

// var mySet = new Set(Arr);
// console.log(mySet);

// var myMap = new Map();

// for (const value of Arr) {
//     myMap.set(value,value);
// }
// for (const key in Arr) {
//     myMap.set(key,Arr[key]);
// }
// console.log(myMap);
/////////////////////
// Iterate over a Map:

// Iterate over a Map and print each key-value pair.
/////////////////////

// Map Size:

// Find the size of a Map and print it.
/////////////////////

// Clear a Map:

// Clear all entries from a Map. Print the Map before and after clearing.
/////////////////////

// Map from String:

// Create a Map from a string, where each character is a key and its position is the value. Print the Map.
// var str = "Royal";
// console.log(str);
// var myMap = new Map();

// for (const key in str) {
//     myMap.set(str[key],key);
// }
// console.log(myMap);




/////////////////////

// Task 1: Frequency Counter
// Objective: Create a frequency counter using Map and Set.

// Instructions:

// Write a function countFrequencies(arr) that takes an array of strings and returns a Map where the keys are the unique strings from the array, and the values are the counts of how many times each string appears.
// Use a Set to store the unique strings as you iterate through the array.
// After creating the Set, iterate through it and populate the Map with the counts.

///////////////////////////
// Task 2: Student Enrollment System
// Objective: Implement a simple student enrollment system using Map and Set.

// Instructions:

// Create a Map where the key is a student ID (a unique identifier) and the value is an object containing the student's name and a Set of enrolled courses.
// Write functions to:
// Add a student (if the student ID does not already exist).
// Enroll a student in a new course.
// Drop a course for a student.
// List all students enrolled in a particular course.

//////////////////////////////////////////////
// Task 3: Unique Items from Multiple Arrays
// Objective: Find unique items across multiple arrays using Set and Map.

// Instructions:

// Write a function uniqueItemsFromArrays(arrays) that takes an array of arrays and returns a Set of unique items across all the arrays.
// Use a Map to keep track of the frequency of each item while iterating through all the arrays.
// After processing all arrays, convert the Map to a Set to get the unique items.
const arrayOfArrays = [
    [1, 2, 2],
    [3, 4, 5],
    [1, 6, 7],
    [3, 8, 9]
  ];

function uniqueItemsFromArrays(arrays){
    var mySet = new Set();

    for (const element of arrays) {
       for (const v2 of element) {
           mySet.add(v2);
       }
    }
    return mySet;
}
var newSet = uniqueItemsFromArrays(arrayOfArrays);
console.log(newSet);

var myMap = new Map();
newSet.forEach(element => {
    var counter = 0;
    for (const v1 of arrayOfArrays) {
        for (const v2 of v1) {
            if(v2==element)
                counter++;
        }
     }
     myMap.set(element,counter);
});
console.log(myMap);
///////////////////////////////////////
// Task 4: Map of Sets for Grouped Data
// Objective: Use a Map where each key corresponds to a Set of values, to group data based on a criterion.

// Instructions:

// Write a function groupByCategory(items) that takes an array of objects and groups them by a specified category into a Map. Each category key in the Map should have a Set of items belonging to that category.
// Iterate through the items and populate the Map accordingly.