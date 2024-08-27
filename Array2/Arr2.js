// var Arr = [11,34,12,24,13,10,14,45,15,90,16,60,17];
// console.log(Arr);
// //    - Foreach method. : 
// console.log("Foreach : ");
// var foreach1 = Arr.forEach(
//     (a)=>{
//        return a>20;
// });
// console.log(foreach1);

////////////////////////////////////

// console.log("Filter : ");
// //    - Filter.
// var filter1 = Arr.filter(
//     (a)=>{
//        return a>20;
//     }
// );
// console.log(filter1);

////////////////////////////////////

// console.log("Map : ");
// //    - Map method.
// var map1 = Arr.map(
//     (a)=>{
//         return a>20;
//     }
// );
// console.log(map1);


////////////////////////////////////
// //    - Fill method.
// var Arr = [11,34,12,24,13,10,14,45,15,90,16,60,17];
// console.log(Arr);
//             //        value
// // console.log(Arr.fill(0));
//             //  value , starting index
// // console.log(Arr.fill(0,5));
//             //  value  ,starting index  , ending index
// // console.log(Arr.fill(0,5,7));
// Arr.fill(0);
// console.log(Arr);





// 2. **Filter Odd Numbers**: Filter out all odd numbers from an array using `filter`.
// 2. **Fill:**
//    - Create an array of 5 elements and use `Array.prototype.fill` to replace all elements with a specific value (e.g., `'filled'`).
// 6. **Fill:**
//    - Initialize an array of 8 elements with the numbers from 1 to 8 using `Array.prototype.fill` and a callback function.
// var Arr = [0,0,0,0,0,0,0,0];
// for (let i = 1;i<=8; i++) {
//     All(i,i-1);
// }
// function All(a,b){
//     Arr.fill(a,b);
// }
// console.log(Arr);

// 10. **Fill:**
//     - Create an array of 10 elements and use `Array.prototype.fill` to replace all elements with the numbers from 1 to 10.


//Using Filter : 
// const students = [
//     { name: "Alice", age: 20 },
//     { name: "Bob", age: 22 },
//     { name: "Charlie", age: 19 },
//     { name: "Diana", age: 21 },
//     { name: "Eve", age: 20 },
//     { name: "Frank", age: 23 },
//     { name: "Grace", age: 22 },
//     { name: "Hannah", age: 18 },
//     { name: "Ian", age: 21 },
//     { name: "Judy", age: 20 }
//   ];
// console.log(students);
// var ans = students.filter(
//     (a)=>{
//         return a.age<=20;
//     }
// );
// console.log(ans);
////////////////////////////////////
//    - Splice method.
//slice splice 
// var Arr = [11,34,12,24,13,10,14,45,15,90,16,60,17];
// console.log(Arr);
//                         //index , value
// var deletedValues =  Arr.splice(5,3);
// console.log(Arr);
// console.log(deletedValues);

/////////////////////////////////////////
//    - Reduce.
// var Arr = [1,2,3,4,5,6,7,8,9,10];
// var ans = Arr.reduce(
//     (currentvalue,nextvalue)=>{
//         console.log(currentvalue,nextvalue);
//         return nextvalue+currentvalue;
//     }
// );
// console.log(ans);



/////////////////
//Map
//1. Given an array of strings, use map to convert each string to uppercase.

//splice 
//2. Write a function that uses splice to remove the first 3 elements from an array.

//reduce :
// How would you use reduce to group an array of objects by a specific property?
// const products = [
//     { name: "Laptop", price: 899.99 },
//     { name: "Smartphone", price: 499.99 },
//     { name: "Headphones", price: 89.99 },
//     { name: "Smartwatch", price: 199.99 },
//     { name: "Tablet", price: 299.99 },
//     { name: "Monitor", price: 149.99 },
//     { name: "Keyboard", price: 49.99 },
//     { name: "Mouse", price: 29.99 },
//     { name: "Printer", price: 129.99 },
//     { name: "Webcam", price: 69.99 }
//   ];