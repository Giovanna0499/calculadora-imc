let nome = prompt('Digite seu nome:');
let peso = parseFloat(prompt('Digite seu peso:'));
let altura = parseFloat(prompt('Digite sua altura'));

let imc = peso / (altura * altura);

let classificacao = '';

if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
} else if (imc < 24.9) {
    classificacao = 'Peso normal';
} else if (imc < 29.9) {
    classificacao = 'Sobrepeso';
} else if (imc < 34.9) {
    classificacao = 'Obesidade grau I';
} else if (imc < 39.9) {
    classificacao = 'Obesidade grau II (severa)';
} else {
    classificacao = 'Obesidade grau III (mórbida)';
}

alert(`Olá ${nome}, seu IMC é ${imc.toFixed(2)}\nClassificação: ${classificacao}`);

