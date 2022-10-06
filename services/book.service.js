const { Books } = require('../model/book.model')

async function fetchAllBooks() {
    return Books.find();
}

async function fetchOneBook(query) {
    return Books.findOne(query).lean()
}

async function deleteOneBook(query, options) {
    return Books.findOneAndDelete(query, options)
}

async function updateBook(query, update, options) {
    return Books.findOneAndUpdate(query, update, options)
}

module.exports= {
    fetchAllBooks,
    fetchOneBook,
    deleteOneBook
}