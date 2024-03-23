Função SomaDeMatrizes(matrizA, matrizB):
    # Verifica se as duas matrizes têm o mesmo número de linhas e colunas
    Se tamanho(matrizA) ≠ tamanho(matrizB) então:
        Retornar "As matrizes não podem ser somadas. Elas têm dimensões diferentes."
    Senão:
        linhas <- tamanho(matrizA)
        colunas <- tamanho(matrizA[0]) # Considerando que todas as linhas têm o mesmo número de colunas
        matrizResultado <- novaMatriz(linhas, colunas)

        # Loop para percorrer cada elemento das matrizes e calcular a soma
        Para i de 0 até linhas-1 faça:
            Para j de 0 até colunas-1 faça:
                matrizResultado[i][j] <- matrizA[i][j] + matrizB[i][j]

        Retornar matrizResultado

# Exemplo de uso da função
matrizA <- [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
matrizB <- [[9, 8, 7], [6, 5, 4], [3, 2, 1]]

matrizSoma <- SomaDeMatrizes(matrizA, matrizB)
Escrever("Soma das matrizes:")
ImprimirMatriz(matrizSoma)

function MultiplicacaoDeMatrizes(matrizA, matrizB) {
    // Verifica se o número de colunas da matrizA é igual ao número de linhas da matrizB
    if (matrizA[0].length !== matrizB.length) {
        return "As matrizes não podem ser multiplicadas. O número de colunas da matrizA não é igual ao número de linhas da matrizB.";
    } else {
        let linhasA = matrizA.length;
        let colunasA = matrizA[0].length;
        let colunasB = matrizB[0].length;
        let matrizResultado = novaMatriz(linhasA, colunasB);

        // Loop para percorrer cada elemento das matrizes e calcular a multiplicação
        for (let i = 0; i < linhasA; i++) {
            for (let j = 0; j < colunasB; j++) {
                matrizResultado[i][j] = 0;
                for (let k = 0; k < colunasA; k++) {
                    matrizResultado[i][j] += matrizA[i][k] * matrizB[k][j];
                }
            }
        }

        return matrizResultado;
    }
}

// Exemplo de uso da função
let matrizA = [[1, 2, 3], [4, 5, 6]];
let matrizB = [[7, 8], [9, 10], [11, 12]];

let matrizMultiplicacao = MultiplicacaoDeMatrizes(matrizA, matrizB);
console.log("Multiplicação das matrizes:");
ImprimirMatriz(matrizMultiplicacao);