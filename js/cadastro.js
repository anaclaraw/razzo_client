function permissaoIdade(){ //exibe uma caixa de confimação, para sinalizar a idade
    confirm('É necessário ser maior de idade para se casdastrar.')
}

permissaoIdade()

form_cadastro = document.getElementById('form-cadastro')
form_cadastro.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = new FormData(event.target);
    const telefone = dados.get('tel');
    const email = dados.get('email');
    const nome = dados.get('nome');
    const cpf = dados.get('cpf');
    const senha = dados.get('senha');
    const end = dados.get('end');
    const data_nasc = dados.get('data_nasc');

    novoUser = {
        "email": email,
        "nome": nome,
        "telefone": telefone,
        "cpf": cpf,
        "senha": senha,
        "end": end,
        "data_nasc": data_nasc,
    }
    localStorage.setItem('user', JSON.stringify(novoUser));
    console.log(novoUser);
    if(novoUser){
        alert("Cadastrado com sucesso!")
        localStorage.setItem('logon', true)
        window.location.href = "./game.html";
    }
})


function VerificarMaioidade(idade){
    const dataNascimento = new Date(idade);
    const dataMinima = new Date();
    dataMinima.setFullYear(dataMinima.getFullYear() - 18);
    console.log(dataMinima);
    console.log("nasc "+dataNascimento);
    
    if (dataNascimento > dataMinima) {
        console.log("data"+dataMinima);
        alert('Data de nascimento inválida. Você deve ter pelo menos 18 anos.');
        this.value = ''; // Limpa o campo
        return false;
    }
}
