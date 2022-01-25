// recebendo objetos da API
import {arrProdutos} from "../fetch_api/script.js";
const listaDestaque = document.querySelector(".ulPratos")


//Função para criar o layout dos produtos
const construirLayoutPratos = async (ulContainer, produtos, TipoBotao) => {
    const newArr = await produtos
    for(let cont = 0; cont < newArr.length; cont++){
        const {id,nome,preco,categoria,descricao,imagem} = newArr[cont]

        //Criando as Tags para os cards de produtos
        let li = document.createElement("li")
        let img = document.createElement("img")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let span = document.createElement("span")
        let button = document.createElement("button")

        //Implementando os dados nas tags do card
        img.src = imagem
        img.alt = nome
        h3.innerText = nome
        p.innerText = descricao
        li.id = id
        span.innerText = preco.toFixed(2)
        button.innerText = TipoBotao
        

        //Referenciando e montando layout    
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p)
        li.appendChild(span)
        li.appendChild(button)
        ulContainer.appendChild(li)


        //Adicionando Class na Li de produtos   
        li.classList.add("classePrato")
        button.classList.add(TipoBotao)
    }

}
construirLayoutPratos(listaDestaque, arrProdutos, "adicionar")