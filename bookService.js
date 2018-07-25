const { Book } = require('./mongo')

const findBooks = () => {
    return Book.find()
}

const insertBook = ({ title, author, category, numberOfPages, publicationYear }) => {
    const book = new Book({
        title,
        author,
        category,
        numberOfPages,
        publicationYear
    })
    return book.save()
}

const findBookById = (id) => {
    return Book.findById(id)
}

const updateBook = async (id, { title, author, category, numberOfPages, publicationYear }) => {
    const book = await findBookById(id)
    book.title = title
    book.author = author
    book.category = category
    book.numberOfPages = numberOfPages
    book.publicationYear = publicationYear
    return book.save()
}

const deleteBook = async (id) => {
    const book = await findBookById(id)
    return book.remove()
}

module.exports = {
    findBooks,
    insertBook,
    findBookById,
    updateBook,
    deleteBook
}
