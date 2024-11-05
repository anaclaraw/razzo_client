if (localStorage.getItem('logon') === 'true') {
    console.log('login validado..');
    console.log('login validado..');
    document.getElementById('friends-button').innerHTML = `
      <a class="nav-link fundo" data-toggle="tab" href="#friends" role="tab" aria-controls="friends"
         aria-selected="false" onclick="preencherTabela()">Friends</a>
    `;
    userString = localStorage.getItem('user');
    username = JSON.parse(userString).nome;
    
    
    
const dadosTabela = [
    { posicao: 1, nome: "Amos Dickens", pontuacao: "trophy850" },
    { posicao: 2, nome: username, pontuacao: "trophy800" },
    { posicao: 3, nome: "Amaya Jacobson", pontuacao: "trophy700" },
    { posicao: 4, nome: "Sammy Haley", pontuacao: "trophy660" },
    { posicao: 5, nome: "Mozelle Kessler", pontuacao: "trophy550" },
    { posicao: 6, nome: "Lila Erdman", pontuacao: "trophy520" },
    { posicao: 7, nome: "Katheryn Turcotte", pontuacao: "trophy480" },
    { posicao: 8, nome: "Katherine Robel", pontuacao: "trophy460" },
    { posicao: 9, nome: "Helene Jenkins", pontuacao: "trophy420" },
    { posicao: 10, nome: "Fred Howell", pontuacao: "trophy400" }
  ];
  
  localStorage.setItem("tabelaNomes", JSON.stringify(dadosTabela));
  
  function preencherTabela() {
    const tabelaCorpo = document.querySelector("#friends tbody");
    tabelaCorpo.innerHTML = ""; // Limpa a tabela
  
    const dados = JSON.parse(localStorage.getItem("tabelaNomes")) || [];
  
    dados.forEach((dado,index) => {
      const linha = document.createElement("tr");
  
      const colunaPosicao = document.createElement("td");
      colunaPosicao.textContent = dado.posicao;
      colunaPosicao.className = "ranks"
      linha.appendChild(colunaPosicao);

      if (index === 0) colunaPosicao.id ="primeiro";
    if (index === 1) colunaPosicao.id ="segundo";
    if (index === 2) colunaPosicao.id ="terceiro";
  
      const colunaNome = document.createElement("td");
      colunaNome.textContent = dado.nome;
      colunaNome.className = "nome"
      if (index === 1) colunaNome.style.backgroundColor="#bcf7f0";

      linha.appendChild(colunaNome);
  
      const colunaPontuacao = document.createElement("td");
      colunaPontuacao.className = "pontuacao"
      const iconePontuacao = document.createElement("p");
      iconePontuacao.className = "material-symbols-outlined ranks";
      iconePontuacao.textContent = dado.pontuacao;
      colunaPontuacao.appendChild(iconePontuacao);
      linha.appendChild(colunaPontuacao);
  
      tabelaCorpo.appendChild(linha);
    });
  }
}