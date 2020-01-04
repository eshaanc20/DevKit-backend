var express = require('express');
var router = express.Router();
const fs = require('fs');
const {SoftwareToolRequest} = require('../db/mongoose.js');

router.get('/', function(req, res, next) {
  SoftwareToolRequest.find({}).then((SoftwareToolRequests) => {
    let JSONdata = JSON.stringify(SoftwareToolRequests);
    res.send(JSONdata);
  }).catch(err => {
    res.send("Unable to connect to database")
  })
})

module.exports = router;