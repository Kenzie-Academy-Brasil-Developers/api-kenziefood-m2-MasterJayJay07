import {arrProdutos} from "../fetch_api/fetch_API.js"
import {CardVitrine} from "./../models/cardVitrine.js"
import {construirLayoutPratos} from "../feature_vitrine/criar_vitrine.js"
import {db} from "./../db_carrinho/base_dados_carrinho.js"

const carrinho = document.querySelector(".secaoCarrinho__listaItens");
const botoesAdicionar = document.getElementsByClassName("adicionar");

const addProdutoAoCarrinho = async (botoes, arrayProdutos) => {

    const cards = await arrayProdutos;

    for(let i = 0; i < botoes.length; i++){
        botoes[i].addEventListener('click', () => {
            let cardCarrinho = new CardVitrine(cards[i]);
            db.push(cardCarrinho);
            console.log(db);
            construirLayoutPratos(carrinho, [cardCarrinho], 'remover')});
    }

}


addProdutoAoCarrinho(botoesAdicionar, arrProdutos);