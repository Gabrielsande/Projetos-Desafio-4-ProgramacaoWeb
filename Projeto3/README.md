🕒 Projeto Pomodoro – Cronômetro para Estudo
Este projeto é um cronômetro digital baseado na técnica Pomodoro, ideal para manter o foco nos estudos ou no trabalho. Com uma interface simples e limpa, permite ao usuário iniciar, pausar e resetar um timer regressivo de 25 minutos, além de ajustar o tempo e ouvir música enquanto estuda.

🎯 Objetivo
O projeto tem como objetivo aplicar conhecimentos de HTML, CSS e JavaScript, trabalhando com manipulação do DOM, eventos, setInterval e clearInterval, além de aplicar a lógica da técnica Pomodoro de forma interativa.

📋 Funcionalidades
⏱️ Timer regressivo de 25:00 minutos (ajustável).

▶️ Botões de Iniciar, Pausar e Resetar.

🔁 Contagem regressiva atualizada a cada segundo.

🌙/☀️ Modo noturno, alternável com botão toggle.

🎵 Integração com playlist do Spotify.

⏳ Ajuste do tempo com botões (+5 min / -5 min).

🔊 Alerta ao fim do Pomodoro com alert().

💡 Técnica Pomodoro
A técnica Pomodoro é um método de gerenciamento de tempo que consiste em:

Trabalhar por 25 minutos (1 Pomodoro).

Fazer uma pausa curta de 5 minutos.

A cada 4 Pomodoros, fazer uma pausa mais longa.

Essa técnica melhora o foco e ajuda a evitar a procrastinação.

🧠 Lógica com setInterval e clearInterval
O setInterval executa uma função a cada segundo (1000ms), atualizando o tempo na tela.

Quando o tempo acaba ou é pausado/resetado, clearInterval é usado para parar a execução do cronômetro.

Exemplo da lógica usada:

javascript
Copiar
Editar
timerInterval = setInterval(() => {
  if (timerSeconds === 0) {
    if (timerMinutes === 0) {
      clearInterval(timerInterval);
      alert("Pomodoro finalizado!");
      resetTimer();
      return;
    }
    timerMinutes--;
    timerSeconds = 59;
  } else {
    timerSeconds--;
  }
  updateTimerDisplay();
}, 1000);
🛠️ Como usar/modificar
Imagens e conteúdo
Você pode modificar:

O tempo padrão do cronômetro (alterando timerMinutes no JS).

A playlist do Spotify (trocando a src do iframe).

Modo Noturno
O botão 🌙/☀️ ativa o modo escuro com .classList.toggle('dark-mode').


📁 Tecnologias Utilizadas
HTML5

CSS3

JavaScript

🧪 Melhorias possíveis
Tocar som personalizado ao terminar o tempo.

Adicionar contagem de ciclos Pomodoro.

Permitir configurar pausas longas/curtas separadamente.

👨‍💻 Autor
Lucas Matos e Gabriel Santos de Sandes – Projeto desenvolvido no curso técnico em Informática.