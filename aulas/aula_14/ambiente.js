let num = [2, 5, 6, 1]

console.log(num)
console.log(`O vetor tem ${num.length} posições!`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Organizando os valores fica: ${num.sort()}`)

for (let c = 0; c < num.length; c++) {
    console.log(`A posição ${c} tem o valor ${num[c]}`)
}
