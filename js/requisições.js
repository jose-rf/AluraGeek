export async function listaDeProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem){

       // Função para formatar o preço
       function formatarPreco(preco) {
        if (Number.isInteger(preco)) {
            // Se for inteiro, adiciona ".00"
            return preco.toFixed(2);
        }
        // Se for decimal, retorna o preço como string
        return preco.toString();
    }

    const precoFormatado = formatarPreco(preco);

    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome : nome,
            pereco : `R$${preco}`,
            imagem : imagem
        })
    });

    const conexaoConvertida = await conexao.json();

}

export const conectaApi = {
    listaDeProdutos,
    criaProduto
}


