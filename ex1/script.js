// --- Funções ---
function saudacao() {
  console.log("Olá, seja bem-vindo!");
}

function cumprimentar(nome) {
  console.log("Olá, " + nome + "!");
}

const mensagem = function() {
  console.log("Mensagem de função anônima!");
};

const multiplicar = (a, b) => a * b;

// Testes no console
saudacao();
cumprimentar("Maria");
mensagem();
console.log("Multiplicação:", multiplicar(5, 3));

// --- Manipulação DOM ---
function trocarTexto() {
  document.getElementById("paragrafo").innerText = "Texto alterado com JS!";
}

function mudarFundo() {
  document.body.style.backgroundColor = "lightblue";
}

function adicionarItem() {
  let novo = document.createElement("li");
  novo.innerText = "Novo Item";
  document.getElementById("lista").appendChild(novo);
}

function removerParagrafo() {
  let p = document.getElementById("paragrafo");
  if (p) p.remove();
}

function personalizar() {
  let p = document.getElementById("paragrafo");
  let t = document.getElementById("titulo"); 
  p.style.color = "blue";
  p.style.fontSize = "20px";
  t.style.color = "green";
  t.style.fontSize = "35px";
}

// --- Eventos ---
document.getElementById("campoTexto").addEventListener("input", function() {
  document.getElementById("saida").innerText = this.value;
});

document.getElementById("btnHover").addEventListener("mouseover", function() {
  this.innerText = "Você passou o mouse!";
});

document.getElementById("btnEsconder").addEventListener("dblclick", function() {
  document.getElementById("textoEsconder").style.display = "none";
});

document.getElementById("btnFonte").addEventListener("click", function() {
  let tamanho = Math.floor(Math.random() * 31) + 10; // entre 10 e 40
  document.getElementById("textoFonte").style.fontSize = tamanho + "px";
});