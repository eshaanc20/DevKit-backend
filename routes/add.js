var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/', function(req, res, next) {
    var data = fs.readFileSync('list.json');
    var dataJSON = data.toString();
    var list = JSON.parse(dataJSON);
    var requestFileData = fs.readFileSync('request.json');
    var requestFile = requestFileData.toString();
    var requests = JSON.parse(requestFile);
    var requestIndex = 0;
    var add = requests.filter((request,index) => {
        request.id == req.body.id? requestIndex = index: null;
        return request.id == req.body.id
    })[0]
    var newElement = {
        id: list.length+1,
        title: add.title,
        organization: add.organization,
        categories: add.categories,
        price: add.prices,
        likes: '',
        language: add.language,
        recommended: add.recommended,
        link: add.url,
    }
    list.push(newElement)
    requests.splice(requestIndex,1)
    var JSONRequestList = JSON.stringify(requests)
    var JSONList = JSON.stringify(list)
    fs.writeFileSync('list.json', JSONList)
    fs.writeFileSync('request.json', JSONRequestList)
    res.send('Added API to list');
});

module.exports = router;