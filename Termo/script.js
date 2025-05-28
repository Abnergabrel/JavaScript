const letras = document.querySelector(".contaier-letras")
const linhaBackspaceEnter = document.querySelector("#linhaBackspaceEnter")
const linhaTeclado1 = document.querySelector("#linhaTeclado1")
const linhaTeclado2 = document.querySelector("#linhaTeclado2")
const linhaTeclado3 = document.querySelector("#linhaTeclado3")

// Definindo as letras de cada linha[
const tecladoLinha1 = ["Q", "W", "E", "R", "T"," Y"," U", "I", "O", "P"]
const tecladoLinha2 = ["A", "S", "D", "F", "G","H","J", "K", "L", "Ç"]
const tecladoLinha3 = ["Z", "X", "C", "V", "B","N","M"]

//Definindo o numero de tentativas (linhas) e tamanahos das letras
const linhas = 6
const colunas = 5

//Variavel que guarda onde o jogador esta atulamente 
let linhaAtual = 0
let colunaAtual = 0

// Defie as paçavras que podem er
const palavrasSecretas = ["LELLE", "AMO ELA", "MEU AMOR", "PRETINHA"]
let mapaPalavra = {}
let palavraSecretas = palavrasSecretas[Math.floor(Math.random() * palavrasSecretas.length)]

for(let i = 0; i < palavraSecretas.lenght; i += 1){
    mapaPalavra[palavraSecretas[i]] = i
}

// Matriz onde as tentativas serão armazenadas
const palpites = []
 for(let l=0; l < linhas; l+=1) {
    palpites[l] = new Array(colunas)
    const linhaLetras = document.createElement("div")
    linhaLetras.setAttribute("id", "linha" + 1)
    linhaLetras.setAttribute("class", "linha-letras")

    for(let c= 0; c < colunas; c+=1) {
        const colunaLetra = document.createElement("div")
        colunaLetra.setAttribute("id", "linha", + l + "coluna" + c)
        colunaLetra.setAttribute("class", l == 0 ? "coluna-letra digitando":"coluna-letra")
        linhaLetras.append(colunaLetra)
        palpites[l][c] = ""
    } 
    // Adicionar a linha criada ao site
    letras.append(linhaLetras)
}
 // Verifica se a palvras digitada está correta
 function VerificarPalpite() {
    const palpite = palpites[linhaAtual].join("")
    if(palpite.lenght !== colunas){
        return
    }
    const colunaAtuais = document.querySelectorAll(".digitando")
    for(let i = 0; i < colunas; i += 1) {
        const letra = palpite[i]

        if(mapaPalavra[letra] == undefined) {
            colunaAtuais[i].classList.add("errda")
        }else if (mapaPalavra[letra] == i) {
            colunaAtuais[i].classList.add("certa")
        } else {
            mapaPalavra[letra] == i 
            colunaAtuais[i].classList.add("deslocada")
    }
}
if(palpite == palavraSecreta) {
    window.alert("Acertou! Parabéns") 
 } else if(linhaAtual == linhas - 1) {
 window.alert("Errou")
 } else {
    moverParaProximaLinha()
 }
}

function moverParaProximaLinha() {
    const colunaDigitando = document.querySelectorAll(".digitando")
    colunaDigitando.forEach(col => {
         col.classList.remove("digitando")
    })
    linhaAtual += 1
    colunaAtual = 0
    const novaLinha = document.querySelectorAll("#linha"+linhaAtual)
    const novaColunas = document.querySelectorAll(".coluna-leetra")
    novaColunas.forEach(col => {
        col.classList.add("digitando")
    })
}
function clicarTecla(tecla){
    if (colunaAtual == colunas) {
        return 
    }
    const letraAtual = document.querySelector("#linha" + linhaAtual + "coluna" + colunaAtual)
    letraAtual.textContent = tecla
    palpites[linhaAtual][colunaAtual] = tecla
    colunaAtual += 1
}
function criarLinhaTeclado(telclas, contaier) {
    telclas.forEach(tecla => {
        const botao = document.createElement("button")
        botao.textContent= tecla
        botao.setAttribute("id", tecla)
        botao.addEventListener("click", () => clicarTecla(tecla))
        contaier.append(botao)
    })
}
criarLinhaTeclado(tecladoLinha1, linhaTeclado1)
criarLinhaTeclado(tecladoLinha1, linhaTeclado2)
criarLinhaTeclado(tecladoLinha1, linhaTeclado3)

function apearLetra() {
    if(colunaAtual == 0) {
        return 
    }
    colunaAtual -= 1
    palpites[linhaAtual][colunaAtual] = ""
    const letra = document.querySelector("#linha"+linhaAtual+"coluna"
        +colunaAtual)
        letra.textContent = ""
}
const botaoApagar = document.createElement("button")
botaoApagar.textContent = "<"
botaoApagar.addEventListener("click", apagarLetra)
linhaBackspaceEnter.append(botaoApagar)

const botaoEntrar = document.createElement("button")
botaoEnter.textContent = "Enter"
botaoEnter.addEventListener("click", VerificarPalpite)
linhaBackspaceEnter.append(botaoEnter)

document.onkeydown = function(evt) {
    evt = evt || window.event
    if(evt.key == "Enter") {
        VerificarPalpite()
    } else if (evt.key == "Bacckspace") {
        apagarLetra()
    } else {
        clicarTecla(evt.key.toUpperCase())
    }
}