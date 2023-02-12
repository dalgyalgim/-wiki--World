const {Router} = require('express');

const router = Router();

const wikiRelated = require("./helper/wikiRelated");
const Searches = require('../database/schemas/searches');

// (UPDATE) Function
// Get related word & descriptions of current words in database.
router.put('/', async (request, response, next) => {
    let hits = [];
    (await Searches.find()).forEach(result => hits.push(result.keyword));
    
    let relatedWords;
    for (let word of hits){
        let relatedWords = await wikiRelated.findRelated(word)
        Searches.findOneAndUpdate({keyword : word}, {related : relatedWords}, (err) => {
            if (err) {console.log(err);}
            else {console.log("Saved Successfully.");}
        });
    }
    response.sendStatus(204);
})

module.exports = router;


