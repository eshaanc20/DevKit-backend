var express = require('express');
var router = express.Router();
const fs = require('fs');

router.post('/', function(req, res, next) {
    if (req.body.value) {
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
        res.send('Software tool was not added to list');
    } else {
        var fileData = fs.readFileSync('softwareTools.json');
        var file = fileData.toString();
        var softwareTools = JSON.parse(file)
        var listIndex = 0;
        var element = softwareTools.filter((softwareTool,index) => {
            softwareTool.id == req.body.id? listIndex = index: null;
            return softwareTool.id == req.body.id
        })[0]
        softwareTools.splice(listIndex,1)
        var JSONList = JSON.stringify(softwareTools)
        fs.writeFileSync('softwareTools.json', JSONList)
        res.send('Software tool was removed from the list');
    }
});

module.exports = router;