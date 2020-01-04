var express = require('express');
var router = express.Router();
const {SoftwareTool} = require('../db/mongoose.js');

router.get('/', function(req, res, next) {
    SoftwareTool.find({}).then(SoftwareTools => {
        var JSONdata = JSON.stringify(SoftwareTools);
        res.send(JSONdata);
    })
});

module.exports = router;