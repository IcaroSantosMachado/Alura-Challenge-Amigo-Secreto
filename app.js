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
    
    let amigoSorteado = amigos.length != 0 ? escolherAleatoriamenteUmAmigoSecreto() : 'Não há amigos para ser sorteados.';
    amigoSorteado = amigoSorteado;
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

function moverNomesNaListaAmigosParaResultados(amigoSorteado){
    let listaResultados = document.getElementById('resultado');
    listaAmigos.children[amigoSorteado].remove();
    listaResultados.innerHTML = '';
    //amigos = removerIndexDoArray(amigos, amigoSorteado);
    //listaDeAmigosSorteados = removerIndexDoArray(listaDeAmigosSorteados, amigoSorteado);
    amigos.splice(amigoSorteado, amigoSorteado);
    listaDeAmigosSorteados.splice(amigoSorteado, amigoSorteado);
    for (let i = 0; i < listaDeAmigosSorteados.length; i++) {
      
        listaResultados.innerHTML += '<li>' + listaDeAmigosSorteados[i] + '</li>';
        
    };

}

function escolherAleatoriamenteUmAmigoSecreto(){
    console.log(amigos.length)
    let embaralhaAmigo =  Math.floor(Math.random() * (amigos.length - 1));
    
    return embaralhaAmigo;

}

function verificarAmigoJaEscolhido(amigoSecretoSorteado){

    if(listaDeAmigosSorteados.includes(amigos[amigoSecretoSorteado]) && listaDeAmigosSorteados >= amigos){

        listaDeAmigosSorteados = [];
        alert('todos os amigos foram listados.')

    } else if (listaDeAmigosSorteados.includes(amigos[amigoSecretoSorteado])) {
        
        sortearAmigo();
        


    } else {

        listaDeAmigosSorteados.push(amigos[amigoSecretoSorteado]);
        moverNomesNaListaAmigosParaResultados(amigoSecretoSorteado);
    }

}

function removerIndexDoArray(arr, index){
    let arrayTemporario = [];
    arr.forEach(element => {
        if(element != arr[index]){

            arrayTemporario.push(element);

        } else {return;}
    });

    return arrayTemporario;
}