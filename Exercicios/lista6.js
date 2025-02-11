console.log("Exercicio 1")
let opcao = (prompt("Digite um número de 1 a 7:"))

switch (opcao){
    case "1":
        console.log("Domingo")
        break

   case "2":
        console.log("Segunda-feira")
        break

    case "3":
        console.log("Terça-feira")
        break

    case "4":
        console.log("Quarta-feira")
        break

    case "5":
        console.log("Quinta-feira")
        break

    case "6":
        console.log("Sexa-feira")
        break

    case "7":
        console.log("Sabado")
        break
        default:
        console.log("Numero inválido. Ensira um valor entre 1 e 7")
}

console.log("------------------")
console.log("Exercício 2")
let idade = (prompt("Digite sua idaed: "))

switch (idade){
    case "5":
        console.log("Infantil A")
        break
    case "10":
        console.log("Infantil B")
        break
    case "15":
        console.log("Infantil A")
        break
    case "20":
        console.log("Infantil B")
        break
    case "30":
        console.log("Adulto")
        break
        default:
            console.log("Idade inaválida, insira 5, 10, 15, 20 30")
}

console.log("------------------")
console.log("Exercício 3")
let truno = (prompt("Informe seu turno(M, V ou N"))

switch(truno){
    case "M" :
        console.log("Bom-Dia!")
        break
    case "V" :
        console.log("Boa-Tarde!")
        break
    case "N" :
        console.log("Boa-Noite!")
        break
        default:
        console.log("Turno inválido, Insira M, V ou N.")
}

console.log("------------------")
console.log("Exercício 4")
let numero = (prompt("Digite uma nota entre 1 e 5. Em que 1 equivale"))

switch(numero){
    case "1" :
        console.log("Muio ruim")
        break
    case "2" :
        console.log("Ruim")
        break
    case "3" :
        console.log("Bom")
        break
    case "4" :
        console.log("Muito BOm")
        break
    case "5" :
        console.log("Exclente")
        break
        default:
            console.log("Numero fora do intervalo. Insira um valor enre 1 e 5")

}