// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//funcion para agregar amigos
function agregarAmigo() {
    let inputName = document.getElementById("amigo");

    if (inputName.value === "") {
        alert("Por favor, ingresa un nombre valido.");
        return
    }
    amigos.push(inputName.value);
    inputName.value = "";
}

//funcion para mostrar la lista de amigos agregados
function mostrarLista() {

}

