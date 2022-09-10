// array provide you an ordered collection of elements 
let arr = []; // array declaration
let cars= ['ferrari', ' BMW', " jaguar", 2 , true , null]
// in js array you can store different types of array
console.log('thus is cars array ', cars

)

// accesing the elements of an array

console.log(cars[2]) // jaguar
console.log(cars[0]) // ferrari
console.log(cars[1]) // BMW



// replace an element of an array

cars[2] = ' bentely'
console.log(cars)

// add  a element of an array 

cars[6] = ' mercedes'
console.log(cars)

cars[7] = ' lovely'
console.log(cars)


// remove and add element from last 
let fruits = [1,2,3,4,5,6,]

fruits.pop(fruits)
console.log(fruits)
fruits.push(7)
console.log(fruits)
fruits.shift()
console.log(fruits) // shift remove  element in start
fruits.unshift(0)
console.log(fruits) // unshift add element in start
console.log(fruits.length)

// multidimensional array

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
console.log(matrix[0][0])
console.log(matrix[0][2])

