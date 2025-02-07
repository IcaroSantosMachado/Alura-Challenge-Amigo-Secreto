//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let listaDeAmigosSorteados = [];
let listaAmigos = document.getElementById('listaAmigos');

function adicionarAmigo(){
    let amigoInserido = document.getElementById('amigo');
    if (amigoInserido.value.trim()){

        atualizarListaDeAmigosSecreto(amigoInserido.value);
        
    } else {

        alert('Amigo invalidado, insira um amigo válido')

    }
}

function sortearAmigo(){
    
    let amigoSorteado = amigos.length != 0 ? amigos[escolherAleatoriamenteUmAmigoSecreto()] : "Não há amigos para ser sorteados.";
    listaDeAmigosSorteados.push(amigoSorteado)
    alert(amigoSorteado);

}

function teste(){

    const fruits = {"primeirafruta":  [nome = 300, quantia = 2]}; 

    let text = "";
    for (let [id, [fruit, amount]] of Object.entries(fruits)) {
    text += id + fruit + ": " + amount + "<br>";
    }

    console.log(text);



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
    verificarAmigoJaEscolhido(embaralhaAmigo);
    return embaralhaAmigo;

}

function verificarAmigoJaEscolhido(amigoSecretoSorteado){
   
    if (listaDeAmigosSorteados.includes(amigos[amigoSecretoSorteado])) {
        verificaSeTodosAmigosJaForamSorteados();     
        escolherAleatoriamenteUmAmigoSecreto();
        


    } else {

        return amigoSecretoSorteado;

    }

}


function verificaSeTodosAmigosJaForamSorteados(){

    if(listaDeAmigosSorteados.length >= amigos.length){
        listaDeAmigosSorteados = [];
        alert('todos os amigos foram listados.')

    } else {

        return;

    }


}
