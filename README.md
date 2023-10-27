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