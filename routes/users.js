var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/', (req, res) => {
  res.status(200).json({
    message: 'post effectué'
  });
})

router.put('/', (req, res) => {
  res.status(200).json({
    message: 'update effectué'
  });
})

router.delete('/', (req, res) => {
  res.status(200).json({
    message: 'delete effectué'
  });
})

module.exports = router;
