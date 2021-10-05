let peso = 110

if(peso > 100){
    console.log("A peça possui um peso adequado, pode ser cadastrada.")
}else {
    console.log("A peça não pode ser cadastrada, não possui o peso mínimo.")
}

let listaPecas = ["peça1", "peça2", "peça3", "peça4", "peça5", "peça6", "peça7", "peça8", "peça9", "peça10"]

if (listaPecas.lenght < 10) {  //lenght - comprimento da lista
    console.log("A lista ainda possui espaço para mais peças.")
} else {
    console.log("Não há espaço disponível na lista, a capacidade máxima foi atingida.")
}

let nomePeca = "Amortecedor"

if (nomePeca.length > 3) {
    console.log("Nome da peça é válido, pode continuar.")
} else {
    console.log("Nome da peça inválido, o nome deve ter mais de 3 caracteres")
}