const mongoose = require('mongoose')

const BooksSchema = new mongoose.Schema(
    {
        _id: {type: mongoose.Schema.Types.ObjectId, require: true},
        author: {type: String, require: true},
        country: {type: String, require: true },
        imageLink: { type: String, require: true },
        language: { type : String, require: true },
        link: { type: String , require: true},
        pages: { type: Number, require: true},
        title: { type: String, require: true },
        year: { type: Number, require: true}
    }
)

const Books = mongoose.model("Books", BooksSchema);

module.exports = {
    Books
}