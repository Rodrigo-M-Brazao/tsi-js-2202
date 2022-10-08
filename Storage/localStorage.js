
// Trabalhando com local storage

//Capturando o botão 
let btn = document.getElementById('botao');

//Adicionando o evento
btn.addEventListener('click', mostrar);

//Função para mostrar o evento
function mostrar(evento){
    evento.preventDefault();
    let entrada = document.getElementById('entrada');
    let mostrar = document.getElementById('mostrar');
    let valor = entrada.value;
    mostrar.innerText = valor;
    entrada.value = '';
    //Armazena o valor no local storage após obter os dados
    localStorage.setItem('dadosDoUsuario', valor);
}
//Recupera o dado armazenado no local storage
document.querySelector('#mostrar').innerText = localStorage.getItem('dadosDoUsuario');

//Para apagar no local storage

// localStorage.removeItem('dadosDoUsuario');

