/*let a = document.getElementById('area')
a.addEventListener("click", clicar)
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseout", sair)*/

function clicar() {
    let a = document.getElementById('area')
    a.innerText = "Clicou!"
    a.style.background = "red"

}
function entrar() {
    let a = document.getElementById('area')
    a.innerText="Entrou!"
    a.style.background = "blue"
}
function sair() {
    let a = document.getElementById('area')
    a.innerText="Saiu!"
    a.style.background = "green"
}