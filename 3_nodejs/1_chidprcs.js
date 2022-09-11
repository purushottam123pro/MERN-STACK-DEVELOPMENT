// child process is a node module used to create sub process within a script
// you can do different task with your script
 
const cp = require("child_process");
// console.log('opening calculator');
// cp.execSync('calc');
// console.log('opening calculator');
// cp.execSync('code');
// console.log('opening calculator');
// cp.execSync('start chrome');
// cp.execSync('start chrome https://pepcoding.com/');
let output = cp.execSync("node test.js");
console.log('output ->' + output);

