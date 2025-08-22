// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let randomIndice = 0;

//funcion para agregar amigos
function addFriend() {
    let inputName = document.getElementById("amigo");

    if (inputName.value === "") {
        alert("Por favor, ingresa un nombre valido.");
        return
    }
    amigos.push(inputName.value);
    inputName.value = "";
    updateList();
}

//funcion para sortear amigos
function friendSortOut() {
    if (amigos.length < 2) {
        alert("Es necesario tener al menos 2 amigos para realizar el sorteo.");
        return
    }
    randomIndice = generateIndiceRandom(amigos.length);
    let amigoSeleccionado = amigos[randomIndice - 1];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: <strong>${amigoSeleccionado}</strong>`;
}

//funcion para actualizar la lista de amigos
function updateList() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar

    amigos.forEach((amigo, index) => {
        let li = document.createElement("li");
        li.textContent = amigo;
        li.setAttribute("data-index", index);
        lista.appendChild(li);
    });
}

//funcion para generar un indice random
function generateIndiceRandom(max) {
    return Math.floor(Math.random() * max) + 1;
}
