// => More useful things :-
//    - Iterables.  
//1. Index 
//2. for..of
// var Arr = [11,12,13,14,15,16];
// // console.log(Arr);
// //Index
// // console.log(Arr[3]);
// for (const element of Arr){
//     console.log(element);
// }

// var str = "Hello Everyone";
// console.log(str);
// // console.log(str[1]);
// for (const element of str) {
//     console.log(element);
// }

// String and Arrays are Iterables.
// Not Iterables.

// var a = {
//     fname : "Raj",
//     lname : "Shah"
// };

// // console.log(a);
// console.log(a[0]);
// for (const element of a) {
//     console.log(element);
// }
///////////////////////////////////////
//    - Optional chaining.
// var obj = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 23,
//     // Address : {
//     //     city : "GNR",
//     //     // state : "Gujarat",
//     //     nation : "India"
//     // }
// };
// console.log(obj);
// console.log(obj.fname);//Raj
// console.log(obj.gender);// undefined


// console.log(obj.Address);// {.............}
// console.log(obj.Address.city);// GNR

// console.log(obj.Address.state);// undefined
// console.log(obj.Address.state);// error

// console.log(obj?.Address?.state);// undefined

//////////////////////////////////////
//    - Object.assign.
// var obj = {
//     fname : "Raj",
//     lname : "Shah",
//     Age : 23
// };

// var obj2 = {
//     gender : "Male"
// }
// console.log(obj);

//use for create a Shallow copy Object
// var newOne = Object.assign(obj);
// console.log(newOne);


// use for Combine Object
// var newOne = Object.assign(obj,obj2);
// console.log(newOne);


// var newOne = Object.assign(obj,obj2);
// console.log(newOne);

// console.log(obj);
// console.log(obj2);



// var newOne = Object.assign({},obj,obj2);
// console.log(newOne);

// console.log(obj);
// console.log(obj2);

////////////////////////////////
//    - Sets.
//Sets in JavaScript are collections of unique values, meaning no duplicates are allowed.
//  They provide efficient ways to store and manage distinct elements.
//  Sets support operations like adding, deleting, and checking the presence of items, enhancing performance for tasks requiring uniqueness.

var Arr = [11,12,13,14,15,11,12,13];
console.log(Arr);
// console.log(Array.isArray(Arr));//true
// console.log(Array.isArray("Zafar"));//false



// How to Create a Empty Set : 
// var mySet = new Set();
// console.log(mySet);

// console.log(typeof mySet); //object

// var mySet = new Set([11,12,13]);

var mySet = new Set(Arr);
console.log(mySet);

// How to Add a New Value : 
// mySet.add(100);
// mySet.add(100,300); //Only Added single Value
// mySet.add(11,300);


// How to Empty Full set.
// mySet.clear();


//How to Delete Specific Value
// mySet.delete(13);

// mySet.delete(13,14);
// console.log(mySet);




// console.log(mySet.entries());
// console.log(mySet.keys());
// console.log(mySet.values());


// Itrate Set Values :
// mySet.forEach(
//     (a)=>{
//         console.log(a*2);
//     }
// );


// console.log(mySet.has(111));

// console.log(mySet.size);
///////////////////////////
// Union of Sets:  
//  {1,2,3,4,5} : {2,3,4,5,6,7,8}
//  {1,2,3,4,5,6,7,8}

// Create two Sets and find their union. Print the resulting Set.

///////////////////////////////////////

// Intersection of Sets:
//  {1,2,3,4,5} : {2,3,4,5,6,7,8}
//  {2,3,4,5}
// Create two Sets and find their intersection. Print the resulting Set.
/////////////////////////////////////
//-----------------------------------
// Difference of Sets:
//  {1,2,3,4,5} : {2,3,4,5,6,7,8}
// {1}

// Create two Sets and find their difference (elements in Set1 that are not in Set2). Print the resulting Set.
/////////////////////////////////////////
// Convert Set to Array:

// Convert a Set back to an array. Print the array.
// {1,2,3} 
// [1,2,3]


///////////////////////////////////////
//    - Maps.
