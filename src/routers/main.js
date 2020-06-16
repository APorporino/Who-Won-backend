const express = require('express')
const random = require('random')
const Hockey = require('../models/hockey')
const Baseball = require('../models/baseball')

const router = new express.Router()

function getRandomIntInclusive(min, max) {
    if (min > max){
        throw new Error("Min year cannot be less than max year")
    }
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

// getSeries?hockey=true&baseball=true
// if query parameters are true for specific sport then we will include it
// can also filter by year using req.body
router.get('/getSeries', async (req,res)=>{

    //get random sport
    const sports = []
    if (req.query.hockey == 'true'){
        sports.push(Hockey)
    }
    if (req.query.baseball == 'true'){
        sports.push(Baseball)
    }
    var randomNumber = Math.floor(Math.random()*sports.length);
    const sport = sports[randomNumber]

    //get random Year
    if (req.body.min == null || req.body.min <= 1999){
        req.body.min = 1999
    }
    if (req.body.max == null || req.body.max >= 2019){
        req.body.max = 2019
    }

    try{
        const year = getRandomIntInclusive(Number(req.body.min), Number(req.body.max))
        const series = await sport.findOne({Year: year})
        if(!series){
            throw new Error("Cannot find series with that year and those sports")
        }
        res.send(series)
    }catch(e){
        res.status(404).send(e.message)
    }
})

router.get('/', (req, res)=>{
    res.send("Hello")
})

module.exports = router

