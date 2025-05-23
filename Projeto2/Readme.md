# Cofrinho Digital 🐖

Simulador de economia simples feito em HTML, CSS e JavaScript.

## Funcionalidades
- Botões para adicionar moedas de R$0,10 a R$1,00
- Total atualizado com formatação BRL
- Contador de cada tipo de moeda
- Estado salvo com localStorage

## Lógica
Cada clique em um botão incrementa o valor total e atualiza o número de moedas correspondente. O total e os contadores são salvos no `localStorage`.

## Dica para trocar moeda para US$
Basta trocar a configuração do `Intl.NumberFormat`:

```js
new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
})
