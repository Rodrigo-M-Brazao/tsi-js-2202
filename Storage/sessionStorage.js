
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

// removeItem();
// sessionStorage.removeItem('dadosDoUsuario');

let vetor = ['pera', 'banana', 'manga'];

/*Para guardar algo que não é string no 
local e/ou session Storage precisamos
converter para string usando JSON.stringify() 
transformando vetor e objetos em string
*/
sessionStorage.setItem('frutas', JSON.stringify(vetor));

//Recupera os dados do session como array
let recuperaDado = JSON.parse(sessionStorage.getItem('frutas'));

//Adiciona elementos no array
recuperaDado[3] = 'morango';
recuperaDado.push('maça');
console.log(recuperaDado);

//Transforma o array em string
let strRecuperaDado = JSON.stringify(recuperaDado);
console.log(strRecuperaDado);

// Coloca no sessionStorage
sessionStorage.setItem('frutas', strRecuperaDado);

