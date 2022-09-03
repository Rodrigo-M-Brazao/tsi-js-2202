let peso = prompt('Qual o peso');
let altura = prompt('Qual o altura');
function calcularImc(peso, altura){
    let imc = peso/(altura*altura);
    if(imc > 25){
        return 'acima do peso';
    }
    else if(imc >= 18 && imc <=25){
        return 'peso  ideal';
    }
    else{
        return 'abaixo do peso';
    }
}

alert(calcularImc(peso, altura));