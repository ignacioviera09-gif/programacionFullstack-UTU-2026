let titulo = document.getElementById("titulo");
let btnTitulo = document.getElementById("btnTitulo");

btnTitulo.addEventListener("click", function () {
    titulo.textContent = "Título cambiado";
});


let parrafo = document.getElementById("parrafo");
let btnParrafo = document.getElementById("btnParrafo");

btnParrafo.addEventListener("click", function () {
    parrafo.innerHTML = "Parrafo cambiado";
});


let imagen = document.getElementById("imagen");
let btnImagen = document.getElementById("btnImagen");

btnImagen.addEventListener("click", function () {
    imagen.src = "/carpeta 11/Oro.webp";
});


let inputTexto = document.getElementById("inputTexto");
let btnMensaje = document.getElementById("btnMensaje");

btnMensaje.addEventListener("click", function () {
    alert(inputTexto.value);
});


let caja = document.getElementById("caja");
let btnAgregarClase = document.getElementById("btnAgregarClase");

btnAgregarClase.addEventListener("click", function () {
    caja.classList.add("estilo");
});


let btnQuitarClase = document.getElementById("btnQuitarClase");

btnQuitarClase.addEventListener("click", function () {
    caja.classList.remove("estilo");
});


let btnModoOscuro = document.getElementById("btnModoOscuro");

btnModoOscuro.addEventListener("click", function () {
    document.body.classList.toggle("oscuro");
});


let nuevoElemento = document.getElementById("nuevoElemento");
let btnAgregar = document.getElementById("btnAgregar");
let lista = document.getElementById("lista");

btnAgregar.addEventListener("click", function () {

    let li = document.createElement("li");

    li.textContent = nuevoElemento.value;

    lista.appendChild(li);

});