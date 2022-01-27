import {listaDestaque} from "../feature_vitrine/criar_vitrine.js"
import {construirLayoutPratos} from "../feature_vitrine/criar_vitrine.js"
import {arrProdutos} from "../fetch_api/fetch_API.js"
import { addProdutoAoCarrinho } from "../feature_carrinho/adicionar_carrinho.js"
import { botoesAdicionar } from "../feature_carrinho/adicionar_carrinho.js"

const inputDeBusca = document.querySelector("#inputDeBusca")
const buttonBuscar = document.querySelector("#buscar")

const filtrarPorBusca = async (valorInput) => {
    const newArr = await arrProdutos
    const listaFiltroDeBusca = newArr.filter((produto) => {
        if(produto.nome.toLowerCase().includes(valorInput.toLowerCase()) || produto.categoria.toLowerCase().includes(valorInput.toLowerCase())){
            listaDestaque.innerHTML = ""
            return produto.categoria
        }
    })
    construirLayoutPratos(listaDestaque, listaFiltroDeBusca, "adicionar")
    addProdutoAoCarrinho(botoesAdicionar, listaFiltroDeBusca)
}


buttonBuscar.addEventListener('click', () => {
    filtrarPorBusca(inputDeBusca.value)
})

inputDeBusca.addEventListener("input", () => {
    filtrarPorBusca(inputDeBusca.value)
})