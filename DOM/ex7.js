//Como apagar elementos
const itens = document.querySelectorAll('li');
const lista = document.querySelector('ul');

itens.forEach((item) => {
    item.firstElementChild.addEventListener('click', function(event){
        this.parentElement.remove();
    });
});

// itens[1].remove();
// itens[2].remove();

//Outra forma de remover 
const item = document.querySelector('ul');

console.log(item.firstElementChild.firstElementChild);

// item.firstElementChild.firstElementChild.remove();
