export async function listaDeProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaProduto(nome, preco, imagem){

    
    function formatarPreco(preco) {
        
        return parseFloat(preco).toFixed(2);
    }

    const precoFormatado = formatarPreco(preco);

    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome: nome,
            preco: `R$${precoFormatado}`,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;

}

export const conectaApi = {
    listaDeProdutos,
    criaProduto
}
