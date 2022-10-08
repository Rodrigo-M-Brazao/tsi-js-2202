
// Trabalhando com session storage

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
    //Armazena o valor no session storage após obter os dados
    sessionStorage.setItem('dadosDoUsuario', valor);
}
//Recupera o dado armazenado no session storage
document.querySelector('#mostrar').innerText = sessionStorage.getItem('dadosDoUsuario');

//Para apagar no session storage

// sessionStorage.removeItem('dadosDoUsuario');

