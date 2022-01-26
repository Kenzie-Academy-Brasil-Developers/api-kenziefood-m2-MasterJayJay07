import {db} from "./../database_carrinho/db.js"
const quantidadeCarrinho = document.querySelector("#quantidadeTotal")

const atualizarQuantidade = () =>{
    quantidadeCarrinho.innerText = db.length
}

export {atualizarQuantidade}