// => Arrays in JavaScript :-

//    - Intro to arrays.
// - Collection of Multiple Data with same or different Datatype.

// var Arr = [];
// console.log(Arr);
// console.log(typeof Arr);


// var Arr2 = [1,2,3,4,5];
// var Arr2 = ["Zafar","Royal","Techno"];
// var Arr2 = [1,2,3,"Zafar","Royal",true];

// console.log(Arr2);
// console.log(typeof Arr2);

/////////////////////////
//index and length : 


// var Arr = ["Zafar","Royal",1000,true,"Extra",1234,"ABC","Javascript"];
// //index       0       1      2    3     4

// //How to Print Array 
// console.log(Arr);

// //How to Print Single Array's Value
// console.log(Arr[3]);


// //How to Check Array length 
// // property : length
// console.log(Arr.length);

// //How to Print Last Value of Array
// console.log(Arr[Arr.length-1]); //Arr[5-1]  = Arr[4]



//////////////////////////////////////////
// Basic Method of Array :
//    - Push pop shift unshift.

// var Arr = [11,12,13,14,15];
// console.log(Arr);


// 1) push()  : add new Value  at the last index
// retun new length

// Arr.push(100); // for single Value
// var ans = Arr.push(100,200,300); // for Multiple Value
// console.log(Arr);

// 2) pop() : remove value from the Last Index 
 //remove only one value at a single time
// return a deleted value

// Arr.pop(); 
// var ans =  Arr.pop(); 
// console.log(Arr);
// console.log(ans);


// 3) shift() : remove value from the First Index
// return a deleted value
// Arr.shift();
// var ans = Arr.shift();
// console.log(Arr);

// 4) unshift() : add new Value  at the Starting index
// retun new length

// Arr.unshift(100);
// var ans = Arr.unshift(100,200,300);
// console.log(Arr);
// console.log(ans);
///////////////////////////////
// 1) Create an Array with diffrent Data type and print All values.
// 2) Add new Element last postion using push and print an Array.
// 3) Add new Element starting position using unshft and print an array.
// 4) remove 2 values starting and ending index
////////////////
//    - Primitive vs reference data types.
// Primitive :
//1) number 
//2) string 
//3) boolean

//reference : 
// 1) object 
// 2) Set 
// 3) Map 

var n1 = 12;
var n2 = n1;
console.log("Before :");
console.log("Value of N1 : ",n1);
console.log("Value of N2 : ",n2);
n1++;
console.log("After : ");
console.log("Value of N1 : ",n1);
console.log("Value of N2 : ",n2);


var arr1 = [1,2,3];
var arr2 = arr1;
console.log("Before :");
console.log("Value of Arr1 : ",arr1);
console.log("Value of Arr2 : ",arr2);
arr1.push(100);
arr2.push(2000);
console.log("After : ");
console.log("Value of Arr1 : ",arr1);
console.log("Value of Arr2 : ",arr2);












/////////////////////////////
//    - Clone array & spread operator.
//    - For loop.
//    - use const for creating arrays.
//    - While loop in array.
//    - For of loop.
//    - For in loop.
//    - Array destructuring.