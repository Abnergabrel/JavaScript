console.log("Exercício 1")
let filmes = ["Enrolados", "Cinderela", "Frozen"]
console.log(filmes[0])

console.log("------------------")
console.log("Exercício 2 ")
let frutas = ["Manga", "Maça", "Pera", "Uva", "Banana"]
console.log(frutas[2])

console.log("------------------")
console.log("Exercício 3")
let cores = ["Rosa","Roxo", "Azul"]

cores.push("Amarelo")
for (let i = 0; i < cores.length; i++){
    console.log(cores[i])
}

console.log("------------------")
console.log("Exercício 4")
let numeros = ["1", "2", "3", "4"]
numeros.pop(3)

for (let num =0; num <numeros.length; num++){
    console.log(numeros[num])
}

console.log("------------------")
console.log("Exercício 5")
let cidades = ["Suzano", "Mogi das Cruzes"]
cidades.unshift("Poá")

for (let cid = 0; cid <cidades.length; cid++){
    console.log(cidades[cid])
}

console.log("------------------")
console.log("Exercício 6")
let animais =["Tigre", "Leopardo", "Leão"]
animais.shift(0)

for (let animal = 0; animal <animais.length; animal++){
    console.log(animais[animal])
}

console.log("------------------")
console.log("Exercício 7")
let nomes = ["Jeep", "Lancer", "GTR", "Astra"]
nomes.length
console.log(nomes.length)


console.log("------------------")
console.log("Exercício 8")
let vazio =[]
vazio.push(1)
vazio.push(2)
vazio.push(3)
vazio.unshift(5)
vazio.shift()
vazio.pop()
vazio.length
console.log(vazio)