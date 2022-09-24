let e;
//com getElementsByClassName 
e = document.getElementsByClassName('collection-item');
let lista = Array.from(e);
// lista.forEach(tarefa => {
//     tarefa.style.color = 'aliceblue';
//     tarefa.innerHTML = 'Outra tarefa';
//     tarefa.style.backgroundColor = "darkblue";
//     console.log(tarefa.innerText);
// });

// console.log(e);
// com querySelectorALL 
e = document.querySelectorAll('li');

// e.forEach(element => {
//     console.log(element);
// });

//Somente impares(para pares é even)

e = document.querySelectorAll('li:nth-child(odd');

e.forEach(element => {
    element.style.backgroundColor = '#dedede';
});

//Sem usar função anônima

// e.forEach(fazAlgo);

function fazAlgo(element){
    console.log(element);
}

e = document.querySelector('ul.collection');
// console.log(e.firstChild);
// console.log(e.lastChild);
// console.log(e.childElementCount);
console.log(e.children[3].children[0]);

