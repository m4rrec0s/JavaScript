function gerar() {
    var num = document.getElementById('txtnum')
    var res = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        res.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            res.appendChild(item)
            c++
        }
    }
    /*var resultados = [];

    for (var c = 1; c <= 10; c++) {
        var s = c * num;
        resultados.push(`${num} x ${c} = ${s}`);
    }

    resultados.sort(function(a, b) {
        return a.split('=')[1].trim() - b.split('=')[1].trim();
    });

    res.innerHTML = resultados.join('<br>');
    */
}