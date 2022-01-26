const botoesRemover = document.querySelector(".remover")
const carrinho = document.querySelector(".secaoCarrinho__listaItens")
import {db} from "./../database_carrinho/db.js"
import {atualizarQuantidade} from "../feature_total_qtd/qtd_carrinho.js"
import {atualizarTotal} from "../feature_total_qtd/total_carrinho.js"

//Pega o elemento botão quando for clicado e passa o elemento pai dele para a função de remover
const identificarItemParaRemover = (event) => {
    const link = event.target;
    if(link.className === "remover"){
        removerDoCarrinho(link.parentNode);
    }
}

//Remover o elemento pai do item do carrinho
const removerDoCarrinho = (item) => {
    item.parentElement.remove();
    let id = item.parentNode.id; //encontra o id do item a ser removido
    let found = db.find(element => element.id === Number(id)); //busca na base de dados o item removido
    let index = db.indexOf(found); //encontra o índice do item na base de dados
    db.splice(index, 1); //remove o item da base de dados
    atualizarTotal()
    atualizarQuantidade()
}

carrinho.addEventListener('click', identificarItemParaRemover)