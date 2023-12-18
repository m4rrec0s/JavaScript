function validarNumeros(input, maxLength) {
    // Remove caracteres não numéricos
    let valorDigitado = input.value.replace(/\D/g, '');

    // Limita o comprimento conforme necessário
    valorDigitado = valorDigitado.slice(0, maxLength);

    // Atualiza o valor do input
    input.value = valorDigitado;
}

document.addEventListener("DOMContentLoaded", function () {
    var dia = document.getElementById('dia');
    var mes = document.getElementById('mes');
    var ano = document.getElementById('ano');

    function mostrarErro(input, mensagem) {
        // Adiciona mensagem de erro abaixo do input
        var mensagemErro = document.createElement('div');
        mensagemErro.className = 'mensagem-erro';
        mensagemErro.innerText = mensagem;
        input.parentNode.appendChild(mensagemErro);

        // Adiciona classe de erro ao label
        input.previousElementSibling.classList.add('erro-label');

        // Adiciona classe de erro ao input
        input.classList.add('erro-input');
    }

    function limparErros() {
        // Remove todas as mensagens de erro
        var mensagensErro = document.querySelectorAll('.mensagem-erro');
        mensagensErro.forEach(function (mensagem) {
            mensagem.parentNode.removeChild(mensagem);
        });

        // Remove classe de erro do label
        var labelsErro = document.querySelectorAll('.erro-label');
        labelsErro.forEach(function (label) {
            label.classList.remove('erro-label');
        });

        // Remove classe de erro do input
        var inputsErro = document.querySelectorAll('.erro-input');
        inputsErro.forEach(function (input) {
            input.classList.remove('erro-input');
        });
    }

    function mostrarNumeros() {
        // Obtém os valores dos campos
        var diaValor = parseInt(dia.value, 10) || 0;
        var mesValor = parseInt(mes.value, 10) || 0;
        var anoValor = parseInt(ano.value, 10) || 0;

        // Verificações adicionais
        if (diaValor < 1 || diaValor > 31) {
            mostrarErro(dia, 'O dia deve estar entre 1 e 31.');
            return;
        }

        if (mesValor < 1 || mesValor > 12) {
            alert('O mês deve estar entre 1 e 12.');
            return;
        }

        if (anoValor >= new Date().getFullYear()) {
            alert('O ano deve ser menor que o ano atual.');
            return;
        }

        // Verifica se o dia é válido para o mês
        var ultimoDiaDoMes = new Date(anoValor, mesValor, 0).getDate();
        
        if (diaValor < 1 || diaValor > ultimoDiaDoMes) {
            alert('O dia não é válido para o mês selecionado.');
            return;
        }

        // Obtém a data atual
        var hoje = new Date();

        // Define a data de nascimento com base nos valores dos campos
        var dataNascimento = new Date(anoValor, mesValor - 1, diaValor);

        // Calcula a diferença em milissegundos entre as duas datas
        var diferencaEmMilissegundos = hoje - dataNascimento;

        // Calcula a diferença em anos, meses e dias
        var diferencaEmAnos = Math.floor(diferencaEmMilissegundos / (365.25 * 24 * 60 * 60 * 1000));
        var diferencaEmMeses = Math.floor((diferencaEmMilissegundos % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
        var diferencaEmDias = Math.floor((diferencaEmMilissegundos % (30.44 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000));

        // Mostra o resultado no console
        console.log(`Idade: ${diferencaEmAnos} anos, ${diferencaEmMeses} meses, ${diferencaEmDias} dias`);
    }

    var botao = document.getElementById('botao');
    botao.addEventListener('click', mostrarNumeros);
});