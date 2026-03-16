let votos = 0

const boton = document.getElementById("votar")
const textoVotos = document.getElementById("contador")

boton.addEventListener("click", function(){

votos += 1

textoVotos.innerHTML = "Votos: " + votos

})

function VerificarNombre(){
    let nombre = document.getElementById("nombre").value
    let nombreArray = nombre//seguir
}
const form = document.getElementById("formPropuesta")

form.addEventListener("submit", function(e){

let nombre = document.getElementById("nombre")
let idea = document.getElementById("idea")

if(nombre.value == "" || idea.value == ""){

document.getElementById("mensaje").innerHTML = "Completa todos los campos"

}


})