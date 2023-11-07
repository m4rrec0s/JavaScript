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
numeros.sort()
console.log(numeros) // os numeros vão sair organizados
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

Tem como procurar elementos no array usando o <strong>`indexOf`</strong>:
Se ouver o valor dentro do array ele retorona a posição em que ele está. Porém, se ele não existir dentro do array ele retornará o valor <strong>-1</strong>.

```javascript
numeros.indexOf(2) //imprime a posição '1'
numeros.indexOf(8) //imprime o valor '-1', pois não existe 8 dentro do array
```

## Funções
As funções em JavaScript são objetos que podem receber parâmetros e retornar um valor. Elas servem para encapsular um bloco de código que pode ser reutilizado em diferentes partes do programa. As funções também podem ter propriedades e métodos, como qualquer outro objeto em JavaScript.

Para definir uma função, você pode usar uma das seguintes formas:

- Declaração de função: usa a palavra-chave `function` seguida pelo nome da função, a lista de parâmetros entre parênteses e o corpo da função entre chaves. Por exemplo:

```js
function somar(a, b) {
  return a + b;
}
```

- Expressão de função: atribui uma função anônima ou nomeada a uma variável. Por exemplo:

```js
var somar = function(a, b) {
  return a + b;
};
```

- Arrow function: usa uma sintaxe mais concisa para criar uma função anônima. Por exemplo:

```js
var somar = (a, b) => a + b;
```

Para chamar uma função, você pode usar o nome da função seguido pelos argumentos entre parênteses. Por exemplo:

```js
var resultado = somar(2, 3); // resultado recebe o valor 5
```

Uma função recursiva é uma função que se chama a si mesma. A recursão é usada para resolver problemas que contêm subproblemas menores. Uma função recursiva deve ter um caso base, que é uma condição que termina a recursão, e um caso recursivo, que é uma condição que continua a recursão. Por exemplo, a função fatorial pode ser definida de forma recursiva da seguinte forma:

```js
function fatorial(n) {
  if (n == 0) { // caso base
    return 1;
  } else { // caso recursivo
    return n * fatorial(n - 1);
  }
}
```

A função fatorial recebe um número inteiro positivo n e retorna o produto de todos os números inteiros positivos menores ou iguais a n. Por exemplo, fatorial(5) retorna 120, que é o resultado de 5 * 4 * 3 * 2 * 1. A função usa a recursão para calcular o fatorial de n - 1 e multiplicar pelo n atual. A recursão termina quando n é igual a zero, que é o caso base.

## Funções (avançado)
...

## Objetos
...

## Modularização
...

## RegEx
...

## JSON
...

## AJAX
...
