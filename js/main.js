// Calcular valor de productos seleccionados con envio.

let user1 = "anaclara"
let password1 = "Caballito26"

let user = prompt("Ingrese su nombre de usuario");

if (user == user1) {

    let password = prompt("Ingrese su contraseña");

    if (password == password1) {
        alert("¡Bienvenida " + user1 + "!")
    } else {
        alert("La contraseña no es correcta")
    }
} else {
    alert("El usuario ingresado es incorrecto")
}

let price_product = prompt("Ingresar nombre de producto deseado");

while(price_product != "ESC" ){
   switch (price_product) {
       case "producto1":
            alert("El producto1 sale 20 dólares");
            break;
        case "producto2":
            alert("El producto2 sale 50 dólares");
            break;
        case "producto3":
            alert("El producto3 sale 20 dólares");
            break;
        case "producto4":
            alert("El producto4 sale 50 dólares");
            break;
        case "producto5":
            alert("El producto5 sale 40 dólares");
            break;
       default:
           alert("No selecciono ningún producto")
           break;
   }
   price_product = prompt("Ingresar nombre de producto deseado");
}

function total_price(product2, product5) {
    return product2 + product5;
}

let select_product = total_price(50, 40);

alert("El precio total de los productos seleccionados es: " + select_product + " dólares")

function free_shipping(total_price){
    if (select_product >= 150){
        console.log("El envío es gratis")
    } else {
        console.log("Deberas pagar el envío")
    }
}

function shipping_price(){
    const price_shipping = 50
    return price_shipping + select_product;
}