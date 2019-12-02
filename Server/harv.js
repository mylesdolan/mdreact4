const express = require('express');
const router = express.Router();

const fs = require('fs');


//router.get('/test', (req, res) => res.json({ msg: 'Tiket Works' }));

router.get('/test', (req, res) =>
      upload(req, res)
    //upload()
);


//module.exports =

    function upload(req, res) {

//function upload() {


    fs.readFile('DATA', 'utf8', function(err, contents) {
        console.log(contents);
        console.log('after calling readFilexx');
        res.json(contents);
    });


};

module.exports = router;















