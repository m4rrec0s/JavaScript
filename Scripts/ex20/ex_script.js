function contar() {
    var inicio = document.getElementById('txtini')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpass')
    var msg = document.getElementById('res')
    passo = Number(passo.value)

    if (passo === 0) {
        window.alert('O passo não pode ser 0. Considerando passo como 1')
        passo = 1
    } 

    for (inicio; passo; fim) {
        
    }
}