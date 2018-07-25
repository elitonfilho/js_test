const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/book-manager'
mongoose.connect(url, { useNewUrlParser: true })

const bookSchema = mongoose.Schema({
    title: String,
    author: String,
    category: String,
    numberOfPages: Number,
    publicationYear: Number
})

const Book = mongoose.model('Book', bookSchema)

module.exports = {
    Book
}