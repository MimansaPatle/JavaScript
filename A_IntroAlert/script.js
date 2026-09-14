alert("Hello World");

console.log("Code is running...")
console.log("Code is also running...")
console.log("Code is looking like a wow...")

var a = prompt("Enter your number")
var isTrue = confirm("Are you sure you want to leave this page and blast your computer ")

if(isTrue){
    console.log("Computer is blasting")                  /*  if we click on ok button in the confirm dialog box, this will be executed */
}
else{
    console.log("Computer is not blasting")               /* cancel */            /* we can see it in console by inspecting the page */
}

console.log("Your number is " + a)

document.title = "Hey I am good"                   //title

document.body.style.backgroundColor = "red"      //styling                   /* Adds inline style to the body element */