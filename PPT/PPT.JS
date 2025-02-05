// Jogo Pedra, Papel e Tesoura
const escolhaJogador = prompt("Escolha pedra, papel ou tesoura: ")
// Solicita que o usuário informe qual ele quer

const escolhaPC = ["pedra", "papel", "tesoura"]
[Math.floor(Math.random() * 3)]

alert(`VOcê escolhe ${escolhaJogador}`)
alert(`O computador escolheu ${escolhaPC}`)
// Mostrando qual foi a nossa escolha e qual foi a escola do computador

//Compare se a nossa escolha foi igual a do computador
if (escolhaJogador == escolhaPC) {
    alert("Empate")
} else if ( escolhaJogador == "pedra" && escolhaPC == "tesoura") {
    //criamos a primeira verificação de vitoria
    alert("Você Venceu")
} else if (escolhaJogador == "papel" && escolhaPC == "pedra") { //criamos a terceira verificação
    alert("Você venceu")    
} else {
    alert("Você perdeu")
}