/*FILTROS BASEADOS NA CATEGORIA DE CADA PRODUTO*/


//FILTRO BASEADO NO BOTÃO DE FILTRO TODOS
const mostrarTodos = () => {
	listaDestaque.innerText = ""
    construirLayoutPratos(listaDestaque, listaPratos, "adicionar")
}

//Pegando o button  de filtro "todos" no HTML e adicionando evento de click
const botaoMostrarTodos = document.querySelector('#mostrarTodos');
botaoMostrarTodos.addEventListener('click', mostrarTodos)



//Função para filtrar baseado na categoria
const filtrar = (cat) =>{
    listaDestaque.innerHTML = ""
    const listaFiltro = listaPratos.filter((produto) => {
        return produto.categoria === cat;
    });

    construirLayoutPratos(listaDestaque, listaFiltro, "adicionar")
}



//Pegando os buttons de filtro do HTMl e adicionando evento de click com a função de filtrar
const botaoMostrarFrutas = document.querySelector('#mostrarFrutas');
botaoMostrarFrutas.addEventListener('click', () => {
    filtrar("Frutas")
});

const botaoMostrarBebidas = document.querySelector('#mostrarBebidas');
botaoMostrarBebidas.addEventListener('click', () => {
    filtrar("Bebidas")
});

const botaoMostrarPanificadora = document.querySelector('#mostrarPanificadora');
botaoMostrarPanificadora.addEventListener('click', () => {
    filtrar("Panificadora")
});


//remover listaPratos e adicicionar array do fetch