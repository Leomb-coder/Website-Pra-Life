window.addEventListener('DOMContentLoaded', () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

    if (usuario) {
        const linkEntrar = document.getElementById("link-entrar");
        const linkCadastrar = document.getElementById("link-cadastrar");

        if (linkEntrar && linkCadastrar) {
            // Substitui os links pelo nome
            linkEntrar.innerHTML = usuario.nome;
            linkEntrar.href = "#"; // ou perfil do usuário

            // Esconde o link de cadastrar
            linkCadastrar.style.display = "none";
        }
    }
});
