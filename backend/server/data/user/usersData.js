const database = require('../../database/database');

exports.getUsers = function () {
    return database.query('select * from "Usuario"');
}

exports.getUser = function (userID) {
    return database.query('select * from "Usuario" where "id" = $1',[userID]);
}

exports.deleteUser = function (userID) {
    return database.none('delete from "Usuario" where "id" = $1',[userID]);
}

exports.saveUser = function (user) {
    return database.one('insert into "Usuario" ("Nome", "Email", "Senha", "Telefone") values ($1, $2, $3, $4) returning *',
    [user.Nome, user.Email, user.Senha, user.Telefone]);
}