const prompt = require("prompt-sync")();

let pergunta = prompt("Quantas pessoas vai cadastrar?: ")
let alturas = []
var soma = 0


for(let i = 0; i < pergunta; i++){
    let altura = Number(prompt("Digite a altura: "))
    alturas.push(altura)
}

for(let i = 0; i < pergunta; i++){
soma = soma + alturas[i]
var mediaFinal = soma/pergunta}




console.log("As alturas são "+alturas+", a media é "+mediaFinal.toFixed(2))