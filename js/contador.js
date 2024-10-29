// Array com as datas de contagem regressiva
const countdownDates = [
    new Date("2024-11-01T00:00:00").getTime(), // Exemplo de data 2
    new Date("2024-12-07T23:59:59").getTime(), // Exemplo de data 1
    // Adicione mais datas conforme necessário
];

function updateCountdown() {
    // Obtém a data e hora atuais
    const now = new Date().getTime();

    countdownDates.forEach((countdownDate, index) => {
        
        // Calcula a diferença entre a data atual e a data da contagem regressiva
        const distance = countdownDate - now;

        // Verifica se a contagem regressiva chegou a zero
        if (distance < 0) {
            document.getElementById(`countdown-${index}`).innerHTML = "Tempo esgotado!";
            return;
        }

        // Calcula os dias, horas, minutos e segundos restantes
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Exibe o resultado no elemento com id "countdown" seguido pelo índice
        document.getElementById(`countdown-${index}`).innerHTML = 
            days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    });
}

// Atualiza a contagem regressiva a cada 1 segundo
setInterval(updateCountdown, 1000);
