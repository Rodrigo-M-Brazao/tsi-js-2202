// console.log("Oba!!!");
let friends = ['Joey', 'Chandler', 'Monica', 'Rachel', 'Ross', 'Phoebe'];
// console.log(friends);

// Looping de friends

// for(let i = 0; i < friends.length; i++){
//     console.log(friends[i]);
// }
const trataDados = (valor, indice) => {
    console.log(`${indice+1}: ${valor}`);
}
friends.forEach(trataDados);

friends.map(valor => {
    console.log(valor);
});
