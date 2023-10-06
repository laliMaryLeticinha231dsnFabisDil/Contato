//definindo a classe de contato
class Contatos {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}

//definindo a classe GerenciadorContatos
class GerenciadorContatos {
    constructor() {
        this.contatos = []
    }
    adicionarContatos(contato) {   //adiciona um contato na lista de contatos
        this.contatos.push(contato);
    }

    exibirContatos() {
        const listaContatos = document.getElementById('contato-lista')

        //limpa a lista de contatos
        listaContatos.innerHTML = ''
    }
}