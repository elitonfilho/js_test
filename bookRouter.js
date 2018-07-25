const express = require('express')
const router = express.Router()
const bookService = require('./bookService')

router.get('/', async (req, res) => {
    const books = await bookService.findBooks()
    res.json(books)
})

router.post('/', async (req, res) => {
    const book = await bookService.insertBook(req.body)
    res.status(201).json(book)
})

router.get('/:bookId', async (req, res) => {
    const { bookId } = req.params
    const book = await bookService.findBookById(bookId)

    if (book) {
        res.json(book)
    } else {
        res.sendStatus(404)
    }
})

router.put('/:bookId', async (req, res) => {
    const { bookId } = req.params
    await bookService.updateBook(bookId, req.body)
    res.sendStatus(204)
})

router.delete('/:bookId', async (req, res) => {
    const { bookId } = req.params
    await bookService.deleteBook(bookId)
    res.sendStatus(204)
})

module.exports = router