var express = require('express');
var router = express.Router();
const fs = require('fs');
const imagesForFrontend = require('../assets/images.js');
const {SoftwareToolRequest} = require('../db/mongoose.js');

router.post('/', function(req, res, next) {
    const images = imagesForFrontend.images;
    const colors = imagesForFrontend.colors;
    var randomNumber = Math.floor(Math.random()*10);
    var imageResult;
    for (i = 0; i < images.length; i++) { 
        if (images[i].category === req.body.category){
            imageResult = images[i].imgList[Math.floor(Math.random() * 4)]
        }
    }
    var newElement = {
        title: req.body.title,
        organization: req.body.organization,
        type: req.body.type,
        category: req.body.category,
        price: req.body.price,
        likes: 0,
        languages: req.body.languages,
        color: colors[randomNumber],
        url: req.body.url,
        image: imageResult
    }
    const NewSoftwareToolRequest = new SoftwareToolRequest(newElement);
    NewSoftwareToolRequest.save().then(() => {
        res.send('Request sent to add software tool to list');
    }).catch (err => {
        res.send('Request was not sent');
    })
});

module.exports = router;