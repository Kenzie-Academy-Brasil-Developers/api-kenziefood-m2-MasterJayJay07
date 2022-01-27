import {arrProdutos} from "../fetch_api/fetch_API.js";

const listaDestaque = document.querySelector(".ulPratos")

const construirLayoutPratos = async (ulContainer, produtos, TipoBotao) => {
    const newArr = await produtos
    for(let cont = 0; cont < newArr.length; cont++){
        const {id,nome,preco,categoria,descricao,imagem} = newArr[cont]

        let li = document.createElement("li")
        let img = document.createElement("img")
        let icon = document.createElement("img")
        let h4 = document.createElement("h4")
        let h3 = document.createElement("h3")
        let p = document.createElement("p")
        let div = document.createElement("div")
        let span = document.createElement("span")
        let button = document.createElement("button")
        let figure = document.createElement("figure")

        img.src = imagem
        img.alt = nome
        h4.innerText = categoria
        // if(categoria==="Panificadora"){
        //     document.h4.style.backgroundImage = 'url("pao.png")'
        // }
        h3.innerText = nome
        p.innerText = descricao
        li.id = id
        span.innerText = `R$${preco.toFixed(2)}`
        button.innerText = TipoBotao
          
        li.appendChild(img)
        figure.appendChild(img)
        li.appendChild(figure)
        li.appendChild(h4)
        li.appendChild(h3)
        li.appendChild(p)
        div.appendChild(span)
        div.appendChild(button)
        li.appendChild(div)
        ulContainer.appendChild(li)
  
        li.classList.add("classePrato")
        button.classList.add(TipoBotao)
        h4.classList.add("categoria")
    }

}
construirLayoutPratos(listaDestaque, arrProdutos, "adicionar")


export {listaDestaque}

export {construirLayoutPratos}