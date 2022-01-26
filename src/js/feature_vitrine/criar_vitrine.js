// recebendo objetos da API
import {arrProdutos} from "../fetch_api/fetch_API.js";
const listaDestaque = document.querySelector(".ulPratos")


//Função para criar o layout dos produtos
const construirLayoutPratos = async (ulContainer, produtos, TipoBotao) => {
    const newArr = await produtos
    for(let cont = 0; cont < newArr.length; cont++){
        const {id,nome,preco,categoria,descricao,imagem} = newArr[cont]

        //Criando as Tags para os cards de produtos
        let li = document.createElement("li")
        let img = document.createElement("img")
        let h4 = document.createElement("h4")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let div = document.createElement("div")
        let span = document.createElement("span")
        let button = document.createElement("button")

        //Implementando os dados nas tags do card
        img.src = imagem
        img.alt = nome
        h4.innerText = categoria
        h3.innerText = nome
        p.innerText = descricao
        li.id = id
        span.innerText = `R$${preco.toFixed(2)}`
        button.innerText = TipoBotao
        

        //Referenciando e montando layout    
        li.appendChild(img)
        li.appendChild(h4)
        li.appendChild(h3)
        li.appendChild(p)
        div.appendChild(span)
        div.appendChild(button)
        li.appendChild(div)
        ulContainer.appendChild(li)


        //Adicionando Class na Li de produtos   
        li.classList.add("classePrato")
        button.classList.add(TipoBotao)
    }

}
construirLayoutPratos(listaDestaque, arrProdutos, "adicionar")

export {listaDestaque}

export {construirLayoutPratos}