const formulario = document.getElementById("formulario");
const tarea = document.getElementById("tarea");
const lista = document.getElementById("lista");
const error = document.getElementById("error");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const texto = tarea.value;

    if(texto === ""){
        error.textContent = "error";
        return;
    }

    error.textContent = "";

    const div = document.createElement("div");

    const span = document.createElement("span");
    span.textContent = texto;

    const completar = document.createElement("button");
    completar.textContent = "Completar";

    completar.addEventListener("click", function(){
        span.classList.toggle("completada");
    });

    const eliminar = document.createElement("button");
    eliminar.textContent = "Eliminar";

    eliminar.addEventListener("click", function(){
        div.remove();
    });

    div.appendChild(span);
    div.appendChild(completar);
    div.appendChild(eliminar);

    lista.appendChild(div);

    tarea.value = "";
});