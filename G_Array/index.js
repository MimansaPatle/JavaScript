//  Index  0, 1, 2, 3, 4
let arr = [1, 2, 4, 5, 7]

// arr[0] = 5666;
// console.log(arr, typeof arr);        //object
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString())                // 1,2,4,5,7
console.log(arr.join(" and "))             // 1 and 2 and 4 and 5 and 7


 
let numbers = [1, 2, 3, 4, 5] 
// console.log(numbers.splice(1, 2))   
console.log(numbers.splice(1, 3))
// numbers.splice(1, 3)  
// console.log(numbers.splice(1, 3, 222, 333))      // 1 index pr 3 no. delete krke uski jagah 222, 333 add krdega
// console.log(numbers)
// (4) [1, 222, 333, 5]