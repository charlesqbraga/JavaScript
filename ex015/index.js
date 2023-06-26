let  valores = [2, 4, 6, 1, 7, 8, 12, 22, 14, 66, 13, 64, 23]
//valores.sort()
//console.log(valores)

/*
for(let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}


Modo simplificado para escrever o for 
for(let pos in valores){
    console.log(`A posição ${pos} tem o valor: ${valores[pos]}`)
}
*/

let pos = valores.indexOf(13)
if (pos == -1){
    console.log('O valor desejado não foi encontrado!')
} else {
    console.log(`O valor desejado está na posição ${pos}`)
}