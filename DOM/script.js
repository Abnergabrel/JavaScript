let titulo = document.getElementById("titulo")
console.log(titulo.innerText)
// documento = HTML
// getElementById = pague o elemento pelo id
// logo, quando fizemos isso guardamos oque estava no HMTL em uma variavel no js

// ------------------------------------------------------------------------------
let texto = document.getElementById("texto")
texto.innerText = "Texto Alterado"
// Desse jeito trocamos o texto de uma tag
texto.style.color = "blue"
// Usando o styke.color = "blue"
// ------------------------------------------------------------------------------

let botao = document.getElementById("botao")

botao.addEventListener("click", function(){
    alert("botão clicado")
})
// ------------------------------------------------------------------------------
let duplo = document.getElementById("duplo")
duplo.addEventListener("dblclick", function () {
    duplo.style.backgroundColor = "red"
})
// ------------------------------------------------------------------------------
let passe = document.getElementById("passe")
passe.addEventListener("mouseover", function(){
    passe.innerText = "o mouse está aqui"
    passe.style.backgroundColor = "yellow"
}) //mouseover é quando o mouse está sobe o elemento
passe.addEventListener("mouseout", function(){
    passe.innerText = "passe o mouse aqui"
    passe.style.backgroundColor = "blue"
    passe.style. fontSize = "16px"
})

