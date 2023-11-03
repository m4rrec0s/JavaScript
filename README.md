# JavaScript
 Apendendo a linguagem JS.

## Client and Server
- aparelho -> navegador -> servidor -> arquivos HTML -> navegador ↩
* website

-> conteúdo (HTML) <br>
-> design (CSS) <br>
-> programação / interação (JS) <br>

## Numbers

```js
var n = 7
Number.parseInt(n) //número inteiro
Number.parseFloat(n) //número real
Number(n) //se adapta ao tipo de número
```

### Formatando Numbers
```js
var n = 1543.5
n1.toFixed(2) //2 casas decimais
n1.toLocaleString('pt-BR', {style:'currency', currency: 'BRL'}) //transforma número em moeda
```
##

## Strings
```js
String(n) //tranforma em string
n.toString() //tbm tranforma em string
```

### Formatando Strings
```js
var s = 'Marcos'
s.length //conta quantos caracteres tem
s.toUpperCase() //deixa MAIÚSCULA
s.toLowerCase() //deixa minúscula
```

### Repetições

Repetições ou laços em JavaScript são estruturas que permitem executar um bloco de código várias vezes, de acordo com uma condição. Existem diferentes tipos de laços em JavaScript, como while, for e switch.

- O laço while executa um bloco de código enquanto uma condição for verdadeira. Por exemplo:

```javascript
let i = 0; // inicializa uma variável de controle
while (i < 10) { // verifica se a condição é verdadeira
  console.log(i); // executa o bloco de código
  i++; // atualiza a variável de controle
}
// Resultado: imprime os números de 0 a 9 no console
```

- O laço for é semelhante ao while, mas tem uma sintaxe mais compacta. Ele permite inicializar, verificar e atualizar a variável de controle em uma única linha. Por exemplo:

```javascript
for (let i = 0; i < 10; i++) { // inicializa, verifica e atualiza a variável de controle
  console.log(i); // executa o bloco de código
}
// Resultado: imprime os números de 0 a 9 no console
```

- O laço switch não é exatamente um laço, mas uma estrutura de controle que permite executar diferentes blocos de código de acordo com o valor de uma expressão. Por exemplo:

```javascript
let fruta = "maçã"; // define uma variável com uma expressão
switch (fruta) { // verifica o valor da expressão
  case "banana": // se for igual a "banana"
    console.log("Eu gosto de bananas"); // executa este bloco de código
    break; // sai do switch
  case "maçã": // se for igual a "maçã"
    console.log("Eu gosto de maçãs"); // executa este bloco de código
    break; // sai do switch
  default: // se não for igual a nenhum dos casos anteriores
    console.log("Eu gosto de frutas"); // executa este bloco de código
}
// Resultado: imprime "Eu gosto de maçãs" no console
```

## Variáveis compostas (array)

Variáveis compostas são variáveis que podem armazenar mais de um valor em uma única estrutura. Um tipo de variável composta muito comum em JavaScript é o array, que é uma coleção ordenada de valores. Os arrays podem armazenar diferentes tipos de dados, como números, strings, objetos, funções, etc. Os arrays são úteis para organizar e manipular dados de forma eficiente.

Para criar um array em JavaScript, você pode usar a sintaxe de colchetes, como por exemplo:

```javascript
var frutas = ["maçã", "banana", "laranja"]; // cria um array com três strings
```

Você também pode usar o construtor Array, como por exemplo:

```javascript
var numeros = new Array(1, 2, 3); // cria um array com três números
```

Para acessar os elementos de um array, você pode usar o índice numérico que representa a posição do elemento no array, começando por zero. Por exemplo:

```javascript
console.log(frutas[0]); // imprime "maçã"
console.log(numeros[2]); // imprime 3
```

Para alterar os elementos de um array, você pode atribuir um novo valor ao índice correspondente. Por exemplo:

```javascript
frutas[1] = "manga"; // altera o segundo elemento do array frutas
console.log(frutas); // imprime ["maçã", "manga", "laranja"]
```

Para adicionar ou remover elementos de um array, você pode usar métodos como push, pop, shift, unshift, splice, etc. Por exemplo:

```javascript
frutas.push("abacaxi"); // adiciona um elemento no final do array frutas
console.log(frutas); // imprime ["maçã", "manga", "laranja", "abacaxi"]

numeros.pop(); // remove o último elemento do array numeros
console.log(numeros); // imprime [1, 2]
```

Para ver quantos elementos o array tem, pode-se usar o atributo .length

```javascript
console.log(numeros.length) //imprime 2
```

Também tem como organizar os numeros em ordem crescente por meio do método <strong>.sort()</strong>

```javascript

```
Para percorrer os elementos de um array, você pode usar laços como for, for...of, for...in, while, etc. Você também pode usar métodos como forEach, map, filter, reduce, etc. Por exemplo:

```javascript
for (let i = 0; i < frutas.length; i++) { // laço for comum
  console.log(frutas[i]); // imprime cada elemento do array frutas
}

for (let fruta of frutas) { // laço for...of
  console.log(fruta); // imprime cada elemento do array frutas
}

frutas.forEach(function(fruta) { // método forEach
  console.log(fruta); // imprime cada elemento do array frutas
});
```