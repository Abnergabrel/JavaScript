const container = document.querySelector(".container")
const botaoAnterior = document.querySelector(".botao-anterior")
const botaoProximo = document.querySelector(".botao-proximo")
let indiceAtual = 0
let idIntervalo

function atualizarCarrossel() {
    container.style.transform = `translateX(-${indiceAtual*33.33}%)`
}
function proximaImage() {
    indiceAtual = (indiceAtual + 1) % 3 
    atualizarCarrossel()
}
function inicarCarrossel() {
    idIntervalo = setInterval(proximaImage, 5000)
}
inicarCarrossel()

botaoAnterior.addEventListener("click", () => {
    indiceAtual = (indiceAtual - 1 + 3) % 3
    atualizarCarrossel()
})
botaoProximo.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % 3 
    atualizarCarrossel()
})