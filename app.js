//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaDeAmigosSorteados = [];
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo(){
    let amigoInserido = document.getElementById('amigo');
    if (amigoInserido.value.trim()){

        atualizarListaDeAmigosSecreto(amigoInserido.value);
        
    } else {
        amigoInserido.value = '';
        amigoInserido.style.backgroundColor = '#e58585c9';
        amigoInserido.placeholder = 'Amigo invalidado, insira um amigo válido.';
        alert('Amigo invalidado, insira um amigo válido')

    }
}

function sortearAmigo(){
    
    let amigoSorteado = amigos.length != 0 ? amigos[escolherAleatoriamenteUmAmigoSecreto()] : "Não há amigos para ser sorteados.";
    verificarAmigoJaEscolhido(amigoSorteado);
    alert(amigoSorteado);

}

function atualizarListaDeAmigosSecreto(novoAmigo){

    amigos.push(novoAmigo); 
    inserirArrayNaListaAmigos();

};

function inserirArrayNaListaAmigos(){
 listaAmigos.innerText = "";
    for (let i = 0; i < amigos.length; i++) {

     listaAmigos.innerHTML += '<li>' + amigos[i] + '</li>';
        
    };

}

function escolherAleatoriamenteUmAmigoSecreto(){

    let embaralhaAmigo =  Math.floor(Math.random() * amigos.length);
    
    return embaralhaAmigo;

}

function verificarAmigoJaEscolhido(amigoSecretoSorteado){
    if(listaDeAmigosSorteados.includes(amigoSecretoSorteado) && listaDeAmigosSorteados >= amigos){

        listaDeAmigosSorteados = [];
        alert('todos os amigos foram listados.')

    } else if (listaDeAmigosSorteados.includes(amigoSecretoSorteado)) {
        
        sortearAmigo();
        


    } else {

        listaDeAmigosSorteados.push(amigoSecretoSorteado);

    }

}

