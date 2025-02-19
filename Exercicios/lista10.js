console.log("Exercico 1")
function JavaScript(){
    console.log("Eu gosto de JavaScript")
}
JavaScript()

console.log("--------------------------")
console.log("Exercico 2")

function contarAteCinco (){
    for (let i = 1; i <= 5; i++) {
        console.log(i)
    }
}
contarAteCinco()

console.log("--------------------------")
console.log("Exercico 3")

let nome =(prompt("Digite seu nome: "))
function saudacao (){
    console.log("Olá,", nome, "! Seja bem-vindo(a)!")
}
saudacao()

console.log("--------------------------")
console.log("Exercico 4")

function multiplicarDoisNumeros(a, b){
        let resultado = a * b
        return resultado 
    }
    console.log(multiplicarDoisNumeros(5,3))

multiplicarDoisNumeros()

console.log("--------------------------")
console.log("Exercico 5")
let idade = (prompt("Digite as idades"))

function verficaridade(){
    if (idade >= 18) {
    console.log("Maior de idade")
    } else{
    console.log("Menor de idade")
}
}
verficaridade()

console.log("--------------------------")
console.log("Exercico 6")

let a = Number((prompt("Digite seu primeiro numero: ")))
let b = Number((prompt("Digite seu segundo numero: ")))
function somar(a, b){
    let resultado = a + b
    return resultado
}
console.log(somar (a, b))
somar()

console.log("--------------------------")
console.log("Exercico 7")
let largu = Number(prompt("Qual a Largura:"))
let altu = Number(prompt("Qual a Altura:"))


function calcularAreaRetangulo(larg, altu){
    let area = largu * altu
    return area
}
console.log(calcularAreaRetangulo(largu, altu))
calcularAreaRetangulo()

console.log("--------------------------")
console.log("Exercico 8")

let idade1 = Number(prompt("Digite a primeira idade: "))
let idade2 = Number(prompt("Digite a segunda idade: "))

function compararIdade(idade1, idade2) {
    if (idade1 > idade2){
        console.log("A primeira pessoa é nais velha.")
    } else 
        console.log("A segunda pessoa é mais velha.")
}
console.log(compararIdade(idade1 , idade2))