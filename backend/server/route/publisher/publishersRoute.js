const { Router } = require('express');
const express = require('express');
const publishersService = require('../../service/publisher/publishersService');
const router = express();

//retorna todos os livros
router.get('/publishers', async function(req, res) {
    const publishers = await publishersService.getPublishers();
    res.json(publishers);
});

//retorna livro por codigo passado na URL
router.get('/publisher/:codigo', async function(req, res) {
   const publisher = await publishersService.getPublisher(req.params.codigo);
   res.json(publisher);
});

router.delete('/publisher/:codigo', async function(req, res) {
    await publishersService.deletePublisher(req.params.codigo);
    return res.json([{message: 'registro excluido com sucesso'}])
});

router.put('/publisher', async function(req, res) {
    const publisher = req.body;
    const newPublisher = await publishersService.savePublisher(publisher);
    res.json(newPublisher)
});

module.exports = router;