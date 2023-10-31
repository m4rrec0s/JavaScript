function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var bom = document.getElementById('bom')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    if (hora >= 0 && hora < 12) {
        bom.innerText = 'Bom Dia! ☕'
        bom.style.fontWeight = 'bold'
        img.src = 'imagens/manha.png'
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos da manhã.`
        document.body.style.background = '#5CA0CC'
    } else if (hora >= 12 && hora <= 18) {
        bom.innerText = 'Boa Tarde! 🌤'
        bom.style.fontWeight = 'bold'//Boa tarde
        img.src = 'imagens/tarde.png'
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos da tarde.`
        document.body.style.background = '#F37E53'
    } else {
        bom.innerText = 'Boa Noite! 🌙'
        bom.style.fontWeight = 'bold'//Boa noite
        img.src = 'imagens/noite.png'
        msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos da noite.`
        document.body.style.background = '#33334A'
    }
}