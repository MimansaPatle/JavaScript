// Callbacks is a way to make sure that a function is not executed before another function has finished executing.

console.log("Harry is a hacker")
console.log("Rohan is a hecker")                    // synchronous code, it will be executed in the order it is written


setTimeout(() => {
    console.log("I am inside settimeout")           // asynchronous code, it will be executed after the current call stack is empty
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")        //asynchronous function
}, 0);

console.log("The End")

const fn = () => {          //arrow function
  console.log("Nothing")
}

const callback = (arg, fn) => {    // This is a callback function that will be called when the script is loaded
    console.log(arg)
    fn()
}


const loadScript = (src, callback) => {            // This function loads a script from the provided URL and executes the callback function when the script is loaded
    let script = document.createElement("script");       // Create a script element
    script.src = src;                                    // Set the source of the script element to the provided URL (url ko script mein daal diya)
    script.onload = callback("Harry", fn);               // Set the onload event of the script element to the provided callback function, which will be called when the script is loaded
    document.head.append(script)                         // Append the script element to the head of the document, which will start loading the script
}

// Example usage of loadScript function
// const callback = (arg) => {    
//     console.log(arg)
// }

// const loadScript = (src, callback) => {            
//     let script = document.createElement("script");     
//     script.src = src;                                   
//     script.onload = callback("Harry");               
//     document.head.append(script)                        
// }


// loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )
loadScript("Promises.js", callback )