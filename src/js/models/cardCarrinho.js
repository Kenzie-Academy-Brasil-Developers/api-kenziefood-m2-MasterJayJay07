import {arrayCarrinho} from "./../script.js";

const CardCarrinho = class CardCarrinho {

    constructor({nome, preco, categoria, descricao, imagem}){
        this._id = this.getMaxId() + 1;
        this._nome = nome;
        this._preco = preco;
        this._categoria = categoria;
        this._descricao = descricao;
        this._imagem = imagem;
    }

    get id(){
        return this._id;
    }

    getMaxId() {
        let maxId = 0
        arrayCarrinho.forEach(item => {
            if (item.id > maxId) {
                maxId = item.id
            }
        })
        return maxId
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

    get imagem(){
        return this._imagem;
    }

    set imagem(newImagem){
        this._imagem = newImagem;
    }

}

export {CardCarrinho}