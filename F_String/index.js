console.log("This is strings tutorial")
let a = "Harry";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
// console.log(a[5]);               // This will give undefined as there is no 6th character in the string

//This shows that javascript lang is forgiving language as it does not shows error in above line


console.log(a.length)

let real_name = "Harry"
let friend = "Rohan"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)          // Template literals and `` is backtick

let b = "ShivamSh"
console.log(b.toUpperCase())
console.log(b.toLowerCase())          //function
console.log(b.length)                 //property
console.log(b.slice(1, 5)) 
console.log(b.slice(1)) 

console.log(b.replace("Sh", "77"))
console.log(b.concat(a, "Aishwariya", "Rahul", "Priya"))

console.log(b)