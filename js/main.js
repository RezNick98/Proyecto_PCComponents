"uses strict"
document.querySelector('#mensaje').addEventListener('click',()=>{
    let elem = document.querySelector('.form')
    elem.classList.toggle("mostrarFormulario")
    console.log("Hola")
})