let jogos = ["Elden Ring", "GTA IV", "FIFA 17", "Dark Souls 2", "SEKIRO", "Demon Souls"]
let procurar = "SEKIRO"
jogos.push("PES 2012")
jogos.push("MAFIA 3")


existe("SEKIRO")
existe("SEKIRO")
existe("SEKIRO")


function existe(procurar){
    for (let i = 0; i < jogos.length; i++)  {
        if(jogos[i] == procurar) {
            existe = true
            break
        }
    }
    if(existe){
        console.log(`O jogo ${procurar} foi encontrado`)
    }
    else{
        console.log(`O jogo ${procurar} foi encontrado`)
    }

}