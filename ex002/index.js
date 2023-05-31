function somar() {
    let tn1 = document.querySelector("input#txtn1")
    let tn2 = document.querySelector("input#txtn2")
    let res = document.querySelector("#res")
    let n1 = Number(tn1.value)
    let n2 = Number(tn2.value)
    let s = n1 + n2
    res.innerHTML = `Resultado: A soma entre ${n1} e ${n2} é igual a ${s}. `
}