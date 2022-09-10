//  normal function
// function sayHi(){
//     console.log('function said hi')

// } // normal function declaration
// sayHi() // function invocation

// parameters in functions 

function add(a,b){ //a and b are parameter
    console.log("the addition is", a + b)

}
add(2, 3) // 2 and 3 are arguments 
function multi(a,b){
    console.log('the multiplcation is ', a*b)

}
multi(2,3)

function multi(a,b){
    return a*b
}
console.log(multi(2,5))
 

// function as first class citizen 

let sayHi = function(){ // annoymous function 
    console.log('hi lovely ')
    // in js you can assigna function to variable and can call it 
}// function Expression 
sayHi()

// IIFE (immediately invoked function expression)

let addition=(function(a,b){
    return a+b;
})(20,10)
console.log(addition)


//  arrow function
