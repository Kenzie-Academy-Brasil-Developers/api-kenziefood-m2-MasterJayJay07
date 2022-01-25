import { CardVitrine } from "./models/cardVitrine.js";

const construirObjetos = (array) => {

    const arrayCards = [];

    array.forEach(elemento => {
        let objetoCard = new CardVitrine(elemento); 
        arrayCards.push(objetoCard);
    })

    return arrayCards;

}


const buscarProdutos = async () => {

    await fetch(`https://kenzie-food-api.herokuapp.com/product`)
    .then(objetoResposta => objetoResposta.json())
    .then(res => {

        console.log(res);
        //aqui vai a função que pega o retorno de construirObjetos e monta a vitrine;
        //ex: construirVitrine(construirObjectos(res))
      }
        
    );

}

buscarProdutos();
