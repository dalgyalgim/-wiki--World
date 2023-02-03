const webAddress = "https://en.wikipedia.org/w/api.php";

function makeWikiParam(subject) {
  const wikiParam =
    "?action=query" +
    "&prop=extracts" +
    "&exsentences=2" +
    `&titles=${subject}` +
    "&explaintext=1" +
    "&format=json" +
    "&formatversion=2" +
    "&origin=*";

  return wikiParam;
}

// Single Keyword
// ***********************************
function fetchWikiExtract(subject) {
    const finalWikiLink1 = webAddress + makeWikiParam(subject);
  
    return finalWikiLink1;
}

// Multiple Keywords
// ***********************************
function fetchMultipleWikiExtract(subjects) 
{
    const finalWikiLink = [];

    for (let keyword of subjects) {
        const wikiLink = webAddress + makeWikiParam(keyword);
        finalWikiLink.push(wikiLink);
    }

    return finalWikiLink;
}

module.exports.fetchMultipleWikiExtract = fetchMultipleWikiExtract;
module.exports.fetchWikiExtract = fetchWikiExtract;
