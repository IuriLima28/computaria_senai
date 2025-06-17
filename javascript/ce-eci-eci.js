const diviniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")
const perguntas = [
    "Qual é o melhor time do mundo?",
    "Qual o melhor jogador do mundo?",
    "Quantos titulos tem o IBIS?",
    "Quem vai vencer a copa do mundo?",
    "Mauro Shampoo é rei?",
    "Casaria com o CR7?",
]
let indiceperguntas = 0
let botaodepergunta = document.createElement("button")


/* Funções */
function iniciarjogo(){
    fecharbotaoinicio()
    abrirareajogo()
}

function fecharbotaoinicio(){
    diviniciar.innerHTML = " "
}

function abrirareajogo(){
    divareajogo.classList.add("active")

    botaodepergunta.textContent = perguntas[indiceperguntas]
    botaodepergunta.classList.add("answer-btn")
    areaperguntas.appendChild(botaodepergunta)


}

function proximapergunta(){
    indiceperguntas++
    if (indiceperguntas < perguntas.length)
        abrirareajogo()
    else{
        alert("Não tem mais perguntas")
    }


}
