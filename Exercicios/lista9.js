console.log("Exercício 1")
for (let numero = 1; numero <= 30; numero ++){
    console.log(numero)
}

console.log("-----------------------------")
console.log("Exercício 2")
for (let num = 3; num >= 1; num --){
    console.log(num)

}

console.log("-----------------------------")
console.log("Exercício 3")
for (let vezes = 5; vezes >= 1; vezes--){
    let classficacao = prompt ("Digite um número")
    if (classficacao >= 50) {
        console.log("Acima da média")
    }else {
        console.log("Abaixo da média")
    }
}

console.log("-----------------------------")
console.log("Exercício 4")
let tabuada = (prompt("Digite um número: "))

for (let mult = 1; mult <= 10; mult++){
    let resultado = mult * tabuada
    console.log(resultado)
}

console.log("-----------------------------")
console.log("Exercício 5")
let NumPatinho = prompt("Digite um número de patinhos: ")

for (let NumPatinhos = NumPatinho; NumPatinhos >= 1; NumPatinhos--){
    console.log(NumPatinhos, "patinhos fomra \n Além das montanhas \n A mamãe gritou: Quá, quá, quá, quá \n Mas só", NumPatinhos - 1, "patinhos voltaram de lá.")
} console.log("A mamãe patinha foi procurar \n Além das montanhas \n Na beira do mar \n A mamãe gritou: Quá, quá, quá, quá \n E os patinhos voltaram de lá.")

console.log("-----------------------------")
console.log("Exercício 6")

for (let vezes = 1; vezes <= 10; vezes){
let idade = (prompt("Digite as idades"))
    if (idade >= 18) {
        console.log("Maior de idade")
    } else{
        console.log("Menor de idade")
    }
}

console.log("-----------------------------")
console.log("Exercício 7")

for(let voto = 1;voto <= 5; voto ++) {
    let voto1 = Number(prompt("hora de Votar! Em quem você ira votar?"))
    console.log(voto1)
    if (voto1 == 1){
        console.log("Kyrie Irving")
} else if (voto1 == 2) {
    console.log("Curry")
}else if (voto1 == 3) {
    console.log("Kobe Bryant")
}else if (voto1 == 4) {
    console.log("Garnet")
}else if (voto1 == 5) {
    console.log("Jordan Poole")
}else if (voto1 == 6) {
    console.log("Voto em branco")
}
}