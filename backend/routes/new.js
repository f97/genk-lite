const express = require('express');
const router = express.Router();
const genk = require('../controller/genk')

/* GET users listing. */
router.get('/:url', async (req, res, next) => {
    let postContent = await genk.getPostContent('http://genk.vn/' + req.params.url);
    res.send(postContent);
});

module.exports = router;