var fs = require("fs"),
    parseString = require("xml2js").parseString,
    xml2js = require("xml2js");


module.exports = function upload(req, res) {
    console.log("wtfyyy",req.body.weeName.result);

    var json=req.body.weeName.result;
    var builder = new xml2js.Builder();
    var xml = builder.buildObject(json);

    fs.writeFile("edited-test.xml", xml, function(err, data) {
        if (err) console.log(err);

        console.log("successfully written our update xml to file");
    });

    console.log("wtfxwtf",req.body);
  // console.log("wtfxwtf",req);
 //   console.log("wtfxwtf",res);
 //   console.log("wtfx",req.body);

    console.log("wt2f",res);
  //  console.log("sdjfsdjttt",req.body.WeeName[0]);
   // console.log("below sdjfsdjtt");
};
