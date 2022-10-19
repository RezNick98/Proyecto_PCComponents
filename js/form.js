document.querySelector('#mensaje').addEventListener('click',mostrarForm);
document.querySelector('#redes').addEventListener('click',mostrarRedes);
document.querySelector("#menu").addEventListener("click",mostrarMenu)
document.querySelector('#coments').addEventListener('click',mostrarComentarios)
let number1=document.querySelector("#number1").innerHTML=Math.floor(Math.random()*6);
let number2=document.querySelector("#number2").innerHTML=Math.floor(Math.random()*6);
let resultado=number1+number2;
document.querySelector("#send").addEventListener("click",()=>{
    let input_result=Number(document.querySelector("#result").value);
    if(input_result==resultado){
        event.preventDefault();
        document.querySelector("#send_status").innerHTML="Su consulta fue enviada";
    }else{
        document.querySelector("#send_status").innerHTML="Captcha erroneo";
    }
    let name = document.getElementById('name');
    let email = document.getElementById('email')
    if(name.value=="" || email.value==""){
        document.querySelector('#send_status').innerHTML="Rellene los campos necesarios"
    }
})
document.querySelector("#menu").addEventListener("click",mostrarMenu)
function mostrarMenu(){
    let nav = document.querySelector("#nav");
    nav.classList.toggle("mostrarMenu");
}

function mostrarForm(){
    let icons=document.querySelector('.card-icons')
    let elem = document.querySelector('.card-form')
    elem.classList.toggle("mostrarFormulario")
    icons.classList.remove('mostarRedes')
}
function mostrarRedes(){
    let elem=document.querySelector('.card-form');
    let icons = document.querySelector('.card-icons');
    let coments = document.querySelector('.card_coments');
    icons.classList.toggle('mostarRedes');
    elem.classList.remove('mostrarFormulario')
}
async function mostrarComentarios(){
    let container = document.querySelector('.card_coments');
    let url = 'https://634f6c1cdf22c2af7b50ffc3.mockapi.io/api/comentarios'
    try{
        let response = await fetch(url);
        let json = await response.json();
        for(const c of json){
            let coment = c.coments
            let usuario = c.name
            container.innerHTML += `<p> ${usuario}: ${coment}</p>`
        }
        console.log(json)
    }catch(error){
        console.log(error)

    }
}
