// is JS objects are basically key value pair 
// to declare an object 
let obj = {} // object declaration

let person = {
    name : 'mohit',
    age : 20,
    phone : 123466789

}
console.log(person)


let cap = {
    name : ' steve ',
    lastname : " rogers ",
    friends : [ ' bucky ', ' tony',' DR banner '],
    age : 102 ,
    isAvenger : true ,
    address  : {
        state : ' shaktinagar',
        city : ' surat'
    },
    sayHi : function(){
        console.log('captain say hollywood is crap')
    }
}
console.log(cap)
console.log(cap.friends)// dot notation// access property of an object
console.log(cap['friends']) // bracket notation
console.log(cap.age)

console.log(cap.lastname)
console.log("my best friend is ", cap.friends[0])
console.log(cap.address.city)
// console.log(cap.sayHi) 
cap.sayHi()



//loops -> for in loop
// for(let serial number in object){
    // print(serialnumber, object(serialnuber))
//}

for(let key in cap){
    console.log('key : ', key, "value: ",cap[key])
}
cap.isAvenger = false // update property of an objest
cap.movies = ['avenegers ', " lahsan "]
delete cap.age // delete a property from obhect
 console.log(cap)

