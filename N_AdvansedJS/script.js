console.log(a1);


(async function main(){                          // IIFE - Immediately Invoked Function Expression
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b);

    // let [x, y, rest] = [1, 5, 7, 8, 9, 10]          // Destructuring
    // console.log(x, y, rest)                        //x:1  ,  y:5  ,  rest:7,8,9,10  hojata

    let obj = {
        a: 1, 
        b: 2,
        c: 3
    }

    let {a, b} = obj                                  // Destructuring ( a aur b ko obj se nikaal liya )
    console.log(a, b)

    let arr = [1, 4, 6]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))                          // "...arr" is a spread operator ( ye bolta hai ki arr ko khol do)

    
})()

var a1 = 6;


const sleep = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(45)
        }, 1000);
    })
}

const sum = async (a, b, c)=>{                       //let aur const ko hoist nhi krta
    return a+b+c
}