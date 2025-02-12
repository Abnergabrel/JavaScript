let contador = 0 
let contador1 = 0 

while(contador < 0){
// verificar primeiro executa depois
    console,log("while:", Contador)
    contador++
}
do { //executa primeiro, verifica depois
    console.log("do while", contador)
    contador1++
} while (contador1 < 0)

//SEGUNDO EXEMPLO
let numero = 5
do {
    console.log(numero)
    numero -= 2
} while(numero >= 0)

// TERCEIRO EXEMPLO
let idade = prompt("Qual sua idade? ")
do {
    if ( idade > 0) {
        console.log("Idade valida")
    }
    else{
        console.log("Idade invalida")
    }
    Idade = prompt("Qual sua idade? ")
} while (idade <= 0)