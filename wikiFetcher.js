const axios = require("axios");

const wikiHelper = require("./wikiHelper.js");

async function handle(){

    const wikiData = wikiHelper.fetchWikiExtract("Tide", "Eraser", "Chocolate", "James Harden", "Radiohead", "Nirvana", "G-Dragon");

    const finalWikiExtract = []

    for (let url of wikiData){
        finalWikiExtract.push(await axios.get(url)
            .then(response => response.data)
            .then(result => result.query.pages[0].extract))
    }
}

handle();
