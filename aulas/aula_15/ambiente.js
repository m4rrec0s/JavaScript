function parimp(n) {
    if (n %2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

var res = parimp(9)
console.log(res)

function fatorial(n) {
    if (n == 0) { // caso base
      return 1;
    } else { // caso recursivo
      return n * fatorial(n - 1);
    }
}

let num = 10
console.log(`O fatorial de ${num} é ${fatorial(num)}`)