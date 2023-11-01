function gerar() {
    var num = document.getElementById('txtnum')
    var res = document.getElementById('res')
    num = Number(num.value)

    var resultados = [];

    for (var c = 1; c <= 10; c++) {
        var s = c * num;
        resultados.push(`${num} x ${c} = ${s}`);
    }

    resultados.sort(function(a, b) {
        return a.split('=')[1].trim() - b.split('=')[1].trim();
    });

    res.innerHTML = resultados.join('<br>');
}