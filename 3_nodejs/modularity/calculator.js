function add(a,b){
console.log('the sum is ' , a+b)
}
function sub(a,b){
console.log('the difference is ' , a-b)
}
function multi(a,b){
console.log('the multi is ' , a*b)
}
function div(a,b){
console.log('the division is ' , a/b)
}


module.exports={
    addition : add,
    substraction : sub,
    multiplication : multi,
    division : div,


}

// module.exports is a object provided by node.js by 
// which you can export your functions in key value pair
// you will use your functions with the keys you have assigned to them