const lista = [1,2,3,4,5]

const listaParImpar = (numero) => {
    let numerosPares = 0;
    let numerosImpares = 0;
    for (i = 0; i < numero.length; i++){
        if (numero[i] % 2 == 0){
            numerosPares += 1
        } else if (numero[i] % 2 !== 0){
            numerosImpares += 1
        }
    }
    return [numerosPares, numerosImpares];
}

console.log("O numero de elementos pares: " + listaParImpar(lista)[0] + "\nO numero de elementos impares: " + listaParImpar(lista)[1]);