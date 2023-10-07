//definindo a classe de contato
class Contatos {
    constructor(nome, email, telefone, Mensagem) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.Mensagem = Mensagem;
    }
}

//definindo a classe GerenciadorContatos
class GerenciadorContatos {
    constructor() {
        this.contatos = []
    }
    adicionarContato(contato) {   //adiciona um contato na lista de contatos
        this.contatos.push(contato);
    }

    exibirContatos() {
        const listaContatos = document.getElementById('contato-lista');

        //limpa a lista de contatos
        listaContatos.innerHTML = '';

        //para cada novo contato na lista de contatos, criaum novo elemento 'li e adiciona na lista de ctts

        for (const contato of this.contatos) {
            const li = document.createElement('li');
            li.innerHTML = `${contato.nome} - ${contato.email} - ${contato.telefone} - ${contato.Mensagem}`;

            listaContatos.appendChild(li)
        }

    }
}


const gerenciadorContatos = new GerenciadorContatos();
const contatoForm = document.getElementById('contato-Form');
const nomeForm = document.getElementById('nome');
const emailForm = document.getElementById('email');
const telefoneForm = document.getElementById('tel');
const mostrarContatos = document.getElementById('mostrar-contatos');
const ocultarContatos = document.getElementById('ocultar-contatos');
const listaContatos = document.getElementById('contato-lista');
const MensagemForm = document.getElementById('Mensagem');

contatoForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const nome = nomeForm.value;
    const email = emailForm.value;
    const telefone = telefoneForm.value;
    const Mensagem = MensagemForm.value;

    //criando objeto na classe contato

    const contato = new Contatos(nome, email, telefone, Mensagem);

    gerenciadorContatos.adicionarContato(contato);

    nomeForm.value = ''
    emailForm.value = ''
    telefoneForm.value = ''
    MensagemForm.value = ''

});


mostrarContatos.addEventListener('click', function(){
    gerenciadorContatos.exibirContatos();
    listaContatos.style.display = 'block';

})

ocultarContatos.addEventListener('click', function(){
    listaContatos.style.display = 'none'
})