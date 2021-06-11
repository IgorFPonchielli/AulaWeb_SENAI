const loginData = require('../../data/login/loginData');

exports.auth = function(user) {
   return loginData.authUser(user);
}