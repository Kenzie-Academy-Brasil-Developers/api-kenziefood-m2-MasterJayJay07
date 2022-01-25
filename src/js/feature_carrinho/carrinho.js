import {arrProdutos} from "./../fetch_api/script.js"
import { construirLayoutPratos } from "../feature_vitrine/vitrine.js"

const carrinho = document.querySelector(".secaoCarrinho__listaItens");
console.log(carrinho);
const botoesAdicionar = document.getElementsByClassName("adicionar");

const criarCardCarrinho = ({id,nome,preco,categoria,descricao,imagem}, tipoBotao, containerCarrinho) => {

    let li = document.createElement("li")
    let img = document.createElement("img")
    let h4 = document.createElement("h4")
    let h3 = document.createElement("h3")
    let span = document.createElement("span")
    let button = document.createElement("button")

    img.src = imagem;
    img.alt = nome;
    h4.innerText = categoria;
    h3.innerText = nome;
    span.innerText = preco.toFixed(2);
    button.innerText = tipoBotao;

    li.appendChild(img)
    li.appendChild(h4)
    li.appendChild(h3)
    li.appendChild(span)
    li.appendChild(button)

    carrinho.appendChild(li);

}

const addProdutoAoCarrinho = async (botoes, arrayProdutos) => {

    const cards = await arrayProdutos;

    for(let i = 0; i < botoes.length; i++){
        botoes[i].addEventListener('click', () => {
            criarCardCarrinho(cards[i], 'remover', carrinho)});
    }

}

addProdutoAoCarrinho(botoesAdicionar, arrProdutos);
