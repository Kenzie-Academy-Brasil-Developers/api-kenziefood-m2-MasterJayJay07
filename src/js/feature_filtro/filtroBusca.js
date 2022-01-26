//Pegando input e button de busca no HTML
const inputDeBusca = document.querySelector("#inputDeBusca")
const buttonBuscar = document.querySelector("#buscar")



//Construindo função para buscar produtos por nome ou categoria
const filtrarPorBusca = (valorInput) => {
    const listaFiltroDeBusca = listaPratos.filter((produto) => {
        if(produto.nome.toLowerCase().includes(valorInput.toLowerCase()) || produto.categoria.toLowerCase().includes(valorInput.toLowerCase())){
            listaDestaque.innerHTML = ""
            return produto.categoria
        }
    })
    construirLayoutPratos(listaDestaque, listaFiltroDeBusca, "adicionar")
}



//Emplementando evento de click com a função de filtrar
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