"uses strict";

document.querySelector('.rotate').addEventListener('mouseover',()=>{
    let rotate = document.querySelector('.rotate');
    rotate.classList.toggle('rotate_180deg');
})