





// Definição dos dados dos campeonatos
const campeonatos = {
    formulaE: {
        color: "#21cdfa",
        title: "Formula E",
        rounds: [
            { city: "São Paulo", round: 1, img: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg" },
            { city: "Mexico City", round: 2, img: "https://s4.static.brasilescola.uol.com.br/be/2022/10/bandeira-do-mexico.jpg" },
            { city: "Jeddah", round: 3, img: "https://s3.static.brasilescola.uol.com.br/be/2022/10/bandeira-arabia-saudita1.jpg" },
            { city: "Jeddah", round: 4, img: "https://s3.static.brasilescola.uol.com.br/be/2022/10/bandeira-arabia-saudita1.jpg" },
            { city: "TBC", round: 5, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPy2LKBdMPjnwo31QJSVYExVGcF0dBeiiyQ&s" },
            { city: "Miami", round: 6, img: "../assets/EUA.webp" },
            { city: "Monaco", round: 7, img: "../assets/monaco.png" },
            { city: "Monaco", round: 8, img: "../assets/monaco.png" },
            { city: "Tokyo", round: 9, img: "../assets/japao.png" },
            { city: "Tokyo", round: 10, img: "../assets/japao.png" },
            { city: "Shanghai", round: 11, img: "../assets/china.png" },
            { city: "Shanghai", round: 12, img: "../assets/china.png" },
            { city: "Jakarta", round: 13, img: "../assets/monaco.png" },
            { city: "Berlin", round: 14, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png" },
            { city: "Berlin", round: 15, img: "../assets/alemanha.png" },
            { city: "London", round: 16, img: "../assets/inglaterra.png" },
            { city: "London", round: 17, img: "../assets/inglaterra.png" }
            // Adicione mais rounds conforme necessário
        ],
        patrocinadores: [
            { src: "../assets/patrocinador1.webp", alt: "Patrocinador" },
            { src: "../assets/patrocinador2.webp", alt: "Patrocinador" },
            { src: "../assets/patrocinador3.webp", alt: "Patrocinador" },
            { src: "../assets/patrocinador4.webp", alt: "Patrocinador" },
            { src: "../assets/patrocinador6.webp", alt: "Patrocinador" },
            { src: "../assets/patrocinador7.webp", alt: "Patrocinador" },
            { src: "../assets/patrocinador8.png", alt: "Patrocinador" },
            { src: "../assets/patrocinador10.png", alt: "Patrocinador" }
            // Adicione mais patrocinadores conforme necessário
        ],
        outrosCampeonatos: [
            { link: "https://www.fiaformulae.com/pt-br/calendar#stories/6ced0184", image: "../assets/campeonato1.jpeg", alt: "Campeonato 1" },
            { link: "https://www.fiaformulae.com/pt-br/calendar#stories/d8b87d9a", image: "../assets/campeonato2.jpeg", alt: "Campeonato 2" }
            // Adicione mais campeonatos conforme necessário
        ]
    },
    formula1: {
        color: "#d4150f",
        title: "Formula 1",
        rounds: [
            { city: "Bahrain", round: 1, img: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg" },
            { city: "Saudi Arabia", round: 2, img: "https://s3.static.brasilescola.uol.com.br/be/2022/10/bandeira-arabia-saudita1.jpg" },
            { city: "Melbourne", round: 3, img: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg" },
            { city: "Baku", round: 4, img: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg" },
            { city: "Miami", round: 5, img: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" },
            { city: "Monaco", round: 6, img: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg" },
            { city: "Barcelona", round: 7, img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
            { city: "Silverstone", round: 8, img: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg" },
            { city: "Spa-Francorchamps", round: 9, img: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" },
            { city: "Monza", round: 10, img: "../assets/italia.png" },
            { city: "Suzuka", round: 11, img: "https://upload.wikimedia.org/wikipedia/en/9/9e/Flag_of_Japan.svg" },
            { city: "Mexico City", round: 12, img: "https://s4.static.brasilescola.uol.com.br/be/2022/10/bandeira-do-mexico.jpg" },
            { city: "São Paulo", round: 13, img: "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/acervo/simbolos-nacionais/bandeira/bandeiranacionalbrasil_.jpg" },
            { city: "Abu Dhabi", round: 14, img: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" }
        ],
        patrocinadores: [
            { src: "https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/rolex", alt: "F1 Patrocinador 1" },
            { src: "https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/pirelli", alt: "F1 Patrocinador 2" },
            { src: "https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/aramco", alt: "F1 Patrocinador 2" },
            { src: "https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/Heineken%20-%20Outlined", alt: "F1 Patrocinador 2" },
            { src: "https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/dhl", alt: "F1 Patrocinador 2" },
            { src: "https://media.formula1.com/image/upload/f_auto,c_limit,w_187,q_auto/f_auto/q_auto/content/dam/fom-website/2020/sponsors/qatar", alt: "F1 Patrocinador 2" },
        ],
        outrosCampeonatos: [
            { link: "https://www.formula1.com/en/racing/2024/united-states", image: "https://media.formula1.com/content/dam/fom-website/races/2024/United_States_Grand_Prix.png", alt: "Campeonato 3" },
            { link: "https://www.formula1.com/en/racing/2024/brazil", image: "https://media.formula1.com/content/dam/fom-website/races/2024/S%C3%A3o_Paulo_Grand_Prix.png", alt: "Campeonato 4" }
        ]
    },
    nascar: {
        color: "#fadd21",
        title: "nascar",
        rounds: [
            { city: "Daytona", round: '25 de outubro', img: "../assets/EUA.webp" },
            { city: "Talladega", round: '26 de outubro', img: "../assets/EUA.webp" },
            { city: "Charlotte", round: '27 de outubro', img: "../assets/EUA.webp" },
            { city: "Las Vegas", round: '28 de outubro', img: "../assets/EUA.webp" },
            { city: "Phoenix", round: '29 de outubro', img: "../assets/EUA.webp" },
            { city: "Florida", round: '2025', img: "../assets/EUA.webp" },
            { city: "Carolina do Norte", round: '2025', img: "../assets/EUA.webp" },
            { city: "Florida", round: '2025', img: "../assets/EUA.webp" }
        ],
        patrocinadores: [
            { src: "https://www.nascar.com/wp-content/uploads/sites/7/2017/01/Chevy-Driver-Page-New-2-160x811-265x180.png", alt: "NASCAR Patrocinador 1" },
            { src: "https://www.nascar.com/wp-content/uploads/sites/7/2020/01/Coca-Cola-1.png", alt: "NASCAR Patrocinador 2" },
            { src: "https://www.nascar.com/wp-content/uploads/sites/7/2020/01/Xfinity.png", alt: "NASCAR Patrocinador 2" },
            { src: "https://www.nascar.com/wp-content/uploads/sites/7/2024/08/13/ABB_Logo_Screen_RGB.png", alt: "NASCAR Patrocinador 2" },
        ],
        outrosCampeonatos: [
            { link: "https://www.nascar.com/news-media/2023/06/02/nascar-tv-guide/", image: "https://www.nascar.com/wp-content/uploads/sites/7/2024/09/11/EDI-PSP-24-Hero-1300x690-WGI-2.jpg", alt: "NASCAR Campeonato 1" },
            { link: "https://www.nascar.com/videos/franchise/race-rewind/race-rewind-las-vegas-leaves-hangover-for-round-of-8-drivers/", image: "https://www.nascar.com/wp-content/uploads/sites/7/2024/10/20/REWIND-VEGAS-625x340.jpg", alt: "NASCAR Campeonato 2" },
            { link: "https://nascar101.nascar.com/2024/09/03/nascar-playoffs-101-what-you-need-to-know-2/", image: "https://nascar101.nascar.com/wp-content/uploads/sites/48/2024/09/03/2024PlayoffsGrid-1024x576.jpeg", alt: "NASCAR Campeonato 2" }
        ]
    },
    rally: {
        color: "#ffffff",
        title: "rally",
        rounds: [
            { city: "Monte Carlo", round: 1, img: "../assets/monaco.png" },
            { city: "Sardinia", round: 2, img: "../assets/italia.png" },
            { city: "Acropolis", round: 3, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/255px-Flag_of_Greece.svg.png" },
            { city: "Finland", round: 4, img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/1200px-Flag_of_Finland.svg.png" },
            { city: "Rally GB", round: 5, img: "../assets/inglaterra.png" }
        ],
        patrocinadores: [
            { src: "../assets/rally_patrocinador1.webp", alt: "Rally Patrocinador 1" },
            { src: "../assets/rally_patrocinador2.webp", alt: "Rally Patrocinador 2" }
        ],
        outrosCampeonatos: [
            { link: "https://www.rally.com/calendar#stories/1", image: "../assets/rally_campeonato1.jpeg", alt: "Rally Campeonato 1" },
            { link: "https://www.rally.com/calendar#stories/2", image: "../assets/rally_campeonato2.jpeg", alt: "Rally Campeonato 2" }
        ]
    },
    wec: {
        color: "#1d4ea3",
        title: "wec",
        rounds: [
            { city: "Le Mans", round: 1, img: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg" },
            { city: "Spa-Francorchamps", round: 2, img: "https://escolaeducacao.com.br/wp-content/uploads/2020/05/Flag_of_Belgium_1830.svg.png" },
            { city: "Fuji", round: 3, img: "../assets/japao.png" },
            { city: "Silverstone", round: 4, img: "../assets/inglaterra.png" },
            { city: "Sebring", round: 5, img: "../assets/EUA.webp" }
        ],
        patrocinadores: [
            { src: "../assets/wec_patrocinador1.webp", alt: "WEC Patrocinador 1" },
            { src: "../assets/wec_patrocinador2.webp", alt: "WEC Patrocinador 2" }
        ],
        outrosCampeonatos: [
            { link: "https://www.wec.com/calendar#stories/1", image: "../assets/wec_campeonato1.jpeg", alt: "WEC Campeonato 1" },
            { link: "https://www.wec.com/calendar#stories/2", image: "../assets/wec_campeonato2.jpeg", alt: "WEC Campeonato 2" }
        ]
    },

    // Adicione mais campeonatos conforme necessário
};

// Função para renderizar os dados do campeonato
function renderCampeonato(campeonato) {
    // Título do campeonato

    titulo = document.getElementById("title-campeonato")
    titulo.textContent = campeonato.title.toUpperCase();
    // Seleciona todos os elementos com a classe "title-campeonato"
    const titulosCampeonatos = document.querySelectorAll('.title-campeonato');

    // Itera sobre cada elemento e altera a cor do texto
    titulosCampeonatos.forEach(titulo => {
        titulo.style.color =  campeonato.color; // Substitua 'blue' pela cor desejada
    });

  
    // Rounds
    const roundsContainer = document.getElementById("grid-rounds");
    roundsContainer.innerHTML = ""; // Limpa o conteúdo existente
    campeonato.rounds.forEach((round,index) => {
        const raceCard = document.createElement('div');
        raceCard.classList.add('race-card'); // Adicionando a classe 'hidden'
        raceCard.style.borderColor = campeonato.color
        raceCard.style.background = campeonato.color + '5a'

        raceCard.innerHTML = `
            <img src="${round.img}" alt="Race ${round.round}">
            <div class="race-info">
                <h3>${round.city}</h3>
                <p>Round ${round.round}</p>
            </div>
        `;
        if (index === 0) {
            const linkPageMapa = document.createElement('a');
            linkPageMapa.textContent = 'Acompanhar ao Vivo';
            linkPageMapa.href = './mapa.html';
            linkPageMapa.classList.add('link-page-mapa')
            raceCard.appendChild(linkPageMapa);
        }
        roundsContainer.appendChild(raceCard);
    });

    // Patrocinadores
    const patrocinadoresContainer = document.getElementById("grid-patrocinadores");
    patrocinadoresContainer.innerHTML = ""; // Limpa o conteúdo existente
    campeonato.patrocinadores.forEach(patrocinador => {
        const patrocinadorElement = document.createElement("div");
        patrocinadorElement.classList.add("item2");
        patrocinadorElement.innerHTML = `<img src="${patrocinador.src}" alt="${patrocinador.alt}" class="logo2">`;
        patrocinadoresContainer.appendChild(patrocinadorElement);
    });

    // Outros campeonatos
    const outrosCampeonatosContainer = document.getElementById("grid-campeonatos");
    outrosCampeonatosContainer.innerHTML = ""; // Limpa o conteúdo existente
    campeonato.outrosCampeonatos.forEach(camp => {
        const campElement = document.createElement("figure");
        campElement.classList.add("img-camp");
        campElement.innerHTML = `<a href="${camp.link}"><img src="${camp.image}" alt="${camp.alt}"></a>`;
        outrosCampeonatosContainer.appendChild(campElement);
    });

    // Exibir o container do campeonato
    document.getElementById("container-campeonato").classList.remove("hidden");
}

// Chamada da função para renderizar um campeonato específico
// Isso pode ser feito com base na escolha do usuário, por exemplo:
 // Pode ser alterado para `campeonatos.formula1`, etc.









//adionar display grid no grid-rounds-formulae
const toggleBtn = document.getElementById('btn-toggle-formulae');
// toggleBtn.addEventListener('click', () => {
//     FormulaEContainer.classList.toggle('hidden');
// });
renderCampeonato(campeonatos.formulaE)
function ToggleCampeonato(campeonatoX){
    renderCampeonato(campeonatos[campeonatoX]);
}
