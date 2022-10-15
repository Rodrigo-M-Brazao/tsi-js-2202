
const tarefa = document.getElementById('tarefa');
const btnAdd = document.querySelector('.btn');
const lista = document.querySelector('.collection');
const filtro = document.getElementById('filtro');
const btnLimpar = document.querySelector('.limpar-tarefas');

function carregaMonitoresDeEventos(){
    //Adiciona tarefa
    btnAdd.addEventListener('click', addTarefa);
    //Evento para fazer o x funcionar (apagar uma unica tarefa)
    lista.addEventListener('click', apagaTarefa);
}
carregaMonitoresDeEventos();

function apagaTarefa(evento){
    /*se o elemento pai tiver a classe apaga-tarefa,
      ou seja, for o elemento "a", apaga  li, ou seja,
      a tarefa
    */
    if(evento.target.parentElement.classList.contains('apaga-tarefa')){
        evento.target.parentElement.parentElement.remove();
    }
}
//Adiciona tarefa
function addTarefa(evento){
    evento.preventDefault();
    
    //Valida a entrada de dados
    if(tarefa.value === ''){
        return alert('Escreva uma tarefa');
    }

    // Criando uma nova li
    const li = document.createElement('li');
    li.className = 'collection-item';

    li.appendChild(document.createTextNode(tarefa.value));

    //Cria o a onde vai ficar o x para apagar a tarefa
    const a = document.createElement('a');
    a.className = 'apaga-tarefa secondary-content';

    //Criando icone do X usando fonte awesome
    const i = document.createElement('i');
    i.className = 'fa fa-remove';
    
    // Monta o li e coloca no ul 
    a.appendChild(i);
    li.appendChild(a);
    lista.appendChild(li);

    tarefa.value = '';
}