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

router.post('/', async (req, res) => {
  try {
    const body = req.body;

    const book = await bookService.addBook(body);

    return res.send(book.toJSON())
  } catch (error) {
    return res.status(409).send(error.message);
  }
  
})

router.put('/:id', async (req, res) => {
  const id = req.params.id;

  const update = req.body;

  const book = await bookService.fetchOneBook({ _id: id});

  if(!book) return res.sendStatus(404);

  const bookUpdate = await bookService.updateBook({ _id: id}, update, {new: true});

  return res.send(bookUpdate)

})

router.delete

module.exports = router;
