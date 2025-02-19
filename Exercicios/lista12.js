console.log("Exercicio 1")
let nome =(prompt("Digite seu nome: "))

let saudacao = function(nome){
    console.log("Olá,", nome, "Como vai?!")
}
saudacao(nome)

console.log("Exercicio 2")
console.log("_____________________________")
let numero1 = Number(prompt("Digite o primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número: "))

let soma = function(numero1, numero2){
    let resultado = numero1 + numero2 
    return resultado
}
console.log(soma (numero1, numero2))

console.log("Exercicio 3")
console.log("____________________________")
let base = Number(prompt("Digite a base do retangulo: "))
let altura = Number(prompt("Digite a altura do retangulo: "))

let area = function (base, altura){
    let resultado = numero * 2
    return resultado

}
console.log(dobro(numero))

console.log("Exercicio 4")
console.log("____________________________")

let num = Number(prompt("Digite Numero: "))

let dobro = function(num){
    let resultado = num * 2
    return resultado
}
console.log(dobro(num))

console.log("Exercicio 5")
console.log("____________________________")
let N1 = Number(prompt("Digite um numero: "))

let quadrado = function(N1){
    let resultado = N1 * N1 
    return resultado
}
console.log(quadrado(N1))

console.log("Exercicio 6")
console.log("____________________________")
let Idade = Number(prompt("Digite sua idade: "))

let maiorDeIdade = function (idade){
    if (idade <= 18){
        console.log("Você é maior de idade")
    }else
    console.log("Você é maior de idade: ")
}
console.log(menorDeIdade(Idade))

console.log("Exercicio 7")
console.log("____________________________")

let Nota1 = Number(prompt("Digite a primeira nota: "))
let Nota2 = Number(prompt("Digite a segunda nota: "))
let Nota3 = Number(prompt("Digite a terceira nota: "))

let media = function (Nota1, Nota2, Nota3){
    resultado = (Nota1 + Nota2 + Nota3) / 3
    return resultado
}
console.log(media(Nota1, Nota2, Nota3))