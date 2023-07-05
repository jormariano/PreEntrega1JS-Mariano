// Calcular valor de un producto seleccionado con impuestos y descuentos

let user = "anaclara"
let password = "Caballito26"

let usuario = prompt("Ingrese su nombre de usuario");

if (usuario == user) {

    let contrasenia = prompt("Ingrese su contraseña");

    if (contrasenia == password) {
        alert("¡Bienvenida " + user + "!")
    } else {
        alert("La contraseña no es correcta")
    }
} else {
    alert("El usuario ingresado es incorrecto")
}

let precio_foto = prompt("Ingresar nombre de foto deseada");

while(precio_foto != "ESC" ){
   switch (precio_foto) {
       case "foto1":
            alert("La foto1 sale 20 dólares");
            break;
        case "foto2":
            alert("La foto2 sale 50 dólares");
            break;
        case "foto3":
            alert("La foto3 sale 20 dólares");
            break;
        case "foto4":
            alert("La foto4 sale 50 dólares");
            break;
        case "foto5":
            alert("La foto5 sale 40 dólares");
            break;
       default:
           alert("No selecciono ninguna foto")
           break;
   }
   precio_foto = prompt("Ingresar nombre de foto deseada");
}

function precio_total(foto1, foto5) {
    return foto1 + foto5;
}

let fotos_seleccionadas = precio_total(30, 50);

alert("El precio total de las fotos seleccionadas es de: " + fotos_seleccionadas + " dólares")

function precio_minimo(precio_total){
    if (fotos_seleccionadas >= 150){
        console.log("El envío es gratis")
    } else {
        console.log("Deberas pagar el envío")
    }
}

function precio_envio(){
    const Costo_Envio = 50
    return Costo_Envio + fotos_seleccionadas;
}