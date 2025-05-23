# 💡 Projeto 1: Controle de Luz – Simulador de Interruptor

Este projeto simula o funcionamento de um **interruptor de luz digital** usando apenas HTML, CSS e JavaScript. O usuário pode clicar em um botão visual que representa um interruptor, e isso liga ou desliga uma lâmpada virtual na tela. A interface também mostra um contador de quantas vezes a lâmpada foi acesa, e muda o plano de fundo da página conforme o estado da luz (claro quando acesa e escuro quando apagada).

---

## 🎯 Objetivo do Projeto

O objetivo principal é **praticar conceitos fundamentais da programação web** como:

- Manipulação do DOM (Document Object Model)
- Eventos com JavaScript
- Alteração de classes com `classList.toggle()`
- Animações e efeitos com CSS

O projeto também simula um cenário de um cômodo, onde o interruptor muda o ambiente de acordo com o estado da luz.

---

## 🧠 Explicação do Projeto

### Como funciona?

- Uma imagem de lâmpada é exibida no topo da tela.
- Um botão estilizado como um interruptor permite ligar ou desligar a luz.
- Ao clicar no botão:
  - A imagem da lâmpada muda (ligada/desligada).
  - O fundo da página escurece ou clareia.
  - Um contador é incrementado toda vez que a luz é ligada.
  - Um botão "Ver Contagem" exibe quantas vezes a luz foi acesa.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura da página.
- **CSS3**: Estilização, posicionamento e efeitos visuais.
- **JavaScript puro**: Manipulação de eventos, lógica do interruptor, contador.

---

## ✅ Funcionalidades

- ✅ Liga e desliga a luz com clique.
- ✅ Alterna imagem da lâmpada (acesa/desligada).
- ✅ Escurece ou clareia o fundo automaticamente.
- ✅ Contador de vezes que a luz foi acesa.
- ✅ Botão que exibe a contagem na tela.
- ✅ Botão do interruptor animado.

---

## 🔄 Como funciona `classList.toggle()`

No JavaScript usamos `classList.toggle()` para **adicionar ou remover classes de um elemento HTML de forma automática**.

### Exemplo usado no projeto:
- interruptor.classList.toggle('ligado');
- fundo.classList.toggle('escuro');
- .toggle('ligado'): move o botão do interruptor para cima ou para baixo, dependendo do estado.
- .toggle('escuro'): altera a luminosidade do fundo, simulando luz apagada com filter: brightness(30%).
- É uma forma prática de ativar/desativar estilos com apenas uma linha de código.

🧪 Como executar o projeto
- Baixe os arquivos ou clone o repositório.
- Abra o arquivo index.html em qualquer navegador moderno.
- Clique no interruptor para testar.
- Clique no botão "Ver Contagem" para ver quantas vezes a luz foi acesa.



📁 Estrutura dos Arquivos
bash
Copiar
Editar
projeto-interruptor/
│
├── index.html             # Estrutura da página
├── style.css              # Estilo e layout
├── script.js              # Lógica da lâmpada e do contador
├── lampadaLigada.png      # Imagem da lâmpada acesa
├── lampadaDesligada.png   # Imagem da lâmpada apagada
└── README.md              # Descrição do projeto

👨‍💻 Autores
Gabriel Santos de Sandes e Lucas Matos
Estudantes de Técnico em Informática – Colégio ULBRA São Lucas
Projeto para prática de HTML, CSS e JavaScript

