let btnCalcular = document.getElementById('calcular');
btnCalcular.addEventListener('click', event =>{
    event.preventDefault();
    let serv = document.getElementById("servico");
    let prazo = document.getElementById("prazo");
    let res = document.getElementById("resultado");

    let preco = calculaPreco(serv.value, prazo.value);

    if(preco != 'Não fazemos'){
        res.innerText = `O valor ficará: ${preco}`;
    }
    else{
        res.innerText = `Desculpe. ${preco}`;
    }
    
    
   
}
);

const calculaPreco = (servico, prazo) => {
    let tabela = [[`R$400`, `R$350`, `R$300`], [`R$450`, `R$400`, `R$350`], [`Não fazemos`, `Não fazemos`, `R$400`]];
    return tabela[servico][prazo];
}