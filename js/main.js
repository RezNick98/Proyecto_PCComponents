"uses strict"
let number1=document.querySelector("#number1").innerHTML=Math.floor(Math.random()*6);
let number2=document.querySelector("#number2").innerHTML=Math.floor(Math.random()*6);
let resultado=number1+number2;
document.querySelector("#send").addEventListener("click",enviarForm);
document.querySelector('#mensaje').addEventListener('click',()=>{
    let elem = document.querySelector('.card-form')
    elem.classList.toggle("mostrarFormulario")
})
function enviarForm(){
    event.preventDefault();
    let input_result=Number(document.querySelector("#result").value);
    if(input_result==resultado){
        document.querySelector("#send_status").innerHTML="Su consulta fue enviada";
    }else{
        document.querySelector("#send_status").innerHTML="Captcha erroneo";
    }
}