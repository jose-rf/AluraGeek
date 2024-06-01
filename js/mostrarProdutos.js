import { conectaApi } from "./requisições.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, imagem){
    const card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <img src="${imagem}" class="card--img" alt="Imagem ${nome}">
    <div class="card-container--info">
        <p>${nome}</p>
        <div class="card-container--value">
            <p>Preço: R$${preco}</p>
            <img src="/img/iconeDeEliminação.svg" alt="Ícone de Eliminação">
        </div>
    </div>`

return card;
}

async function listaProduto() {
    const listaApi = await conectaApi.listaDeProdutos();
    const aviso = document.querySelector('.aviso');

    if (listaApi.length === 0) {
        aviso.style.display = 'block';
    } else {
        aviso.style.display = 'none';
        listaApi.forEach(elemento => lista.appendChild(constroiCard(elemento.nome, elemento.preco, elemento.imagem)));
    }
}

listaProduto();