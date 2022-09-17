/*Criar uma calculadora de valor a ser cobrado do cliente.

O valor do serviço pode variar conforme o prazo.

Os valores e prazos devem ser armazenados em uma matriz.

O cáculo deve ficar obrigatoriamente em uma função.
*/

//Entrada de dados do usuário 
let servico = prompt("Qual serviço você deseja? \n0 - logo, \n1- panfletos \n2- site(visual)");
let horas = prompt("Em quantas horas você quer o serviço? \n0 - 1 dia, \n1- 2 dias \n2- 3 dias");

//Tabela de preços
let tabela = [[`R$400`, `R$350`, `R$300`], [`R$450`, `R$400`, `R$350`], [`Não fazemos`, `Não Fazemos`, `R$400`]];

//Valindando a entrada do usuário
function validaEntrada(dadoUsuario){
    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;
}

//Mostrando preços
if( validaEntrada(servico) && validaEntrada(horas))
{
    alert("O serviço ficará em: "+tabela[servico][horas])
}
else
{
    alert("Ocorreu um erro, tente novamente")
}