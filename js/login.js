form_login = document.getElementById('form-login')
form_login.addEventListener('submit', function (event) {
    event.preventDefault();

    const dados = new FormData(event.target);
    const email = dados.get('email');
    const senha = dados.get('senha');
    console.log(email,senha);

})