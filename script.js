
const textDaArea = document.querySelector(".container__input");
const resultadoText = document.querySelector(".container__input_resultado");
const copiarTexto = document.querySelector(".botao__copiar");


function criptografar(string) {
    return string
        .replaceAll("a", "ai")
        .replaceAll("e", "enter")
        .replaceAll("o", "ober")
        .replaceAll("u", "ufat");
};

function descriptografar(string) {
    return string
        .replaceAll("ai", "a")
        .replaceAll("enter", "e")
        .replaceAll("imes", "i")
        .replaceAll("ober", "o")
        .replaceAll("ufat", "u");
        
};

function btnCriptografar(){
    const textoEncriptado = criptografar(textDaArea.value);
    resultadoText.value = textoEncriptado;
    textDaArea.value = "";
}

function btnDescriptografar(){
    const textoDesencriptado = descriptografar(textDaArea.value);
    resultadoText.value = textoDesencriptado;
    textDaArea.value = "";
}

function btnCopiar() {
    textDaArea.value = resultadoText.value;
    resultadoText.value = "";
};