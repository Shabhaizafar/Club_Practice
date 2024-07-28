// if statement : 
// if(){

// }


// if-else statement:
// if(){

// }
// else{

// }

// ladder if-else // else-if statement
// if(){

// }
// else if(){

// }
// else{

// }

//Nested If Else statement : 
// if(){

// }
// else{
//     if(){

//     }
// }

/////////////////////////////////////////////////////
// switch : 

//syntax : 
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


// var alpha = 1;

// switch(alpha)
// {
//     case 1: console.log("This is First Case");
//         break;
//     case 2:console.log("This is Second Case");
//         break;
//     case 'A' && 'a':console.log("This is A Case");
//         break;
//     case "Zafar":console.log("Zafar");
//         break;
//     default: console.log("This is Default Case");
// };



// 'A' && 'a'   = 'a'
// 'A' || 'a'  = 'A'



//////////////////////////////////////////////
// Ternary Operator : 

// syntax : 

// condition ? ex1 : ex2;

// var Age = 2;
// var product;
// if(Age<=10)
// {
//     product = "Milk";
// }
// else{
//     product = "Tea";
// }
// console.log(product);


// var Age = 1;

// var product = (Age<=10) ? "Milk" : "Tea";

// console.log(product);


//////////////////////////////
//1)basic for Loop
// for(initialization;condition;inc/dec)
// {
//     code;
// }

// for(let i=0;i<=10;i++)
// {
//     console.log(i);
// }

// 2)while loop
// intialization;
// while(condition){
//     ConvolverNode;
//     inc/dec;
// }
// var i = 0;
// while(i<=10)
// {
//     console.log(i);
//     i++;
// }

// 3)do-while loop
// intialization;
// do{
//     code;
//     inc/dec;
// }while(condition);

// var i = 100;
// do{
//     console.log(i);
//     i++;
// }while(i<=10);


//////////////////////////////////////////
// - Break and continue keyword.

// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(`i:${i} , j:${j}`);
//     }    
// }
/*
Output : 
 i:0 , j:0
 i:0 , j:1
 i:0 , j:2
 i:1 , j:0
 i:1 , j:1
 i:1 , j:2
 i:2 , j:0
 i:2 , j:1
 i:2 , j:2
 */
// 1)  i ==1 break;
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(i==1)
//             {
//                 break;
//             }
//         console.log(`i:${i} , j:${j}`);
//     }    
// }

// 2)  j==1 break;
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if(j==1)
//             {
//                 break;
//             }
//         console.log(`i:${i} , j:${j}`);
//     }    
// }

// // 3) i ==1  countinue
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//         if(i==1)
//             {
//                 continue;
//             }
//         console.log(`i:${i} , j:${j}`);
//     }    
// }


// // 4) j==1  countinue
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//         if(j==1)
//             {
//                 continue;
//             }
//         console.log(`i:${i} , j:${j}`);
//     }    
// }
