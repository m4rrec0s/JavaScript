function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpass')
    var msg = document.getElementById('res')
    passo = Number(passo.value)
    inicio = Number(inicio.value)
    fim = Number(fim.value)

    if (passo === 0) {
        window.alert('O passo não pode ser 0. Considerando passo como 1')
        passo = 1
    } 

    if (inicio < fim) {
        var resultado = ''
        for (inicio; inicio <= fim; inicio += passo) {
            resultado += `${inicio} 👉 `
        }
    } else if (inicio > fim) {
        var resultado = ''
        for (inicio; inicio >= fim; inicio -= passo) {
            resultado += `${inicio} 👉 `
        }
    }

    resultado += '🏁'
    msg.innerHTML = resultado
}