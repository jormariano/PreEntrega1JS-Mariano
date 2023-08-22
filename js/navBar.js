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
        if (element.url) {
            window.location.href = element.url
        } else {
            console.log('Página en construcción')
        }
    });

    nav.appendChild(btnNav);
});
