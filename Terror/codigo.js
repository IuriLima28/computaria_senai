const pagina1 = document.querySelector('.pagina1');

document.getElementById('proxima1').onclick = function () {
    pagina1.style.display = 'none'
}



//----------------------funções

function sorrir(){
    var chaves = document.getElementById("chaves")
    chaves.src = "chaves-feliz.png"
    
}
function triste(){
    var chaves = document.getElementById("chaves")
    chaves.src = "chaves-triste.png"

}