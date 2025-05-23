const interruptor = document.getElementById('interruptor');
    const lampada = document.getElementById('lampada');
    const fundo = document.getElementById('fundo');
    const contadorBtn = document.getElementById('contadorBtn');
    const contadorDisplay = document.getElementById('contadorDisplay');

    let ligado = true;
    let contador = 1;

    fundo.classList.remove('escuro');

    interruptor.addEventListener('click', () => {
      ligado = !ligado;
      interruptor.classList.toggle('ligado');
      fundo.classList.toggle('escuro');

      if (ligado) {
        lampada.src = 'lampadaLigada.png';
        lampada.alt = 'Lâmpada acesa';
        contador++;
      } else {
        lampada.src = 'lampadaDesligada.png';
        lampada.alt = 'Lâmpada apagada';
      }
    });

    contadorBtn.addEventListener('click', () => {
      contadorDisplay.textContent = `A luz foi acesa ${contador} vez${contador === 1 ? '' : 'es'}.`;
    });
