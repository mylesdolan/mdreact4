const express = require('express');
const router = express.Router();
//const gravatar = require('gravatar');
const Promise = require('promise');

const querystring = require('querystring');
const axios = require('axios');

router.get('/t1', (req, res) => {
    console.log('t1');
    res.send('about1');
});



router.get('/t2', (req, res) => {
    console.log('t2');
    res.send('about');
});




