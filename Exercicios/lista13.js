console.log("Exercício 1")
let botao = document.getElementById("botao")

botao.addEventListener("click", function(){
    texto.style.backgroundColor ="blue" 
    texto.style.color = "white"
})

console.log("------------------")
console.log("Exercício 2")
let botao2 =document.getElementById("botao2")

botao2.addEventListener("click", function(){
    botao2.style.backgroundColor = "pink"
})

console.log("------------------")
console.log("Exercício 3")
let aumentarFonte = document.getElementById("aumentarFonte")

 aumentarFonte.addEventListener("dblclick", function() {
    aumentarFonte.style.fontSize = "40px"
})

console.log("------------------")
console.log("Exercício 4")
let hover = document.getElementById("hover")
hover.addEventListener("mouseover", function(){
    hover.style.backgroundColor = "blue"
})

hover.addEventListener("mouseout", function(){
    hover.style.backgroundColor = "white"
})

console.log("------------------")
console.log("Exercício 5")
let botao3 =document.getElementById("botao3")

botao3.addEventListener("click", function(){
    img.style.width = "200px"
    img.style.height = "200px"
})

console.log("------------------")
console.log("Exercício 6")
let botao4 =document.getElementById("botao4")

botao4.addEventListener("click", function(){
    img2.style.width = "200px"
    img2.style.height = "200px"
    img2.style.borderRadius ="100px"
})

console.log("------------------")
console.log("Exercício 7")
let botao5 =document.getElementById("botao5")
let botao6 =document.getElementById("botao6")
let botao7 =document.getElementById("botao7")

botao5.addEventListener("click", function(){
    botao5.style.backgroundColor = "pink"
    texto1.style.color = "pink"
})

botao6.addEventListener("click", function(){
    botao6.style.backgroundColor = "red"
    texto2.style.color = "red"
    texto2.style.fontSize = "30px"
})

botao7.addEventListener("click", function(){
    botao7.style.backgroundColor = "purple"
    texto3.style.color = "purple"
    texto3.style.fontSize = "30px"
    botao7.style.borderRadius = "100px"
})