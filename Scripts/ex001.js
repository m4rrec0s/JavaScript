// Inicialize variáveis para armazenar o nome e a idade da pessoa mais velha
let nomeMaisVelho = "";
let idadeMaisVelho = -1;

// Loop para coletar informações de 5 pessoas
for (let i = 1; i <= 5; i++) {
  const nome = prompt(`Digite o nome da pessoa ${i}:`);
  const idade = parseInt(prompt(`Digite a idade da pessoa ${i}:`));

  // Verifique se a idade é a maior até agora
  if (idade > idadeMaisVelho) {
    idadeMaisVelho = idade;
    nomeMaisVelho = nome;
  }
}

// Exibe o nome e a idade da pessoa mais velha
console.log(`A pessoa mais velha é ${nomeMaisVelho} com ${idadeMaisVelho} anos.`);