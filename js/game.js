function cardExists(title) {
    var cards = document.querySelectorAll('.card-title');
    for (var i = 0; i < cards.length; i++) {
        if (cards[i].innerText === title) {
            return true;
        }
    }
    return false;
}

function updateMoedasPilotos(moedasDelta, pilotosDelta, equipesDelta) {
    var moedasRestantesElem = document.getElementById('moedas-restantes');
    var pilotosSelecionadosElem = document.getElementById('pilotos-selecionados');
    var equipesSelecionadasElem = document.getElementById('equipes-selecionadas');

    var moedasRestantes = parseFloat(moedasRestantesElem.innerText.replace('$', '').replace(',', '.'));
    var pilotosSelecionados = parseInt(pilotosSelecionadosElem.innerText.split('/')[0]);
    var limitePilotos = parseInt(pilotosSelecionadosElem.innerText.split('/')[1]);
    var equipesSelecionadas = parseInt(equipesSelecionadasElem.innerText.split('/')[0]);
    var limiteEquipes = parseInt(equipesSelecionadasElem.innerText.split('/')[1]);

    // Atualiza moedas se for possível
    if (moedasRestantes + moedasDelta >= 0) {
        moedasRestantes += moedasDelta;
        moedasRestantesElem.innerText = `$${moedasRestantes.toFixed(2).replace('.', ',')}`;
    } else {
        alert('Moedas insuficientes!');
        return false; // Não atualiza pilotos/equipes se não houver moedas suficientes
    }

    // Atualiza pilotos se for possível
    if (pilotosDelta !== 0 && pilotosSelecionados + pilotosDelta <= limitePilotos) {
        pilotosSelecionados += pilotosDelta;
        pilotosSelecionadosElem.innerText = `${pilotosSelecionados}/${limitePilotos}`;
    } else if (pilotosDelta !== 0) {
        alert('Limite de pilotos atingido!');
        updateMoedasPilotos(-moedasDelta, 0, 0); // Reverte a adição de moedas
        return false;
    }

    // Atualiza equipes se for possível
    if (equipesDelta !== 0 && equipesSelecionadas + equipesDelta <= limiteEquipes) {
        equipesSelecionadas += equipesDelta;
        equipesSelecionadasElem.innerText = `${equipesSelecionadas}/${limiteEquipes}`;
    } else if (equipesDelta !== 0) {
        alert('Limite de equipes atingido!');
        updateMoedasPilotos(-moedasDelta, 0, 0); // Reverte a adição de moedas
        return false;
    }
    
    return true;
}

function createCard(equipe, emblema, title, text, valor, type) {
    if (cardExists(title)) {
        alert('Card com este título já existe!');
        return;
    }

    // Verifica se é possível atualizar moedas e pilotos/equipes
    var updateSuccessful = false;
    if (type === 'piloto') {
        updateSuccessful = updateMoedasPilotos(-valor, 1, 0);
    } else if (type === 'equipe') {
        updateSuccessful = updateMoedasPilotos(-valor, 0, 1);
    }
    
    if (!updateSuccessful) {
        return; // Se a atualização falhar, não cria o card
    }

    if (type === 'piloto'){
        var cardContainer = document.getElementById('cardContainer');
        var newCard = document.createElement('div');
        newCard.className = 'col-md-6 mb-3';
        newCard.innerHTML = `
            <div class="driver-card ${equipe}">
                <img src="../assets/${emblema}" class="card-img">
                <div class="card-body">
                    <h4 class="card-title pr-20">${title}</h4>
                    <p class="card-text">${text} - $${valor.toFixed(2)}</p>
                    <button class="btn btn-danger remove-card">X</button>
                </div>
            </div>
        `;
    }else if (type === 'equipe') {
        var cardContainer = document.getElementById('cardContainer2');
        var newCard = document.createElement('div');
        newCard.className = 'col-md-3 mb-3';
        newCard.innerHTML = `
            <div class="driver-card ${equipe}">
                <img src="../assets/${emblema}" class="card-img">
                <div class="card-body">
                    <h4 class="card-title pr-20">${title}</h4>
                    <p class="card-text">${text} - $${valor.toFixed(2)}</p>
                    <button class="btn btn-danger remove-card">X</button>
                </div>
            </div>
        `;
    }
    newCard.querySelector('.remove-card').addEventListener('click', function () {
        cardContainer.removeChild(newCard);
        if (type === 'piloto') {
            updateMoedasPilotos(valor, -1, 0); // Adiciona valor ao remover e diminui um piloto
        } else if (type === 'equipe') {
            updateMoedasPilotos(valor, 0, -1); // Adiciona valor ao remover e diminui uma equipe
        }
    });

    cardContainer.appendChild(newCard);
}

