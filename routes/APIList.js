var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('List of APIs');
});

module.exports = router;