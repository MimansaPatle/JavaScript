let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{                                      // it prints always, even if there is an error or return statement
        console.log("files are being closed and db connection is being closed") // kya hota h ki function ko jb uska result mil jata h ya error aa jata h to finally block execute hota h, isme hum aise code likhte h jo hume function ke end me execute karna hota h, jaise ki file close karna ya db connection close karna
    }                      //hum print isiliye use nni krte kyuki vo function ko apna kam krne k bad function se exit kr jata h, finally lekin hmesha execute hoge function ke exit hone k phle
  
}

let c = main()