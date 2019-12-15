const express = require('express');
const router = express.Router();
//const gravatar = require('gravatar');
const Promise = require('promise');

const querystring = require('querystring');
const axios = require('axios');
let theresult;
//Load User model
//const User = require('../../models/UsersMain');
const User = require('./UsersMain');

const FormData = require('form-data');
const fs = require('fs');
let theUser;


fs.writeFile("/tmp/test", "Hey there!", function (err) {

    if (err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});


// @route   GET api/users/test
// @desc    Tests users route
// @access  Public

router.post('/postname', (req, res) => {
        //  console.log("sdjfsdjxxxy",res.json.body.handle);
        console.log("wtfx", req.body);
        console.log("wtf", req.body.weeName);
        console.log("wt2f", res);
        console.log("sdjfsdjttt", req.body);
        //console.log("sdjfsdjyt",res);
        //console.log("sdjfsdjyyyy",req.data[title]);
        console.log("zzzz", req);
        fs.writeFile("/tmp/test.txt", req.body.weeName, function (err) {

            if (err) {
                return console.log(err);
            }

            console.log("The file was saved!");
            res.status(200).json({
                post: true
            })
            /*.then( res =>{
            //res.json(req);
            console.log("forffs")})


*/
        })

    }
);

///////////PLEASE NOTE THE SECOND ROUTE SEEMS TO BE ACCIDENTLY INSIDE FIRST ONE .SEEMS TO WORK SO NOT CHANGING YET THE resolve(data) seems to work
router.get('/getname/getname', (req, res) => {
    console.log("fuckfuck");

    console.log("im so here", req.params.code);

    const myPromise = new Promise((resolve, reject) => {
        fs.readFile('/tmp/test.txt', 'utf8', function (err, data) {
            if (err) {
                reject(new Error('In 10% of the cases, I fail. Miserably.'));
            }
            //throw err;
            console.log("hiyaaaaaaaaaaaaaaaaaaa", data);
            theUser = data;
            resolve(data);


        });

    });


// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
    router.get('/:userm', (req, res) => {
        console.log("fuck");
        User.findOne({name: req.params.userm})
            .then(usermain => {
                console.log('whoppeeeeeeeeeee', usermain);
                res.json(usermain)
            })
            .catch(err =>
                res.status(404).json({nouserfound: 'No user found with that ID'})
            );
    });


    // Two functions
    const onResolved = (resolvedValue) => {
        console.log("hi", resolvedValue);
        res.json(resolvedValue);
    };
    const onRejected = (error) => console.log("ho", error);

    myPromise.then(onResolved, onRejected);
    /*     myPromise.then((resolvedValue) => {
             console.log("rv",resolvedValue);
             res.json(resolvedValue);
         }, (error) => {
             console.log("errror",error);
             return res.status(404);
         });
*/

    /*
        res.send({
            name:'Fracis',
            car:["Ford","Nissan"]
        })
*/


//    });


    //.then(res.json(data));


    // return res.status(400).json(errors);
});


//router.get('/test/:id', (req, res) => res.json({ msg: 'Users colon Works', id: req.params.id}));

//router.get('/:id', (req, res) => res.json({ msg: 'Users colon Works', id: req.params.id}));
//router.get('/:code', (req, res) => res.json({ msg: 'Users colon Works', code: req.params.code}));

//router.get('/:code', (req, res) => {console.log ("im so here",req.params.code);

//This called when you manually double click on the returned link for prod
//https://warm-caverns-90837.herokuapp.com/api/insta?code=d9140397c82e4e10b45e337d58a6f424

router.get('/', (req, res) => {
    //console.log ("im so here",req.params.code);
    let code = req.query.code;
    console.log("im so here", code);
    const errors = 'hi';
    loadMore(code);

    return res.status(400).json(errors);
});


//function loadMore(code) {

//}
loadMore = (code) => {
//loadMore(code){

    // let end = this.state.end + this.state.amount;
    //  this.request(this.state.end,end)
    //  let mycode= (this.state.code);
    console.log("codeyyyyyyyyyy", code);

    const profileData = {
        client_id: '35b7e4397b1a4809965a1b0f0fc493cf',
        // access_token: code,
        client_secret: 'bf7f60a691714565ae1f48db572ba296',
        grant_type: 'authorization_code',
        redirect_uri: 'http://localhost:3001/Insta',
        code: code
    };

    console.log("proffy", profileData);
    // axios.post(' https://api.instagram.com/oauth/access_token',profileData)
    axios.post(' https://www.instagram.com/oauth/access_token', profileData)
        .then(res => console.log("res", res))
        .catch(err => console.log("errorx", err))
    ;


    const bodyFormData = new FormData();

    bodyFormData.append('client_secret', 'bf7f60a691714565ae1f48db572ba296');
    bodyFormData.append('grant_type', 'authorization_code');
    bodyFormData.append('redirect_uri', 'http://localhost:5000/Insta');
    bodyFormData.append('code', code);
    axios.post('https://api.instagram.com/oauth/access_token', bodyFormData)
        .then(res => console.log("res", res))
        .catch(err => console.log("errorx", err))


    const qs = require('querystring');


    /*
    const randomId = 128398723
  const url = `/post/${randomId}`;
  getPost(url)
  export const makeRequest = (funcParamURL) => {
    const newUrl = funcParamURL;
    return axios.get(newUrl);
  }


     */


    /*
       const
       // Save Profile
            new Profile(profileFields).save().then(profile => res.json(profile));*/


    const requestBody = {
        client_id: '35b7e4397b1a4809965a1b0f0fc493cf',
        // access_token: code,
        client_secret: 'bf7f60a691714565ae1f48db572ba296',
        grant_type: 'authorization_code',
        // redirect_uri: 'http://localhost:3001/api/insta',
        redirect_uri: 'https://warm-caverns-90837.herokuapp.com/api/insta',
        code: code
    };

    const config = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };


    axios.post('https://api.instagram.com/oauth/access_token', qs.stringify(requestBody), config)
        .then((result) => {


            const resultx = result.data["access_token"];
            // const user={name:'Tobeupdated',instatoken:resultx};
            const user = {name: theUser, instatoken: resultx};
            console.log("rrrrrrrrrrrrrrrrrr", user);

            new User(user).save().then(user => res.json(user));
            const url = `https://api.instagram.com/v1/users/self/media/recent?access_token=${resultx}`;
            console.log("res55555555555555555555555555555555555", result.data["access_token"]);
            axios.get(url).then((resulty) => {
                console.log("gggggggggggggggggggggggggggg", resulty.data)
            }).catch((err) => {
                console.log("err", err)
            });

            // theresult=result.data["access_token"];
        })
        .catch((err) => {
            console.log("err", err)
        });
    /*
      console.log("AnyChancexxxxxxxxxxxxxxxxxbbbcccccccccccccccccccccccccc",theresult);
      console.log('AnyChancexxxxxxxxxxxxxxxxxbbbcccccccccccccccccccccccccc={$theresult}'+theresult,theresult);

      //axios.get('https://api.instagram.com/v1/self/media/recent?access_token='+theresult)
      axios.get('https://api.instagram.com/v1/self/media/recent?access_token={$theresult}')

          .then((result) => {
       console.log("gggggggggggggggggggggggggggg",result);



          })
          .catch((err) => {
            console.log("err",err)
          });*/


    console.log("AnyChancexxxxxxxxxxxxxxxxxbbbbbbbbbbbbbbbbbbbbbbbbb{$theresult}", theresult);


    /*axios({
       method: 'post',
       url: 'https://api.instagram.com/oauth/access_token',
       data: bodyFormData,
       //config: { headers: {'Content-Type': 'multipart/form-data' }}
       //config: { headers: {'Content-Type': 'application/x-www-form-urlencoded' }}
       config: { headers: {'Content-Type': 'application/x-www-form-encoded' }}
     }).then(function (response) {
           //handle success
           console.log(response);
         })
         .catch(function (response) {
           //handle error
           console.log(response);
         });*/


};


/*

  //  res.json({ msg: 'Users colon Works', code: req.params.code}));



// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      console.log("im here");
      errors.email = 'Email already exists xx';
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: '200', // Size
        r: 'pg', // Rating
        d: 'mm' // Default
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route   GET api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      errors.email = 'User not found';
      return res.status(404).json(errors);
    }

    // Check Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id: user.id, name: user.name, avatar: user.avatar }; // Create JWT Payload

        // Sign Token
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token
            });
          }
        );
      } else {
        errors.password = 'Password incorrect';
        return res.status(400).json(errors);
      }
    });
  });
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);
*/
module.exports = router;
