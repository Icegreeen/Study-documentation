//

const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for ( x in nums ) {
    if ( x == 5 ) {
        break // ele interrompe a vai para fora do laço
    } 
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums ) {
    if (y == 5) {
        continue  // ele somente interrompendo a execução atual e pula para próxima. 
    }
    console.log(`${y} = ${nums[y]}`)
}

// break e continue causam desvio de fluxo

// break: interrompe e sai do laço corrente
// continue: interrompe e contínua a próxima

//--------------------------

// cuidado com esse tipo de estrutura:

externo:
for (a in nums ) {
    for (b in nums) { // o break quebra aqui 
        if ( a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}