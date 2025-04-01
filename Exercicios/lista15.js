console.log("Exercício 1")
function aparece(){
    let sumir = document.getElementById("sumir")
    if (sumir.style.display == "none"){
        sumir.style.display = "block"
    }else {
        sumir.style.display = "none"
    }
}

console.log("------------------")
console.log("Exercício 2")
let texto = document.getElementById("texto")
function mudarCor(){
    texto.style.color = "white"
    document.body.style.backgroundColor = "black"
}

console.log("------------------")
console.log("Exercício 3")
let mensagem = document.getElementById("mensagem")
function Completar(){
    mensagem.innerText = "Meu nome é Abner, tenho 18 anos, moro em suzano"
}

console.log("------------------")
console.log("Exercício 4")
let texto1 =  document.getElementById("texto1")
    texto1.style.color = "green"
function trocarCor(){
    if (texto1.style.color == "green"){
        texto1.style.color = "yellow"
    } else if (texto1.style.color == "yellow"){
        texto1.style.color = "blue"
    }
}