document.getElementById('createCardBtn-Dennis').addEventListener('click', function () {
    createCard('andretti', 'logo_andretti.png', 'Jake Dennis', 'Andretti', 30, 'piloto');
});

document.getElementById('createCardBtn-Muller').addEventListener('click', function () {
    createCard('andretti', 'logo_andretti.png', 'Nico Muller', 'Andretti', 30, 'piloto');
});

document.getElementById('createCardBtn-Vergne').addEventListener('click', function () {
    createCard('ds_penske', 'logo_ds_penske.png', 'Jean-Eric Vergne', 'Ds Penske', 30, 'piloto');
});

document.getElementById('createCardBtn-Gunther').addEventListener('click', function () {
    createCard('ds_penske', 'logo_ds_penske.png', 'Maximilian Gunther', 'Ds Penske', 30, 'piloto');
});

document.getElementById('createCardBtn-Frijns').addEventListener('click', function () {
    createCard('envision', 'logo_envision.png', 'Robin Frijns', 'Envision', 30, 'piloto');
});

document.getElementById('createCardBtn-Buemi').addEventListener('click', function () {
    createCard('envision', 'logo_envision.png', 'Sebastien Buemi', 'Envision', 30, 'piloto');
});

document.getElementById('createCardBtn-Evans').addEventListener('click', function () {
    createCard('jaguar', 'logo_jaguar.png', 'Mitch Evans', 'Jaguar', 30, 'piloto');
});

document.getElementById('createCardBtn-Cassidy').addEventListener('click', function () {
    createCard('jaguar', 'logo_jaguar.png', 'Nick Cassidy', 'Jaguar', 30, 'piloto');
});

document.getElementById('createCardBtn-TBC').addEventListener('click', function () {
    createCard('kiro', 'logo_kiro.jpg', 'TBC', 'Kiro', 30, 'piloto');
});

document.getElementById('createCardBtn-TBC2').addEventListener('click', function () {
    createCard('kiro', 'logo_kiro.jpg', 'TBC2', 'Kiro', 30, 'piloto');
});

document.getElementById('createCardBtn-Di_Grassi').addEventListener('click', function () {
    createCard('lola', 'logo_lola.png', 'Lucas Di Grassi', 'Lola', 30, 'piloto');
});

document.getElementById('createCardBtn-Maloney').addEventListener('click', function () {
    createCard('lola', 'logo_lola.png', 'Zane Maloney', 'Lola', 30, 'piloto');
});

document.getElementById('createCardBtn-Montara').addEventListener('click', function () {
    createCard('mahindra', 'logo_mahindra.png', 'Eduardo Montara', 'Mahindra', 30, 'piloto');
});

document.getElementById('createCardBtn-De_Vries').addEventListener('click', function () {
    createCard('mahindra', 'logo_mahindra.png', 'Nyck De Vries', 'Mahindra', 30, 'piloto');
});

document.getElementById('createCardBtn-Hughes').addEventListener('click', function () {
    createCard('maserati', 'logo_maserati.png', 'Jake Hughes', 'Maserati', 30, 'piloto');
});

