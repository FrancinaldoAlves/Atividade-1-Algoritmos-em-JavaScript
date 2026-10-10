const lista = [1,2,3,4,5];
const listaMaiorMenor = (lista) => {
    let maior = lista[0];
    let menor = lista[0];
    for (i = 0; i < lista.length; i++){
        if (lista[i] > maior){
            maior = lista[i];
        } else if (lista[i] < menor){
            menor = lista[i];
        }
    }
    return [maior, menor];
}

console.log("O número maior da lista é: " + listaMaiorMenor(lista)[0] + "\nO número menor da lista é: " + listaMaiorMenor(lista)[1]);