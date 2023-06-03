let idade = 17
console.log (`Você tem ${idade} anos, por isso`)
if (idade < 16) {
    console.log("você não vota.")
} else if (idade < 18 || idade > 65){
    console.log("o seu voto é opicional.")  
} else {
    console.log ("o seu voto é obrigatório.")
}