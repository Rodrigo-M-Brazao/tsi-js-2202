//Criar elementos

// Cria o elemento li
let novoItemNaLista = criarElemento('li');


// Adiciona a classe Css do novo elemento
novoItemNaLista.className = 'collection-item';


//Adiciona o id do novo elemento
novoItemNaLista.id = 'novo-item';

//Adicionando um novo atributo, no caso title para aparecer quando o a tag estiver hover
novoItemNaLista.setAttribute('title', 'Novo item na lista');

// novoItemNaLista.setAttribute('id', 'valor-qualquer')

//Adiciona um node filho 
novoItemNaLista.appendChild(document.createTextNode('Fazer o editar administrador'));


function criarElemento(elemento){
    return document.createElement(elemento);
}
//Criar sub elemento <a>
let elementoAncora = criarElemento('a');

elementoAncora.className = "delete-item secondary-content";

elementoAncora.setAttribute('href', '#');

//Criar sub elemento <i>
let elementoIcone = criarElemento('i');

elementoIcone.className = "fa fa-remove";

//Adicionando <i> no <a>
elementoAncora.appendChild(elementoIcone);

//Adicionando o <a> no <li>
novoItemNaLista.appendChild(elementoAncora);
console.log(novoItemNaLista);

let ul = document.querySelector('ul.collection');

// ul.appendChild(novoItemNaLista);

let elementoLista = document.getElementsByClassName('collection');
elementoLista[0].appendChild(novoItemNaLista);






let btnAdd = document.querySelector('#btn-add');
let task = document.querySelector('#task');
btnAdd.addEventListener('click', event => {
    event.preventDefault();
    let li = criarElemento('li');

    li.className = 'collection-item';

    li.id = 'novo-item';

    let link = criarElemento('a');

    link.className = "delete-item secondary-content";
    link.setAttribute('href', '#');


    let icone = criarElemento('i');

    icone.className = "fa fa-remove";
    li.appendChild(document.createTextNode(`${task.value}`));

    link.appendChild(icone);

    li.appendChild(link);

    ul.appendChild(li);
    console. log 
})
