const listaPratos = [
    {
		"id": 1,
		"nome": "Mousse de morango com a fruta",
		"preco": 27.5,
		"categoria": "destaques",
		"descricao": "Sobremesa fácil, rápida e muito saborosa: a mousse de morango leva apenas 5 ingredientes; confira como fazer a receita",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/mousse.png",
		"createdAt": "2022-01-24T16:25:25.401Z",
		"updatedAt": "2022-01-24T16:25:25.401Z"
	},
    {
		"id": 2,
		"nome": "Panqueca de banana com aveia",
		"preco": 20,
		"categoria": "destaques",
		"descricao": "Esta receita serve muito bem 2 pessoas, deieventa a gente bem satisfeito, se não tiver outra opção de café. Se tiver mais comida, como pães e frutas.",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/panqueca.png",
		"createdAt": "2022-01-24T16:26:44.903Z",
		"updatedAt": "2022-01-24T16:26:44.903Z"
	},
    {
		"id": 3,
		"nome": "Pastel de verduras vegano",
		"preco": 20,
		"categoria": "destaques",
		"descricao": "Todos nós fervemos vegetais, salteamos ou consumimos crus. Mas que tal comer vegetais como se fossem um bolo?",
		"imagem": "https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pastel.png",
		"createdAt": "2022-01-24T16:27:32.190Z",
		"updatedAt": "2022-01-24T16:27:32.190Z"
	},
    {
        "id":4,
        "nome":"Pizza vegetariana de palmito",
        "preco":20,
        "categoria":"Panificadora",
        "descricao":"In publishing and graphic design, Lorem ipsum is a placeholder teeventt commonly used to demonstrate the visual form of a document.",
        "imagem":"https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/pizza.png",
        "createdAt":"2022-01-24T16:28:17.326Z",
        "updatedAt":"2022-01-24T16:28:17.326Z"
    },
    {
    "id":5,
    "nome":"Vinho suave",
    "preco":20,
    "categoria":"Bebidas",
    "descricao":"O vinho é rico em compostos nutricionais muito importantes para a nossa saúde: os polifenóis. Também aueventiliam no sistema imunológico",
    "imagem":"https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/vinho.png",
    "createdAt":"2022-01-24T16:29:02.015Z",
    "updatedAt":"2022-01-24T16:29:02.015Z"
    },
    {
    "id":6,
    "nome":"Laranja Pera Fresca Kenzie 5kg",
    "preco":20,
    "categoria":"Frutas",
    "descricao":"Bastante popular no Brasil, a laranja é uma das maiores representantes das frutas cítricas. Seu sabor costuma ser doce ou levemente ácido",
    "imagem":"https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint4/img/capstone-images/laranja.png",
    "createdAt":"2022-01-24T16:29:44.513Z",
    "updatedAt":"2022-01-24T16:29:44.513Z"
}

];

// Selecionando as tags HTML
const listaDestaque = document.querySelector(".ulPratos")
const listaCarrinho = document.querySelector('.secaoCarrinho__listaItens');
const containerTotal = document.querySelector('.secaoCarrinho__total > span');

//Função adicionar no carrinho
const adicionarNoCarrinho = evt => {
    
    //Capturar produto clicado e id do produto
    const elementoClicado = evt.currentTarget;
    const idElementoClicado = elementoClicado.id;
    const pratoSelecionado = listaPratos[idElementoClicado - 1];
    console.log(elementoClicado)
    console.log(idElementoClicado)
    console.log(pratoSelecionado)



    //Construindo layout do carrinho
    construirLayoutCarrinho(pratoSelecionado);



    //Atualizando o valor total do carrinho
    atualizarTotal();

}



//Função para criar o layout dos produtos
    //Organizar as Tags HTML
    //Adicionar informações nas tags 
    //É necessario um prato para ser referencia
    //Criar templeta na tela
const construirLayoutPratos = (ulContainer, prato, classePrato) => {


    //Criando as Tags para os cards de produtos
    let li = document.createElement("li")
    let a = document.createElement("a")
    let figure = document.createElement("figure")
    let img = document.createElement("img")
    let figcaption = document.createElement("figcaption")
    let div = document.createElement("div")
    let h3 = document.createElement("h3")
    let p = document.createElement("p")
    let span = document.createElement("span")



    //Implementando os dados nas tags do card
    img.src = prato.imagem
    img.alt = prato.nome
    figcaption.innerText = prato.nome
    h3.innerText = prato.nome
    p.innerText = prato.descricao
    li.id = prato.id;
    span.innerText = prato.preco.toFixed(2)
    
    

    //Referenciando e montando layout    
    li.appendChild(a)
    figure.appendChild(img)
    figure.appendChild(figcaption)
    a.appendChild(figure)
    div.appendChild(h3)
    h3.appendChild(p)
    div.appendChild(span)
    a.appendChild(div)
    ulContainer.appendChild(li)



//Adicionando Class na Li de produtos   
    li.classList.add(classePrato)



//Capturando click e adicionando no carrinho    
    li.addEventListener('click', adicionarNoCarrinho);


}



//Função que vai receber um Array de Objeto e implementar o layout
const implementandoLayout = productObject => {
    
    for(let cont = 0; cont < productObject.length; cont++){
    
        let prato = productObject[cont]

        if(prato.id){
            construirLayoutPratos(listaDestaque,prato, "secaoPratosDestaque__itemPrato")
    }
    
}}



//Implementando o layout com um Objeto como paramentro
implementandoLayout(listaPratos)



//Funcao que vai contruir o layout do carrinho
const construirLayoutCarrinho = prato => {


    //Criando as Tags para os cards de carrinho
    const li = document.createElement('li');
    const div = document.createElement('div');
    const h3 = document.createElement('h3');
    const span = document.createElement('span');
    const button = document.createElement('button');



    //Implementando os dados nas tags do carrinho
    h3.innerText = prato.nome;
    span.innerText = prato.preco.toFixed(2);
    button.innerText = 'Retirar';



    //Referenciando e montando layout do carrinho
    div.appendChild(h3);
    div.appendChild(span);
    li.appendChild(div);
    li.appendChild(button);
    listaCarrinho.appendChild(li);


    //Adicionando Class na Li do carrinho
    li.classList.add('secaoCarrinho__item');


    
    //Capturando click e removento item do carrinho 
    button.addEventListener('click', removerDoCarrinho);
}


//Função para remover produto do carrinho
const removerDoCarrinho = evt => {


    //Capturar produto clicado e elemento pai do produto clicado
    const elementoClicado = evt.currentTarget;
    const elementoPai = elementoClicado.parentElement;



    //Removendo produto baseado no elemento pai    
    elementoPai.remove();


    
    //Atualizando o valor total do carrinho
    atualizarTotal();
}



//Função que vai atualizar o preço total do carrinho
const atualizarTotal = () => {


    //Selecionando as tags do carrinho
    const listaPrecos = document.querySelectorAll('.secaoCarrinho__item > div > span');



    //Declarando o valor inicial do valor total do carrinho
    let total = 0;


    //Percorrendo minha lista de produtos e guardando o valor total
    for(let i = 0; i < listaPrecos.length; i++){

        const elementoSpan = listaPrecos[i];
        const precoNumero = Number(elementoSpan.innerText);
        total += precoNumero;

    }



    //Transformando meu inteiro e declarnado duas casas decimais
    total = total.toFixed(2);



    //Implementando o valor total na tag HTML Span do carrinho
    containerTotal.innerText = total;
}