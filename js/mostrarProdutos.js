import { conectaApi } from "./requisições.js";

const formulario = document.querySelector("[data-formulario]");

async function criarCard(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;

    console.log("Dados do formulário:", { nome, valor, imagem }); 

    try {
        await conectaApi.criaProduto(nome, valor, imagem);
        await listaProduto();  
        formulario.reset(); 
    } catch (erro) {
        console.error("Erro ao criar produto:", erro); 
    }
}

formulario.addEventListener("submit", criarCard);

const limparButton = document.querySelector("[data-limpar]");

limparButton.addEventListener("click", () => {
    formulario.reset();
});

async function listaProduto() {
    try {
        const listaApi = await conectaApi.listaDeProdutos();
        console.log("Produtos recebidos:", listaApi); 
        const aviso = document.querySelector('.aviso');

      
        const lista = document.querySelector(".container[data-lista]");
        lista.innerHTML = '';

        if (listaApi.length === 0) {
            aviso.style.display = 'block';
        } else {
            aviso.style.display = 'none';
            listaApi.forEach(elemento => {
                lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem));
            });
        }
    } catch (erro) {
        console.error("Erro ao listar produtos:", erro); 
    }
}

function constroiCard(nome, preco, imagem) {
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${imagem}" class="card--img" alt="Imagem ${nome}">
        <div class="card-container--info">
            <p>${nome}</p>
            <div class="card-container--value">
                <p>Preço: ${preco}</p>
                <img src="/img/iconeDeEliminação.svg" alt="Ícone de Eliminação">
            </div>
        </div>`;

    return card;
}


document.addEventListener("DOMContentLoaded", listaProduto);