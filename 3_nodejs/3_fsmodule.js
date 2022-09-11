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



// file.writeFileSync('f2.txt','this is to be added ')
// console.log("data written")

// file.writeFileSync("f1.txt",'this is override in f1')
// console.log('data overridden')

// file.writeFileSync("f3.txt", 'it will create new file ')
// console.log('new file created')

// append a file 
// appendfilesync method adds new data toa previously written file

// file.appendFileSync('f2.txt',"add this in f2")
// console.log('txt added in f2')


// file.unlinkSync('f2.txt')
// console.log('f2 deleted')
 

// directories 


//   creating a new directory


// mkdirSync method is used to create a directory of folder

// file.mkdirSync('mydirectory')
// console.log('directory created ')

// file.rmdirSync('mydirectory')
// console.log('directory deleted')


// to check whether a directory exits or not 

// existSync


// let doesExist = file.existsSync('mydirectory')
// console.log(doesExist)

// let doesExist1 = file.existsSync('f1.txt')
// console.log(doesExist1)


// statSync gives statics of directory
// let stat = file.lstatSync('mydirectory')
// console.log(stat)


//return true or false for  file or folder 

// console.log('is file' , stat.isFile())
// console.log('isderectroy', stat.isDirectory())

// read in directory 

// let folderpath = 'C:\\Users\\purus\\pepcoding practise\\DEV\\3_nodejs\\mydirectory'
// let foldercontent = file.readdirSync(folderpath)
// console.log("directroy content  " + foldercontent )
console.log("directroy content  " + file.readdirSync('C:\\Users\\purus\\pepcoding practise\\DEV\\3_nodejs\\mydirectory') )

