/*
const lukeLogin = () => {
    let array = []
    for (i = 0; i < 90000; i++) {
        array.push(i)
    }
    return "Luke logado com sucesso!"
}

const leiaLogin = () => {
    let array = []
    for (i = 0; i < 90000; i++) {
        array.push(i)
    }
    return "Leia logada com sucesso!"
}

lukeLogin()
leiaLogin()

const usuarioLogin = (pessoa) => {
    let array = []
    for (i = 0; i < 90000; i++) {
        array.push(i)
    }
    return `${pessoa} logou com sucesso no sistema!`
}

usuarioLogin("Luke")
*/

const acesso = (nome) => {
    return `${nome} logou com sucesso no sistema!`
}

const usuarioLogin = (nome) => {
    let array = []
    for (i = 0; i < 90000; i++) {
        array.push(i)
    }
    return acesso(nome)
}

usuarioLogin("Luke")