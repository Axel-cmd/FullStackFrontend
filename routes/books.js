var express = require('express');
var router = express.Router({mergeParams: true});
const bookService = require('../services/book.service')

/* GET books listing. */
router.get('/:id?', async (req, res) => {

  const id = req.params.id;

  if(!id) {
    const books = await bookService.fetchAllBooks();
    res.render('books', {
      books: books
    })
  }else {
    const book = await bookService.fetchOneBook({ _id: id});

    res.render('book', {
      book: book
    })
  }
});

router.post('/', (req, res) => {
  
})

module.exports = router;
