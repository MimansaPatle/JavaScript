console.log("Hey this is tutorial 55");

var a = 5;
// a = a + 1
let b = 6;
let c = "Harry";
let _a = "Shubham";
// var 55a = "Rohan"; // Not Allowed

// console.log(a +  b + 8);
// console.log(typeof a, typeof b, typeof c);
{
    // let a = 66;                //better to use //"Let": It is a block scope variable and also global variable (if change made here in a , will not be reflected in the global variable)
    // var a = 66;                            //"Var": It is a global variable (does not have block scope)(if change made here in a , will be reflected in the global variable)
    console.log(a)
}
console.log(a)
// const a1 = 6;
// a1 = a1 + 1; // Not Allowed because a1 is constant


let x = "Harry bhai";            //string
let y = 22;                      //number
let z = 3.55;                    //number
const p = true;                  //boolean
let q = undefined;               //undefined
let r = null;                    // **Type of null is object, this is a bug(error) in JavaScript** 

console.log(x, y, z, p, q, r)
console.log(typeof x, typeof y, typeof z, typeof p, typeof q, typeof r)


let o = {
    "name": "Harry",          //object  //key:value pair
    "job code": 5600,
    "is_handsome": true
}

console.log(o);
o.salary = "100crores";
console.log(o);
o.salary = "500crores";
console.log(o);