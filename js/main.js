"uses strict";
document.querySelector("#menu").addEventListener("click",mostrarMenu)
document.querySelector('.rotate').addEventListener('mouseover',rotacion)


document.querySelector("#menu").addEventListener("click",mostrarMenu)
function mostrarMenu(){
    let nav = document.querySelector("#nav");
    nav.classList.toggle("mostrarMenu");
}
function rotacion(){
    let rotate = document.querySelector('.rotate');
    rotate.classList.toggle('rotate_180deg');
}