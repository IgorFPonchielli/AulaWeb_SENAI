const database = require('../../database/database');

exports.getBooks = function () {
    return database.query('select * from "Livro"');
}

exports.getBook = function (bookCod) {
    return database.query('select * from "Livro" where "Codigo" = $1',[bookCod]);
}

exports.deleteBook = function (bookCod) {
    return database.none('delete from "Livro" where "Codigo" = $1',[bookCod]);
}

exports.saveBook = function (book) {
    return database.one('insert into "Livro" ("NomeAutor", "CodigoEditora", "ISBN", "QuantidadeEstoque", "Assunto") values ($1, $2, $3, $4, $5) returning *',
    [book.NomeAutor, book.CodigoEditora, book.ISBN, book.QuantidadeEstoque, book.Assunto]);
}