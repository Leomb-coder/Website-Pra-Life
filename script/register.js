// Variaveis constantes de senha:
const password = document.getElementById('password')
const confirmaPassword = document.getElementById('confirm-password')

function registrar() {
    const nome = document.getElementById('name')
    const email = document.getElementById('email')

    if (password.value == confirmaPassword.value) {
        // Cadastrar no local storage

        // Verifica se a lista existe no localStorage
        let lista = window.localStorage.getItem('usuarios')

        if (lista == undefined) {
            // Não existe a lista, então cria e adiciona o usuário
            lista = []

            // Adicionar o usuário à lista
            let usuario = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value
            }
            lista.push(usuario)

            // Salvar no local storage a lista
            window.localStorage.setItem('usuarios', JSON.stringify(lista))
            alert('Usuário cadastrado')
        } else {
            // Adcionar novos usuários
            // Primeiro buscar a lista no localStorage
            let listaE = window.localStorage.getItem('usuarios')
            listaE = JSON.parse(listaE)

            let usuarioA = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value
            }
            // Adiciona lista
            listaE.push(usuarioA)

            // Salvar no localStorage
            window.localStorage.setItem('usuarios', JSON.stringify(listaE))
            alert('Usuário cadastrado')

            // Limpar os dados dos formularios
            nome.value = ''
            email.value = ''
            password.value = ''
            confirmaPassword.value = ''
        }
    } else {
        alert('Senha não confere, verifique seus dados!')
        password.value = ''
        confirmaPassword.value = ''
    }
}

function toggleSenha() {
    const exibirSenha = document.getElementById('show-password')

    if (exibirSenha.checked == true) {
        // Mostrar as senhas
        password.type = 'text'
        confirmaPassword.type = 'text'
    } else {
        // Esconder as senhas
        password.type = 'password'
        confirmaPassword.type = 'password'
    }
}