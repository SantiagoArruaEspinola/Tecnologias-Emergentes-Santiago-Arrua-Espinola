
let longitud;
let caracteres;
let contra;


function generarContraseña() {
    caracteres = "";
    contra = "";

     longitud = document.getElementById("longitud").value;


    if (document.getElementById("mayusculas").checked) {
        caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    if (document.getElementById("minusculas").checked) {
        caracteres += "abcdefghijklmnopqrstuvwxyz";
    }

    if (document.getElementById("numeros").checked) {
        caracteres += "0123456789";
    }

    if (document.getElementById("simbolos").checked) {
        caracteres += "!@#$%^&*()_+-=[]{}|;:,.<>?";
    }

    if (caracteres === "") {
        alert("Selecciona al menos una opción");
        return;
    }



    for (let i = 0; i < longitud; i++) {

        let posicion = Math.floor(
            Math.random() * caracteres.length
        );

        contra += caracteres[posicion];
    }

    document.getElementById("resultado").value = contra;
}


function copiarContraseña() {

    let password = document.getElementById("resultado").value;

    navigator.clipboard.writeText(password);

    alert("Contraseña copiada");
}


