class CardVitrine {

    constructor({nome, preco, categoria, imagem}){
        //this._id = id;
        this._nome = nome;
        this._preco = preco;
        this._categoria = categoria;
        this._descricao = "";
        this._imagem = imagem;
    }

    get nome(){
        return this._nome;
    }

    set nome(newNome){
        this._nome = newNome;
    }

    get preco(){
        return this._preco;
    }

    set preco(newPreco){
        this._preco = newPreco;
    }

    get categoria(){
        return this._categoria;
    }

    set categoria(newCategoria){
        this._categoria = newCategoria;
    }

    get descricao(){
        return this._descricao;
    }

    get imagem(){
        return this._imagem;
    }

    set imagem(newImagem){
        this._imagem = newImagem;
    }

}

export {CardVitrine}