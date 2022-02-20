// 2. Crear un programa que valide contraseñas. Sólo con métodos de String. Deben cumplir:
// - Mínimo de 7 caracteres
// - Contiene mayúsculas, minúsculas, números y al menos un símbolo
// - No puede tener espacios en blanco


const sNums = "0123456789";
const sMin = "abcdefghijklmñnopqrstuvwxyz";
const sMay = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
const sSig = "¡!¿?-_.&$";

function fInicial() {
    let sPass = prompt("Escribe tu contraseña: ");
    sPass = sPass.trim();

    let bMin = false;
    let bMay = false;
    let bNums = false;
    let bSig = false;

    // Comprobamos primero que tenga 7 caracteres
    if (sPass.length >= 7) {
        for (let i = 0; i < sPass.length; i++) {
            if (sMin.indexOf(sPass.charAt(i), 0) != -1) {
                bMin = true;
            } else if (sMay.indexOf(sPass.charAt(i), 0) != -1) {
                bMay = true;
            } else if (sNums.indexOf(sPass.charAt(i), 0) != -1) {
                bNums = true;
            } else if (sSig.indexOf(sPass.charAt(i), 0) != -1) {
                bSig = true;
            }
        }
        if (bMin && bMay && bNums && bSig) {
            console.log("Contraseña correcta");
        } else {
            console.log("Contraseña incorrecta");
        }
    } else {
        console.log("Contraseña corta");
    }
}

fInicial();