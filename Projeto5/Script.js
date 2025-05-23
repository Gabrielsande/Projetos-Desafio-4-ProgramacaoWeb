// Array com as opções do jogo: Pedra, Papel e Tesoura
const choices = ["Pedra", "Papel", "Tesoura"];

// Variáveis que armazenam o placar do jogo
let wins = 0;   // Vitórias do jogador
let losses = 0; // Derrotas do jogador
let draws = 0;  // Empates

// Função principal que roda quando o jogador escolhe uma opção
function play(playerChoice) {
  // Escolha aleatória do computador (0, 1 ou 2)
  const computerChoice = Math.floor(Math.random() * 3);

  // Determina o resultado da rodada (Vitória, Derrota ou Empate)
  const result = getResult(playerChoice, computerChoice);

  // Atualiza o texto mostrando a escolha do jogador
  document.getElementById("playerChoice").textContent = `Você escolheu: ${choices[playerChoice]}`;
  // Atualiza o texto mostrando a escolha do computador
  document.getElementById("computerChoice").textContent = `Computador escolheu: ${choices[computerChoice]}`;
  // Atualiza o texto com o resultado da rodada
  document.getElementById("roundResult").textContent = `Resultado: ${result}`;

  // Atualiza os contadores de acordo com o resultado
  if (result === "Vitória") wins++;
  else if (result === "Derrota") losses++;
  else if (result === "Empate") draws++;

  // Atualiza o placar na tela
  updateScoreboard();
}

// Função que verifica o resultado da partida entre jogador e computador
function getResult(player, computer) {
  if (player === computer) return "Empate"; // Mesma escolha = empate
  // Condições para vitória do jogador
  if ((player === 0 && computer === 2) ||  // Pedra vence Tesoura
      (player === 1 && computer === 0) ||  // Papel vence Pedra
      (player === 2 && computer === 1)) {  // Tesoura vence Papel
    return "Vitória";
  }
  // Caso contrário, jogador perdeu
  return "Derrota";
}

// Atualiza o placar na página HTML
function updateScoreboard() {
  document.getElementById("wins").textContent = wins;
  document.getElementById("losses").textContent = losses;
  document.getElementById("draws").textContent = draws;
}

// Função para reiniciar o jogo, zerando placar e limpando textos
function resetGame() {
  wins = 0;
  losses = 0;
  draws = 0;
  updateScoreboard(); // Atualiza o placar zerado

  // Limpa as mensagens de escolhas e resultados
  document.getElementById("playerChoice").textContent = "";
  document.getElementById("computerChoice").textContent = "";
  document.getElementById("roundResult").textContent = "";
}

// Função que controla a tela de carregamento
window.onload = () => {
  // Após 3 segundos, oculta a tela de loading e mostra o conteúdo do jogo
  setTimeout(() => {
    document.getElementById('loading-screen').style.display = 'none';
    document.getElementById('game-content').style.display = 'block';
  }, 3000); // 3000 milissegundos = 3 segundos
};
