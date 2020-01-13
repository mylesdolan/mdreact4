// https://tutorialedge.net/nodejs/editing-xml-files-with-nodejs/
var fs = require("fs"),
    parseString = require("xml2js").parseString,
    xml2js = require("xml2js");

const htmlparser = require("htmlparser2");
const parser = new htmlparser.Parser;


// Changes XML to JSON
function xmlToJson(xml) {


    // Create the return object
    var obj = {};

    if (xml.nodeType == 1) { // element
        // do attributes
        if (xml.attributes.length > 0) {
            obj["@attributes"] = {};

            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType == 3) { // text
        obj = xml.nodeValue;
    }

    // do children
    if (xml.hasChildNodes()) {
        for (var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof (obj[nodeName]) == "undefined") {
                obj[nodeName] = this.xmlToJson(item);
            } else {
                if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(this.xmlToJson(item));
            }
        }
    }
    return obj;
}











//The resX and the resX.Json were to debunk that we have to use exactly res .  This res.json(result) is available cos this file is called thru express in the server.js.
module.exports = function xmltoJsonx(req, resx) {






<<<<<<< HEAD
=======

>>>>>>> 3814d104a29d69771c60732c8c9e4d6cdb1aaa98
//fs.readFile("DATA", "utf-8", function(err, data) {
    fs.readFile("62508613.xml", "utf-8", function(err, data) {

        if (err) console.log(err);
    // we log out the readFile results
    console.log("isindexml",data);
    // we then pass the data to our method here

        //parser = new DOMParser();
        //var xxml=parser.toString(data, "text/xml");
//console.log("yeeeeeeeeeeeeeeeeeeh right",xxml);
      // var xxx= xmlToJson(xxml);
        //resx.send({xxx});


  parseString(data, function(err, result) {
//        xmlToJson(data, function(err, result) {


     // JSONParser parser = new JSONParser();
      //JSONObject json = (JSONObject) parser.parse(stringToParse);


        if (err) console.log(err);
        // here we log the results of our xml string conversion
       console.log("bloddy",result.Data.Return);
        console.log("bloddy2");
        var json = result;
var stringjson = JSON.stringify(result);
      var stringjsonreplace=stringjson.replace(/\$/g,'dollarsign');
      var stringjsonreplace3=stringjson.replace(/"dollarsign"/g,'"$"');
console.log("jaysusss",stringjson);
      console.log("jaysusss2",stringjsonreplace);
      console.log("jaysusss3",stringjsonreplace3);
        //var res= result.replace(())

     // resx.json({result});
       // Ineffect switching all of this function off
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
