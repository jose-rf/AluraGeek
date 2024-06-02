import { conectaApi } from "./requisições.js";

const formulario = document.querySelector("[data-formulario]");

async function criarCard(evento){
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;

    await conectaApi.criarCard(nome, valor, imagem);
}

console.log(criarCard)

formulario.addEventListener("submit", evento => criarCard(evento));