document.addEventListener("DOMContentLoaded", function() {
    // Verifica se o valor de 'login' no localStorage é 'true'
if (localStorage.getItem('logon') === 'true') {
    console.log('login validado..');
    
    // Seleciona o elemento <ul> com a classe 'menu'
    const menu = document.querySelector('.menu');

    // Cria o novo item <li> com link para 'Games'
    const gamesItem = document.createElement('li');
    const gamesLink = document.createElement('a');
    gamesLink.href = './game.html';
    gamesLink.textContent = 'Game Razzo';

    // Adiciona o link ao item e o item ao menu
    gamesItem.appendChild(gamesLink);
    menu.appendChild(gamesItem);

    const loginItem = menu.querySelector('a[href="./login.html"]');
    if (loginItem) {
        loginItem.parentElement.remove();
    }
}

});