let a = [1, 93, 5, 6, 88]


// for (let index = 0; index < a.length; index++) {           //for loop
//     const element = a[index];
//     console.log(element)
// }


// a.forEach((value, index, arr)=>{                          //for each loop 
//     console.log(value, index, arr)                   //output: value, index, array 
// })


let obj = {
    a: 1,
    b: 2,
    c: 3
}
for (const key in obj) {                                 //for in loop (key)
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key]; 
        console.log(key, element)
    }
}


for (const value of a) {                                   //for of loop (value)
    console.log(value)
}

// Example: create an array from the keys of obj
let arr1 = Array.from(Object.keys(obj));
console.log(arr1); // ['a', 'b', 'c']