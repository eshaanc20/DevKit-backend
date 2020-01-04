var express = require('express');
var router = express.Router();
const {SoftwareToolRequest} = require('../db/mongoose.js');
const {SoftwareTool} = require('../db/mongoose.js');

router.post('/', function(req, res, next) {
    SoftwareToolRequest.findOneAndDelete({title: req.body.title}).then(element => {
        var newElement = {
            title: element.title,
            organization: element.organization,
            type: element.type,
            category: element.category,
            price: element.price,
            likes: element.likes,
            languages: element.languages,
            color: element.color,
            url: element.url,
            image: element.image
        }
        const NewSoftwareTool = new SoftwareTool(newElement);
        NewSoftwareTool.save().then(() => {
            res.send("Software tool added to database")
        }).catch(error => {
            res.send("Software tool could not be added")
        })
    }).catch(error => {
        res.send("Could not update the database")
    })
});

module.exports = router;