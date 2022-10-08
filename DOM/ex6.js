//Como atualizar um elemento em JS

//Criamos um novo elemento
const novoTitulo = document.createElement('h2');

// Colocamos as caracteristicas que desejamos
novoTitulo.id = 'task-title';
novoTitulo.appendChild(document.createTextNode('Nova Lista'));

//Capturamos o H5 atual (que está originalmente no html)
const tituloAtual = document.getElementById('task-title');

//Capturamos o elemento pai do elemento que queremos atualizar
// let divMaeTitulo = document.querySelector('.card-action');
// divMaeTitulo.replaceChild(novoTitulo, tituloAtual);
// tituloAtual.replaceWith(novoTitulo);

let divMaeTitulo = document.getElementsByClassName('card-action');
// Atualizamos o elemento
divMaeTitulo[0].replaceChild(novoTitulo, tituloAtual);
