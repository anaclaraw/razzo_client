const countdownDate = new Date("2024-12-31T23:59:00").getTime();

function updateCountdown() {
    // Obtém a data e hora atuais
    const now = new Date().getTime();

    // Calcula a diferença entre a data atual e a data da contagem regressiva
    const distance = countdownDate - now;

    // Calcula os dias, horas, minutos e segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe o resultado no elemento com id "countdown"
    document.getElementById("countdown").innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

   
}

// Atualiza a contagem regressiva a cada 1 segundo
const x = setInterval(updateCountdown, 1000);