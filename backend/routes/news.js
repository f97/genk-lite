const express = require('express');
const router = express.Router();
const {getSource} = require('../controller/common')
const genk = require('../controller/genk')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  let homeSource = await genk.getPostURL('http://genk.vn');
  res.send(homeSource);
});

module.exports = router;
