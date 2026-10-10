const lista1 = [1,2,3,4,5];
const lista2 = [1,2,7,8,9,1];

let listaNova = [];

const numerosComuns = (lista1, lista2) => {
    for (let i = 0; i < lista1.length; i++) {
        if (lista2.includes(lista1[i]) && !listaNova.includes(lista1[i])) {
            listaNova.push(lista1[i]);
        }
    }
    return listaNova;
}

console.log(numerosComuns(lista1, lista2));