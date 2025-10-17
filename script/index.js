window.addEventListener("DOMContentLoaded", () => {
    const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
    const linkEntrar = document.getElementById("link-entrar");
    const linkCadastrar = document.getElementById("link-cadastrar");
    const liSair = document.querySelector("#botao-sair")?.closest("li");

    if (usuario) {
        // Usuário logado substitui o link por <p>
        if (linkEntrar) {
            const p = document.createElement("p");
            p.textContent = usuario.nome;
            p.className = linkEntrar.className; // mantém o estilo
            p.id = "usuario-logado";
            linkEntrar.replaceWith(p);
        }

        if (linkCadastrar) {
            linkCadastrar.style.display = "none";
        }

        if (liSair) {
            liSair.style.display = "block";
        }
    } else {
        // Nenhum usuário logado esconde botão sair
        if (liSair) {
            liSair.style.display = "none";
        }

        if (linkEntrar) {
            linkEntrar.textContent = "Entrar";
            linkEntrar.href = "account/login.html";
        }

        if (linkCadastrar) {
            linkCadastrar.style.display = "";
        }
    }
});

window.sair = function (event) {
    if (event) event.preventDefault();

    // Remove o usuário logado do localStorage
    localStorage.removeItem("usuarioLogado");

    // Recupera elementos
    const usuarioP = document.getElementById("usuario-logado"); // ← esse é o <p> com o nome do usuário
    const linkCadastrar = document.getElementById("link-cadastrar");
    const liSair = document.querySelector("#botao-sair")?.closest("li");

    // Troca o <p> de volta para <a>
    if (usuarioP) {
        const a = document.createElement("a");
        a.textContent = "Entrar";
        a.href = "account/login.html"; // ou o caminho certo
        a.className = usuarioP.className;
        a.id = "link-entrar";
        usuarioP.replaceWith(a);
    }

    if (linkCadastrar) {
        linkCadastrar.style.display = "";
    }

    if (liSair) {
        liSair.style.display = "none";
    }

    // (opcional) recarrega ou redireciona
    // window.location.href = "index.html";
};

function adicionarCarrinho(){
    const numeroCarrinho = document.getElementById('numero-carrinho')
    
    if(numeroCarrinho) {
        let valorAtual = parseInt(numeroCarrinho.textContent) || 0;

        valorAtual++;

        numeroCarrinho.textContent = valorAtual;
    } else {
        console.warn('Elemento #numero-carrinho não encontrado')
    }
}