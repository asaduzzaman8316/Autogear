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

const productGrid = document.querySelector("#productGrid");
const btnForFive = document.querySelector("#btnForFive");
const btnForthree = document.querySelector("#btnForthree");

btnForFive.addEventListener("click", () => {
    productGrid.style.setProperty("--col", 5)
})

btnForthree.addEventListener("click", () =>{
    productGrid.style.setProperty("--col", 3)
})

btnForTwo.addEventListener("click", () =>{
    productGrid.style.setProperty("--col", 2)
})