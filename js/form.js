/* en DOM 
const formulario = document.getElementById("form");

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    let nombre = document.getElementById("nombre-form").value
    console.log(nombre)

    let apellido = document.getElementById("apellido-form").value
    console.log(apellido)

    let teléfono = document.getElementById("teléfono-form").value
    console.log(teléfono)

    let fechaDeNacimiento = document.getElementById("nacimiento-form").value
    console.log(fechaDeNacimiento)

    let mail = document.getElementById("email-form").value
    console.log(mail)

    let consulta = document.getElementById("consulta-form").value
    console.log(consulta)

})
*/

let dataUsuario

$("#form").submit(function( event ) {
    event.preventDefault()
    dataUsuario = $("#form").serializeArray()
    alert(`Gracias ${dataUsuario[0].value} por tu consulta`);
})

