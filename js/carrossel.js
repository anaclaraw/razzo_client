const carousel = document.querySelector('.carousel');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');
let currentSlide = 0;

nextBtn.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    const boxWidth = boxes[0].offsetWidth + 10; // Largura da box + margem

    if (currentSlide < boxes.length - 3) { // Mostrar 3 itens visíveis
        currentSlide += 1;
        carousel.style.transform = `translateX(-${currentSlide * boxWidth}px)`;
    }
});

prevBtn.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    const boxWidth = boxes[0].offsetWidth + 10;

    if (currentSlide > 0) {
        currentSlide -= 1;
        carousel.style.transform = `translateX(-${currentSlide * boxWidth}px)`;
    }
});
