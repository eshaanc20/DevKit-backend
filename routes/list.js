var express = require('express');
var router = express.Router();
const fs = require('fs')

router.get('/', function(req, res, next) {
    var data = fs.readFileSync('softwareTools.json');
    var JSONdata = data.toString();
    res.send(JSONdata);
});

module.exports = router;