const cartao = document.querySelector('.card');
const titulo = document.querySelector('h5');

cartao.addEventListener('mousemove', executaAcao);

function executaAcao(evento){
    // console.log('Tipo de evento: ', evento.type);
    titulo.textContent = `Eixo X: ${evento.offsetX} - Eixo Y: ${evento.offsetY}`;
    // document.body.style.backgroundColor= `rgb(${evento.offsetX}, ${evento.offsetY}, 40)`
}