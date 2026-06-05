const btnChiste = document.getElementById("btnChiste");
const chiste = document.getElementById("chiste");
const error = document.getElementById("error");

btnChiste.addEventListener("click", obtenerChiste);

async function obtenerChiste() {
    const categoria = document.getElementById("categoria").value;
    const tipo = document.getElementById("tipo").value;

    const url = `https://v2.jokeapi.dev/joke/Any?lang=es&category=${categoria}&type=${tipo}`;

    try {
        error.textContent = "";

        const respuesta = await fetch(url);
        const datos = await respuesta.json();

        if (datos.type === "single") {
            chiste.textContent = datos.joke;
        } else {
            chiste.innerHTML = `${datos.setup}<br><br>${datos.delivery}`;
        }

    } catch {
        error.textContent = "Error al obtener el chiste";
    }
}