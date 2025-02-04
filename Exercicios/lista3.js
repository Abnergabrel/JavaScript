console.log("Exercicio 1")
let idade = prompt("Qual sua idade?")

if (idade >= 18){
    console.log("Você é maior de idade")
} else{
    console.log("Você é menor de idade")
}

console.log("------------------------")
console.log("Exercicio 2")

let numero = prompt("Escolha um número")

let resultado = numero % 2
if (resultado == 0) {
    console.log("Par")
} else {
    console.log("Impar")
}

console.log("-------------------------")
console.log("Execício 3")

let nota1 = prompt("Qual a primeira nota: ")
let nota2 = prompt("Qual a segunda nota: ")
let total = (nota1 + nota2) / 2
if (total >= 7){
    console.log("Aprovado")
} else{
    console.log("Reprovado")
}

console.log("-------------------------")
console.log("Execício 4")

let idadePermitida = prompt ("Qual a sua idade?")

if (idadePermitida >= 18){
    console.log("Entrada permitida")
} else {
    console.log("Entrada probida")
}

console.log("-------------------------")
console.log("Exercício 5")

let senha = prompt ("Digite a senha")
 if (senha == 1234){
    console.log("Senha correta!")
 } else {
    console.log("Senha Incorreta!")
 }

console.log("-------------------------")
console.log("Execício 6")

let temperatura = prompt ("Digite a temperatura")
if (temperatura >= 30) {
    console.log("Esta quente")
} else {
    console.log("Esta frio")
}

console.log("------------------")
console.log("Exercício 7")

let num = prompt ("Digite um numero positivo ou negativo:")

if (num > 0){
    console.log("Número positivo")
} else {
    console.log("Número negativo")
}
