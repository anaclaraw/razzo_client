var map = L.map('map', {
    scrollWheelZoom: false, // Desabilita o zoom pelo scroll
}).setView([-23.52636, -46.63850], 17.5);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
    minZoom: 16,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    opacity: 1 // Definindo a opacidade do mapa
}).addTo(map);



var polygon = L.polygon([
    [-23.52648, -46.64135],
    [-23.52597, -46.64030],
    [-23.52526, -46.63920],
    [-23.52478, -46.63814],
    [-23.52517, -46.63705],
    [-23.52611, -46.63644],
    [-23.52727, -46.63615],
    [-23.52791, -46.63732]
], {
    fillColor: '#4d5457',
    color: '#42c2f5',
    fillOpacity: 0.5
}
).addTo(map);


//sequencia das cordenadas do percurso, para simular os sinais de gps
array = [
    [-23.52648, -46.64135],
    [-23.526433636363635, -46.64125454545455],
    [-23.526387272727273, -46.64115909090909],
    [-23.52634090909091, -46.64106363636364],
    [-23.526294545454544, -46.64096818181819],
    [-23.526248181818183, -46.64087272727273],
    [-23.526201818181818, -46.64077727272728],
    [-23.526155454545457, -46.64068181818182],
    [-23.52610909090909, -46.640586363636366],
    [-23.526062727272727, -46.640490909090914],
    [-23.526016363636366, -46.640395454545455],
    [-23.52597, -46.6403],
    [-23.525915384615384, -46.64021538461539],
    [-23.52586076923077, -46.64013076923077],
    [-23.525806153846155, -46.64004615384616],
    [-23.525751538461538, -46.63996153846154],
    [-23.525696923076925, -46.639876923076926],
    [-23.52564230769231, -46.63979230769231],
    [-23.525587692307692, -46.639707692307695],
    [-23.525533076923075, -46.63962307692308],
    [-23.525478461538462, -46.639538461538464],
    [-23.525423846153846, -46.63945384615385],
    [-23.52536923076923, -46.63936923076923],
    [-23.525314615384616, -46.63928461538462],
    [-23.52526, -46.6392],
    [-23.525216363636364, -46.639103636363636],
    [-23.525172727272725, -46.63900727272728],
    [-23.52512909090909, -46.63891090909091],
    [-23.525085454545454, -46.638814545454544],
    [-23.52504181818182, -46.638718181818184],
    [-23.52499818181818, -46.63862181818182],
    [-23.524954545454545, -46.63852545454546],
    [-23.52491090909091, -46.63842909090909],
    [-23.524867272727274, -46.638332727272726],
    [-23.524823636363635, -46.638236363636366],
    [-23.52478, -46.63814],
    [-23.524815454545454, -46.63804090909091],
    [-23.524850909090908, -46.637941818181815],
    [-23.524886363636362, -46.63784272727273],
    [-23.524921818181816, -46.63774363636364],
    [-23.52495727272727, -46.63764454545455],
    [-23.52499272727273, -46.63754545454545],
    [-23.525028181818183, -46.637446363636364],
    [-23.525063636363637, -46.637347272727276],
    [-23.52509909090909, -46.63724818181819],
    [-23.525134545454545, -46.63714909090909],
    [-23.52517, -46.63705],
    [-23.525255454545455, -46.63699454545455],
    [-23.525340909090907, -46.636939090909095],
    [-23.525426363636363, -46.636883636363635],
    [-23.52551181818182, -46.63682818181818],
    [-23.52559727272727, -46.63677272727273],
    [-23.525682727272727, -46.636717272727275],
    [-23.52576818181818, -46.63666181818182],
    [-23.525853636363635, -46.63660636363637],
    [-23.52593909090909, -46.63655090909091],
    [-23.526024545454543, -46.636495454545454],
    [-23.52611, -46.63644],
    [-23.526215454545454, -46.636413636363635],
    [-23.52632090909091, -46.636387272727276],
    [-23.526426363636364, -46.63636090909091],
    [-23.52653181818182, -46.636334545454545],
    [-23.526637272727275, -46.63630818181818],
    [-23.526742727272726, -46.63628181818182],
    [-23.52684818181818, -46.636255454545456],
    [-23.526953636363636, -46.63622909090909],
    [-23.52705909090909, -46.636202727272725],
    [-23.527164545454546, -46.636176363636366],
    [-23.52727, -46.63615],
    [-23.527319230769233, -46.63624],
    [-23.52736846153846, -46.63633],
    [-23.527417692307694, -46.63642],
    [-23.527466923076922, -46.63651],
    [-23.527516153846154, -46.6366],
    [-23.527565384615386, -46.63669],
    [-23.527614615384614, -46.63678],
    [-23.527663846153846, -46.63687],
    [-23.527713076923078, -46.63696],
    [-23.527762307692306, -46.63705],
    [-23.52781153846154, -46.63714],
    [-23.527860769230767, -46.63723],
    [-23.52791, -46.63732],
    [-23.52791, -46.63732],
    [-23.527875952380953, -46.637415952380955],
    [-23.527841904761903, -46.63751190476191],
    [-23.527807857142857, -46.63760785714286],
    [-23.527773809523808, -46.63770380952381],
    [-23.527739761904762, -46.637799761904766],
    [-23.527705714285712, -46.63789571428572],
    [-23.527671666666667, -46.63799166666667],
    [-23.527637619047617, -46.638087619047624],
    [-23.52760357142857, -46.63818357142858],
    [-23.52756952380952, -46.63827952380953],
    [-23.527535476190476, -46.638375476190475],
    [-23.527501428571426, -46.63847142857143],
    [-23.52746738095238, -46.63856738095238],
    [-23.52743333333333, -46.638663333333334],
    [-23.527399285714285, -46.638759285714286],
    [-23.527365238095236, -46.63885523809524],
    [-23.52733119047619, -46.63895119047619],
    [-23.52729714285714, -46.639047142857144],
    [-23.527263095238094, -46.6391430952381],
    [-23.527229047619045, -46.63923904761905],
    [-23.527195, -46.639335],
    [-23.527160952380953, -46.639430952380955],
    [-23.527126904761904, -46.63952690476191],
    [-23.527092857142858, -46.63962285714286],
    [-23.52705880952381, -46.63971880952381],
    [-23.527024761904762, -46.639814761904766],
    [-23.526990714285713, -46.63991071428572],
    [-23.526956666666667, -46.64000666666667],
    [-23.526922619047618, -46.640102619047624],
    [-23.52688857142857, -46.64019857142858],
    [-23.526854523809522, -46.64029452380953],
    [-23.526820476190476, -46.640390476190476],
    [-23.526786428571427, -46.64048642857143],
    [-23.52675238095238, -46.64058238095238],
    [-23.52671833333333, -46.640678333333334],
    [-23.526684285714285, -46.640774285714286],
    [-23.526650238095236, -46.64087023809524],
    [-23.52661619047619, -46.64096619047619],
    [-23.52658214285714, -46.641062142857145],
    [-23.526548095238095, -46.6411580952381],
    [-23.526514047619045, -46.64125404761905],
    [-23.52648, -46.64135]]




