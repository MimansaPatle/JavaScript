let button = document.getElementById("btn")
// List of all mouse events 
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events


button.addEventListener("dblclick", ()=>{      //like onclick but for double click predefined event
    document.querySelector(".box").innerHTML = "<b>Yayy you were clicked</b> Enjoy your click!"
})

button.addEventListener("contextmenu", ()=>{        // Right click event
    alert("Dont hack us by Right click Please")
})

document.addEventListener("keydown", (e)=>{      // Keydown event
    console.log(e, e.key, e.keyCode)            //if you want to know which key is pressed, you can use e.key or e.keyCode
})