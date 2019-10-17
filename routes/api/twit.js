const express = require('express');
const router = express.Router();
//const gravatar = require('gravatar');
const Promise = require('promise');

const querystring = require('querystring');
const axios = require('axios');
let theresult;
//Load User model
const Twit = require('twit');



router.get('/getname', (req, res) => {
    console.log("fuckfuck");

   // console.log ("im so here",req.params.code);
    let T = new Twit({
        consumer_key:         'v2DfHU49qZnzgoGSMBQdTj0Qn',
        consumer_secret:      'TEdjVq6CuDhpcjGYycN61PSBcv1dCXx7G8KYQdeDKxp0N4IVY4',
        access_token:         '482460052-hcPdD6OnxNLjS2LqnbAXXpAQ4qKF8JZv3xDBvX89',
        access_token_secret:  'NlGcOP2CizAp6ccHNHBdzU6hkmW4nLjTuJDYmZCLQd9hL',
        timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
        strictSSL:            true,     // optional - requires SSL certificates to be valid.
    });

   // T.post('statuses/destroy/:id', { id: '343360866131001345' }, function (err, data, response) {
     //   console.log(data)
    //})


    T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
        console.log(data);
        res.json(data);
    })

  //  T.post("friendships/destroy/:user_id", { user_id: '706939025521823700' }, function (err, data, response) {
    T.post("friendships/destroy/:id", { id: '706939025521823700' }, function (err, data, response) {

        console.log("destroyDATAx",data);
        console.log("destroyResponsex",response);
        console.log("destroyErrx",err);
    })

        // T.get('followers/ids', { screen_name: 'tolga_tezel' },  function (err, data, response) {
    T.get('followers/ids', { screen_name: 'Myles Dolan' },  function (err, data, response) {

        console.log("fucktyfuk",data);
        //let output = '<h3>Latest Tweets</h3>';
        // for(let i in feed.data){

        let allids = data.ids;
        for (let i in allids) {
            // if(feed.data[i].images)
            {
            console.log("idddd",allids[i]);
               // T.post('statuses/destroy/:id', { id: allids[i] }, function (err, data, response) {
              //  T.post('friendships/destroy/:user_id', { user_id: allids[i] }, function (err, data, response) {
                T.post('friendships/destroy/:user_id', { user_id: allids[i] }, function (err, data, response) {

                        console.log("destroyDATA",data);
                    console.log("destroyResponse",response);
                    console.log("destroyErr",err);
                })


            }
        }


      //  res.json(response);
    })



    /* const myPromise = new Promise((resolve, reject) => {
fs.readFile('/tmp/test.txt', 'utf8', function(err, data)
    {
        if (err){ reject(new Error('In 10% of the cases, I fail. Miserably.'));}
        //throw err;
        console.log("hiyaaaaaaaaaaaaaaaaaaa",data);
        theUser=data;
        resolve(data);


    });


    };
*/
    });
module.exports = router;
