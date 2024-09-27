//let c=document.querySelector(".box");

function changeColor(){
    let r= Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let color = `rgb(${r},${g},${b})`;
    document.querySelector(".box").style.backgroundColor=color;
    document.querySelector("h3").innerText = color;
    document.querySelector("h3").style.color = color;
    navigator.clipboard.writeText(color);
}

document.querySelector(".btn").addEventListener("click",changeColor);
changeColor();
