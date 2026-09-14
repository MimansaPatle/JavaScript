console.log("Harry")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("redbox").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green";
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 

e= document.getElementsByTagName("div");            //gives html collection of all div elements

e[4].matches("#redbox");       //returns true if the element matches the selector
e[4].matches(".box");          //returns true if the element matches the selector

e[3].closest("#redbox");      //null if the element is not found
e[4].closest(".box");         //returns the closest ancestor of the element that matches the selector
e[4].closest(".container");       
e[4].closest("html");   

document.querySelector(".container").contains(e[2]);       //true if the element is a descendant of the container
document.querySelector(".container").contains(document.querySelector("body"));             //false
document.querySelector("body").contains(document.querySelector(".container"));             //true

