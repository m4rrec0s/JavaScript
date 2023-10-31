function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value <= 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        res.style.textAlign = 'center'
        if (fsex[0].checked) {
            gen = 'Homem'
            res.innerHTML = `Detectamos um ${gen} com ${idade} anos.`
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            res.innerHTML = `Detectamos uma ${gen} com ${idade} anos.`
        }

    }
}