let horaAtual = new Date()
let hora = horaAtual.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora < 7) {
    console.log("Boa madrugada")
} else if (hora >= 7 && hora < 12) {
    console.log("Bom dia!")
} else if (hora < 18) {
    console.log("Boa tarde")
} else if (hora >= 18 && hora < 24) {
    console.log("Boa Noite")
}

