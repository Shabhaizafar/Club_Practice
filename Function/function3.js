// function All(){
//     console.log("Hello");

//     All();
// }

// All();



// for (let i = 0; ; i++) {
//     console.log(i);
// }

//
//Factorial 
var n = 5;  //120
var Fact = 1;


function Factorial(a){
    if(a==0)
    {
        return Fact;
    }
    Fact*=a;
     Factorial(a-1);
}

var ans = Factorial(n);
console.log(ans);



///////////////////////////


// Check number is Armstong or not using recursion 


// 121

// 1*3 + 2*3 + 1*3 = 1+8+1 = 10

// 153 
// 1*3 + 5*3 + 3*3 = 1+125+27 = 153

// 8208 
// 8*4 + 2*4 + 0*4 + 8*4 = 8208
