var historico = "";

function exibir(){

    var nome, email, jogo, jogonome

    nomeInserido = document.getElementById('insertnome').value
    email = document.getElementById('email').value
    jogo = document.getElementById('jogo').value
    jogonome = document.getElementById('nomejogo').value

    historico = "Nome: " + nomeInserido, + "Email: " + email, "Tipo de jogo: " + jogo , "Nome do jogo: " + jogonome; 

    document.getElementById('exibirCadastro').value = historico;

}

var cadastros
var nomesvetor = [], emailsvetor = [], jogosvetor  = [], jogosnomevetor = []; 

function exibirtodos(){

    var nomeDigitado, emailDigitado, jogoDigitado, jogonomeDigitado

    nomeDigitado = document.getElementById('insertnome').value
    emailDigitado = document.getElementById('email').value
    jogoDigitado = document.getElementById('jogo').value
    jogonomeDigitado = document.getElementById('nomejogo').value

    nomesvetor.push(nomeDigitado)
    emailsvetor.push(emailDigitado)
    jogosvetor.push(jogoDigitado)
    jogosnomevetor.push(jogonomeDigitado)
    
   cadastros = (nomesvetor[qt]), (emailsvetor[qt]), (jogosvetor[qt]), (jogosnomevetor[qt])

    document.getElementById('exibirTodosCadastro').value = cadastros

}

function cadastrar(){

    var nomeInserido, qt;

    nomeInserido = document.getElementById('insertnome').value

    nomesvetor.push(nomeInserido)

    for (qt = 0; qt < nomesvetor.length; qt++)
    {
      alert(nomesvetor[qt])
    }
        
}

function limpar() {
var ctx = quadro.getContext("exibirTodosCadastro")
ctx.clearRect();
}

function limpar() {
var ctx = quadro.getContext("exibirCadastro")
ctx.clearRect();
}

