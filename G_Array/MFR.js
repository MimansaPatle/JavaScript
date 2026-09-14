let arr = [1, 13, 5 ,7, 11];
// let newArr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newArr.push(element**2)
// }




//map
let newArr = arr.map((e, index, array)=>{
    return e**2;                              // [1, 169, 25, 49, 121]
})
console.log(newArr)                           


//filter
const greaterThanSeven = (e)=>{          //arrow function
    if(e>7){
        return true
    }
    return false
}
console.log(arr.filter(greaterThanSeven))              // [13, 11]


//reduce
let arr2 = [1,2,3,4,5,6]                        

const red = (a, b)=>{
    return a+b
}

console.log(arr2.reduce(red))                //1+2+3+4+5+6 = 21