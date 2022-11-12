const btn = document.querySelector('button').addEventListener('click', mostraIpca);



function mostraIpca(evento){
    evento.preventDefault();
    const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201111';
    
    fetch(url)
    .then(retorno => retorno.text())
    .then(stringJson => {
        let indices = JSON.parse(stringJson);
        let dados = [];
        
        const jsonMorris = {
       
            element: 'ipca',
        
            resize: true,    
        
            //Dados do gráfico
            
            data: [
                
            ],
        
            lineColors: ['CornflowerBlue'],
            // Nome do eixo com os valores de X
            xkey: 'year',
            // Uma lista de nome dos atributos contidos no eixo Y
            ykeys: ['value'],
            //Rótulos para os indices que aparecem quando passa o mouse por cima
            labels: ['Value']
        }
        console.log(indices)
        // new Morris.Line(jsonMorris)
    }).catch(() => {
        alert('API do Banco Central fora do ar');
    })
    
}

