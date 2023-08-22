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

const cardProducts = document.getElementById('products');

products.forEach((element) => {
    const tittle = document.createElement('h3');
    tittle.className = 'card-tittle';
    tittle.innerHTML = `<h3>Producto: ${element.product} </h3>`
    
    const price = document.createElement('h4');
    price.className = 'card-price';
    price.innerHTML = `<h4><span>Precio: ${element.price} </span></h4>`
    tittle.appendChild(price);

    const description = document.createElement('h4');
    description.className = 'card-description';
    description.innerHTML = `<h4>Descripcion: ${element.description} </h4>`
    tittle.appendChild(description);



    cardProducts.appendChild(tittle);
});