function login() {
    const email = document.getElementById('email');
    const senha = document.getElementById('password');

    let lista = JSON.parse(localStorage.getItem('usuarios')) || [];

    let usuarioLogado = null;

    for (let i = 0; i < lista.length; i++) {
        const usuario = lista[i];
        if (usuario.email === email.value && usuario.password === senha.value) {
            usuarioLogado = usuario;
            break;
        }
    }

    if (usuarioLogado) {
        // Salva no localStorage
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
        alert(`Bem-vindo, ${usuarioLogado.nome}!`);
        window.location.href = "../index.html"; // ou "index.html" se estiver na mesma pasta
    } else {
        alert("Login inválido");
    }
}
