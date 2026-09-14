/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the times

*/

let random = Math.random()
console.log(random)                                           //shows the random number generated in the console
let a = prompt("Enter first number")
let c = prompt("Enter operation")
let b = prompt("Enter second number")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}



if (random > 0.1) {                 // 90% of the time
    // Perform correct calculation
    console.log(`The result is ${a} ${c} ${b}`)       //${a} ${c} ${b} is a template literal
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
    
}

else {
    // Perform wrong calculation
    c = obj[c]           // change the operation to wrong one
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`) 

}