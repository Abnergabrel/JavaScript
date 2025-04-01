// Jogo Pedra, Papel e Tesoura
// Variaveis paa armazenar os pontos do jogador e pc
let placarJogador = 0
let PLacarPC = 0

//Variavel para armazenar as rodas
let rodadas = Number(prompt("Quantas vezes deseja jogar?"))

// Laço de repetição que fará as todadas
for (let i = 0; i < rodadas; i++) {


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
    } else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") {
        //criamos a primeira verificação de vitoria
        alert("Você Venceu")
        placarJogador++
    } else if (escolhaJogador == "tesoura" && escolhaPC == "papel") {
    
    }else if (escolhaJogador == "papel" && escolhaPC == "pedra") { //criamos a terceira verificação
        alert("Você venceu")
        placarJogador++
    } else {
        alert("Você perdeu")
        placarPC++
    }
    // Exibe o placar no console
    console.log("Placar Jogador: ", placarJogador)
    console.log("Placar computador: ", placarPC)
    //Placar final
    alert(`Fim do jogo! Placar final: Jogador ${placarJogador} x ${placarPC} Computador`)
}