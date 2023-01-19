//1.1
const boton = document.getElementById("btnToClick");
boton.addEventListener('click', funcionClick);

function funcionClick(event){
console.log(event)
}

//1.2

const foco = document.querySelector('.focus')

foco.addEventListener('focus', funcionFocus)

function funcionFocus(event){
    console.log(event)
}
//1.3

const variableInpunt = document.querySelector('.value')

variableInpunt.addEventListener('input', funcionInput)

function funcionInput(event){

console.log(event)
}