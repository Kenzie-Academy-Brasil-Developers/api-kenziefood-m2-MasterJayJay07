import {arrProdutos} from "./../fetch_api/script.js"
import {CardVitrine} from "./../models/cardVitrine.js"
import { construirLayoutPratos } from "../feature_vitrine/vitrine.js"

const carrinho = document.querySelector(".secaoCarrinho__listaItens");
console.log(carrinho);
const botoesAdicionar = document.getElementsByClassName("adicionar");

const addProdutoAoCarrinho = async (botoes, arrayProdutos) => {

    const cards = await arrayProdutos;

    for(let i = 0; i < botoes.length; i++){
        botoes[i].addEventListener('click', () => {
            let cardCarrinho = new CardVitrine(cards[i]);
            construirLayoutPratos(carrinho, [cardCarrinho], 'remover')});
    }

}

addProdutoAoCarrinho(botoesAdicionar, arrProdutos);