//Script de explicação dos metodos

const pessoas = [
    {
      nome: 'Leonardo Krindges',
      sexo: 'Masculino',
      salario: 1000
    },
    {
      nome: 'Maria',
      sexo: 'Feminino',
      salario: 2000
    }
  ]
  
  
//   Length -> Pega a quantia atual de itens do array
//   pessoas.length // Retorna 2
  
//   For each -> Executar um bloco de código para cada item do array
//   forEach com arrow function
  pessoas.forEach((pessoa) => {
    document.write(pessoa.nome)
    document.write('<br />')
  })
  
//   forEach com function externa
  function exibeNome(pessoa) {
    document.write(`Nome: ${pessoa.nome}, Salário: ${pessoa.salario}`)
    document.write('<br />')
  }
  pessoas.forEach(exibeNome)

  //*************************************/
//   Find -> Pega o PRIMEIRO ITEM que satisfaça a condição
  const pessoaComSalario = pessoas.find((pessoa) => {
    return pessoa.salario > 500
  })
  
  if (pessoaComSalario === undefined) { // Não existe ninguém que passou na condição
    document.write('Ninguém aqui ganha tanto assim 😭')
  } else {
    document.write(pessoaComSalario.nome)
  }

  //*************************************/
//   Find Index -> Pega o INDICE DO PRIMEIRO ITEM que satisfaça a condição
  const pessoaComSalario = pessoas.findIndex((pessoa) => {
    return pessoa.salario > 10000
  })
  
  if (pessoaComSalario === -1) { // Não existe ninguém que passou na condição
    document.write('Ninguém aqui ganha tanto assim 😭')
  } else {
    document.write(pessoaComSalario)
  }
  
  //*************************************/
  let valorMinimo = 1000
  // Filter -> Retorna TODOS os itens de um array que passarem na verificação
  const pessoasComSalario = pessoas.filter((pessoa) => {
    return pessoa.salario > valorMinimo
  })
  
  if (pessoasComSalario.length === 0) {
    document.write(`Ningúem ganha acima de ${valorMinimo}`)
  } else { 
    pessoasComSalario.forEach((pessoa) => {
      document.write(`${pessoa.nome} ganha ${pessoa.salario}, que é acima de ${valorMinimo}`)
      document.write('<br />')
    })
  }