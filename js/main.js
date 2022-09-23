"uses strict"
let number1=document.querySelector("#number1").innerHTML=Math.floor(Math.random()*6);
let number2=document.querySelector("#number2").innerHTML=Math.floor(Math.random()*6);
let resultado=number1+number2;
document.querySelector("#send").addEventListener("click",enviarForm);
function enviarForm(event){
    event.preventDefault();

    let input_result=Number(document.querySelector("#result").value);
    if(input_result==resultado){
        document.querySelector("#send_status").innerHTML="Su consulta fue enviada";
    }else{
        document.querySelector("#send_status").innerHTML="Captcha erroneo";
    }
    let name = document.getElementById('name');
    let email = document.getElementById('email')
    if(!name.value && !email.value){
        document.querySelector('#send_status').innerHTML="Rellene los campos necesarios"
    }
}
document.querySelector('#mensaje').addEventListener('click',mostrarForm)
document.querySelector('#redes').addEventListener('click',mostrarRedes)

function mostrarForm(){
    let icons=document.querySelector('.card-icons')
    let elem = document.querySelector('.card-form')
    elem.classList.toggle("mostrarFormulario")
    icons.classList.remove('mostarRedes')
}
function mostrarRedes(){
    let elem=document.querySelector('.card-form');
    let icons = document.querySelector('.card-icons');
    icons.classList.toggle('mostarRedes');
    elem.classList.remove('mostrarFormulario')

}