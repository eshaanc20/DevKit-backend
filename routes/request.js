var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/', function(req, res, next) {
    var data = fs.readFileSync('list.json');
    var dataJSON = data.toString();
    var list = JSON.parse(dataJSON)
    var newElement = {
        id: list.length+1,
        title: req.body.name,
        organization: req.body.organization,
        categories: req.body.categories,
        price: req.body.price,
        likes: '',
        language: req.body.language,
        recommended: req.body.recommended,
        link: req.body.url,
    }
    list.push(newElement)
    var JSONList = JSON.stringify(list)
    fs.writeFileSync('request.json', JSONList)
    res.send('Request sent to add API to list');
});

module.exports = router;