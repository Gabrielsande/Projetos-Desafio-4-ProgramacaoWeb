let total = 0;
let contadorMoedas = {
  0.1: 0,
  0.25: 0,
  0.5: 0,
  1: 0
};

const valorMaximo = 10.000; // valor base para animar enchimento
let grafico; // variável global para gráfico Chart.js

// Carregar do localStorage se houver
if (localStorage.getItem("total")) {
  total = parseFloat(localStorage.getItem("total"));
  contadorMoedas = JSON.parse(localStorage.getItem("contadorMoedas"));
  atualizarDisplay();
}

function adicionarMoeda(valor) {
  total += valor;
  contadorMoedas[valor] += 1;
  salvarEstado();
  atualizarDisplay();
  atualizarGraficoPizza();
}

function esvaziarCofre() {
  total = 0;
  contadorMoedas = { 0.1: 0, 0.25: 0, 0.5: 0, 1: 0 };
  salvarEstado();
  atualizarDisplay();
  atualizarGraficoPizza();
}

function atualizarDisplay() {
  const totalFormatado = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(total);

  document.getElementById("total").innerText = totalFormatado;



  const alturaCofre = (total / valorMaximo) * 10.000;
  document.getElementById("nivel-cofre").style.height = `${Math.min(alturaCofre, 100)}%`;
}


function salvarEstado() {
  localStorage.setItem("total", total.toString());
  localStorage.setItem("contadorMoedas", JSON.stringify(contadorMoedas));
}

function atualizarGraficoPizza() {
  const ctx = document.getElementById('graficoPizza').getContext('2d');

  const dados = [
    contadorMoedas[0.1],
    contadorMoedas[0.25],
    contadorMoedas[0.5],
    contadorMoedas[1]
  ];

  const config = {
    type: 'pie',
    data: {
      labels: ['R$0,10', 'R$0,25', 'R$0,50', 'R$1,00'],
      datasets: [{
        label: 'Distribuição das Moedas',
        data: dados,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverOffset: 4
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        tooltip: {
          callbacks: {
            label: function (tooltipItem) {
              return `${tooltipItem.label}: ${tooltipItem.raw} moedas`;
            }
          }
        }
      }
    }
  };

  // Destroi o gráfico anterior (se existir) para evitar sobreposição
  if (grafico) {
    grafico.destroy();
  }

  grafico = new Chart(ctx, config);
}

// Inicializa o gráfico ao abrir
atualizarGraficoPizza();



function adicionarValorDigitado() {
  const input = document.getElementById("valorDigitado");
  const valor = parseFloat(input.value.replace(',', '.'));

  if (isNaN(valor) || valor <= 0) {
    alert("Digite um valor válido maior que zero.");
    return;
  }

  total += valor;
  salvarEstado();
  atualizarDisplay();
  atualizarGraficoPizza();
  input.value = ""; // limpa o campo
}

 function sacarValor() {
    const valorSaque = parseFloat(document.getElementById('valorSaque').value);
    const totalElement = document.getElementById('total');
    let totalAtual = parseFloat(totalElement.textContent.replace('R$', '').replace(',', '.'));

    if (isNaN(valorSaque) || valorSaque <= 0) {
      alert('Por favor, insira um valor válido para saque.');
      return;
    }

    if (valorSaque > totalAtual) {
      alert('Você não tem Saldo para o saque!!');
    } else {
      totalAtual -= valorSaque;
      totalElement.textContent = `R$ ${totalAtual.toFixed(2).replace('.', ',')}`;
    }

    document.getElementById('valorSaque').value = '';
  }

