var fs = require("fs"),
    parseString = require("xml2js").parseString,
    xml2js = require("xml2js");


module.exports = function upload(req, res) {
    console.log("sdf",req);
    console.log("wtfyyy",req.body.weeName);
    // console.log("wtfyyy",req.body.weeName.result);

  ////  var json=req.body.weeName.result;
    var builder = new xml2js.Builder();
   //// var xml = builder.buildObject(json);

    var stringjson = JSON.stringify(req.body);
    var stringjsonreplace=stringjson.replace(/dollarsign/g,'$');


    const omitTypename = (key, value) => (key === '__typename' ? undefined : value);
   // const newPayload = JSON.parse(JSON.stringify(payload), omitTypename);

    console.log("bloddy3",stringjsonreplace);
    var jsonobj = JSON.parse(stringjsonreplace, omitTypename);

    console.log("bloddy4",jsonobj);


    const finfiles3=
            //[
            //   {
            //    "result":
            {
                "Data":
                    {
                        "Cats":['335507','335507','335504'],
                        "Return": [
                            {
                                "CRONumber":["335505","335508"],
                                "CHYNumber":"335506",
                                "RecPay":[{Rec:[{}]}]
                            }


                        ],



                    }
            }
        // }
//]
    ;

    console.log("blody5",jsonobj.data.getFinFiles2.Data.Return[0].RecPay[0]);
    /*   console.log("blody7",finfiles3.data.getFinFiles2.Data);
       console.log("blody8",finfiles3.data.getFinFiles2);
       console.log("blody9",finfiles3.data);*/
    console.log("blody10",finfiles3);

    console.log("blody10a",finfiles3.Data.Return[0].RecPay[0]);
    console.log("blody10b",jsonobj.data.getFinFiles2.Data.Return[0].RecPay[0]);

   // finfiles3.Data.Return.push(jsonobj.data.getFinFiles2.Data.Return[0].RecPay);

    finfiles3.Data.Return[0].RecPay[0]=jsonobj.data.getFinFiles2.Data.Return[0].RecPay[0];

    //  finfiles3.data.getFinFiles2.Data.Return
    console.log("blody11",finfiles3);
    var stringjson2 = JSON.stringify(finfiles3);

    console.log("blody12",stringjson2);


    var xml = builder.buildObject(finfiles3);
console.log("blodyxml",xml);
   // fs.writeFile("edited-test.xml", xml, function(err, data) {

//  var xml="hi";
//////  fs.writeFile("62508613.xml", xml, function(err, data) {
    fs.writeFile("testy.xml", xml, function(err, data) {

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
