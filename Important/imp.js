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
var obj = {
    fname : "Raj",
    lname : "Shah",
    Age : 23
};

var obj2 = {
    gender : "Male"
}
console.log(obj);

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



var newOne = Object.assign({},obj,obj2);
console.log(newOne);

console.log(obj);
console.log(obj2);





////////////////////////////////
//    - Sets.
//    - Maps.