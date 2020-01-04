var express = require('express');
var router = express.Router();
const {SoftwareToolRequest} = require('../db/mongoose.js');
const {SoftwareTool} = require('../db/mongoose.js');

router.post('/', function(req, res, next) {
    if (req.body.request) {
        SoftwareToolRequest.deleteOne({title: req.body.title}).then(() => {
            res.send('Software tool was not added')
        }).catch(err => {
            res.send('Could not update the database')
        })
    } else {
        SoftwareTool.deleteOne({title: req.body.title}).then(() => {
            res.send('Software tool was not added')
        }).catch(err => {
            res.send('Could not update the database')
        })
    }
});

module.exports = router;