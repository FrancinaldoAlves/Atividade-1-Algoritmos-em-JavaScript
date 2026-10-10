let listaInvertida = [];
const inverte = (numeros) => {
    for (let i = numeros.length-1; i>=0; i--){
        listaInvertida.push(numeros[i])
    }
    return listaInvertida;
}
const numeros = [1, 2, 3, 4, 5];

console.log(inverte(numeros));