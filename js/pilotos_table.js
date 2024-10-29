
async function ListarPilotos() {
    const response = await fetch('/data/pilotos.json');
    const pilotos = await response.json();
    console.log(pilotos);

    pilotos.forEach(piloto => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${piloto.nome}</td>
            <td>${piloto.equipe}</td>
            <td>${piloto.pais}</td>
            <td>${piloto.podios}</td>
            <td>${piloto.corridas}</td>
        `;
        document.getElementById('tbody_pilotos').appendChild(row);
    });
}

// ListarPilotos()




