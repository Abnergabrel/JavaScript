console.log("Abner Gabriel")
console.log("Exercício 1")
class Livro {
    constructor(titulo, autor, pagina){
        this.titulo = titulo
        this.autor = autor
        this.pagina = pagina
    }
mostrarDetalhes(){
    console.log(`Título: ${this.titulo}, Autor: ${this.autor}, Páginas: ${this.pagina}`)
}
}
const livro1 = new Livro ("Métrica", "Colleen Hoover, 200")
livro1.mostrarDetalhes()

console.log("---------------------")
console.log("Exercício 2")

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
const conta = new contaBancaria ("Lavinia", 100)
conta.verSaldo()
conta.depositar(200)
conta.verSaldo()
conta.sacar(100)
conta.verSaldo()

console.log("---------------------")
console.log("Exercício 3")

class Pet {
    constructor (nome, especie, idade){
        this.nome = nome
        this.especie = especie
        this.idade = idade
    }
falar(fala){
    console.log(`Nome: ${this.nome}, Especie: ${this.especie}, Idade: ${this.idade} faz ${fala}`)
}
}
const animal = new Pet ("Mel", "porco", 5)
animal.falar("oink")

console.log("---------------------")
console.log("Exercício 4")

class Filme {
    constructor(titulo, genero, duracao){
        this.titulo = titulo
        this.genero = genero
        this.duracao = duracao
    }
assistir(){
    console.log(`Você está assistindo "${this.titulo}", que dura ${this.duracao}minutos`)
}
}
const filmeAssistido = new Filme ("A Cinco Passos de Você", "Drama e Romance", "1h57" )
filmeAssistido.assistir()

console.log("---------------------")
console.log("Exercício 5")

class Musica {
    constructor(titulo, artista, tempo){
       this.titulo = titulo
       this.artista = artista
       this.tempo = tempo
    }
tocar(){
    console.log(`Tocando "${this.titulo}" do ${this.artista}`)
}
}
const musicaTocada = new Musica ("There´s nothing holding me back", "Shawn Mendes")
musicaTocada.tocar()