var imagem_carrousel1 = document.getElementById('img_pista_back')

if (window.innerWidth < 500) {
    imagem_carrousel1.src = '/assets/pista_background_mobile.png'
}else{
    imagem_carrousel1.src = '/assets/pista_background.png'
    }