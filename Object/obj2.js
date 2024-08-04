// - Spread operator in objects.   (Clone)  : duplicate

// var Arr = [1,2,3,4,5,6,7];
// console.log(...Arr);

// var person = {
//     fname : "Ajay",
//     lname : "Shah",
//     Age : 13,
//     Gender : "male"
// };

// console.log(person);


// var obj2 = {...person};   // (Clone)  : duplicate

// console.log(obj2);

// obj2['Contact'] = 1234567;
// console.log(obj2);
// console.log(person);

///////////////////////////////////////////////////////////
// - Object Destructuring.

// var person = {
//     fname : "Ajay",
//     lname : "Shah",
//     Age : 13,
//     Gender : "male"
// };
// console.log(person);


// // console.log(person.fname);

// var {fname:firstname,Age,...newobj} = person;

// console.log(firstname);
// console.log(Age);

// console.log(newobj);


/////////////////////////////////////////////////
// - Objects inside Array.
// const people = [
//     {
//       name: 'Alice',
//       age: 25,
//       job: 'Engineer'
//     },
//     {
//       name: 'Bob',
//       age: 30,
//       job: 'Designer'
//     },
//     {
//       name: 'Charlie',
//       age: 35,
//       job: 'Teacher'
//     }
//   ];

// var [{age:obj1Age},obj2,obj3] = people;

// console.log(obj1Age);
// console.log(obj2);
// console.log(obj3);



/////////////////////////////////////////////////
// - Nested Destructuring.
var person = {
    fname : "Ajay",
    lname : "Shah",
    Age : 13,
    Gender : "male",
    Address : {
        city : "GNR",
        state : "Gujarat",
        nation: "India"
    }
};
console.log(person);

// console.log(person.Address);
// console.log(person.Address.city);

// var {Address:{city}} = person;


// // console.log(Address);
// console.log(city);



// person.Address.city = "AMD";
// person['Address'].city = "AMD";
// person.Address['city'] = "AMD";
person['Address']['city'] = "AMD";




console.log(person);
