// Función para validar el texto ingresado
function validarTexto(texto) {
    // Expresiones regulares para buscar caracteres especiales y mayúsculas
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;
    let vacio = "";

    // Validación: si el texto contiene mayúsculas o caracteres especiales
    if (texto.match(mayusculas) || texto.match(caracteres)) {
        alert("No se permiten caracteres especiales ni mayúsculas");
        return true;
    // Validación: si el texto está vacío
    } else if (texto == vacio) {
        alert("Ingrese un mensaje para encriptar");
        return true;
    // Si pasa las validaciones
    } else {
        return false;
    }
}

// Selección del botón de encriptar
let btnEncriptar = document.querySelector("#btn-encriptar");

// Evento al hacer clic en el botón de encriptar
btnEncriptar.addEventListener("click", function () {
    // Obtener el texto ingresado por el usuario
    let textInput = document.querySelector("#input-texto").value;
    let textoIngresado = textInput;

    // Validar el texto y, si es válido, encriptar
    if (validarTexto(textoIngresado) == false) {
        let Encriptado = encriptar(textoIngresado);
        let resultado = document.querySelector("#msg");
        resultado.value = Encriptado;
    } else {
        textInput = ""; // Limpiar el texto si la validación falla
    }
});

// Diccionario de reglas para la encriptación
const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

// Función para encriptar el texto ingresado
function encriptar(textoIngresado) {
    let Encriptado = "";
    // Reemplazar cada vocal por su equivalente en el diccionario de reglas
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj, reglas[obj]);
        textoIngresado = Encriptado;
    }
    return (Encriptado);
}

// Selección del botón para copiar el texto encriptado
let btnCopiar = document.querySelector("#btn-copy");

// Evento al hacer clic en el botón de copiar
btnCopiar.addEventListener("click", function () {
    // Copiar el texto encriptado al portapapeles
    let Copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(Copiado);
    // Limpiar el campo de texto de entrada
    document.querySelector("#input-texto").value = "";
});

// Selección del botón de desencriptar
let btnDesencriptar = document.querySelector("#btn-desencriptar");

// Evento al hacer clic en el botón de desencriptar
btnDesencriptar.addEventListener("click", function () {
    // Obtener el texto ingresado y desencriptarlo
    let textoIngresado = document.querySelector("#input-texto").value;
    let Desencriptado = desencriptar(textoIngresado);

    // Mostrar el texto desencriptado en el área de resultado
    let resultado = document.querySelector("#msg");
    resultado.value = Desencriptado;
});

// Función para desencriptar el texto encriptado
function desencriptar(textoIngresado) {
    let Encriptado = "";
    // Reemplazar cada patrón encriptado por su vocal original
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[obj], obj);
        textoIngresado = Encriptado;
    }
    return (Encriptado);
}
