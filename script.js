
 const textDaArea = document.querySelector(".container__input");
 const resultadoText = document.querySelector(".container__input_resultado");

function btnCriptografar(){

    const textoEncriptado = criptografar(textDaArea.value);
    resultadoText.value = textoEncriptado;
    textDaArea.value = "";
};

function btnDescriptografar(){
    const textoDesencriptado = descriptografar(textDaArea.value);
    resultadoText.value = textoDesencriptado;
    textDaArea.value = "";
};

function criptografar(string) {
    const resultadoText = string
    .replaceAll("a", "ai")
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
    return resultadoText;
}

function descriptografar(string) {
    const resultadoText = string
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u")
    .replaceAll("imes", "i");
    return resultadoText;
}
        /* falta fazer o btnCopir funcionar */


function btnCopiar( resultadoText){
    return textDaArea;
}
