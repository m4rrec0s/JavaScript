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
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gen = 'Homem'
            if (idade >= 0 && idade <10) {
                // criança
                img.setAttribute('src', 'imagens/bebe-menino.png')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-homem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/30-homem.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso-homem.png')
            }
            res.innerHTML = `Detectamos um ${gen} com ${idade} anos.`
        } else if (fsex[1].checked) {
            gen = 'Mulher'
            if (idade >= 0 && idade <10) {
                // criança
                img.setAttribute('src', 'imagens/bebe-menina.png')
            } else if (idade >= 10 && idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/jovem-mulher.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/30-mulher.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosa-mulher.png')
            }
            res.innerHTML = `Detectamos uma ${gen} com ${idade} anos.`
        }
        img.style.marginTop = '15px';
        res.appendChild(img)
    }
}