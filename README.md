# Pra Life - Site de E-commerce

"Pra Life" é um protótipo de site de e-commerce responsivo para uma loja especializada em produtos alimentícios saudáveis e voltados ao estilo de vida. O site possui autenticação de usuários, navegação de produtos, filtragem e um sistema de carrinho de compras, tudo construído com HTML, CSS, JavaScript e Bootstrap. Os dados dos usuários são gerenciados localmente usando o `localStorage` do navegador.

## Principais Funcionalidades

*   **Gerenciamento de Usuários:** Registrar novas contas, fazer login e logout.
*   **Sessão Persistente:** O status de login do usuário é mantido entre páginas usando `localStorage`.
*   **Gerenciamento de Senha:** Uma página dedicada para que os usuários possam alterar sua senha.
*   **Catálogo de Produtos:** Uma grade de produtos é exibida na página inicial com imagens, descrições e preços.
*   **Categorização e Filtragem:** Os produtos podem ser navegados por categorias como "Sem Glúten," "Vegano," e "Sem Açúcar." Um modal fornece opções avançadas de filtragem por preço e nutrição.
*   **Carrinho de Compras:** Usuários podem adicionar itens ao carrinho, com um contador em tempo real atualizado na barra de navegação.
*   **Design Responsivo:** O layout se adapta a diferentes tamanhos de tela, de dispositivos móveis a desktops, usando o framework Bootstrap.
*   **Interface Dinâmica:** A barra de navegação muda para exibir o nome do usuário após o login e fornece a opção "Sair" (Logout).
*   **Páginas Informativas:** Inclui uma página "Sobre Nós" e um modal com informações de contato.

## Stack Tecnológico

*   **Frontend:** HTML5, CSS3, JavaScript
*   **Framework:** Bootstrap 5
*   **Armazenamento de Dados:** `localStorage` do navegador para autenticação e gerenciamento de sessão.

## Como Executar

Como este é um projeto de frontend estático, não são necessários passos especiais de build.

1.  Clone o repositório:
    ```bash
    git clone https://github.com/leommb-coder/website-pra-life.git
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd website-pra-life
    ```
3.  Abra o arquivo `index.html` no seu navegador para iniciar o site.

## Estrutura do Projeto

/
├── index.html                # Homepage and main product listing
├── account/
│   ├── login.html            # User login page
│   ├── register.html         # New user registration page
│   └── senha.html            # Password recovery page
├── html/
│   └── sobre.html            # "About Us" page
├── script/
│   ├── index.js              # Handles homepage UI updates, login status, and cart counter
│   ├── login.js              # Manages user login logic against localStorage
│   ├── register.js           # Handles new user registration and data storage
│   └── senha.js              # Intended for password change logic (currently empty)
└── style/
    ├── account.css           # Custom styles for the account pages (login, register)
    └── index.css             # Main stylesheet for the site


## Detalhes de Funcionalidade

### Autenticação

*   **Registro:** O formulário em `account/register.html` captura nome, e-mail e senha do usuário. O script `register.js` valida se a senha e a confirmação coincidem, então salva o novo objeto de usuário em um array no `localStorage` sob a chave `usuarios`.
*   **Login:** A página `account/login.html` permite que usuários registrados façam login. O `login.js` verifica o e-mail e a senha fornecidos contra a lista de usuários armazenada no `localStorage`. Após validação bem-sucedida, os detalhes do usuário são armazenados no `localStorage` sob a chave `usuarioLogado`.
*   **Gerenciamento de Sessão:** O script `index.js` roda ao carregar a página, verificando se existe `usuarioLogado`. Se um usuário estiver logado, substitui dinamicamente os links "Entrar" e "Cadastrar" pelo nome do usuário e um botão "Sair" (Logout).

### Carrinho de Compras

A função `adicionarCarrinho()` em `index.js` é acionada quando o usuário clica no ícone do carrinho em um card de produto. Essa função incrementa o número exibido ao lado do ícone do carrinho na barra de navegação principal, fornecendo um feedback visual simples.
