const usersData = require('../../data/user/usersData');

exports.getUsers = function() {
    return usersData.getUsers();
}

exports.getUser = function(userID) {
    return usersData.getUser(userID);
}

exports.deleteUser = function(userID) {
    return usersData.deleteUser(userID);
}

exports.saveUser = function(user) {
    return usersData.saveUser(user);
}