var express = require('express');
var router = express.Router();
const fs = require('fs');

var colors = [
    'green',
    'blue',
    'red',
    'orange',
    'purple',
    'lightgray',
    'teal',
    'black',
    'pink',
    'darkgreen'
]

router.post('/', function(req, res, next) {
    var data = fs.readFileSync('request.json');
    var dataJSON = data.toString();
    var requests = JSON.parse(dataJSON)
    var randomNumber = Math.floor(Math.random()*10)
    var newElement = {
        id: requests.length+1,
        title: req.body.name,
        organization: req.body.organization,
        type: req.body.type,
        category: req.body.category,
        price: req.body.price,
        likes: 0,
        languages: req.body.languages,
        url: req.body.url,
        color: colors[randomNumber]
    }
    requests.push(newElement)
    var JSONList = JSON.stringify(requests)
    fs.writeFileSync('request.json', JSONList)
    res.send('Request sent to add API to list');
});

module.exports = router;