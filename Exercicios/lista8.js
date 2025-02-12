console.log("Exercicio 1")
contador = 20

do{
    console.log(contador)
    contador++
} while (contador <= 20)

console.log("-------------------")
console.log("Exercicio 2")
let resposta

do{
        console.log(prompt("Deseja Continuar? "))
    } while (resposta == "s")

console.log("-------------------")
console.log("Exercicio 3")
let numero = 1
let numeroFinal = (prompt("Escolha um número final: "))

do{
    console.log(numero)
    numero++
} while (numero <= numeroFinal)

console.log("-------------------")
console.log("Exercicio 4")
let number = 1

do {
    console.log(num)
    number += 2
} while (num <= 31)

console.log("-------------------")
console.log("Exercicio 5")
let num = 1
let numeroEscolhido

do {
    numeroEscolhido = (prompt("Digite um número"))
    if (num >= 0){
        console.log("Número Positivo")
    } else if (num <0 ){
        console.log("Número Negativo")
    } else {
        console.log("Número é zero")
    }
    number++
}while (number <= 5)

console.log("-------------------")
console.log("Exercicio 6")
let operacao

    do {
        operacao = (prompt("Deseja fazer uma conta? "))
        if (operacao == "s"){
            let Num = Number(prompt("Escolha o primeiro número"))
            let Num2 = Nmber(prompt("Escolha o segundi número"))
            let soma = (Num + Num2)
            console.log(soma)
        }
    }while (operacao == "s")