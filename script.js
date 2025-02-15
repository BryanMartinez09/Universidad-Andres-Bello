

function toggleMenu() {
    const menu = document.getElementById('navbar');
    menu.classList.toggle('active');
}

// Cierra el menú al hacer clic fuera de él
document.addEventListener('click', (event) => {
    const menu = document.getElementById('navbar');
    const menuIcon = document.querySelector('.menu-icon');

    if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
        menu.classList.remove('active');
    }
});

// Cierra el menú al hacer scroll
window.addEventListener('scroll', () => {
    const menu = document.getElementById('navbar');
    menu.classList.remove('active');
});
