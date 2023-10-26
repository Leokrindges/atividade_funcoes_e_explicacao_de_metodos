// Criar uma função que adicione o seguinte texto no HTML: É um prazer atender você VALOR_PARAMETRO. Você é muito especial para o meu site 🙂
// O parametro deve ser passado por prompt

let texto1 = prompt("Digite a sua mensagem")

function mensagem(texto) {
    document.write(texto + " Você é muito especial para o meu site 🙂")
}

mensagem(texto1)