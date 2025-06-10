let itens = [];

    function adicionarItem() {
      const select = document.getElementById('itemSelect');
      const [nome, preco] = select.value.split('|');
      itens.push({ nome, preco: parseFloat(preco) });
      atualizarLista();
    }

    function atualizarLista() {
      const lista = document.getElementById('listaItens');
      const total = document.getElementById('total');
      const brinde = document.getElementById('brinde');
      lista.innerHTML = '';
      let soma = 0;
      itens.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nome} - R$${item.preco.toFixed(2)}`;
        lista.appendChild(li);
        soma += item.preco;
      });
      total.textContent = soma.toFixed(2);
      brinde.textContent = soma > 100 ? '🎁 Parabéns! Você ganhou um brinde especial!' : '';
    }

    function calcularTroco() {
      const pago = parseFloat(document.getElementById('valorPago').value);
      const total = parseFloat(document.getElementById('total').textContent);
      const troco = pago - total;
      document.getElementById('troco').textContent =
        troco >= 0 ? `Troco: R$${troco.toFixed(2)}` : 'Valor insuficiente';
    }

    function limparCompra() {
      itens = [];
      document.getElementById('listaItens').innerHTML = '';
      document.getElementById('total').textContent = '0.00';
      document.getElementById('valorPago').value = '';
      document.getElementById('troco').textContent = '';
      document.getElementById('brinde').textContent = '';
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
    });
  });