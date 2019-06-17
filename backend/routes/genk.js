const express = require('express');
const router = express.Router();
const {getSource} = require('../controller/common')
const genk = require('../controller/genk')

router.get('/', async (req, res, next) => {
  let homeSource = await genk.getPostURL('http://genk.vn');
  res.send(homeSource);
});
/* GET users listing. */
router.get('/:pathURL', async (req, res, next) => {
  let postContent = await genk.getPostContent('http://genk.vn/' + req.params.pathURL);
  res.send(postContent);
});

module.exports = router;
