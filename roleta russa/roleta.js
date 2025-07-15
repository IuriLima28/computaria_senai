let arma = [0,0,0,0,0,0]
let balaAtual = 0
let covardias = 3
let contador = document.getElementById("contador")
let jogo = document.getElementById("jogo")
let restantes = 6
let balasnaTela = document.querySelectorAll(".bala")



function carregar(){
    for(let i = 0; i < 6; i++){
        let y = Math.random();
        if (y < 0.5){
        y = 0}
        else{
        y= 1}
        arma[i] = y
     }
    console.log(arma)
}

function checar(){
    var vazias = 0
    for(let i = 0; i < 5; i++){
        if (arma[i] == 0){
            vazias = vazias + 1
        }
        if (vazias == 5){
            carregar()
            console.log("todas vazias")
        }
        else{
            console.log("checagem completa")
        }
    }
}

function suicidio(){
    if(arma[balaAtual] == 1){
        alert("Você morreu.")
        jogo.style.display = 'none'
        contador.style.display = 'none'
        document.body.style.backgroundColor = 'black';
        balasnaTela.style.display = 'none'
    }
    else if(arma[balaAtual] == 0){
        alert("Vazia.")
        balaAtual = balaAtual + 1
    }
    restantes = restantes - 1
    atualizar()

}
function covarde(){
    if (covardias > 0){
    if(arma[balaAtual] == 1){
        alert("A bala estava carregada.")
        balaAtual = balaAtual + 1
        covardias = covardias - 1
        tiroNaTela()
    }
    else if(arma[balaAtual] == 0){
        alert("Vazia.")
        balaAtual = balaAtual + 1
        covardias = covardias - 1

    }
    restantes = restantes - 1
    atualizar()
}
else{
    alert("Sem mais chances.")
}
}

function atualizar(){
    contador.innerHTML = "<br><p>Chances de atirar longe:</p>"+covardias+"<br><p>Balas restantes:</p>"+restantes
    
}


function tiroNaTela(){
    var posX = Math.floor(Math.random() * window.innerWidth);
    var posY = Math.floor(Math.random() * window.innerHeight);

    const bala = document.createElement('img');
    bala.setAttribute('src', 'bala.png');
    bala.setAttribute('alt', 'bala');
    bala.classList.add('bala')

    // Estilo direto na imagem
    bala.style.position = 'absolute';
    bala.style.left = posX + 'px';
    bala.style.top = posY + 'px';
    bala.style.width = '150px'; // Define tamanho para ser visível
    bala.style.zIndex = 999; // Fica por cima

    // Adiciona no body
    document.body.appendChild(bala);
}
