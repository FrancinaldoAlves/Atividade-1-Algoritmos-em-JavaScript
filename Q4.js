const lista = [1,2,3,4,5];

const ProcurarValor = (numero) => {
    const numeroEscolhido = 3;
    for (i = 0; i < numero.length; i++){
        if (numero[i] == numeroEscolhido){
            return [i];
        }
    }
}

console.log("O número foi encontrado e sua posição é: " + ProcurarValor(lista));