const { Router } = require('express');
const express = require('express');
const loginService = require('../../service/login/loginService');
const router = express();

router.get('/login', async function(req, res) {
    const user = req.body;
    const Logged = await loginService.auth(user);

    res.json(Logged)
    /*if (Logged) {
        res.json(Logged)
       // res.status(200).end();
    } else {
       // res.status(401).end();
    }*/
    
 });

module.exports = router;