document.querySelector('button').addEventListener('click', recuperaDados);

function recuperaDados(evento){
    evento.preventDefault();
    fetch('http://127.0.0.1:5501/ajax/conteudo.txt').then(function(ret){
        console.log(ret)
        return ret.text();
    }).then(function(cont){
        let saida = '';
        cont = JSON.parse(cont);

        cont.forEach(aluno => {
            saida += aluno.idade >= 18 ?
                        `${aluno.nome} é maior de idade <br>`
                        :
                        `${aluno.nome} é menor de idade <br>`;
        });
        document.querySelector('#dadoRecuperado').innerHTML = saida;
    });
    
}