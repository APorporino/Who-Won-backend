const express = require('express')
const Hockey = require('../models/hockey')
const Baseball = require('../models/baseball')
const Basketball = require('../models/basketball')
const Football = require('../models/football')
const Soccer = require('../models/soccer')
const Golf = require('../models/golf')

const router = new express.Router()

function getRandomIntInclusive(min, max) {
    if (min > max){
        throw new Error("Min year cannot be less than max year")
    }
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}



function getSport(req){
    const sports = []
    if (req.query.hockey == 'true'){
        sports.push(Hockey)
    }
    if (req.query.baseball == 'true'){
        sports.push(Baseball)
    }
    if (req.query.basketball == 'true'){
        sports.push(Basketball)
    }
    if (req.query.football == 'true'){
        sports.push(Football)
    }
    if (req.query.soccer == 'true'){
        sports.push(Soccer)
    }
    if (req.query.golf == 'true'){
        sports.push(Golf)
    }
    var randomNumber = Math.floor(Math.random()*sports.length);
    return sports[randomNumber]
}

function getYear(req, sport){
    //get random Year
    if (req.body.min == null || req.body.min <= 1999){
        req.body.min = 1999
    }
    if (req.body.max == null || req.body.max >= 2019){
        req.body.max = 2019
    }
    
    var year = getRandomIntInclusive(Number(req.body.min), Number(req.body.max))

    if (sport == Soccer){
        if (year % 2 != 0){
            if (year == 2019){
                year == 2018
            }else {
                year += 1
            }
        }
    }

    return year
    
}

function getSportsName(modelName){
    switch (modelName){
        case "golf_majors":
            return "Golf - "
        case "basketballs":
            return "Basketball - "
        case "basketballs":
            return "Basketball - "
        case "hockeys":
            return "Hockey - "
        case "baseballs":
            return "Baseball - "
        case "footballs":
            return "Football - "
        case "international_soccers":
            return "Soccer - "
    }
}
// getSeries?hockey=true&baseball=true
// if query parameters are true for specific sport then we will include it
// can also filter by year using req.body
router.get('/getSeries', async (req,res)=>{

    //get random sport
    const sport = getSport(req)

    //get random Year
    const year = getYear(req,sport)

    try{
        console.log(sport)
        var series = await sport.find({Year: year})
        console.log("Here")
        console.log(series)
        var sportName = getSportsName(sport.collection.collectionName)
        
        if (series.length > 1){
            const index = getRandomIntInclusive(1,series.length) - 1
            temp = series[index]
            series = []
            series[0] = temp
        }
        
        sportName += series[0].League

        //console.log(sportName)

        if(!series){
            throw new Error("Cannot find series with that year and those sports")
        }
        res.header({
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, Authorization, X-Auth-Token'
            }
        );
        const response = {...series[0]._doc, sportName}
        res.send(response)
    }catch(e){
        res.status(404).send(e.message)
    }
})

router.get('/', (req, res)=>{
    res.send("Hello")
})

module.exports = router

