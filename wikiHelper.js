function fetchWikiExtract(subject1, subject2, subject3, subject4, subject5, subject6, subject7)
{
    const webAddress = "https://en.wikipedia.org/w/api.php";

    function makeWikiParam(subject){
        const wikiParam = "?action=query" 
        + "&prop=extracts"
        + "&exsentences=2"
        + `&titles=${subject}`
        + "&explaintext=1"
        + "&format=json"
        + "&formatversion=2"
        + "&origin=*"; 

        return wikiParam;
    }

    const finalWikiLink1 = webAddress + makeWikiParam(subject1);
    const finalWikiLink2 = webAddress + makeWikiParam(subject2);
    const finalWikiLink3 = webAddress + makeWikiParam(subject3);
    const finalWikiLink4 = webAddress + makeWikiParam(subject4);
    const finalWikiLink5 = webAddress + makeWikiParam(subject5);
    const finalWikiLink6 = webAddress + makeWikiParam(subject6);
    const finalWikiLink7 = webAddress + makeWikiParam(subject7);


    return [finalWikiLink1, finalWikiLink2, finalWikiLink3, finalWikiLink4, finalWikiLink5, finalWikiLink6, finalWikiLink7];
}

exports.fetchWikiExtract = fetchWikiExtract;
