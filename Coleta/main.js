//main.js

// Funções Matemáticas
let num = 4.7

// Arredondar números

// Arredondar números
console.log(Math.round(num)) //inteiro mais próximo
console.log(Math.floor(num)) //arredonda para baixo
console.log(Math.ceil(num)) //arredonda para cima
// Número Aleatório
console.log(Math.random()) //número aleaatório entre 0 e 1
console.log(Math.random()*10) //número aleatrório entre 0 e 10

//Funções de String
let texto = "Eu amo javaScript"
// Manupular String
console.log(texto.toUpperCase()) //Deixa tudo maiusculo
console.log(texto.toUpperCase()) //Deixa tudo minusculo
console.log(texto.trim()) //Remove espaço antes e depois do texto
// Localiar texto
console.log(texto.charAt(5)) //mostrar a letra que está nessa posição
console.log(texto.includes("javaScript")) //verifica se tem a palavra
// Trocar textos
console.log(texto.replace("amo", "adoro"))


// Funções Númericas
let numero = "42.85"
console.log(parseInt(numero)) //converte string para número inteiro
console.log(parseFloat(numero)) //converte String para número decimal
console.log(Numver(numero).toFixed(1))//Define quantas casas decimal