let lista_numeros = []
let nums = document.getElementById('nums')
let res = document.getElementById('lista')
let val = document.getElementById('valores')

function addn() {
    let n = Number(nums.value)
    
    if (n === 0) {
        return window.alert('Nenhum número inserido!')
    }
    if (n < 1 || n > 100) {
        return window.alert(`Valor indisponível! (números entre 1 e 100)`)
    }
    
    if (lista_numeros.indexOf(n) !== -1) {
        return window.alert(`Este número já foi inserido! Digite outro!`)
    
    } else {
        lista_numeros.push(n)
        let item = document.createElement('option')
        item.text = `Número ${n} adicionado!`
        val.innerHTML = ''
        return res.appendChild(item)
    }

}

function verificar() {
    if (lista_numeros.length == 0) {
        window.alert('Digite algum valor para poder continuar!')
    } else {
        let lista = lista_numeros.join(', ')
        let soma = lista_numeros.reduce((a, b) => a + b, 0)
        let media = soma / lista_numeros.length

        val.innerHTML = `Lista: ${lista}<br>`
        val.innerHTML += `A lista tem ${lista_numeros.length} números<br>`
        val.innerHTML += `O maior valor foi ${Math.max(...lista_numeros)}<br>`
        val.innerHTML += `O menor valor foi ${Math.min(...lista_numeros)}<br>`
        val.innerHTML += `Somando todos os valores, temos ${soma}<br>`
        val.innerHTML += `A média dos valores digitados é ${media.toFixed(2)}<br>`
    }
}
