form_login = document.getElementById('form-login')

form_login.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = new FormData(event.target);
    const emailForm = dados.get('email');
    const senhaForm = dados.get('senha');
    console.log(emailForm, senhaForm);

    userString = localStorage.getItem('user');
    user = JSON.parse(userString);
    console.log(user);

    if (user.email === emailForm && user.senha === senhaForm) {
        alert('Logado com sucesso!')
        window.location.href = "./game.html";
        localStorage.setItem('logon', true);
    } else {
        alert('erro ao tentar logar')
        localStorage.setItem('logon', false)
    }
    console.log(user.email, user.senha);
    console.log(emailForm, senhaForm);
})