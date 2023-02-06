const {Router} = require('express');

const router = Router();

const wikiRelated = require("./helper/wikiRelated");
const Searches = require('../database/schemas/searches');

// Get Related Descriptions of current word in databse.
router.get('/', async (request, response, next) => {
    let word = "duck";
    let results = await wikiRelated.findRelated(word);
    response.send(results);
})

module.exports = router;


