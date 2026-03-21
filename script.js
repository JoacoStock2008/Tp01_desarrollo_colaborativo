let votos = 0

const boton = document.getElementById("votar")
const textoVotos = document.getElementById("contador")

boton.addEventListener("click", function (event) {

    event.preventDefault()
    votos += 1

    textoVotos.innerHTML = "Votos: " + votos

})

function VerificarNombre() {
    let nombre = document.getElementById("nombre").value
    let nombreArray = nombre//seguir
}
const form = document.getElementById("formPropuesta")

form.addEventListener("submit", function (event) {

    event.preventDefault()
    let nombre = document.getElementById("nombre")
    let idea = document.getElementById("idea")

    if (nombre.value == "" || idea.value == "") {

        document.getElementById("mensaje").innerHTML = "Complete todos los campos"

    } else {
        let tiempo = 5;
        const intervalo = setInterval(function () {
            document.getElementById("mensaje").innerHTML = "La propuesta se ha enviado correctamente. Redirigiendo en " + tiempo + " segundos..."
            tiempo -= 1;

            if (tiempo < 0) {
                clearInterval(intervalo)
                nombre.value = ""
                idea.value = ""
                document.getElementById("mensaje").innerHTML = "Complete el formulario nuevamente para enviar otra propuesta"

            }
        }, 1000)
    }


})