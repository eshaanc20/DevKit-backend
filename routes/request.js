var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/', function(req, res, next) {
    var data = fs.readFileSync('request.json');
    var dataJSON = data.toString();
    var requests = JSON.parse(dataJSON)
    var newElement = {
        id: requests.length+1,
        title: req.body.name,
        organization: req.body.organization,
        type: req.body.type,
        category: req.body.category,
        price: req.body.price,
        likes: 0,
        languages: req.body.languages,
        recommended: req.body.recommended,
        url: req.body.url,
    }
    requests.push(newElement)
    var JSONList = JSON.stringify(requests)
    fs.writeFileSync('request.json', JSONList)
    res.send('Request sent to add API to list');
});

module.exports = router;