// callback Function 

// function add(a,b){
//     console.log(a+b); 
// }

// function Addition(callback){
//     var n1 = 12;
//     var n2 = 13;
//     callback(n1,n2);
// }

// Addition(add);


///////////////////////////////////////
// Higher Order Function  


function Main(){
    var choice = prompt("1) type 'num' for Number.\n2)type 'str' for String.\n\n Enter Your Choice : ");
    switch(choice)
    {
        case 'num' : Numbders();
                    break;
        case 'str' : Strings();
                    break;
        default: console.log("Enter Valid Choice !!!");
    }
}
Main();


function Numbders(){
    var n1 = +prompt("Enter the Value of N1 : ");
    var n2 = +prompt("Enter the Value of N2 : ");
    var choice = prompt("1) + for Addition\n2) - for Subtraction.\n\nEnter Your Choice :");
    switch(choice)
    {
        case '+' : Add(n1,n2);
                    break ;
        case '-' : Sub(n1,n2);
                    break ;

                    // mul 

                    // div 

                    //mod 
        default: console.log("Enter Valid Choice !!!");
        
    }
}

function Add(a,b){
    console.log(`addition of ${a} and ${b} : ${a+b}.`);
}


function Strings(){
    // s1 
    // s2
    // choice 
    //1)  concatination 
    //2)  concatination  + lowecase
    //3)  concatination  + uppercase 
    //4)  concatination length
}



//In-Built Functions in JS


// var n1 = +prompt("Enter the Value of N1 : ");;
// var n2 = 12;

// console.log(n1,typeof n1);
// console.log(n2,typeof n2);

// console.log(n1==n2);
// console.log(n1===n2);
