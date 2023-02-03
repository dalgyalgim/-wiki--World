const {Router} = require('express');

const router = Router();

const wikiFetch = require("./helper/wikiFetcher");

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
        response.send({ msg : results })
    } else if (lowerKeyword){
        response.send({ msg : lowerResults })
    } else if (capitalKeyword) {
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


module.exports = router;