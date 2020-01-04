var express = require('express');
var router = express.Router();
const {SoftwareTool} = require('../db/mongoose.js');

router.post('/', function (req, res, next) {
  SoftwareTool.findOne({title: req.body.title}).then(document => {
    document.likes++;
    document.save().then((() => {
      res.send("Updated database")
    })).catch(err => {
      res.send("Could not update the database")
    })
  })
})

module.exports = router;