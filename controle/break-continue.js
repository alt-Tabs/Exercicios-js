const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

for (x in nums){
    if(x==5) {
        break //usado somente para "for", "while" e "switch"
}             //vai agir em cima do bloco mais proximo dele

console.log(`${x} x= ${nums[x]}`)

}
for (y in nums){
    if (y==5) continue
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums){
    for (b in nums){
        if(a == 2 && b == 3) break externo// para agir no for externo, break rotulado
        console.log(`Par= ${a}, ${b} `)// nõ usar essa estrutura
    }
}