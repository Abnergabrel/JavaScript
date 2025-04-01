console.log("Exercício 1")
let botao1 = document.getElementById("botao1")

botao1.addEventListener("click", function () {
    if (botao1.style.backgroundColor == "blue"){
        botao1.style.backgroundColor = "pink"
    } else {
    botao1.style.backgroundColor = "blue"
    }
})

console.log("------------------")
console.log("Exercício 2")
let botao2 = document.getElementById("botao2")
let curtidas = document.getElementById("curtidas")
let numeroLikes = 0

botao2.addEventListener("click", function () {
    numeroLikes ++
    curtidas.innerText = numeroLikes
})

console.log("------------------")
console.log("Exercício 3")
let JavaScript = document.getElementById("JavaScript1, JavaScript2, JavaScript3, JavaScript4, JavaScript5")

botao3.addEventListener("click", function(){
    JavaScript1.innerText = "Eu gosto de JavaScript"
    JavaScript2.innerText = "Eu gosto de JavaScript"
    JavaScript3.innerText = "Eu gosto de JavaScript"
    JavaScript4.innerText = "Eu gosto de JavaScript"
    JavaScript5.innerText = "Eu gosto de JavaScript"
})

console.log("------------------")
console.log("Exercício 4")
let mensagem = document.getElementById("mensagem")

botao4.addEventListener("click", function(){
    botao4.innerText = "Mensagem enviada" 
    mensagem.innerText = ""
})

console.log("------------------")
console.log("Exercício 5")
let botao5 = document.getElementById("botao5")
let ajuste = document.getElementById("ajuste")
botao5.addEventListener("click", function(){
    ajuste.style.display = "flex"
})

console.log("------------------")
console.log("Exercício 6")
let botao6 = document.getElementById("botao6")
let mudarFormato = document.getElementById("mudarFormato")
let botao7 = document.getElementById("botao7")

botao6.addEventListener("click", function(){
    mudarFormato.style.borderRadius = "100px"
})
botao7.addEventListener("click", function(){
    mudarFormato.style.borderRadius = "0px"
})