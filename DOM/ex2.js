let btnCalcular = document.getElementById('calcular');
btnCalcular.addEventListener('click', event =>{
    event.preventDefault();
    console.log(event)
    alert('clicou');
}
);
console.log(btnCalcular);