import {arrProdutos} from "../fetch_api/fetch_API.js"
import {CardCarrinho} from "./../models/cardCarrinho.js"
import {construirLayoutPratos} from "../feature_vitrine/criar_vitrine.js"
import {db} from "./../database_carrinho/db.js"
import {atualizarQuantidade} from "../feature_total_qtd/qtd_carrinho.js"
import {atualizarTotal} from "../feature_total_qtd/total_carrinho.js"
import {valores} from "./remover_carrinho.js"

const carrinho = document.querySelector(".secaoCarrinho__listaItens")
const botoesAdicionar = document.getElementsByClassName("adicionar")
const conteudoVazio = document.querySelector(".secaoCarrinho__conteudo");

const addProdutoAoCarrinho = async (botoes, arrayProdutos) => {

    const cards = await arrayProdutos

    for(let i = 0; i < botoes.length; i++){
        botoes[i].addEventListener('click', () => {
            conteudoVazio.style.display = "none";
            valores.style.display = "flex";
            let cardCarrinho = new CardCarrinho(cards[i])
            db.push(cardCarrinho)
            atualizarTotal()
            atualizarQuantidade()
            construirLayoutPratos(carrinho, [cardCarrinho], 'remover')})
            
    }

}

addProdutoAoCarrinho(botoesAdicionar, arrProdutos)

export {addProdutoAoCarrinho}
export {botoesAdicionar}
export {conteudoVazio}