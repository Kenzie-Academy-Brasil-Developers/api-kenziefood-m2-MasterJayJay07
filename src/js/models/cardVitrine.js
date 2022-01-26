import {db} from "./../db_carrinho/base_dados_carrinho.js"

class CardVitrine {

    constructor({nome, preco, categoria, imagem}){
        this._id = this.getMaxId() + 1;
        this._nome = nome;
        this._preco = preco;
        this._categoria = categoria;
        this._descricao = "";
        this._imagem = imagem;
    }

    getMaxId() {
        let maxId = 0;
        db.forEach(item => {
            if (item.id > maxId) {
                maxId = item.id
            }
        })
        return maxId
    }

    get id (){
        return this._id;
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