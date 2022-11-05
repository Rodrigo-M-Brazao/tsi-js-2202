document.querySelector('button').addEventListener('click', recuperaDados);

function recuperaDados(evento){
    evento.preventDefault();
    let nome = document.getElementById('nome').value;
    fetch(`https://api.agify.io/?name=${nome}`).then(function(ret){
        console.log(ret)
        return ret.text();
    }).then(function(cont){
        
        let dados = JSON.parse(cont);
        let saida = `${dados.name} tem ${dados.age} anos`;
        document.getElementById('nome').value = '';
        document.querySelector('#dadoRecuperado').innerHTML = saida;
    });
    
}