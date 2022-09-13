const path = require('path')
let ext = path.extname('C:\Users\purus\pepcoding practise\DEV\3_nodejs\mydirectroy1\f1.txt')
console.log(ext)
let bname = path.basename('C:\\Users\\purus\\pepcoding practise\\DEV\\3_nodejs\\mydirectroy1\\f1.txt')
// let baname = path.basename('mydirectroy1\\f1.txt'') not working 
console.log('basename-->' + bname)

console.log(__dirname)
console.log(__filename)
