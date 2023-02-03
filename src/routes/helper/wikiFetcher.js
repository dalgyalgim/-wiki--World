const axios = require("axios");

const wikiHelper = require("./wikiHelper.js");

// Returns individual decsrition.
async function handleOne(keyword){

    const wikiData = wikiHelper.fetchWikiExtract(keyword);

    let result = await axios.get(wikiData)
                    .then(response => response.data)
                    .then(result => result.query.pages[0].extract);
    
    return result;
}

// Returns Array of Objects holding { subject : msg } format.
async function handleMultiple(keywords){

    const wikiData = wikiHelper.fetchMultipleWikiExtract(keywords);

    const finalWikiExtract = []

    for (let url of wikiData){
        finalWikiExtract.push({
            subject : await axios.get(url)
                        .then(response => response.data)
                        .then(result => result.query.pages[0].extract)
        })
    }

    return finalWikiExtract;
}

module.exports.handleMultiple = handleMultiple;
module.exports.handleOne = handleOne;
