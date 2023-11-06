let lista_numeros = []
let nums = document.getElementById('nums')
let res = document.getElementById('lista')
let nu = Number(nums.value)
let 

function addn() {
    lista_numeros.push(nu)
    let item = document.createElement('option')
    item.text = `Número ${nu} adicionado!`
    return res.appendChild(item)
}

function verificar() {
    document.write(`A lista tem ${lista_numeros.length} números`)
}