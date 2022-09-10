// string is a sequence of characters
let str = 'pepcoders'
console.log(str) 


// methods 
 console.log('length of the sttring is ' ,str.length)


 // extracting part of a string 


// 1. // slice 
// slice(start, end+1)

let slicestr = str.slice(3,9)
console.log(slicestr)

// substr
// substr(start , length)
 let subString = str.substr(3,3)
 console.log(subString)

// replacing string content
// replace(value, replace with )
let txt=('hello pepcoder')
let txxt=txt.replace('hello', ' nikal')
 console.log(txxt)

// toUppercase and toLowercase
// let upppercase  = txt.toUpperCase()
console.log(txxt.toUpperCase())
// let lowercase = txt.toLowerCase()
console.log(txxt.toLowerCase())


// concatenation (concat method)
let fs = 'hey'
let ss = ' luna '
let cs = fs.concat(' bhai ' , ss)
        // first string.concat(string to be added, second string )
console.log(cs)

// trim of string 

let trimming = '                 hello gajju     '
console.log(trimming)

console.log(trimming.trim())

