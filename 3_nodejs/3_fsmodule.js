// file system module 
const file = require('fs')
  

// we will read write update and delete files


// read file data
// file.readFileSync


// let content = file.readFileSync('f1.txt')
// console.log("this is data of g1"+ content)


// write data in file 
// file.writeFileSync 
//  if the file does not exist it will create it



file.writeFileSync('f2.txt','this is to be added ')
console.log("data written")

file.writeFileSync("f1.txt",'this is override in f1')
console.log('data overridden')

file.writeFileSync("f3.txt", 'it will create new file ')
console.log('new file created')


