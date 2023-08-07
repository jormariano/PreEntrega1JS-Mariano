const products = [
    {
        id: 1,
        product: "Ecommerce",
        price: 500,
        description: "Tener tu propio Ecommerce para vender todos lo productos que quieras de forma online e impulsa tu negocio",
        descriptionSale: "¡Felicitaciones! Accediste a Ecommerce para vender tus productos online e impulsar tu negocio"
    },
    {
        id: 2,
        product: "Página Web Personal",
        price: 300,
        description: "Adquirir tu página web personalizada para posicionar tu marca personal en internet y redes sociales",
        descriptionSale: "¡Felicitaciones! Accediste a Página Web Personal para posicionar tu marca personal"
    },
    {
        id: 3,
        product: "Página Web Estudio",
        price: 400,
        description: "Adquirir una página web personalizada para tu estudio, así lograras que más clientes te encuentren",
        descriptionSale: "¡Felicitaciones! Accediste a Página Web Estudio para lograr que más clientes te encuentren"
    }
]

const shoppingCart = [];

// Se muestran todos los productos al usuario

function seeProducts() {
    const list = products.reduce((acc, element) => acc += `${element.id}- ${element.product}. Su valor es de ${element.price} usd. Con esta página podras: ${element.description} \n`, "");

    const productList = document.getElementById("product-list");
    productList.innerHTML = list;

    const formUser = document.getElementById("form");
    formUser.addEventListener("submit", valueForm);

    function valueForm(e) {
        e.preventDefault();
        const userChoice = parseInt(e.target.elements.choice.value);
        const productChoice = products.find(e => e.id === userChoice);
        addToCartAndSave(productChoice);
    }
}


// Guardar en localStorage lo seleccionado por el usuario

function addToCartAndSave(productChoice) {
    shoppingCart.push(productChoice);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    askToKeepBuying(productChoice);
}

// El usuario puede elegir seguir comprando o no

function askToKeepBuying(productChoice, productList) {
    const keepBuyingDiv = document.getElementById("keep-buying");
    keepBuyingDiv.style.display = "block";

    const keepBuyingYesButton = document.getElementById("keep-buying-yes");
    const keepBuyingNoButton = document.getElementById("keep-buying-no");

    keepBuyingYesButton.onclick = () => {
        keepBuyingDiv.style.display = "none";
        seeProducts()
    };

    keepBuyingNoButton.onclick = () => {
        keepBuyingDiv.style.display = "none";
        const thanks = document.getElementById("thanks");
        thanks.innerHTML = `
            <h3>¡Muchas gracias por tu compra!</h3>
            <p>Tu producto elegido es: ${productChoice.product}</p>
            <button id="boton">Ver detalles</button>
        `;

        const btn = document.getElementById('boton');
        btn.onclick = () => {
            const detailsDiv = document.createElement("div");
            detailsDiv.innerHTML = `
                <h4>Detalles del producto:</h4>
                <p>ID: ${productChoice.id}</p>
                <p>Precio: ${productChoice.price} usd</p>
                <p>${productChoice.descriptionSale}</p>
            `;
            document.body.append(detailsDiv);
        };
    };
}

seeProducts();

// Acceso al DOM 30': document.getElementById('string'). El string es el id unico que le das a la etiqueta en el html.
// document.getElementByClassName('string'). El string es la class reutilizable que le das a la etiqueta en el html.
// document.getElementByTagName('div')
// variable.innerHTML para agregar y modificar el HTML o variable.innerText
// document.body.append(variable)   append es agregar