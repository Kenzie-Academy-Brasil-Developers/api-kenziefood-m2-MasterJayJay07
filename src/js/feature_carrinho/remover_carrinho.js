const carrinho = document.querySelector(".secaoCarrinho__listaItens")
import {db} from "./../database_carrinho/db.js"
import {atualizarQuantidade} from "../feature_total_qtd/qtd_carrinho.js"
import {atualizarTotal} from "../feature_total_qtd/total_carrinho.js"
import { conteudoVazio } from "./adicionar_carrinho.js"

const valores = document.querySelector(".secaoCarrinho__total");

const identificarItemParaRemover = (event) => {

    const link = event.target

    if(link.className === "remover"){
        removerDoCarrinho(link.parentNode)
    }
}

const removerDoCarrinho = (item) => {

    item.parentElement.remove()
    let id = item.parentNode.id
    let found = db.find(element => element.id === Number(id))
    let index = db.indexOf(found)
    db.splice(index, 1)

    if(db.length === 0){
        conteudoVazio.style.display = "flex";
        valores.style.display = "none";
    }

    atualizarTotal()
    atualizarQuantidade()
}

carrinho.addEventListener('click', identificarItemParaRemover)

export {valores}