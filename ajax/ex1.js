const btn = document.querySelector('button')

btn.addEventListener('click', recuperaConteudoAjax);

function recuperaConteudoAjax(){
    const request = new XMLHttpRequest();

    request.open('GET', 'http://127.0.0.1:5501/ajax/conteudo.txt', true); //true = assincron, sincrono está sendo descontinuado

    request.onload = function(){
        if(this.status === 200){
            let jsonContent = JSON.parse(this.responseText);
            let dadoRecuperado = document.getElementById('dadoRecuperado');
            jsonContent.forEach(user => {
                user['idade'] 
                ? dadoRecuperado.innerHTML +=
                `${user['nome']} é maior de idade a idade é ${user['idade']}<br>` 
                : dadoRecuperado.innerHTML +=
                `${user['nome']} é menor de idade a idade é ${user['idade']}<br>`;
                // if(user['idade'] >= 18 ){
                //     document.getElementById('dadoRecuperado').innerHTML += `${user['nome']} é maior de idade a idade é ${user['idade']}<br>`;
                // }
                // else{
                //     document.getElementById('dadoRecuperado').innerHTML += `${user['nome']} é menor de idade a idade é ${user['idade']}<br>`;
                // }
            });
            
            // document.getElementById('dadoRecuperado').innerHTML = this.responseText;
            
            
        }
    }

    request.send();
}