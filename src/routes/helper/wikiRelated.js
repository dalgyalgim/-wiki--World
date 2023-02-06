const axios = require("axios");
const { response } = require("express");

const wikiFetcher = require("./wikiFetcher.js");

const webAddress = "https://api.datamuse.com";

function makeAddress(subject){
    const dataParam =  "/words?ml=" + `${subject}`;
    return webAddress + dataParam;
}

async function findRelated(subject){
    let dataWebsite = makeAddress(subject);
    console.log(dataWebsite);
    // Get Results and Sort
    let results = await axios.get(dataWebsite)
                            .then(response => response.data);

    // Get First 5 results.
    let counter = 0;
    let relatedWords = [];
    while (relatedWords.length != 5){
        let relatedDescription = await wikiFetcher.handleOne(results[counter++].word);
        if (relatedDescription && relatedDescription.length > 40) { relatedWords.push({
            word : results[counter - 1].word,
            subject: relatedDescription
        })}
    }

    return relatedWords;
}



module.exports.findRelated = findRelated;

