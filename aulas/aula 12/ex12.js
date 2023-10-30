var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora}`)
if (hora < 12 && hora > 5) {
    console.log('Bom dia!')
} else if (hora < 19 && hora >= 12) {
    console.log('Boa Tarde!')
} else if (hora >= 19) {
    console.log('Boa noite')
} else if (hora > 0 && hora <= 5) {
    console.log('Boa Madrugada')
} 