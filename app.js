import { Livro, Autor } from './livros.js';
import { Biblioteca } from './biblioteca.js';
import { Usuario, UsuarioAluno, UsuarioProfessor } from './usuario.js';



// ===== SIMULAÇÃO =====

const biblioteca1 = new Biblioteca("Nova Biblioteca");

const autor1 = new Autor("Erico Verissimo", "Brasileiro", 1905);
const autor2 = new Autor("Jorge Amado", "Brasileito", 1912);
biblioteca1.adicionarAutor(autor1);
biblioteca1.adicionarAutor(autor2);

const livro1 = new Livro("O Tempo e o Vento", autor1, 1949, "Romance");
const livro2 = new Livro("Clarissa", autor1, 1933, "Romance");
const livro3 = new Livro("Capitães de Areia", autor2, 1937, "Romance");

biblioteca1.adicionarLivro(livro1);
biblioteca1.adicionarLivro(livro2);
biblioteca1.adicionarLivro(livro3);

const aluno = new UsuarioAluno("Bruno", "A001");
const professor = new UsuarioProfessor("Joyce", "P001");

biblioteca1.cadastrarUsuario(aluno);
biblioteca1.cadastrarUsuario(professor);

//EMPRESTIMOS 

aluno.pegarEmprestado(livro1);
aluno.pegarEmprestado(livro2);
professor.pegarEmprestado(livro3);
//  JÁ EMPRESTADO
aluno.pegarEmprestado(livro3); 

// DEVOLUÇÃO 
aluno.devolverLivro(livro1);

//LISTAR DISPONÍVEIS

biblioteca1.listarLivrosDisponiveis().forEach(l => {
    console.log(`- ${l.titulo}`);
});

biblioteca1.listarUsuarios().forEach(u => {
    console.log(`- ${u.nome} (${u.tipo})`);
});

biblioteca1.listarAutores().forEach(a => {
    console.log(`- ${a.nome}`);
});

// HISTÓRICO
aluno.verHistorico();
professor.verHistorico();





