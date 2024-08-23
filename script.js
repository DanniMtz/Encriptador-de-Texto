const inputText = document.getElementById("input-text");
const outputText = document.getElementById("output-text");
const encryptBtn = document.getElementById("encrypt-btn");
const decryptBtn = document.getElementById("decrypt-btn");
const copyBtn = document.getElementById("copy-btn");
const inactiveImage = document.getElementById("inactive-image");
const inactiveP = document.getElementById("inactive-p");

const rules = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function encrypt(text) {
    return text.replace(/[eioua]/g, match => rules[match]);
}

function decrypt(text) {
    let decryptedText = text;
    for (const key in rules) {
        decryptedText = decryptedText.replace(new RegExp(rules[key], 'g'), key);
    }
    return decryptedText;
}

function displayResult(result) {
    inactiveImage.style.display = "none";
    inactiveP.style.display = "none";
    outputText.style.display = "block";
    outputText.value = result;
    copyBtn.style.display = "block";
}

encryptBtn.addEventListener("click", () => {
    const text = inputText.value;
    if (text) {
        const encryptedText = encrypt(text);
        displayResult(encryptedText);
    }
});

decryptBtn.addEventListener("click", () => {
    const text = inputText.value;
    if (text) {
        const decryptedText = decrypt(text);
        displayResult(decryptedText);
    }
});

copyBtn.addEventListener("click", () => {
    let texto = document.getElementById("output-text").innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert(`Texto copiado al portapapeles` );
    }).catch(err => {
        console.error("Error al copiar el texto: ", err);
    });
});

