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


//Função para criar o layout dos produtos
const construirLayoutPratos = (ulContainer, produtos, TipoBotao) => {
    for(let cont = 0; cont < produtos.length; cont++){
        const {id,nome,preco,categoria,descricao,imagem} = produtos[cont]

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


    // Adicionando Class na Li de produtos   
        li.classList.add("classePrato")
        button.classList.add(TipoBotao)
    }

}
construirLayoutPratos(listaDestaque, listaPratos, "adicionar")

//remover listaPratos e adicicionar array do fetch