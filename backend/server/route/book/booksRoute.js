const { Router } = require('express');
const express = require('express');
const booksService = require('../../service/book/booksService');
const router = express();

//retorna todos os livros
router.get('/books', async function(req, res) {
    const books = await booksService.getBooks();
    res.json(books);
    
});

//retorna livro por codigo passado na URL
router.get('/book/:codigo', async function(req, res) {
   const book = await booksService.getBook(req.params.codigo);
   res.json(book);
});

router.delete('/book/:codigo', async function(req, res) {
    await booksService.deleteBook(req.params.codigo);
    return res.json([{message: 'registro excluido com sucesso'}])
});

router.post('/book', async function(req, res) {
    const book = req.body;
    const newBook = await booksService.saveBook(book);
    res.json(newBook)
});

module.exports = router;