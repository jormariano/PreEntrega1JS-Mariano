const products = [
    {
        id: 1,
        product: "Ecommerce",
        price: 500,
        description: "Tener tu propio Ecommerce para vender todos lo productos que quieras de forma online e impulsa tu negocio"
    },
    {
        id: 2,
        product: "Página Web Personal",
        price: 300,
        description: "Adquierir tu página web personalizada para posicionar tu marca personal en internet y redes sociales"
    },
    {
        id: 3,
        product: "Página Web Estudio",
        price: 400,
        description: "Adquierir una página web personalizada para tu estudio, así lograras que más clientes te encuentren"
    }
]

const shoppingCart = [];

function seeProducts() {
    const list = products.reduce((acc, element) => acc += `${element.id}- ${element.product}. Su valor es de ${element.price} usd. Con esta página podras: ${element.description} \n`, "" );

    const userChoice = parseInt(prompt("Elige la página que te gustaría comprar por número \n" + list));

    const productChoice = products.find(e => e.id === userChoice);

    shoppingCart.push(productChoice);

    console.log(productChoice);

    askToKeepBuying();
}

function askToKeepBuying() {
        
    const keepBuying = prompt("¿Quieres seguir comprando? (Responde 'si' o 'no')");

    if (keepBuying && keepBuying.toLowerCase() === 'si') {
        seeProducts();
    } else {
        alert("¡Muchas gracias por tu compra!");
    }
}

seeProducts();