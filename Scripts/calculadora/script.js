var num_0 = document.getElementById('num_0')
var num_1 = document.getElementById('num_1')
var num_2 = document.getElementById('num_2')
var num_3 = document.getElementById('num_3')
var num_4 = document.getElementById('num_4')
var num_5 = document.getElementById('num_5')
var num_6 = document.getElementById('num_6')
var num_7 = document.getElementById('num_7')
var num_8 = document.getElementById('num_8')
var num_9 = document.getElementById('num_9')
var virgula = document.getElementById('virgula')
//operadores
var mais = document.getElementById('') 
var menos = document.getElementById('')
var mult = document.getElementById('')
var divs = document.getElementById('')
//valores
let primeiroNumero = null;
let operacao = null;

num_0 = 0
num_1 = 1
num_2 = 2
num_3 = 3
num_4 = 4
num_5 = 5
num_6 = 6
num_7 = 7
num_8 = 8
num_9 = 9
virgula = ','


function atualizarTela(botao) {
    var valor = botao.innerHTML;
    var tela = document.getElementById("tela");
    
    if (tela.innerHTML.length < 16) {
      tela.innerHTML += valor;
    }
    if (tela.innerHTML.length > 6) {
      tela.style.fontSize = "50px";
      tela.style.justifyContent = 'center';
    }
    if (tela.innerHTML.length > 8) {
      tela.style.fontSize = "45px";
      tela.style.justifyContent = 'center';
    }
    if (tela.innerHTML.length > 10) {
      tela.style.fontSize = "36px";
      tela.style.justifyContent = 'center';
    }
    if (tela.innerHTML.length > 12) {
        tela.style.fontSize = "32px";
        tela.style.justifyContent = 'center';
    }
    if (tela.innerHTML.length > 14) {
        tela.style.fontSize = "30px";
        tela.style.justifyContent = 'center';
    }
    if (tela.innerHTML.length > 16) {
        tela.style.fontSize = "15px";
        tela.style.justifyContent = 'center';
    }
}

function operador(botao) {
  let tela = document.getElementById("tela");
  let valor = botao.innerHTML;
    
  if (botao.innerHTML === 'CE' || 'C' || 'DEL') {
      valor = '';
      tela.innerHTML = valor;
  }
}

function matematica(botao) {
  let tela = document.getElementById("tela");
  let valor = botao.innerHTML;

  switch (valor) {
    case "+":
      operacao = "soma";
      primeiroNumero = parseFloat(tela.innerHTML);
      tela.innerHTML = "";
      break;
    case "-":
      operacao = "subtracao";
      primeiroNumero = parseFloat(tela.innerHTML);
      tela.innerHTML = "";
      break;
    case "*":
      operacao = "multiplicacao";
      primeiroNumero = parseFloat(tela.innerHTML);
      tela.innerHTML = "";
      break;
    case "/":
      operacao = "divisao";
      primeiroNumero = parseFloat(tela.innerHTML);
      tela.innerHTML = "";
      break;
    case "=":
      if (operacao && primeiroNumero !== null) {
        
        const segundoNumero = parseFloat(tela.innerHTML);
        let resultado;

        switch (operacao) {
          case "soma":
            resultado = primeiroNumero + segundoNumero;
            break;
          case "subtracao":
            resultado = primeiroNumero - segundoNumero;
            break;
          case "multiplicacao":
            resultado = primeiroNumero * segundoNumero;
            break;
          case "divisao":
            resultado = primeiroNumero / segundoNumero;
            break;
        }
        
        tela.innerHTML = resultado;
        primeiroNumero = resultado; // Atualize o primeiro número para o resultado
        operacao = null;
      }
      break;
    default:
      tela.innerHTML += valor;
  }
}