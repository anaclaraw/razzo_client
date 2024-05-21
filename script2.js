document.addEventListener('DOMContentLoaded', function() {
    const hamburguer = document.querySelector('.hamburguer');
    const navMenu = document.querySelector('.nav-menu');

    hamburguer.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
});
