console.log("Hola, mundo!");

let nombre = prompt("¿Cuál es tu nombre?");
console.log("Hola " + nombre);

let numero1 = parseInt(prompt("Ingresa el primer número:"));
let numero2 = parseInt(prompt("Ingresa el segundo número:"));
let suma = numero1 + numero2;
console.log("La suma de " + numero1 + " y " + numero2 + " es: " + suma);

let edad = parseInt(prompt("¿Cuántos años tienes?"));
if (edad >= 18) {
    console.log("es mayor.");
} else {
    console.log("es menor");
}

let numero = parseInt(prompt("Ingresa un número"));
if (numero % 2 === 0) {
    console.log("El número " + numero + " es par.");
} else {
    console.log("El número " + numero + " es impar.");
}

let numero3 = parseInt(prompt("Ingresa un número para saber cuál es mayor"));
let numero4 = parseInt(prompt("Ingresa un número para saber cuál es mayor"));
let numero5 = parseInt(prompt("Ingresa un número para saber cuál es mayor"));
if (numero3 > numero4 && numero3 > numero5) {
    console.log("El número " + numero3 + " es el mayor.");
} else if (numero4 > numero3 && numero4 > numero5) {
    console.log("El número " + numero4 + " es el mayor.");
} else if (numero5 > numero3 && numero5 > numero4) {
    console.log("El número " + numero5 + " es el mayor.");
}

let nota = parseInt(prompt("Ingresa tu nota"));
if (nota >= 8) {
    console.log("muy bien");
} else if (nota >= 5) {
    console.log("aceptable");
} else {
    console.log("insuficiente");
}

console.log("contador del 0 al 10:");
let contador = 0;
for (contador = 0; contador <= 10; contador++) {
    console.log("Contador: " + contador);
}

console.log("Números pares del 2 al 20:");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let numero6 = parseInt(prompt("Escribe la contraseña:"));
if (numero6 === 1234) {
    console.log("Contraseña correcta");
} else {
    console.log("Contraseña incorrecta");
}

console.log("sistema que pide numeros hasta escribir 0");
let numero7;
do {
    numero7 = parseInt(prompt("Ingresa un número (0 para salir):"));
    console.log("Número ingresado: " + numero7);
} while (numero7 !== 0);

console.log("Calculadora");
let operacion = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicación, división)");
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let resultado;
switch (operacion) {
    case "suma":
        resultado = num1 + num2;
        console.log("El resultado de la suma es: " + resultado);
        break;
    case "resta":
        resultado = num1 - num2;
        console.log("El resultado de la resta es: " + resultado);
        break;
    case "multiplicación":
        resultado = num1 * num2;
        console.log("El resultado de la multiplicación es: " + resultado);
        break;
    case "división":
        if (num2 !== 0) {
            resultado = num1 / num2;
            console.log("El resultado de la división es: " + resultado);
        } else {
            console.log("Error: No se puede dividir por cero.");
        }
        break;
    default:
        console.log("Operación no válida.");
}

console.log("mini menu");
let opcion = prompt("Selecciona una opción: 1. saludar, 2. mostrar fecha, 3. numero random");
switch (opcion) {
    case "1":
        console.log("¡Hola, mundo!");
        break;
    case "2":
        console.log("La fecha de hoy es: " + new Date().toLocaleDateString());
        break;
    case "3":
        console.log("Número aleatorio: " + Math.floor(Math.random() * 100));
        break;
    default:
        console.log("Opción no válida.");
}

console.log("adivinar el número");
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;
do {
    intento = parseInt(prompt("Adivina el número entre 1 y 10:"));
    if (intento === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número.");
    } else if (intento < numeroSecreto) {
        console.log("El número es mayor. Intenta de nuevo.");
    } else {
        console.log("El número es menor. Intenta de nuevo.");
    }
} while (intento !== numeroSecreto);

console.log("cuantos numeros pares ingreso el usuario");
let contadorPares = 0;
let numero8;
do {
    numero8 = parseInt(prompt("Ingresa un número (0 para salir):"));
    if (numero8 !== 0 && numero8 % 2 === 0) {
        contadorPares++;
    }
} while (numero8 !== 0);
console.log("El usuario ingresó " + contadorPares + " números pares.");

console.log("array con 5 nombres");
let nombres = ["Juan", "María", "Pedro", "Ana", "Luis"];
for (let i = 0; i < nombres.length; i++) {
    console.log("Nombre " + (i + 1) + ": " + nombres[i]);
}

console.log("recorrer un array usando for");
let Numeros = ["1", "2", "3", "4", "5"];
for (let i = 0; i < Numeros.length; i++) {
    console.log("Número " + (i + 1) + ": " + Numeros[i]);
}

console.log("array de numeros y mostrar");
let arrayNumeros = [10, 20, 30, 40, 50];
for (let i = 0; i < arrayNumeros.length; i++) {
    console.log("Elemento " + (i + 1) + ": " + arrayNumeros[i]);
}

console.log("array de notas y mostrar el prmedio");
let notas = [7, 8, 9, 6, 10];
let sumaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    sumaNotas += notas[i];
}
let promedio = sumaNotas / notas.length;
console.log("El promedio de las notas es: " + promedio);

console.log("pedir nombres al usuario y guardarlos en un array hasta escribir 'salir'");
let nombresUsuario = [];
let nombreUsuario;
do {
    nombreUsuario = prompt("Ingresa un nombre (escribe 'salir' para terminar):");
    if (nombreUsuario !== "salir") {
        nombresUsuario.push(nombreUsuario);
    }
} while (nombreUsuario !== "salir");

console.log("Nombres ingresados:");
for (let i = 0; i < nombresUsuario.length; i++) {
    console.log("Nombre " + (i + 1) + ": " + nombresUsuario[i]);
}

console.log("mostrar cuantos elementos tiene un array usando .length");
let frutas = ["manzana", "banana", "naranja", "uva"];
console.log("El array de frutas tiene " + frutas.length + " elementos.");

console.log("array de numeros y mostrar solo los pares");
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
        console.log("Número par " + (i + 1) + ": " + numeros[i]);
    }
}

console.log("array de frutas y verificar si existe una fruta especifica");
let frutaEspecifica = "banana";
if (frutas.includes(frutaEspecifica)) {
    console.log("La fruta " + frutaEspecifica + " existe en el array.");
} else {
    console.log("La fruta " + frutaEspecifica + " no existe en el array.");
}

console.log("eliminar el ultimo elemento de un array");
let ultimaFruta = frutas.pop();
console.log("Fruta eliminada: " + ultimaFruta);
console.log("Array de frutas después de eliminar el último elemento:");
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta " + (i + 1) + ": " + frutas[i]);
}

console.log("agregar elementos a un array usando .push");
frutas.push("manzana");
console.log("Array de frutas después de agregar un nuevo elemento:");
for (let i = 0; i < frutas.length; i++) {
    console.log("Fruta " + (i + 1) + ": " + frutas[i]);
}
