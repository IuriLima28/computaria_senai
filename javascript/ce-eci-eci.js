const diviniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")
const titulodapergunta = document.getElementById("titulopergunta")

const perguntas = [
    { pergunta:"Qual é o melhor time do mundo?", opcoes:["IBIS Sport Club","Real Madrid","Palmeiras","Al Nassr"], correta:"IBIS Sport Club"},
    { pergunta:"Qual o melhor jogador da historia?", opcoes:["Pelé","Mauro Shampoo","Cristiano Ronaldo", "Messi"], correta:"Mauro Shampoo"},
    { pergunta:"Quantos titulos tem o IBIS?", opcoes:["Nenhum","Uns três","Todos", "Muitos"], correta:"Todos"},
    { pergunta:"Quem vai vencer a copa do mundo?", opcoes:["Al Bilau","PSG", "IBIS Sport Club", "Real Madruga"], correta:"IBIS Sport Club"},
    { pergunta:"Mauro Shampoo é rei?", opcoes:["Sim","Não","Talvez"], correta:"Sim"},
    { pergunta:"Casaria com o CR7?",opcoes:["Sim","Claro","Sempre"], correta:"Sempre"},
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

    titulodapergunta.textContent = perguntas[indiceperguntas].pergunta
    areaperguntas.innerHTML = ""

    perguntas[indiceperguntas].opcoes.forEach(opcao => {
    let botaodepergunta = document.createElement("button")
    botaodepergunta.textContent = opcao
    botaodepergunta.classList.add("answer-btn")
    botaodepergunta.addEventListener("click", () => validarrespostacorreta(opcao))

    areaperguntas.appendChild(botaodepergunta)
 })
}

function validarrespostacorreta(btnSelecionado){
    const botoesdaTela = document.querySelectorAll(".answer-btn")    
    const respostacorreta = perguntas[indiceperguntas].correta
    botoesdaTela.forEach(botao => {
        if(botao.textContent === respostacorreta){
            botao.classList.add("correct")}
        if(botao.textContent === btnSelecionado && botao.textContent != respostacorreta){
            botao.classList.add("incorrect")}

    })


}


function proximapergunta(){
    indiceperguntas++
    if (indiceperguntas < perguntas.length)
        abrirareajogo()
    else{
        alert("Não tem mais perguntas")
    }
}