"uses strict";
document.querySelector("#menu").addEventListener("click",mostrarMenu)
function mostrarMenu(){
    let nav = document.querySelector("#nav");
    nav.classList.toggle("mostrarMenu");
}