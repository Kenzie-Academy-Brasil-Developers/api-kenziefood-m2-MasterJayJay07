import {listaDestaque} from "../feature_vitrine/criar_vitrine.js"
import {construirLayoutPratos} from "../feature_vitrine/criar_vitrine.js"
import {arrProdutos} from "../fetch_api/fetch_API.js"
import {botoesAdicionar} from "../feature_carrinho/adicionar_carrinho.js"
import {addProdutoAoCarrinho} from "../feature_carrinho/adicionar_carrinho.js"

const mostrarTodos = () => {
	listaDestaque.innerText = ""
    construirLayoutPratos(listaDestaque, arrProdutos, "adicionar")
    addProdutoAoCarrinho(botoesAdicionar, arrProdutos)
}

//Pegando o button  de filtro "todos" no HTML e adicionando evento de click
const botaoMostrarTodos = document.querySelector('#mostrarTodos');
botaoMostrarTodos.addEventListener('click', mostrarTodos)



//Função para filtrar baseado na categoria
const filtrarProdutos = async (categoriaTexto) =>{
    listaDestaque.innerHTML = ""
    const newArr = await arrProdutos
    const listaFiltro = newArr.filter((produto) => {
        return produto.categoria === categoriaTexto;
    });

    construirLayoutPratos(listaDestaque, listaFiltro, "adicionar")
    addProdutoAoCarrinho(botoesAdicionar, listaFiltro)
}

//Pegando os buttons de filtro do HTMl e adicionando evento de click com a função de filtrar
const botaoMostrarFrutas = document.querySelector('#mostrarFrutas');
botaoMostrarFrutas.addEventListener('click', () => {
    filtrarProdutos("Frutas")
});

const botaoMostrarBebidas = document.querySelector('#mostrarBebidas');
botaoMostrarBebidas.addEventListener('click', () => {
    filtrarProdutos("Bebidas")
});

const botaoMostrarPanificadora = document.querySelector('#mostrarPanificadora');
botaoMostrarPanificadora.addEventListener('click', () => {
    filtrarProdutos("Panificadora")
});