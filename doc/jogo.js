const prompt = require("prompt-sync")();

let jogos = []
let sair = true
let opcao = 0
let jogo = " "



opcoes()
while(sair != false){
    opcao = parseInt(prompt("Digite oque quer fazer: "))
    switch(opcao){
        case 1:
            adicionar()
            break
        case 2:
            excluir()
            break
        case 3:
            listar()
            break
        case 4:
            editar()
            break
        case 5:
            sair = false
            break
        

    }

    
}





// --------------------------------------
function opcoes(){
    console.log("1- Cadastrar um jogo")
console.log("2- Excluir um jogo")
console.log("3- Ver a lista de jogos")
console.log("4- Editar um jogo")
console.log("5- Sair")}


function adicionar(){
    jogo = prompt("Que jogo gostaria de adicionar?")
    jogos.push(jogo)
    console.log("Jogo adicionado com sucesso.")

}

function excluir(){
    jogo = prompt("Que jogo gostaria de remover?")
    for(let i = 0; i < jogos.length; i++){
        if (jogos[i] == jogo){
            jogos.splice(i, 1)
            console.log("Jogo removido com sucesso.")
        }
    }
}

function listar(){
    console.log(jogos)
}

function editar(){
    jogo = prompt("Que jogo gostaria de editar?")
    for(let i = 0; i < jogos.length; i++){
        if (jogos[i] == jogo){
            var novoJogo = prompt("Digite o novo jogo pra botar no lugar: ")
            jogos[i] = novoJogo
            console.log("Jogo editado com sucesso.")
        }
    }
}