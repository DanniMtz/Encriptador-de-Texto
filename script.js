// Obtener referencias a los elementos del DOM
const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const copyBtn = document.getElementById("copy-btn");
const inactiveImage = document.getElementById("inactive-image");
const inactiveP = document.getElementById("inactive-p");

// Reglas de encriptación: cada vocal se reemplaza con un string específico
const rules = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

// Función para encriptar el texto según las reglas definidas
function encrypt(text) {
    return text.replace(/[eioua]/g, match => rules[match]);
}

// Función para desencriptar el texto según las reglas definidas
function decrypt(text) {
    let decryptedText = text;
    for (const key in rules) {
        decryptedText = decryptedText.replace(new RegExp(rules[key], 'g'), key);
    }
    return decryptedText;
}

// Función para mostrar el resultado en el área de salida y ocultar elementos inactivos
function displayResult(result) {
    inactiveImage.style.display = "none";  // Ocultar imagen inactiva
    inactiveP.style.display = "none";      // Ocultar párrafo inactivo
    outputText.style.display = "block";    // Mostrar área de salida
    outputText.value = result;             // Mostrar el resultado en el área de salida
    copyBtn.style.display = "block";       // Mostrar botón de copiar
}

// Función para validar que el texto solo contenga letras minúsculas sin acentos ni caracteres especiales
function isValidText(text) {
    const regex = /^[a-z]+$/; // Expresión regular que solo permite letras minúsculas
    return regex.test(text);  // Retorna true si el texto cumple con la expresión regular
}

// Manejador del evento click para el botón de encriptar
encryptBtn.addEventListener("click", () => {
    const text = inputText.value;  // Obtener el texto del input
    if (text && isValidText(text)) {  // Verificar que el texto no esté vacío y sea válido
        const encryptedText = encrypt(text);  // Encriptar el texto
        displayResult(encryptedText);  // Mostrar el texto encriptado
    } else {
        alert("El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.");  // Mostrar alerta si el texto no es válido
    }
});

// Manejador del evento click para el botón de desencriptar
decryptBtn.addEventListener("click", () => {
    const text = inputText.value;  // Obtener el texto del input
    if (text && isValidText(text)) {  // Verificar que el texto no esté vacío y sea válido
        const decryptedText = decrypt(text);  // Desencriptar el texto
        displayResult(decryptedText);  // Mostrar el texto desencriptado
    } else {
        alert("El texto debe contener solo letras minúsculas sin acentos ni caracteres especiales.");  // Mostrar alerta si el texto no es válido
    }
});

// Manejador del evento click para el botón de copiar
copyBtn.addEventListener("click", () => {
    let texto = document.getElementById("output-text").innerText;  // Obtener el texto del área de salida
    navigator.clipboard.writeText(texto).then(() => {  // Intentar copiar el texto al portapapeles
        alert("Texto copiado al portapapeles");  // Mostrar mensaje de éxito
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);  // Mostrar mensaje de error en la consola
    });
});
