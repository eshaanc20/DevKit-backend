var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/', function(req, res, next) {
    var requestFileData = fs.readFileSync('request.json');
    var requestFile = requestFileData.toString();
    var requests = JSON.parse(requestFile)
    var requestIndex = 0;
    var element = requests.filter((request,index) => {
        request.id == req.body.id? requestIndex = index: null;
        return request.id == req.body.id
    })[0]
    requests.splice(requestIndex,1)
    var JSONRequestList = JSON.stringify(requests)
    fs.writeFileSync('request.json', JSONRequestList)
    res.send('API not added to list');
});

module.exports = router;