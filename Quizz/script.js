// Cada pergunta tem:
//- A pergunta
//- as opções
//- a alternativa certa (começa no0)
const perguntas = [
    {
        pergunta: "Qual o noe da nossa escola?",
        opcoes: ["Luis Eulalio de Bueno Vidigal Filho", "Luis Eulalio", "Luis de Buneo", "Luis Eulalio de Vidigal"],
        correto:0},
    {
        pergunta: "Qual o nome do nosso curso?",
        opcoes: ["Analise e Desenvolvimento de Sistemas", "Sistemas de informação", "Desenvolvimento de Sistemas", "Ciência da Computação"],
        correto: 2
    },
    {
        pergunta: "Em que ano foi fundada a nossa escola",
        opcoes: ["1999", "1942", "1985", "1970"],
        correta: 1
    }
]

let perguntaAtual = 0 
let pontuacao = 0
let erros = 0
let opcaoSelecionada = null

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReuniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

function atulizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}

function mostrarPergunta() {
    const perguntaAtualObj = perguntas[perguntaAtual]
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = ""
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", () => selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
}

function selecionarOpcao(indice) {
    opcaoSelecionada = indice

    const opcoes = document.querySelectorAll(".opcao")
    opcoes.forEach((opcao, i) => {
        opcao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false
}
function mostrarPontuacao() {
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}
botaoProxima.addEventListener("click", () => {
    if(opcaoSelecionada == perguntas[perguntaAtual].correta) {
        pontuacao++
    } else {
        erros++
    }
        atulizarPlacar()

        perguntaAtual++
        if(perguntaAtual < perguntas.length) {
            mostrarPergunta()
        } else {
            mostrarPontuacao()
        }
})
botaoReuniciar.addEventListener("click", () => {
    perguntaAtual = 0
    pontuacao = 0
    erros = 0

    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atulizarPlacar()
    mostrarPergunta()
})
mostrarPergunta()