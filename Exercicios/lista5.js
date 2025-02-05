console.log("------------------")
console.log("Exercício 1")
let idade = (prompt("Quantos anos você tem?"))
let temCarteira = true

if (idade >= 18 && temCarteira == true){
    console.log("Vocêpode dirigir")
} else {
    console.log("Você não pode dirigir")
}

console.log("------------------")
console.log("Exercício 2")
let anosTrabalho = (prompt("Qunatos anos de trabalho você tem?"))
let Projetos = (prompt("Qunatos projetos realizandos você fez?"))
let elegivel =true

if (anosTrabalho >= 5 || Projetos >= 10){
    console.log("Você está elegivel para a promoção")
} else {
    console.log("Você não está elegivel paa a promoção")
}

console.log("------------------")
console.log("Exercício 3")
let idadeLiberado = (prompt(" Quantos anos você tem? "))

if(idadeLiberado >= 18 && idadeLiberado <= 30){
    console.log("Você foi aceito para a vaga de emprego")
} else {
    console.log("Você não pode entrar no evento")
}

console.log("------------------")
console.log("Exercício 4")
let idadePessoa = (prompt("Qual sua idade? "))
let experiencia = true

if (idadePessoa >= 21 && experiencia == true){
    console.log("Você foi aceito para a vaga")
} else {
    console.log("Você não foi aceito para a vaga")
}

console.log("------------------")
console.log("Exercício 5")
let nome = (prompt("Qual seu nome?"))
let senha = (prompt("Senha: "))

if (nome == "Admin" && senha == "1234"){
    console.log ("Login bem-sucedido")
} else {
    console.log("Nome de usuário ou senha incorretos")
}

console.log("------------------")
console.log("Exercício 6")
let numb = (prompt("Digite um número"))

if(num >= 10 && num <= 20){
    console.log("O número está dentro do intervalo entre 10 e 20")
} else if (num >= 30 && num <= 50){
    console.log("O número está dentro do intervalo entre 30 e 50")
} else{
    console.log("Ele não está dentro do intervalo de 10 e 20 nem entre 30 e 50")
}

console.log("------------------")
console.log("Exercício 7")
let number = (prompt("Digite um número"))

if (num <= 10 || number >= 100 && numero == 50){
    console.log("Diite seu numero:")
} else {
    console.log("O numero é aceito!")
}