document.getElementById('createCardBtn-Vandoorne').addEventListener('click', function () {
    createCard('maserati', 'logo_maserati.png', 'Stoffel Vandoorne', 'Maserati', 30, 'piloto');
});

document.getElementById('createCardBtn-Bird').addEventListener('click', function () {
    createCard('mclaren', 'logo_mclaren.png', 'Sam Bird', 'Mclaren', 30, 'piloto');
});

document.getElementById('createCardBtn-Barnard').addEventListener('click', function () {
    createCard('mclaren', 'logo_mclaren.png', 'Taylor Barnard', 'Mclaren', 30, 'piloto');
});

document.getElementById('createCardBtn-Rowland').addEventListener('click', function () {
    createCard('nissan', 'logo_nissan.png', 'Oliver Rowland', 'Nissan', 30, 'piloto');
});

document.getElementById('createCardBtn-Nato').addEventListener('click', function () {
    createCard('nissan', 'logo_nissan.png', 'Norman Nato', 'Nissan', 30, 'piloto');
});

document.getElementById('createCardBtn-Wehrlein').addEventListener('click', function () {
    createCard('porsche', 'logo_porsche.png', 'Pascal Wehrlein', 'Porsche', 30, 'piloto');
});

document.getElementById('createCardBtn-Da_Costa').addEventListener('click', function () {
    createCard('porsche', 'logo_porsche.png', 'Antonio Felix da Costa', 'Porsche', 30, 'piloto');
});


// equipes

document.getElementById('createCardBtn-Andretti').addEventListener('click', function () {
    createCard('andretti', 'logo_andretti.png', 'Andretti Formula E', 'Andretti', 30, 'equipe');
});

document.getElementById('createCardBtn-Ds').addEventListener('click', function () {
    createCard('ds_penske', 'logo_ds_penske.png', 'DS Penske', 'Ds Penske', 30, 'equipe');
});

document.getElementById('createCardBtn-Envision').addEventListener('click', function () {
    createCard('envision', 'logo_envision.png', 'Envision Racing', 'Envision', 30, 'equipe');
});

document.getElementById('createCardBtn-Jaguar').addEventListener('click', function () {
    createCard('jaguar', 'logo_jaguar.png', 'Jaguar TCS Racing', 'Jaguar', 30, 'equipe');
});

document.getElementById('createCardBtn-Kiro').addEventListener('click', function () {
    createCard('kiro', 'logo_kiro.jpg', 'Kiro Race Co', 'Kiro', 30, 'equipe');
});

document.getElementById('createCardBtn-Lola').addEventListener('click', function () {
    createCard('lola', 'logo_lola.png', 'Lola Yamaha Abt Formula E Team', 'Lola', 30, 'equipe');
});

document.getElementById('createCardBtn-Mahindra').addEventListener('click', function () {
    createCard('mahindra', 'logo_mahindra.png', 'Mahindra Racing', 'Mahindra', 30, 'equipe');
});

document.getElementById('createCardBtn-Maserati').addEventListener('click', function () {
    createCard('maserati', 'logo_maserati.png', 'Maserati MSG Racing', 'Maserati', 30, 'equipe');
});

document.getElementById('createCardBtn-Mclaren').addEventListener('click', function () {
    createCard('mclaren', 'logo_mclaren.png', 'Neom Mclaren Formula E Team', 'Mclaren', 30, 'equipe');
});

document.getElementById('createCardBtn-Nissan').addEventListener('click', function () {
    createCard('nissan', 'logo_nissan.png', 'Nissan Formula E Team', 'Nissan', 30, 'equipe');
});

document.getElementById('createCardBtn-Porsche').addEventListener('click', function () {
    createCard('porsche', 'logo_porsche.png', 'Tag Heuer Porsche Formula E Team', 'Porsche', 30, 'equipe');
});

// remover

document.querySelectorAll('.btn-remove').forEach(button => {
    button.addEventListener('click', function () {
        this.closest('.driver-card').remove();
    });
});