// let boxes = document.getElementsByClassName("box")
// console.log(boxes)


// for(i=0; i<5 ; i++){

//     let random = Math.random()
//     console.log(random)  
    
//     if(random<0.2){
// boxes[i].style.backgroundColor = "red"
// }

// else if(random<0.2 && random>=0.4){
//     boxes[i].style.backgroundColor = "blue"
// }
// else if(random<0.4 && random>=0.6){
//     boxes[i].style.backgroundColor = "pink"
// }
// else if(random<0.6 && random>=0.8){
//     boxes[i].style.backgroundColor = "green"
// }
// else {
//     boxes[i].style.backgroundColor = "purple"
// }


// }



// for(i=0; i<5 ; i++){

//     let rand = Math.random()
//     console.log(rand) 

// if(random<0.2){
// boxes[i].style.color = "yellow"
// }

// else if(random<0.2 && random>=0.4){
//     boxes[i].style.color = "blue"
// }
// else if(random<0.4 && random>=0.6){
//     boxes[i].style.color = "pink"
// }
// else if(random<0.6 && random>=0.8){
//     boxes[i].style.color = "green"
// }
// else {
//     boxes[i].style.color = "white"
// }


// }



console.log("Script.js initializing")
// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children 


function getRandomColor(){
    let val1 = Math.ceil(0 + Math.random()* 255);      //Math.ceil(2.5) = 3
    let val2 = Math.ceil(0 + Math.random()* 255);      //  (min + Math.random()*(max - min))
    let val3 = Math.ceil(0 + Math.random()* 255);      //  In RGB, each color channel (Red, Green, Blue) can have a value from 0 to 255.
    return `rgb(${val1}, ${val2}, ${val3})`
}
Array.from(boxes).forEach(e=>{                       //for using forEach loop, we need to convert the HTMLCollection to an array using Array.from()
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})