const lista = [1,2,3,4,5,6,7,8,9,10];

const calcularMedia = (lista) => {
    soma = 0;
    for (i =0 ; i < lista.length; i++){
        soma += lista[i];
    }
    media = soma / lista.length;
    return media;
}
console.log(calcularMedia(lista));
