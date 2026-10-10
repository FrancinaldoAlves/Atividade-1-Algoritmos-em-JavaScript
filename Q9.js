const numeros = [1,2,3,4,5];

const mover = (numeros, x) => {
    for (let i = 0; i < x; i++) {
        let ultimo = numeros[numeros.length -1];
        for (let j = numeros.length -1; j > 0; j--) {
            numeros[j] = numeros[j - 1];
        }

        numeros[0] = ultimo;
    }
    return numeros;
}

console.log(mover(numeros, 3));