let modeBtn = document.querySelector("#mode-btn");
let body = document.querySelector("body");
let mode ="light";

modeBtn.addEventListener("click", () =>{
    if(mode == "light")
    {
        body.style.backgroundColor ="black";
        body.style.color = "white";
        mode = "dark";
    }
    else
    {
        body.style.backgroundColor = "white";
        body.style.color = "black";
        mode = "light";
    }
})