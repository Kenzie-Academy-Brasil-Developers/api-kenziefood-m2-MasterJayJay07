import { CardVitrine } from "./models/cardVitrine.js";

const cards = [];

const buildObjects = (array, arrayProdutos) => {

    const arrayCards = [];

    array.forEach(element => {
        let cardObject = new CardVitrine(element); 
        arrayProdutos.push(cardObject);
        arrayCards.push(cardObject);
    })

    return arrayCards;

}


const getProducts = (arrayCards) => {

    fetch(`https://kenzie-food-api.herokuapp.com/product`)
    .then(responseObject => responseObject.json())
    .then(hydratadeBody => {
        buildObjects(hydratadeBody, arrayCards);
      }
        
    );

}

getProducts(cards);

//export {getProducts};