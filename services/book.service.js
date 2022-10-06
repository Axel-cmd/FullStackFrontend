const { Books } = require('../model/book.model')

async function fetchAllBooks() {
    return Books.find();
}

async function fetchOneBook(query) {
    return Books.findOne(query).lean()
}

module.exports= {
    fetchAllBooks,
    fetchOneBook
}