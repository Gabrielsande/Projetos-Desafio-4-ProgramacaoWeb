# 🎮 Pedra, Papel ou Tesoura 

Este é um projeto interativo do clássico jogo "Pedra, Papel ou Tesoura", desenvolvido com HTML, CSS e JavaScript. Com visual moderno e responsivo, o jogo oferece placar, animação de carregamento e interface intuitiva.

## 🎯 Objetivo

O projeto tem como propósito fixar os conceitos de:
- Manipulação do DOM em JavaScript.
- Eventos de clique e lógica condicional.
- Estilização responsiva com CSS moderno.
- Utilização de animações e controle de carregamento.

## 📋 Funcionalidades

- 🎮 Escolha entre Pedra, Papel ou Tesoura.
- 🤖 Computador faz uma jogada aleatória.
- 🧠 Sistema de pontuação com vitórias, derrotas e empates.
- 🔄 Botão para reiniciar o jogo.
- ⏳ Tela de carregamento com animação.
- 🎨 Interface adaptada para dispositivos móveis.

## ⚙️ Lógica do Jogo

- O jogador escolhe uma das 3 opções.
- O computador gera uma escolha aleatória.
- A função `getResult()` compara as escolhas e define o resultado.
- O placar é atualizado dinamicamente.
- Exemplo:
```js
if ((player === 0 && computer === 2) ||
    (player === 1 && computer === 0) ||
    (player === 2 && computer === 1)) {
  return "Vitória";
}
```

## 🖼️ Estrutura dos Arquivos

```
Projeto/
├── index.html        # Estrutura HTML
├── style.css         # Estilo e layout
├── script.js         # Lógica e interações do jogo
└── img/              # Imagens dos botões do jogo
```

## 🚀 Como Executar

1. Baixe ou clone o repositório.
2. Abra o arquivo `index.html` em um navegador moderno.
3. Aguarde a tela de carregamento.
4. Escolha sua jogada e divirta-se!

## 📌 Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (Vanilla)

## 💡 Possíveis Melhorias

- Adicionar sons aos cliques ou vitórias.
- Incluir efeitos visuais ao ganhar/perder.
- Armazenar placar com LocalStorage.
- Tema escuro/claro.

## 👨‍💻 Autores

Desenvolvido por [Seu Nome Aqui] – Projeto para fins educacionais.
