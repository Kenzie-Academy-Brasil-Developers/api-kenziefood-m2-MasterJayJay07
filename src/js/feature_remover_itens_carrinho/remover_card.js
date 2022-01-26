const botoesRemover = document.querySelector(".remover");
const carrinho = document.querySelector(".secaoCarrinho__listaItens");

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
}

carrinho.addEventListener('click', identificarItemParaRemover);