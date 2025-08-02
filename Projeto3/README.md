# 🕒 Projeto Pomodoro – Cronômetro para Estudo

Este é um cronômetro digital interativo baseado na técnica Pomodoro, ideal para manter o foco durante os estudos ou tarefas. Com uma interface simples, visual moderno e recursos úteis, ele permite controlar o tempo de maneira eficiente.
---

## 🎯 Objetivo

Aplicar conhecimentos de **HTML**, **CSS** e **JavaScript**, utilizando conceitos como **manipulação do DOM**, **eventos**, `setInterval`, `clearInterval`, e alternância de temas. O projeto também demonstra a lógica da técnica Pomodoro aplicada na prática.
---

## 📋 Funcionalidades

- ⏱️ **Timer regressivo de 25:00 minutos** (ajustável).
- ▶️ **Botões de Iniciar, Pausar e Resetar**.
- 🔁 **Contagem regressiva** com atualização a cada segundo.
- 🌙/☀️ **Modo noturno e claro** com alternância via botão.
- 🎵 **Integração com playlist do Spotify** embutida.
- ⏳ **Ajuste rápido de tempo** (+5 min / -5 min).
- 🔔 **Alerta automático ao final de cada Pomodoro**.
---

## 💡 Sobre a Técnica Pomodoro

A Técnica Pomodoro é um método de gerenciamento de tempo que consiste em:

1. Trabalhar por **25 minutos** (1 Pomodoro);
2. Fazer uma **pausa curta de 5 minutos**;
3. A cada 4 Pomodoros, realizar uma **pausa longa**.

Esse ciclo ajuda a melhorar o foco, produtividade e a evitar a procrastinação.
---

## 🧠 Lógica com `setInterval` e `clearInterval`

A lógica do cronômetro é baseada em temporizadores:

```javascript
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
Quando o tempo acaba ou o botão de pausa/reset é acionado, o clearInterval interrompe a execução.
```
---

## 🛠️ Como Usar ou Modificar
 - Tempo Padrão: altere a variável timerMinutes no script.js.

 - Música: troque o src do iframe do Spotify para sua própria playlist.

 - Modo Noturno: alternância feita com .classList.toggle('dark-mode').
---

 ## 📁 Tecnologias Utilizadas
 - HTML5
 - CSS3
 - JavaScript
---

 ## 🔧 Melhorias Futuras
 - Sons personalizados ao fim do tempo.
 - Contador de ciclos Pomodoro.
 - Configuração de pausas curtas e longas.
 - Notificações no navegador ou desktop.

 ## 👨‍💻 Autores
**Lucas Matos**
**Gabriel Santos de Sandes**
Projeto desenvolvido durante o curso Técnico em Informática.


