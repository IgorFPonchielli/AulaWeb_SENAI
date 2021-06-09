const { Router } = require('express');
const express = require('express');
const usersService = require('../../service/user/usersService');
const router = express();

//retorna todos os usuarios
router.get('/users', async function(req, res) {
    const users = await usersService.getUsers();
    res.json(users);
});

//retorna usuario por id passado na URL
router.get('/user/:id', async function(req, res) {
   const user = await usersService.getUser(req.params.id);
   res.json(user);
});

router.delete('/user/:id', async function(req, res) {
    await usersService.deleteUser(req.params.id);
    return res.json([{message: 'registro excluido com sucesso'}])
});

router.post('/user', async function(req, res) {
    const user = req.body;
    const newUser = await usersService.saveUser(user);
    res.json(newUser)
});

module.exports = router;