const numeros = [3,1,7,8,2];

const crescente = (numeros) => {
    for (let i = 0; i < numeros.length; i++) {
        for (let j = 0; j < numeros.length -1; j++) {
            if (numeros[j] > numeros[j + 1]) {
                let auxilio = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = auxilio;
            }
        }
    }
    return numeros;
}

console.log(crescente(numeros));