let container = document.querySelector("#container");
let crsr = document.querySelector("#cursor");

container.addEventListener('mousemove',(e)=>{
    crsr.style.left = e.x + "px";
    crsr.style.top = e.y + 10 + "px";
})