const tarefas = document.querySelectorAll(".tarefas")
const colunas = document.querySelectorAll(".tarefas")

tarefas.forEach(tarefa => {
    tarefa.addEventListener("dragstart", () => {
        tarefa.classList.add("arrastando")
    })
    tarefa.addEventListener("dragende", () => {
        tarefa.classList.remove("arrastando")
    })
})

colunas.forEach(coluna => [
    coluna.addEventListener("dragover", (e) => {
        e.preventDefault()
        const tarefaArrastando = document.querySelectorAll(".arrastando")
        coluna.appendChild(tarefaArrastando)
    })
])