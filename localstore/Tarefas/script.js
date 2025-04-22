let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

const entradaTarefa = document.getElementById
("entradaTarefa")
const botaoAdicionar = document.getElementById
("botaoAdicionar")
const listaTarefas = document.getElementById
("listaTarefas")

function salvarTarefas () {
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
}

//
function exibirTarefas() {
    listaTarefas.innerText= ""
    tarefas.forEach((tarefa, indice) => {
        const itemLista = document.createElement("li")
        const caixaMarcacao = document.createElement("input")
        caixaMarcacao.type = "checkbox"
        caixaMarcacao.checked = tarefa.feita
        caixaMarcacao.onchange = () =>{
            tarefas[indice].feita = !tarefas[indice].feita
            salvarTarefas()
            exibirTarefas()
        }

        const textoTarefas = document.createElement("span")
        textoTarefas.textContent = tarefa.texto
        if(tarefas.feita) {
            textoTarefas.classList.add("concluida")
        }
        const botaoExcluir = document.createElement("button")
        botaoExcluir.textContent = "excluir"
        botaoExcluir.onclick = () => {
            tarefas.splice(indice, 1)
            salvarTarefas()
            exibirTarefas()
        }
        itemLista.appendChild(caixaMarcacao)
        itemLista.appendChild(textoTarefas)
        itemLista.appendChild(botaoExcluir)
        listaTarefas.appendChild(itemLista)
    })
}

//
botaoAdicionar.addEventListener("click", () => {
    const texto = entradaTarefa.value
    if(texto != ""){
        tarefas.push({texto, feita: false})
    salvarTarefas()
    exibirTarefas()
    }
})