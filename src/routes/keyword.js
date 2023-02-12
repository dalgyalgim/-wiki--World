const {Router} = require('express');

const router = Router();

const wikiFetch = require("./helper/wikiFetcher");
const Searches = require('../database/schemas/searches');

// Single Keyword (POST) function
router.post('/', async (request, response, next) => {
    const {keyword} = request.body;

    // Format 1 (Normal Case)
    let results = await wikiFetch.handleOne(keyword);
    
    // Format 2 (All Lowercase)
    let lowerKeyword = keyword.toLowerCase();
    let lowerResults = await wikiFetch.handleOne(lowerKeyword);

    // Format 3 (All Caps) [Special Case]
    let capitalKeyword = keyword.toUpperCase();
    let capitalResults = await wikiFetch.handleOne(capitalKeyword);

    // Get Results
    if (results) {
        const searchDB = await Searches.findOne({keyword});
        if (!searchDB) {const newSearch = await Searches.create({keyword : keyword, message : results});}
        response.send({ msg : results })
    } else if (lowerKeyword){
        const searchDB = await Searches.findOne({lowerKeyword});
        if (!searchDB) {const newSearch = await Searches.create({keyword : lowerKeyword, message :lowerResults});}
        response.send({ msg : lowerResults })
    } else if (capitalKeyword) {
        const searchDB = await Searches.findOne({capitalKeyword});
        if (!searchDB) {const newSearch = await Searches.create({keyword : capitalKeyword, message : capitalResults});}
        response.send({msg : capitalResults})
    }
})

// Multiple Keywords (POST) function
router.post('/multiple', async (request, response, next) => {
    const {keywords} = request.body;

    // Format 1 (Normal Case)
    let results = await wikiFetch.handleMultiple(keywords);
    
    response.send(results);
})

// Delete Keyword (DELETE) from Database
router.delete('/:keyword', async (request, response, next) => {
    let {keyword} = request.params;
    await Searches.findOneAndDelete({keyword : keyword});
    response.sendStatus(204)
})


module.exports = router;