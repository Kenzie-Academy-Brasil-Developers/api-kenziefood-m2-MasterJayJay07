//função get na API

const buscarProdutos = async () => {
    let objetoResposta = await fetch(`https://kenzie-food-api.herokuapp.com/product`)
    let retorno = await objetoResposta.json()
    return retorno
}

const arrProdutos = buscarProdutos();

export {arrProdutos}
