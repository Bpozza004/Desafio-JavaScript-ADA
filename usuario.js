export class Usuario {
    constructor(nome, matricula) {
        this.nome = nome;
        this.matricula = matricula;
        this.livrosHistorico = []; // vai registrar empréstimos e devoluções
    }

    pegarEmprestado(livro) {
        if (livro.disponibilidade) {
            livro.emprestar();
            this.livrosHistorico.push({
                titulo: livro.titulo,
                data: new Date().toLocaleDateString(),
                status: "Emprestado"
            });
        } else {
            console.log(`O livro ${livro.titulo} não está disponível para empréstimo.`);
        }
    }

    devolverLivro(livro) {
        
        const emprestado = this.livrosHistorico.find(reg => reg.titulo === livro.titulo && reg.status === "Emprestado");
        if (emprestado) {
            livro.devolver();
            this.livrosHistorico.push({
                titulo: livro.titulo,
                data: new Date().toLocaleDateString(),
                status: "Devolvido"
            });
        } else {
            console.log(`O usuário ${this.nome} não possui o livro ${livro.titulo} emprestado.`);
        }
    }
verHistorico() {
        console.log(`Histórico de ${this.nome}:`);
        if (this.livrosHistorico.length === 0) {
            console.log("Nenhum registro encontrado.");
        } else {
            this.livrosHistorico.forEach((registro, i) => {
                console.log(`${i + 1}. ${registro.titulo} | ${registro.status} em ${registro.data}`);
            });
        }
    }
}

export class UsuarioAluno extends Usuario{
    constructor(nome, matricula){
        super(nome, matricula)
        this.tipo = "Aluno"
    } 
pegarEmprestado(livro) {
        if (this.livrosHistorico.length >= 3) {
            console.log(`O Aluno ${this.nome} já atingiu o limite de 3 livros.`);
        } else {
            super.pegarEmprestado(livro);
        }
    }
}
export class UsuarioProfessor extends Usuario{
    constructor(nome, matricula){
        super(nome, matricula)
        this.tipo = "Professor"
    }  
pegarEmprestado(livro) {
        if (this.livrosHistorico.length >= 5) {
            console.log(`O Professor ${this.nome} já atingiu o limite de 5 livros.`);
        } else {
            super.pegarEmprestado(livro);
        }
    }
}   