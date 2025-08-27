export class Livro{
    #disponibilidade;
    constructor(titulo, autor, anoLancamento, genero){
        this.titulo = titulo;
        this.anoLancamento = anoLancamento;
        this.autor = autor;
        this.genero = genero;
        this.#disponibilidade = true;
    }
    get disponibilidade(){
        return this.#disponibilidade;
    }
    set disponibilidade(valor){
        this.#disponibilidade = valor;
    }   
    emprestar(){
        if(this.#disponibilidade){
            this.#disponibilidade = false
            console.log(`O livro ${this.titulo} foi emprestado com sucesso!`)
        } else {
            console.log(`O livro ${this.titulo} não está disponível no momento.`)
        }
    }
    devolver(){
        this.#disponibilidade = true
        console.log(`O livro ${this.titulo} foi devolvido com sucesso!`)
    }
}

export class Autor{
    #nome;
    constructor(nome, nacionalidade, anoNascimento){
        this.#nome = nome
        this.nacionalidade = nacionalidade
        this.anoNascimento = anoNascimento
    }
    get nome(){
        return this.#nome;
    }
      
    set nome(novoNome){
        this.#nome = novoNome;
    }
}
