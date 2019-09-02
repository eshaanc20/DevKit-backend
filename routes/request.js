var express = require('express');
var router = express.Router();
const fs = require('fs');

var colors = [
    'rgb(239,248,248, 0.5)',
    'rgb(213,251,219, 0.5)',
    'rgb(255,248,191, 0.5)',
    'rgb(255,225,167, 0.5)',
    'rgb(171,199,238, 0.5)',
    'rgb(205,176,255, 0.5)',
    'rgb(235,166,255, 0.5)',
    'rgb(255,165,171, 0.5)',
    'rgb(241,243,242, 0.5)'
]

var images = [
    {category:'Map',imgList:['/img/map1.jpeg','/img/map2.jpeg','/img/map3.jpeg','/img/map4.jpeg']},
    {category:'Calendar',imgList:['/img/calendar1.jpeg','/img/calendar2.jpeg','/img/calendar3.jpeg','/img/calendar4.jpeg']},
    {category:'Data',imgList:['/img/data1.jpeg','/img/data2.jpeg','/img/data3.jpeg','/img/data4.jpeg']},
    {category:'Finance',imgList:['/img/finance1.jpeg','/img/finance2.jpeg','/img/finance3.jpeg','/img/finance4.jpeg']},
    {category:'Front-end',imgList:['/img/frontend1.jpeg','/img/frontend2.jpeg','/img/frontend3.jpeg','/img/frontend4.jpeg']},
    {category:'Geocoding',imgList:['/img/geocoding1.jpeg','/img/geocoding2.jpeg','/img/geocoding3.jpeg','/img/geocoding4.jpeg']},
    {category:'Health',imgList:['/img/health1.jpeg','/img/health2.jpeg','/img/health3.jpeg','/img/health4.jpeg']},
    {category:'Machine Learning',imgList:['/img/machinelearning1.jpeg','/img/machinelearning2.jpeg','/img/machinelearning3.jpeg','/img/machinelearning4.jpeg']},
    {category:'Math',imgList:['/img/math1.jpeg','/img/math2.jpeg','/img/math3.jpeg','/img/math4.jpeg']},
    {category:'Music',imgList:['/img/music1.jpeg','/img/music2.jpeg','/img/music3.jpeg','/img/music4.jpeg']},
    {category:'Messaging',imgList:['/img/messaging1.jpeg','/img/messaging2.jpeg','/img/messaging3.jpeg','/img/messaging4.jpeg']},
    {category:'News',imgList:['/img/news1.jpeg','/img/news2.jpeg','/img/news3.jpeg','/img/news4.jpeg']},
    {category:'Storage',imgList:['/img/storage1.jpeg','/img/storage2.jpeg','/img/storage3.jpeg','/img/storage4.jpeg']},
    {category:'Weather',imgList:['/img/weather1.jpeg','/img/weather2.jpeg','/img/weather3.jpeg','/img/weather4.jpeg']}
]

router.post('/', function(req, res, next) {
    var data = fs.readFileSync('request.json');
    var dataJSON = data.toString();
    var requests = JSON.parse(dataJSON);
    var randomNumber = Math.floor(Math.random()*10);
    var imageResult;
    for (i = 0; i < images.length; i++) { 
        if (images[i].category === req.body.category){
            imageResult = images[i].imgList[Math.floor(Math.random() * 4)]
        }
    }
    var newElement = {
        id: requests.length+1,
        title: req.body.name,
        organization: req.body.organization,
        type: req.body.type,
        category: req.body.category,
        price: req.body.price,
        likes: 0,
        languages: req.body.languages,
        url: req.body.url,
        color: colors[randomNumber],
        image:imageResult
    }
    requests.push(newElement)
    var JSONList = JSON.stringify(requests)
    fs.writeFileSync('request.json', JSONList)
    res.send('Request sent to add software tool to list');
});
module.exports = router;