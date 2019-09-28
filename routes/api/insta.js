const express = require('express');
const router = express.Router();
//const gravatar = require('gravatar');

const querystring = require('querystring');
const axios = require('axios');

// Load User model
//const User = require('../../models/User');
const FormData = require('form-data');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public



//router.get('/test/:id', (req, res) => res.json({ msg: 'Users colon Works', id: req.params.id}));

//router.get('/:id', (req, res) => res.json({ msg: 'Users colon Works', id: req.params.id}));
//router.get('/:code', (req, res) => res.json({ msg: 'Users colon Works', code: req.params.code}));

//router.get('/:code', (req, res) => {console.log ("im so here",req.params.code);
router.get('/', (req, res) => {
  //console.log ("im so here",req.params.code);
  let code = req.query.code;
  console.log ("im so here",code);
const errors = 'hi';
loadMore(code);

  return res.status(400).json(errors);
}) ;


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

  console.log("proffy",profileData);
  axios.post(' https://api.instagram.com/oauth/access_token',profileData)
      .then(res => console.log("res",res))
      .catch(err => console.log("errorx",err))
  ;


  const bodyFormData = new FormData();

  bodyFormData.append('client_secret', 'bf7f60a691714565ae1f48db572ba296');
  bodyFormData.append('grant_type', 'authorization_code');
  bodyFormData.append('redirect_uri', 'http://localhost:5000/Insta');
  bodyFormData.append('code', code);
  axios.post('https://api.instagram.com/oauth/access_token',bodyFormData)
      .then(res => console.log("res",res))
      .catch(err => console.log("errorx",err))


  const qs = require('querystring');



  const requestBody = {
    client_id: '35b7e4397b1a4809965a1b0f0fc493cf',
    // access_token: code,
    client_secret: 'bf7f60a691714565ae1f48db572ba296',
    grant_type: 'authorization_code',
    redirect_uri: 'http://localhost:3001/api/insta',
    code: code};

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };

  axios.post('https://api.instagram.com/oauth/access_token', qs.stringify(requestBody), config)
      .then((result) => {
        console.log("res",result)
      })
      .catch((err) => {
        console.log("err",err)
      })







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
