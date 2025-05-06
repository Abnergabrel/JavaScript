console.log("Exercicio 1")
class Livro {
    constructor(titulo, autor, pagina){
        this.titulo = titulo
        this.autor = autor
        this.pagina = pagina
    }
mostrarDetalhes(){
    console.log(`Titulo: ${this.titulo}, Autor: ${this.autor}, Pagina: ${this.pagina}`)
}
}
const livro = new livro ("Métrica", "Colleen Hoover, 200")
livro.mostrarDetalhes()

console.log(____________________)
console.log("Exercicio 2")
class contaBancaria {
    constructor(titular, saldo){
        this.titular = titular
        this.saldo = saldo
    }
depositar(valor){
    this.saldo += valor
}
sacar(valor) {
    this.saldo -= valor

}
verSaldo(){
    console.log(`${this.titular}, tem ${this.saldo}`)
    
}
}
const conta = new contaBancaria ("Abner", 180)
conta.verSaldo()
conta.depositar(300)
conta.verSaldo()

conta.sacar(50)
conta.verSaldo()

console.log(____________________)
console.log("Exercicio 3")
class Pet {
    constructor (nome, especie, idade) {
        this.nome = nome
        this. especie = especie 
        this.idade =  idade
    }
falar(fala){
    console.log(`Nome: ${this.nome}, Especie: ${this.especie}, Idade: ${this.idade} faz ${fala}`)
}
}
const animal = new Pet ("Mel", "porco", 5)
animal.falar("oink")   

console.log(____________________)
console.log("Exercicio 3")

class Filme {
    constructor(titulo, genero, duracao){
        this.titulo = titulo
        this.genero = genero
        this.duracao = duracao
    }
assistir(){
    console.log(`Você está assistindo ${this.titulo}, que dura ${this.duracao} minutos`)
}
}
const filmeAssistido = new Filme ("Os Vingadores", "Ação", "2h 23m")
filmeAssistido.assistir
