const diviniciar = document.getElementById("diviniciar")
const divareajogo = document.getElementById("areajogo")
const titulodapergunta = document.getElementById("titulopergunta")
const btniniciar = document.getElementById("botaoiniciar")
const btnproximo = document.getElementById("botaoProximo")
const final = document.getElementById("resultado")
let pontos = 0
const qtdAcertos = document.getElementById("quantidadeAcertos")

const perguntas = [
    { pergunta:"Qual é o melhor time do mundo?", opcoes:["IBIS Sport Club","Real Madrid","Palmeiras","Al Nassr"], correta:"IBIS Sport Club"},
    { pergunta:"Qual o melhor jogador da historia?", opcoes:["Pelé","Mauro Shampoo","Cristiano Ronaldo", "Messi"], correta:"Mauro Shampoo"},
    { pergunta:"Quantos titulos tem o IBIS?", opcoes:["Nenhum","Uns três","Todos", "Muitos"], correta:"Todos"},
    { pergunta:"Quem vai vencer a copa do mundo?", opcoes:["Al Bilau","PSG", "IBIS Sport Club", "Real Madruga"], correta:"IBIS Sport Club"},
    { pergunta:"Mauro Shampoo é rei?", opcoes:["Sim","Não","Talvez"], correta:"Sim"},
    { pergunta:"Casaria com o CR7?",opcoes:["Sim","Claro","Sempre"], correta:"Sempre"},
    { pergunta:"Quem jogou mais?",opcoes:["Pele","Messi","Cristiano Ronaldo", "Mauro Shampoo"], correta:"Mauro Shampoo"},
    { pergunta:"Quem é a mãe do Neymar?",opcoes:["Eu","Você","Xuxa","Nadine Santos"], correta:"Eu"},
    { pergunta:"Champions ou Libertadores?",opcoes:["Champions","Libertadores","Copa Nordeste","Catarinense"], correta:"Copa Nordeste"},
    { pergunta:"Qual jogo jogar no SENAI?",opcoes:["Poki","Minecraft","Instagram","Jogo do Bicho"], correta:"Jogo do Bicho"},
]
let indiceperguntas = 0
let botaodepergunta = document.createElement("button")

btniniciar.addEventListener("click", iniciarjogo)
btnproximo.addEventListener("click", proximapergunta)

/* Funções */
function iniciarjogo(){
    fecharbotaoinicio()
    abrirareajogo()
    btnproximo.disabled=true
    btnproximo.classList.add("disabled")
}

function fecharbotaoinicio(){
    diviniciar.innerHTML = " "
}

function abrirareajogo(){
    divareajogo.classList.add("active")
    btnproximo.disabled = true
    btnproximo.classList.add("disabled")

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
            botao.classList.add("correct")
        pontos = pontos + 10}
        else if(botao.textContent === btnSelecionado && botao.textContent != respostacorreta){
            botao.classList.add("incorrect")
        pontos = pontos - 10}
        botao.classList.add("disabled")
        botao.disabled = true

    }
    
    
)
btnproximo.disabled=false
btnproximo.classList.remove("disabled")


}


function proximapergunta(){
    indiceperguntas++
    if (indiceperguntas < perguntas.length)
        abrirareajogo()
    else{
        alert("Não tem mais perguntas")
        encerrarJogo()
    }
}



function encerrarJogo(){
    divareajogo.classList.remove("active")
    divPlacar.classList.add("active")
    qtdAcertos.textContext = "Você acertou"+pontos
}