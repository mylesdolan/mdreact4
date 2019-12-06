// https://tutorialedge.net/nodejs/editing-xml-files-with-nodejs/
var fs = require("fs"),
    parseString = require("xml2js").parseString,
    xml2js = require("xml2js");

//The resX and the resX.Json were to debunk that we have to use exactly res .  This res.json(result) is available cos this file is called thru express in the server.js.
module.exports = function xmltoJsonx(req, resx) {




fs.readFile("DATA", "utf-8", function(err, data) {
    if (err) console.log(err);
    // we log out the readFile results
    console.log("isindexml",data);
    // we then pass the data to our method here
    parseString(data, function(err, result) {
        if (err) console.log(err);
        // here we log the results of our xml string conversion
       console.log("bloddy",result.Data.Return);
        console.log("bloddy2");
        var json = result;
     // resx.json({result});
       resx.send({result});
        // resx=result;
      /*  json.root.graph[0].node[0].weight = "99";

        // create a new builder object and then convert
        // our json back to xml.
        var builder = new xml2js.Builder();
        var xml = builder.buildObject(json);

        fs.writeFile("edited-test.xml", xml, function(err, data) {
            if (err) console.log(err);

            console.log("successfully written our update xml to file");


        });*/
    });
});

};
