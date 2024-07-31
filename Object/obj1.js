// - Intro to objects.
// object is a Collection of Multiple Properties and Methods.
// - key and value  pair           property 
// - Method


//How to Create Simple Object : 
// -using Object Literal  : {}
// var obj = {};
// console.log(obj);
// console.log(typeof obj);


/Soon......./
//  using Object Constructor
//  using Object.create()
//  using Object.assign()
//  using prototype base Function Constructor 

/////////////////////////
// var obj = {
//     //keys +  value     = property
//     fname : "Raj",
//     lname : "Patel",
//     Age : 12
// };

//How  to Access Full Object
// console.log(obj);


//How to Access Property Value : 
// 1) Dot Notation  :    objectname.propertyname
// console.log(obj.fname);
// 2) Bracket Notation   objectname["propertyname"]
// console.log(obj['lname']);
// console.log(obj["lname"]);
// console.log(obj[`lname`]);


//How to Modify/Change Property Value : 
// 1) Dot Notation  :    objectname.propertyname
// obj.fname = "Ajay";
// console.log(obj);
// // 2) Bracket Notation   objectname["propertyname"]
// obj["Age"] = 30;
// console.log(obj);


//How to Add new Property : 
// 1) Dot Notation  :    objectname.propertyname
// obj.Gender = "Male";
// console.log(obj);

// 2) Bracket Notation   objectname["propertyname"]
// obj['Hobby'] = "sleeping";
// console.log(obj);


//How to Delete Property : 
// 1) Dot Notation  :    objectname.propertyname
// delete obj.fname;
// console.log(obj);

// 2) Bracket Notation   objectname["propertyname"]
// delete obj['Age'];
// console.log(obj);


//Not Possible 
// delete obj;
// console.log(obj);


/////////////////////////////////////////////////////////////////////
// - Iterate objects.
// var obj = {
//     fname :"Raj",
//     lname : "Shah",
//     Age : 12,
//     Gender : "Male",
//     Address : "GNR"
// }
// console.log(obj);

//1) Don't Use basic For Loop
// for (let i = 0; i < array.length; i++) {
// }

//2) Don't Use while Loop
// while (condition) { 
// }

//3) Don't Use do-while Loop
// do {
// } while (condition);

//4) Don't Use foreach Loop
// foreach loop   : Array

//4) Don't Use for-of Loop
// for of loop 
// for (const iterator of obj) {
// }



// 1) Workable  
// for in loop 
// for (const key in obj) {
        //not working
    //    console.log(key,obj.key);
        // console.log(key,obj[key]);
// }


/////////////////////////////////////
// - Dot vs Bracket Notation.
// var obj = {
//     'first name' :"Raj",
//     lname : "Shah",
//     1 : 12,
//     Gender : "Male",
//     true : true
// }
// console.log(obj);

// // console.log(obj.'first name');
// console.log(obj["first name"]);



// for (const key in obj) {
//         console.log(key,typeof key,"   ||    ",obj[key],typeof obj[key]);
// }

/////////////////////////////////
// - Computed properties.    []
// var key1 = "email";
// var key2 = "fname";

// var value1 = "royal@gmail.com";
// var value2 = "Ajay";

// var obj = {
//     [key1] : value1,
//     [key2] : value2
// };

// console.log(obj);



////////////////////////////////////////////////////
// - Spread operator in objects.
// - Object Destructuring.
// - Objects inside Array.
// - Nested Destructuring.




// high level ,programing language ,interpreted , Object based ,prototype based programing Language