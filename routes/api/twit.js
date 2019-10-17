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

    T.post


    T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
        console.log(data);
        res.json(data);
    })

    T.get('followers/ids', { screen_name: 'tolga_tezel' },  function (err, data, response) {
        console.log(data);
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
