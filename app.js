//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaDeAmigosSorteados = [];
let listaAmigos = document.getElementById('listaAmigos');
let novaLista = false;
let quantidadeInicialDeNomesDaLista = 0;

function adicionarAmigo(){
    let amigoInserido =  document.getElementById('amigo').value == undefined ? null : document.getElementById('amigo');
    if (verificarSeUmaNovaListaFoiCriada(amigoInserido.value, novaLista) == true) { // Verifica se a rodada anterior foi finalizada e começa uma nova;
        return;
    } else {
          
        novaLista = true;
        if (amigoInserido.value.trim() && amigoInserido != undefined){
            quantidadeInicialDeNomesDaLista += 1;
            atualizarListaDeAmigosSecreto(amigoInserido.value);
            
        } else {
            amigoInserido.value = '';
            amigoInserido.style.backgroundColor = '#e58585c9';
            amigoInserido.placeholder = 'Amigo invalidado, insira um amigo válido.';
            alert('Amigo invalidado, insira um amigo válido')

        }
    }
   
}

function sortearAmigo(){
    
    let amigoSorteado = amigos.length != 0 ? escolherAleatoriamenteUmAmigoSecreto() : undefined;
    amigoSorteado = amigoSorteado;
    verificarAmigoJaEscolhido(amigoSorteado);

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
    for (let i = 0; i < listaDeAmigosSorteados.length; i++) {
      
        listaResultados.innerHTML = '<li>' + listaDeAmigosSorteados[i] + '</li>';
        
    };
    
    amigos.splice(amigoSorteado, 1);
}

function escolherAleatoriamenteUmAmigoSecreto(){
    console.log(listaAmigos.childElementCount)
    ///let embaralhaAmigo =  Math.floor(Math.random() * (amigos.length - 1));
    let embaralhaAmigo =  parseInt(Math.random() * (quantidadeInicialDeNomesDaLista - 1));
    embaralhaAmigo = embaralhaAmigo == -1 ? 0 : embaralhaAmigo;
    return embaralhaAmigo;

}

function verificarAmigoJaEscolhido(amigoSecretoSorteado){
    if(amigoSecretoSorteado == undefined){
        
        listaDeAmigosSorteados = [];
        alert('Não há amigos a serem sorteados.')
        return;

    } else if (amigos[amigoSecretoSorteado] == undefined){

        sortearAmigo();

    }
    
    else if (listaDeAmigosSorteados.includes(amigos[amigoSecretoSorteado])) {
        
        sortearAmigo();
        
    } else {
        listaDeAmigosSorteados.push(amigos[amigoSecretoSorteado]);
        moverNomesNaListaAmigosParaResultados(amigoSecretoSorteado);

    }

}

function verificarSeUmaNovaListaFoiCriada(amigoSecretoInserido, novaLista){

        if(amigoSecretoInserido.trim() == ""){

            return false;

        } else if(novaLista == true && amigos.length == 0){

            listaDeAmigosSorteados = [];
            quantidadeInicialDeNomesDaLista = 0;
            novaLista = false;
            return false;

        } else if(amigos.includes(amigoSecretoInserido)){

            alert('Este nome já foi listado.');
            return true;

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

//                                                                  (função que adiciona 10 nomes ao array amigos[], utilizado para depurar)
function desenvolvedor(){
    let listaDeNomesDoDev = ['Cândido', 'Cássio', 'Evelina', 'Hamilton', 'Joelle', 'Léa', 'Ícaro', 'Lauro', 'Valter', 'Yasmin']; //nomes retirados do Github: https://github.com/emersonsoares/SampleDataGenerator/blob/master/SampleDataGenerator/Resources/nomes.txt;
    for (let i = 0; i < listaDeNomesDoDev.length; i++){
        
        atualizarListaDeAmigosSecreto(listaDeNomesDoDev[i]);


    }
    novaLista = true;
    quantidadeInicialDeNomesDaLista += 10;
}