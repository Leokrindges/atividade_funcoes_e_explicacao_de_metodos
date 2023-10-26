
// Criar uma função que receba dois parâmetros sendo eles: ano de nascimento e o ano atual. Essa função deve descobrir a idade da pessoa e retornar a idade como resultado. O retorno (resultado) da função deve ser armazenada em uma variável e no final deve ser escrito no html a seguinte mensagem: Com as informações passadas para mim, descobri que você tem IDADE_PESSOA.


let nome = prompt("Digite o seu nome").toUpperCase()
let anoAtual = Number(prompt(`${nome} qual é o ano atual`))
let anoNascimento = Number(prompt(`${nome} qual é o seu ano de nascimento`))

function retornaIdade(anoA, anoN) {
    let soma = anoA - anoN
    return soma
}

function maiorDeIdade(resultado) {
    if (resultado >= 18) {
        let voto = prompt("Insira o seu voto")
        return voto
    } else if (resultado > 0 && resultado < 16) {
        document.write("De acordo com a lei lei nº 4.737/65 você não pode votar!!")
        voto = "ninguem"
        return voto
    }
}

let resultado = retornaIdade(anoAtual, anoNascimento)

document.write(`<p>${nome}, com as informações passadas para mim, descobri que você tem ${resultado} anos</p>`)

let votar = maiorDeIdade(resultado)

document.write(`E você votou em ${votar}`)