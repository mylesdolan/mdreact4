const express = require('express');
const app = express();
const app2 = express();
const querystring = require('querystring');
const bodyParser = require('body-parser');
const fs = require('fs');
const twit = require('../routes/api/twit');
const harv = require('./harv');
const xmltoJson = require('./xmltoJson');
const xmltoJsonUpload = require('./xmltoJsonUpload');
const insta = require('../routes/api/insta');
const mongoose = require('mongoose');
//import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
//const {graphqlExpress, graphiqlExpress} = require('apollo-server-express');
const graphqlHTTP = require('express-graphql');
//import { buildSchema } from 'graphql';

const { buildSchema } = require('graphql');

//import { schema } from './schema';
const schema = require('./schema');

//import { resolveArticle } from './resolvers/Help/Article';


// Construct a schema, using GraphQL schema language
var MyGraphQLSchema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
    hello: () => 'Hello world wnk!',
};


/*
// @ts-ignore
// tslint:disable:typedef
app.use('/graphql', graphqlHTTP((request: Request, response: Response, graphQLParams) => ({
    schema: MyGraphQLSchema,
    rootValue: root,
    graphiql: useGraphiql,
    context: {
        request,
        response,
        // test: 'Hello, World!',
        // graphQLParams,
    },
})));
*/



app.use('/graphql',
    graphqlHTTP({
        // request: Request,
        // response : Response,
        schema: MyGraphQLSchema,
        rootValue: root,
        graphiql: true,
    }),);




/*





app.use('/graphql',
    graphqlHTTP({
       // request: Request,
       // response : Response,
        schema: MyGraphQLSchema,
        rootValue: root,
        graphiql: true,
    }),);
*/
//app2.listen(4000, () => console.log(`Express server running on port 4000`));





// DB Config
const db = require('../config/keys').mongoURI;

const urlencodeParser = bodyParser.urlencoded({extended:false});
const jsonParser = bodyParser.json();

app.use(urlencodeParser);
app.use(jsonParser);


//Cors
const cors = require('cors');

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};





// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI || db)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));



app.use(express.static('client/build'));
app.use('/xmltoJson',xmltoJson);
app.post('/xmltoJsonUpload',xmltoJsonUpload);
app.use('/harv', harv);
app.use('/api/insta',insta);

app.use('/api/twit',twit);

app.get('/api/testicles',(req,res)=>{
    console.log("testis");
    res.send({
        name:'Fracis',
        car:["Ford","Nissan"]
    })
});


app.use(cors(corsOptions));

/*
app.use('/css',express.static(__dirname + '/public/css'))
app.use('/',(req,res,next)=>{
    console.log('Someone made a request for' + req.url);
    res.cookie('cookiename','cookievalue')

    next()
})

app.get('/',(req,res)=>{
    res.send(`
        <html>
            <head>
                <link type="text/css" rel="stylesheet" href="/css/styles.css">
            </head>
            <body>
                Hello dudes
            </body>
        </html>
    `)
});

app.get('/user',(req,res)=>{
    let HTML = fs.readFileSync(`${__dirname}/querystring.html`)
    res.send(`${HTML}`)
})


app.get('/user_post',(req,res)=>{
    let HTML = fs.readFileSync(`${__dirname}/jsonpost.html`)
    res.send(`${HTML}`)
})


app.post('/enteruser',urlencodeParser,(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;

    console.log(firstname)
    console.log(lastname)
    res.send(200)
})

app.post('/enteruser_post',jsonParser,(req,res)=>{
    console.log(req.body)
    res.sendStatus(200)
})




app.get('/api/:user/:id',(req,res)=>{
    let userName = req.params.user;
    let id = req.params.id;
    res.send(
        `<html>
            <body>
                The user id is ${id}, and the name is ${userName}
            </body>
        </html>`
    )
})

app.get('/api/car',(req,res)=>{
    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
        brand,
        year
    })
})

*/
app.get('/api/users',(req,res)=>{
    res.json([
        {
            id:1,
            username:'Francis'
        },
        {
            id:2,
            username:'Steve'
        }
    ])
})


app.get('/api/cars',(req,res)=>{
    res.json([
        {
            id:1,
            brand:'Ford'
        },
        {
            id:2,
            brand:'NissanWank'
        }
    ])
})

if(process.env.NODE_ENV === 'production'){
    const path = require('path');
    app.get('/*',(req,res)=>{
        res.sendfile(path.resolve(__dirname,'../client','build','index.html'))
    })
}


const port = process.env.PORT || 3001;

app.listen(port)
