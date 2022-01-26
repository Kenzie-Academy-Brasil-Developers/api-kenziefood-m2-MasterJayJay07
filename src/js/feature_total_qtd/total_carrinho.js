import {db} from "./../database_carrinho/db.js"
const totalPreco = document.querySelector("#total")

const atualizarTotal = () =>{
    totalPreco.innerHTML = db.reduce((soma, objeto) =>
        soma + objeto._preco
 , 0).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' });
}

export {atualizarTotal}