const quotes = [
  "O preço é o que você paga. O valor é o que você recebe. — Warren Buffett",
  "Invista em si mesmo. É o melhor investimento que você pode fazer. — Warren Buffett",
  "O tempo é amigo de bons negócios e inimigo dos ruins. — Warren Buffett",
  "Não economize o que sobra depois de gastar. Gaste o que sobra depois de economizar. — Warren Buffett",
  "O risco vem de não saber o que está fazendo. — Warren Buffett",
  "Diversificação é proteção contra a ignorância. Faz pouco sentido para quem sabe o que está fazendo. — Warren Buffett",
  "Compre empresas boas por um preço justo, não empresas justas por um bom preço. — Warren Buffett",
  "Seja medroso quando os outros são gananciosos e ganancioso quando os outros são medrosos. — Warren Buffett",
  "Eu tento comprar ações de empresas tão maravilhosas que até um idiota poderia administrá-las. — Warren Buffett",
  "A paciência é a chave para grandes retornos. — Warren Buffett",
  "O maior erro que os investidores cometem é acreditar que aquilo que aconteceu no passado se repetirá no futuro. — Ray Dalio",
  "A dor mais reflexão é o progresso. — Ray Dalio",
  "Se você não olhar para trás e pensar: 'Uau, eu era um idiota', então você não cresceu. — Ray Dalio",
  "Diversifique para sobreviver em qualquer ambiente. — Ray Dalio",
  "Entenda que você não sabe tudo. — Ray Dalio",
  "Quem vence não é o mais inteligente, é quem se adapta melhor às mudanças. — Ray Dalio",
  "Não deixe que seus medos decidam seu futuro. — Ray Dalio",
  "Aprender com os erros é mais valioso do que evitar erros. — Ray Dalio",
  "Quem não tem princípios não tem base. — Ray Dalio",
  "Tome decisões baseadas em evidências, não em emoções. — Ray Dalio",
  "Grandes investimentos não exigem grandes ações, mas sim ações certas. — Charlie Munger",
  "O grande dinheiro não está na compra e venda, mas na espera. — Charlie Munger",
  "A sabedoria está em evitar tolices. — Charlie Munger",
  "As pessoas calculam demais e pensam de menos. — Charlie Munger",
  "O tempo que você gasta aprendendo vale muito mais que qualquer atalho. — Charlie Munger",
  "Encontre um círculo de competência e fique dentro dele. — Charlie Munger",
  "Evite tomar decisões quando estiver emocionalmente vulnerável. — Charlie Munger",
  "É notável o quanto de vantagem a consistência traz. — Charlie Munger",
  "O melhor jeito de obter sucesso é merecendo. — Charlie Munger",
  "A simplicidade é um dos maiores segredos do sucesso. — Charlie Munger",
  "A melhor maneira de se enriquecer é devagar. — Benjamin Graham",
  "O mercado é movido pela ganância e pelo medo. — Benjamin Graham",
  "Compre ações como compraria alimentos, não como compraria perfume. — Benjamin Graham",
  "Investir não é especular. — Benjamin Graham",
  "A margem de segurança é o conceito mais importante do investimento. — Benjamin Graham",
  "O verdadeiro investidor é aquele que lucra com as flutuações do mercado. — Benjamin Graham",
  "Nunca confie demais em fórmulas prontas. — Benjamin Graham",
  "Ser racional é mais importante do que ser inteligente. — Benjamin Graham",
  "O investidor inteligente é paciente, disciplinado e está sempre aprendendo. — Benjamin Graham",
  "Não tente prever o mercado, prepare-se para ele. — Benjamin Graham",
  "Você ganha dinheiro comprando quando todos estão vendendo. — Peter Lynch",
  "Conheça o que você compra melhor do que qualquer analista. — Peter Lynch",
  "Investir é uma arte, não uma ciência. — Peter Lynch",
  "Compre ações de empresas que você entender. — Peter Lynch",
  "O momento de comprar é quando há sangue nas ruas. — Peter Lynch",
  "O mercado sobe e desce, e você precisa se acostumar com isso. — Peter Lynch",
  "Evite seguir a multidão. — Peter Lynch",
  "Grandes empresas crescem mesmo em tempos difíceis. — Peter Lynch",
  "O melhor investimento que você pode fazer é em você mesmo. — Peter Lynch",
  "Tenha paciência e mantenha o foco no longo prazo. — Peter Lynch",
  // ... adicionar mais 50 frases conforme desejado.
];

const colors = ["#121212", "#1e1e1e", "#2c2c2c", "#242424", "#181818"];

function generateQuote() {
  const quoteElement = document.getElementById('quote');
  const progress = document.getElementById('progress');
  const sound = document.getElementById('sound');

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.style.backgroundColor = randomColor;
  quoteElement.textContent = randomQuote;

  progress.style.width = '0%';
  setTimeout(() => {
    progress.style.width = '100%';
  }, 50);

  sound.play();
}