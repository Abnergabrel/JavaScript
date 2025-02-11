console.log("Exercício 1")
let contador = 0

while (contador <= 10){
    console.log(contador)
    contador++
}

console.log("-----------------")
console.log("Exercício 2")
let tabuada = prompt("Coloque um número")
let multiplicador = 1

while(multiplicador <= 10) {
    let resultado = tabuada * multiplicador
    console.log(tabuada, "x", multiplicador, "=", resultado) 
    multiplicador += 1
}

console.log("-----------------")
console.log("Exercício 3")
let contagem = 10


while(contagem >= 1){
    console.log(contagem)
    contagem--
}

console.log("-----------------")
console.log("Exercício 4")
let senha = prompt("Digite a senha: ")

while (senha != "12345"){
    console.log("Digite novamente")
    senha = prompt("Digite a senha: ")
    if (senha == "12345"){
        console.log("Senha correta")
    }
}

console.log("-----------------")
console.log("Exercício 5")
let num = 50

while (num <= 100){
    console.log(num)
    num++
}

console.log("-----------------")
console.log("Exercício 6")
let number = 0

while (number <= 100){
    number += 5
    console.log(number)
}

console.log("-----------------")
console.log("Exercício 7")
let contabilidade = 0
let mensagem = "Eu gosto de JavaScript"

while (contabilidade <= 5){
    console.log(mensagem)
    contabilidade++

}

console.log("-----------------")
console.log("Exercício 8")
let nome = (prompt("Digite seu nome"))
let quanti = (prompt("Digite um numero"))

while(quanti >= 0) {
    console.log(nome)
    qunat--
}