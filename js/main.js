// Barra de navegacion dinamica

const navBar = [
    {
        label: 'Inicio',
        src: './assets/home.svg',
        url: './index.html'
    },
    {
        label: 'Experiencia',
        src: './assets/profile.svg',
        url: './experiencia.html'
    },
    {
        label: 'Productos',
        src: './assets/eye.svg',
    },
    {
        label: 'Busqueda',
        src: './assets/search.svg',
    },
    {
        label: 'Carrito',
        src: './assets/cart.svg',
        url: './carrito.html'
    }
]

const nav = document.getElementById('navBar');

navBar.forEach((element) => {
    const btnNav = document.createElement('button');
    btnNav.textContent = element.label;
    btnNav.className = 'btn';
    const img = document.createElement('img');
    img.src = element.src;
    img.className = 'btn-icon';
    btnNav.appendChild(img);

    btnNav.addEventListener('click', () => {
        window.location.href = element.url;
    });

    nav.appendChild(btnNav);
});

// Creacion de productos

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

// Se solicitan los productos al backend y se simula una demora de 2 segundos

const askProducts = () => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000);
    });
}

// Se muestran los productos al usuario y elige cual quiere

function seeProducts() {

    const productList = document.getElementById("product-list");
    const h2 = document.createElement("h2");
    h2.textContent = "Productos disponibles:";

    const productListUL = document.createElement("ul");

    askProducts()
        .then((products) => {

            products.forEach((element) => {
                const listItem = document.createElement("li");
                listItem.innerHTML = `
            <span class="product-id">${element.id}- ${element.product}</span><br>
            Su valor es de ${element.price} USD.<br> 
            <strong>Con esta página podrás:</strong><br> 
            ${element.description}
        `;
                productListUL.appendChild(listItem);
            });

            productList.appendChild(h2);
            productList.appendChild(productListUL);
        })
        .catch((e) => {
            console.log("Hubo un error, vuelva a cargar la pagina")
        })

    // Formulario hacerlo segun la clase de Eventos en 1h 31'

    const formUser = document.getElementById("form");
    formUser.addEventListener("submit", valueForm);

    function valueForm(e) {
        e.preventDefault();
        const userChoice = parseInt(e.target.elements.choice.value);
        const productChoice = products.find(e => e.id === userChoice);

        const nameUser = e.target.elements.name.value;
        const surnameUser = e.target.elements.surname.value;
        const emailUser = e.target.elements.email.value;

        const nameMessage = document.getElementById("nameMessage");
        const surnameMessage = document.getElementById("surnameMessage");
        const emailMessage = document.getElementById("emailMessage");

        // Operador ternario para verificar los campos completados por el usuario
        nameUser !== '' ? nameMessage.textContent = 'Nombre es válido' : nameMessage.textContent = 'Nombre esta vacío';
        surnameUser !== '' ? surnameMessage.textContent = 'Apellido es válido' : surnameMessage.textContent = 'Apellido esta vacío';
        emailUser !== '' ? emailMessage.textContent = 'Email es válido' : emailMessage.textContent = 'Email esta vacío';

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

// Comentarios de clientes:

async function comments() {

    try {
        
        const contenedor = document.getElementById("commentsCard")
        commentsCard.className = 'comments-card';

        const tittle = document.createElement('h3');
        tittle.className = 'card-tittle';

        tittle.innerHTML = `<h3>Comentarios de clientes: </h3>`

        contenedor.appendChild(tittle);

        const div = document.createElement('div');
        div.className = 'card';

        for (let i = 1; i <= 6; i++) {

            const customerFeedback = await fetch(`https://jsonplaceholder.typicode.com/comments/${i}`);

            const parsedCustomerFeedback = await customerFeedback.json();

            console.log(parsedCustomerFeedback);


            const innerDiv = document.createElement('div');
            innerDiv.className = 'card-body';

            innerDiv.innerHTML = `<h4>${parsedCustomerFeedback.name}</h4>
                                  <p>Comentario: ${parsedCustomerFeedback.body} </p>`


            div.appendChild(innerDiv);
        }
        contenedor.appendChild(div);
    } catch (e) {
        console.log('Error, vuelva a cargar la pagina', e);
    }
}comments();

const footerCopy = document.getElementById('footer');
footerCopy.className = 'footer';

footerCopy.innerHTML = `<p>© 2023 JotaMariano</p>`


// Simular carrito de compra hasta que el usuario ingrese datos de su tarjeta de credito
// Clase Librerias: Toastify 1h 12' (agregar para notificar que anadio un producto al carrito)
// Agregar Readme
