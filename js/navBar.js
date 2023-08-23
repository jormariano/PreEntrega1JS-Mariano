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
const modalContainer = document.getElementById('modalContainer');

navBar.forEach((element) => {
    const btnNav = document.createElement('button');
    btnNav.textContent = element.label;
    btnNav.className = 'btn';
    const img = document.createElement('img');
    img.src = element.src;
    img.className = 'btn-icon';
    btnNav.appendChild(img);

    // youtube, parte 2 a los 3'. Hay que separar este carrito
    if (element.label === 'Carrito') {
        btnNav.addEventListener('click', () => {
            modalContainer.innerHTML = "";
            modalContainer.style.display = "flex";
    
            const modalHeader = document.createElement('div')
            modalHeader.className = "modal-header"

            modalHeader.innerHTML = `
            <h1 class = "modal-header-tittle">Carrito</h1>
            `
            modalContainer.appendChild(modalHeader);

            const modalButton = document.createElement('h2');
            modalButton.className = "modal-button"
            modalButton.innerText = "X"

            modalButton.addEventListener("click", () => {
                modalContainer.style.display = "none";
            })

            modalHeader.appendChild(modalButton);

            shoppingCart.forEach((products) => {
                const cartContent = document.createElement('div');
                cartContent.className = "cart-content"
    
                cartContent.innerHTML = `
                <h3>${products.product}</h3>
                <img src="${products.img}">
                <p>Precio: ${products.price} usd.</p>
                `
                modalContainer.appendChild(cartContent);
            });

            const total = shoppingCart.reduce((acc, el) => acc + el.price, 0);

            const totalBuying = document.createElement('div');
            totalBuying.className = "total-buying";

            totalBuying.innerHTML = `
            <h3>Total a pagar: ${total} usd.</h3>
            `

            modalContainer.appendChild(totalBuying);
        });
    } else {
        btnNav.addEventListener('click', () => {
            if (element.url) {
                window.location.href = element.url;
            } else {
                console.log('Página en construcción');
            }
        });
    }

    nav.appendChild(btnNav);
});
