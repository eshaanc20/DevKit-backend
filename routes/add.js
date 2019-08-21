var express = require('express');
var router = express.Router();
const fs = require('fs')

router.get('/', function(req, res, next) {
    var data = fs.readFileSync('list.json');
    var dataJSON = data.toString();
    var list = JSON.parse(dataJSON)
    var newElement = {
        id: '4',
        title: 'title4',
        organization: '',
        categories: '',
        price: '',
        likes: '',
        language: '',
        recommended: '',
        link: 'https://www.google.com/',
    }
    list.push(newElement)
    var JSONList = JSON.stringify(list)
    fs.writeFileSync('list.json', JSONList)
    res.send('Adding to list');
});

module.exports = router;