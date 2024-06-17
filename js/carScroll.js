
///////////CÓDIGO NÃO TERMINADO

let rotationAngle = 20; // Começa com 20 graus

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const fixedDiv = document.getElementById('MyImage');
    
    console.log('scroll: ' + scrollPosition);

    // Verifica se o scroll aumentou ou diminuiu 20 unidades
    if (scrollPosition % 20 === 0) {
        // Alterna entre 20 e -20 graus
        rotationAngle = rotationAngle === 20 ? -20 : 20;
        fixedDiv.style.transform = `rotate(${rotationAngle}deg) translateX(${rotationAngle}px) `;
    }
});



