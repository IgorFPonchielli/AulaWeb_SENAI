const database = require('../../database/database');

exports.getPublishers = function () {
    return database.query('select * from "Editora"');
}

exports.getPublisher = function (publisherCod) {
    return database.query('select * from "Editora" where "Codigo" = $1',[publisherCod]);
}

exports.deletePublisher = function (publisherCod) {
    return database.none('delete from "Editora" where "Codigo" = $1',[publisherCod]);
}

exports.savePublisher = function (publisher) {
    return database.one('insert into "Editora" ("Nome", "Endereco", "Telefone", "NomeGerente") values ($1, $2, $3, $4) returning *',
    [publisher.Nome, publisher.Endereco, publisher.Telefone, publisher.NomeGerente]);
}