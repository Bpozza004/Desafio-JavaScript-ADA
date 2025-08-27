export class Biblioteca{
    constructor(nome){
        this.nome = nome
        this.livros = []
        this.usuarios = []
        this.autores = []
    }
    
    adicionarLivro(livro){
        this.livros.push(livro)
        console.log(`O livro ${livro.titulo} foi adicionado à biblioteca.`)
    }
    
    cadastrarUsuario(usuario){
        this.usuarios.push(usuario)
        console.log(`O usuário ${usuario.nome} foi cadastrado na biblioteca.`)
    }
    
    listarLivrosDisponiveis(){
        return this.livros.filter(livro => livro.disponibilidade);
    }
    listarUsuarios(){
        return this.usuarios;
    }   
    listarAutores(){
        return this.autores;
    }
    adicionarAutor(autor){
        this.autores.push(autor)
        console.log(`O autor ${autor.nome} foi adicionado à biblioteca.`)
    }
    
    removerLivro(titulo){
        const livro = this.buscarLivroPorTitulo(titulo);
        if(livro){
            this.livros = this.livros.filter(l => l !== livro);
            console.log(`O livro ${titulo} foi removido da biblioteca.`);
        } else {
            console.log(`O livro ${titulo} não foi encontrado na biblioteca.`);
        }
    }
    removerUsuario(nome){
        const usuario = this.buscarUsuarioPorNome(nome);
        if(usuario){
            this.usuarios = this.usuarios.filter(u => u !== usuario);
            console.log(`O usuário ${nome} foi removido da biblioteca.`);
        } else {
            console.log(`O usuário ${nome} não foi encontrado na biblioteca.`);
        }
    }
    removerAutor(nome){
        const autor = this.buscarAutorPorNome(nome);
        if(autor){
            this.autores = this.autores.filter(a => a !== autor);
            console.log(`O autor ${nome} foi removido da biblioteca.`);
        } else {
            console.log(`O autor ${nome} não foi encontrado na biblioteca.`);
        }
    }
    atualizarLivro(titulo, novosDados){
        const livro = this.buscarLivroPorTitulo(titulo);
        if(livro){
            Object.assign(livro, novosDados);
            console.log(`O livro ${titulo} foi atualizado com sucesso.`);
        } else {
            console.log(`O livro ${titulo} não foi encontrado na biblioteca.`);
        }
    }
    atualizarUsuario(nome, novosDados){
        const usuario = this.buscarUsuarioPorNome(nome);
        if(usuario){
            Object.assign(usuario, novosDados);
            console.log(`O usuário ${nome} foi atualizado com sucesso.`);
        } else {
            console.log(`O usuário ${nome} não foi encontrado na biblioteca.`);
        }
    }
    atualizarAutor(nome, novosDados){
        const autor = this.buscarAutorPorNome(nome);
        if(autor){
            Object.assign(autor, novosDados);
            console.log(`O autor ${nome} foi atualizado com sucesso.`);
        } else {
            console.log(`O autor ${nome} não foi encontrado na biblioteca.`);
        }
    }
}