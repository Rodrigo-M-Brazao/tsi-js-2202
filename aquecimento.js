//For
const style = 'font-weight: bold; color: #5a92db;';
const style2 = 'color: #2e517d';
console.log('%cFor', style);
for(let i = 1; i <= 10; i++){
    document.write(`Linha ${i}<br>`);
    console.log(`%cLinha ${i}`, style2, );
}

console.log('\n%cWhile', style);
//While
let contador = 1;
while (contador <= 10) {
    
    console.log("%cLinha com while: " + contador, style2);
    contador++;
}
contador = 1;

console.log('\n%cDo While', style);

// Do While

do{
    console.log("%cLinha com do: " + contador, style2);
    contador++;
}while(contador <= 10);

//Condicionais
let a = 5;
let b = 3;
if(a>b){
    console.log(`\n${a} > ${b}`);
}
else if(a<b){
    console.log(`\n${b} > ${a}`);
}else{
    console.log(`${a} = ${b}`)
}
let diaSemana = 5;
switch (diaSemana) {
    case 0:
        console.log("\nHoje é domingo");
        break;
    case 1:
        console.log("\nHoje é segunda-feira");
        break;
    case 2:
        console.log("\nHoje é terça-feira");
        break;

    case 3:
        console.log("\nHoje é quarta-feira");
        break;

    case 4:
        console.log("\nHoje é quinta-feira");
        break;

    case 5:
        console.log("\nHoje é sexta-feira, #Sextou");
        break;

    case 6:
        console.log("\nHoje é sábado"); 
        break;

    default:
        console.log("\nNúmero inválido");
    
}

let gender = "M";
let resultado = gender === 'M'? `é do gênero Masculino`: gender === 'F'? `é do gênero Feminino`: `Preferiu não declarar`;
console.log("\n", resultado);

// let diaMes = parseInt(prompt("Digite o dia do mês: "));
let evenOrOdd = diaMes %2 == 0 ? `É par` : diaMes !== NaN ? `É impar` : 'Valor inválido';

console.log('\n', evenOrOdd);
//Coalenscência

let coisa;
let variavel = coisa ?? "Não há";
console.log('\n', variavel);