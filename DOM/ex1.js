// alert(`Sua resolução é ${window.innerWidth} X ${window.innerHeight}`);

let meuTitulo = document.getElementById('titulo');
let tituloEstilo = meuTitulo.style;

if(confirm('Deixe um mensagem')){
    let msg = prompt('Mensagem');
    meuTitulo.innerHTML = msg;
    tituloEstilo.backgroundColor = 'green';
}
else{
    meuTitulo.innerHTML = 'Sem mensagem';
    tituloEstilo.backgroundColor = '#cecece';
}


console.log(window.navigator)