var express = require('express');
var router = express.Router();
const fs = require('fs');

router.route('/', function (req, res, next) {
  var data = fs.readFileSync('list.json');
  var dataJSON = data.toString();
  var list = JSON.parse(dataJSON);
  var elementIndex = 0;
  var element = list.filter((element,index) => {
    element.id == req.body.id? elementIndex = index: null;
    return element.id == req.body.id;
  })[0]
  element.id = element.id + 1;
  list.splice(elementIndex,1,element);
  var JSONList = JSON.stringify(list);
  fs.writeFileSync('list.json', JSONList);
  res.send('Liked');
})

module.exports = router;