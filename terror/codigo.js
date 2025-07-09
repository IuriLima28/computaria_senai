const pagina1 = document.querySelector('.pagina1');
const pagina2 = document.querySelector('.pagina2')
let chavinho = document.getElementById("chaves_baixo")
var rolou = false

document.getElementById('proxima1').onclick = function () {
    pagina1.style.display = 'none'
    pagina2.style.display = 'inline-block'
}
document.getElementById('proxima2').onclick = function() {
    var resposta = document.getElementById("senha1").value
    var senha = "CHAVES ESTA MORTO"
    
    if (resposta == senha){
        pagina2.style.display = 'none'
        chavinho.style.display = 'none'

    }
    
}


//----------------------funções

function esperarPor(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));}
  
function sorrir(){
    var chaves = document.getElementById("chaves")
    chaves.src = "chaves-feliz.png"
    
}
function triste(){
    var chaves = document.getElementById("chaves")
    chaves.src = "chaves-triste.png"

}

function abrirbarril(){
    var barril = document.getElementById("barril")
    barril.src = "barril_aberto.png"
    chavinho.style.display = 'block'
    alert("KPIDMA MABI UWZBW")
    

}

function chaves_sumir(){
    chavinho.style.display = 'none'
}

function flash(){
    var vila = document.getElementById("vila1")
    if (rolou == false){
    vila1.src = "vila2.jpg"
    esperarPor(2000).then(() => {
        vila1.src = "vila1.jpg"
        rolou = true
    })}



}