let indices = []; // Armazena o índice de cada piloto
let markers = []; // Armazena as posiçoes dos pilotos
let numMarkers = 5; // Quantidade de pilotos
let lista_pilotos = ['/assets/driver_brazilian.png','/assets/driver_belgican.png','/assets/driver_britanic.png','/assets/driver_cassidy.png','/assets/driver_pascal.png']
// Inicializa os índices e os marcadores
for (let i = 0; i < numMarkers; i++) {
    var icons = {
        iconUrl: lista_pilotos[i],
        iconSize: [38, 48]
    }
    var custumIcon = L.icon(icons)

    var makeroptions = {
        icon: custumIcon,
    }

    let startingIndex = i * 2 ; // Define uma distância inicial entre os pilotos
    indices.push(startingIndex);
    let marker = L.marker(array[i], makeroptions).addTo(map); // Adiciona o marcador na primeira posição
    markers.push(marker);
}

async function moveMarkers() {
    for (let i = 0; i < numMarkers; i++) {
        if (indices[i] < array.length) {
            let coord = array[indices[i]];
            markers[i].setLatLng(coord); // Move o marcador para a nova posição
            indices[i]++; // Incrementa o índice para o próximo ponto
        } else {
            indices[i] = 0; // Reinicia o índice se chegar ao fim do array
        }
    }
    setTimeout(moveMarkers, 50); // Cria o lopping infinito, chamando a função de movimento novamente após 100ms
}


moveMarkers(); // Inicia o movimento dos marcadores

function realizarCompra() {
    // Listas de variações
    const descricoes = [
        "Aposta realizada com sucesso! Boa sorte!",
        "Você comprou uma nova aposta! Vamos ver o resultado.",
        "Aposta confirmada! Agora é só torcer!",
        "Compra concluída! O jogo está rolando!"
    ];

    const coresDeFundo = [
        "#ffcccb", // Vermelho claro
        "#d4edda", // Verde claro
        "#cce5ff", // Azul claro
        "#fff3cd"  // Amarelo claro
    ];

    const valores = [
        "Custa 20 moedas | Ganha 100 moedas",
        "Custa 15 moedas | Ganha 75 moedas",
        "Custa 30 moedas | Ganha 150 moedas",
        "Custa 25 moedas | Ganha 125 moedas"
    ];

    // Escolher valores aleatórios das listas
    const descricaoAleatoria = descricoes[Math.floor(Math.random() * descricoes.length)];
    const corAleatoria = coresDeFundo[Math.floor(Math.random() * coresDeFundo.length)];
    const valorAleatorio = valores[Math.floor(Math.random() * valores.length)];

    // Alterar descrição
    document.getElementById("descricao").innerHTML = descricaoAleatoria;
    
    // Alterar cor de fundo do formulário
    document.getElementById("apostaForm").style.backgroundColor = corAleatoria;

    // Alterar valor
    document.getElementById("valor").innerHTML = valorAleatorio;
}
 // Lista dos pilotos
 const pilotos = [
    "Jake Dennis",
    "Nick Cassidy",
    "Mitch Evans",
    "Pascal Wehrlein",
    "Jean-Éric Vergne",
    "Sacha Fenestraz",
    "Antonio Félix da Costa",
    "René Rast",
    "Stoffel Vandoorne",
    "Sérgio Sette Câmara"
];

// Função para embaralhar a lista de pilotos
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca as posições
    }
    return array;
}

// Função para atualizar o ranking
function atualizarRanking() {
    // Embaralha os pilotos
    const pilotosEmbaralhados = embaralharArray([...pilotos]);

    // Seleciona o elemento da lista de ranking
    const ranking = document.getElementById("ranking");

    // Atualiza a lista com os pilotos embaralhados
    ranking.innerHTML = "";
    j = 1
    pilotosEmbaralhados.forEach(piloto => {
        const li = document.createElement("li");
        li.textContent = j + " | " + piloto;
        ranking.appendChild(li);
        j++
    });
}

// Atualiza o ranking a cada 6 segundos
setInterval(atualizarRanking, 6000);

// Atualiza o ranking na inicialização
atualizarRanking();