
/*Criar uma calculadora de valor a ser cobrado do cliente.
O valor do serviço pode variar conforme o prazo.
Os valores e prazos devem ser armazenados em uma matriz.
O cálculo deve ficar obrigatoriamente em uma função.
*/

//Declaração de variáveis que recebem algo;
let servico = prompt("Qual serviço você deseja?");
let horas = prompt("Em quantas horas você quer o serviço?");

// Matriz com nome e valores de cada serviço com o quanto será cobrado por hora trabalhada
let matriz = [
    ['Wireframe', 'Banco de dados', 'Site estático', 'Site dinâmico', 'Aplicação Web Mobile', 'Manutenção do site'],
    [700,800,400,1000,1100,400],   /* 16h */
    [550,700,300,800,750,350],/* 24h */
    [400,600,240,600,550,300],/* 36h */
    [300,480,180,400,400,250],/* 48h */
    [200,320,120,200,250,180] /* 72h */
];

// Funções 
const escreva = texto => {
    document.write(texto);
}
const checarServico = (servico, horas) => {
    const indexValor = matriz[0].indexOf(servico);
    if(matriz[0].includes(servico)){
        if(horas <= 16){
            escreva(`O valor é: R$ ${matriz[1][indexValor]},00`);
        }else if(horas <=24){
            escreva(`O valor é: R$ ${matriz[2][indexValor]},00`);
        }
        else if(horas <= 36){
            escreva(`O valor é: R$ ${matriz[3][indexValor]},00`);
        }
        else if(horas <= 48){
            escreva(`O valor é: R$ ${matriz[4][indexValor]},00`);
        }
        else if(horas <= 72){
            escreva(`O valor é: R$ ${matriz[5][indexValor]},00`);
        }
    }
    else{
        escreva(`O serviço em questão não está disponível, nosso serviços são:
                <ul>
                    <li>Wireframe</li>
                    <li>Banco de dados</li>
                    <li>Site estático</li>
                    <li>Site dinâmico</li>
                    <li>Aplicação Web Mobile</li>
                    <li>Manutenção do site</li>
                <ul>
                `);
    }
}

checarServico(servico, horas);

// Caso precise ver a tabela no navegador descomente o código

// escreva('<br>');
// for (let i = 0; i < 6; i++) {
    
//     for(let j = 0; j < 6; j++){
        
//         escreva(` ${matriz[i][j]} `);
//     }
//     escreva('<br>');
// }
