var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('No products yet, come back later.');
});
router.get('/:id', function(req, res, next) {
    res.send('No products yet, come back later.');
});

module.exports = router;