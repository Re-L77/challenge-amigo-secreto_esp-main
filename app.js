// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const nombre = document.querySelector("#amigo");
const lista = document.querySelector("#listaAmigos");
const resultado = document.querySelector("#resultado");
function agregarAmigo() {
  if (nombre.value === "") {
    alert("Debe ingresar un nombre");
    return;
  } else {
    if (confirm(`Desea agregar a ${nombre.value} como amigo secreto?`)) {
      amigos.push(nombre.value);
      console.log(amigos);
      nombre.value = "";
      lista.innerHTML = "";
      amigos.forEach((amigo) => {
        lista.innerHTML += `<li>${amigo}</li>`;
      });
    }
  }
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos para sortear");
    return;
  } else {
    let aleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[aleatorio];
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSecreto}</li>`;
  }
}
