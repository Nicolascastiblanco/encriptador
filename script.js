const textarea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btnCopiar");
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"





function bottonencriptar() {
    const textoencriptado = encriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = "";
    mensaje.style.backgroundImage = "none";

}

function encriptar(stringEncriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringEncriptada.includes(matrizcodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])
        }


    }
    return stringEncriptada;
}
function bottondesencriptar() {
    const textoencriptado = desencriptar(textarea.value)
    mensaje.value = textoencriptado
    textarea.value = "";

}
function desencriptar(stringdesencriptada) {
    let matrizcodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

    stringdesencriptada = stringdesencriptada.toLowerCase();
    for (let i = 0; i < matrizcodigo.length; i++) {
        if (stringdesencriptada.includes(matrizcodigo[i][1])) {
            stringdesencriptada = stringdesencriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])
        }


    }
    return stringdesencriptada;
}

function copiarPortapapeles(){
    var mensajeCopiado = mensaje.value;
    navigator.clipboard.writeText(mensajeCopiado)
        .then(()=>{
            console.log("Texto copiado al portapapeles");
        })
        .catch(err =>{
            console.error("Algo ha salido mal", err);
        })
    mensaje.value = "";
    fondo.style.opacity = "1";
    contenido.style.visibility = "visible";
    btnCopiar.style.visibility = "hidden";
}
