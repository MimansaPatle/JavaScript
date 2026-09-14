console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")            // This is the value that will be passed to the catch() method
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")                   // This is the value that will be passed to the then() method
        }, 1000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 3000);
    }
})

 
let p3 = Promise.race([prom1, prom2])            // This will resolve or reject as soon as the first promise resolves or rejects(jo pehle resolve ya reject hoga wahi value dega ye console me)
// // let p3 = Promise.all([prom1, prom2])         // This will resolve when all promises resolve or reject if any promise rejects(jb dono promise ki value resolve hogi ,tb dono ki values dedega ye console me )
// // let p3 = Promise.allSettled([prom1, prom2])    // This will resolve when all promises settle (either resolve or reject)(chahe resolve ho ya reject dono ke status aur value dedega)
// // let p3 = Promise.any([prom1, prom2])       // This will resolve when any promise resolves, or reject if all promises reject(jo bhi promise resolve hoga uski value dega ya agar dono hi reject ho gaye to error dega)

p3.then((a)=>{                 // This will be executed if the promise resolves
    console.log(a)
}).catch(err=>{             // This will be executed if the promise rejects
    console.log("This is the error:")
    console.log(err)
})

// Uncomment the following lines to see the individual promises in action
// prom1.then((a) => {                 // This will be executed if the promise resolves
//     console.log(a)
// }).catch(err => {             // This will be executed if the promise rejects
//     console.log("This is the error:")
//     console.log(err)
// })
// prom2.then((a) => {                 // This will be executed if the promise resolves    
//     console.log(a)
// }).catch(err => {             // This will be executed if the promise rejects
//     console.log("This is the error:")
//     console.log(err)
// })