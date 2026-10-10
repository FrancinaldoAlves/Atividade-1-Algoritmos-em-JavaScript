const numeros = [1,2,3,4,4,5,5];

const repetidos = (numeros) => {
    let listaRepetidos = [];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros.indexOf(numeros[i]) !== i && !listaRepetidos.includes(numeros[i])) {
            listaRepetidos.push(numeros[i]);
        }
    }
    return listaRepetidos;
}

console.log(repetidos(numeros));