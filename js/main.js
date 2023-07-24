// Login usuario

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

while (price_product != "ESC") {
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

// Calcular pagos en cuotas sobre un monto determinado.
// Calcular valor final de un producto seleccionado en función de impuestos y descuentos.
// Calcular tiempo de espera promedio en relación con la cantidad de productos adquiridos.


function free_shipping(total_price) {
    if (select_product >= 150) {
        console.log("El envío es gratis")
    } else {
        console.log("Deberas pagar el envío")
    }
}

function shipping_price() {
    const price_shipping = 50
    return price_shipping + select_product;
}

// Constructor de objeto (key: value)

class PagesWeb {
    constructor(product, id, price, description, url_img) {
        this.product = product;
        this.id = id;
        this.price = price;
        this.description = description;
        this.url_img = url_img;
        this.sold = false
    }
    // metodos:

    summary() {
        return "Este producto es: " + this.product + ". Su valor es de " + this.price + "dolares." + "Animate y " + this.description;
    }
    soldYes() {
        this.sold = true;
    }
}

// Agregar imagenes de muestra de como seria la pagina web:

const pagesWeb1 = new PagesWeb("Ecommerce", 1, 500, "ten tu propio ecommerce para vender todos lo productos que quieras de forma online e impulsa tu negocio");

const pagesWeb2 = new PagesWeb("Página Web Personal", 2, 300, "adquiere tu pagina web personalizada para posicionarte en internet y las redes sociales");

const pagesWeb3 = new PagesWeb("Página Web Comercio", 2, 400, "adquiere una pagina web personalizada para tu negocio y posicionarte en internet y las redes sociales");

pagesWeb1.summary()
pagesWeb2.summary()
pagesWeb3.summary()

let compras = ""
let rta = ""

do {
    console.log("Las opciones de Páginas Web para comprar son: \n" + pagesWeb1.summary()+"\n" + pagesWeb2.summary()+"\n" + pagesWeb3.summary())
    compras = prompt("¿Que Página Web adquiris?");
    console.log("El ecommerce vale: \n" + pagesWeb1.price +"\n" + "El IVA es: " + bill.detailIva()+"\n" + "El total es: " + bill.addIva())
    rta = prompt("¿Queres seguir comprando? Pulsa una tecla, sino \"ESC\" para salir").toUpperCase();
} while (rta != "ESC");

class Bill {
    constructor(price_IVA){
        this.price_IVA = price_IVA;
    }
    detailIva() {
        return this.price_IVA * 0.21;
    }
    addIva() {
        return this.price_IVA * 1.21;
    }
}

const bill = new Bill(product1.price_IVA);


const project = ['Ecommerce de muebles a medida','Pagina Web de estudio contable', 'Ecommerce de cuadros', 'Pagina Web de diseñadora gráfica']

console.log(project.indexOf('Ecommerce de cuadros'))

project.splice(1, 1)
console.log(project)