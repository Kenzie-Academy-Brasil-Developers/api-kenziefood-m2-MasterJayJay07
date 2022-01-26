import {listaDestaque} from "../feature_vitrine/vitrine.js";
import {construirLayoutPratos} from "../feature_vitrine/vitrine.js";
import {arrProdutos} from "../fetch_api/script.js";

const inputDeBusca = document.querySelector("#inputDeBusca")
const buttonBuscar = document.querySelector("#buscar")



//Construindo função para buscar produtos por nome ou categoria
const filtrarPorBusca = async (valorInput) => {
    const newArr = await arrProdutos
    const listaFiltroDeBusca = newArr.filter((produto) => {
        if(produto.nome.toLowerCase().includes(valorInput.toLowerCase()) || produto.categoria.toLowerCase().includes(valorInput.toLowerCase())){
            listaDestaque.innerHTML = ""
            return produto.categoria
        }
    })
    construirLayoutPratos(listaDestaque, listaFiltroDeBusca, "adicionar")
}

//Implementando evento de click com a função de filtrar
//atraves dos nomes ou categorias

buttonBuscar.addEventListener('click', () => {
    filtrarPorBusca(inputDeBusca.value)
});


//Emplementando evento no campo de input de pesquisa, 
//para atualiza a busca de formar automatica usando 
//a função de filtrar
inputDeBusca.addEventListener("input", () => {
    filtrarPorBusca(inputDeBusca.value)
})