async function getData() {                   // This function simulates an asynchronous operation 
    // Simulate getting data from a server                //bacground mem chlne do
    return new Promise((resolve, reject) => {             
        setTimeout(() => {
            resolve(455)
        }, 3500);
    })
}

async function main(){                    // as await is used, this function must be declared as async
    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load data")

    let data = await getData()           // this will wait for the promise to resolve before proceeding

    console.log(data)

    console.log("process data")

    console.log("task 2")

}

main()

// The code below is an alternative way to handle the promise without using async/await
// data.then((v) => { 
//     console.log(data)

//     console.log("process data")

//     console.log("task 2")
 
// })