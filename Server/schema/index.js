//import {buildSchema} from 'graphql';
const { buildSchema } = require('graphql');

const schema = buildSchema(`
 type CustomField {
    key: String,
        value: String,
        type: String,
}

type Query {
getFinFile(level: String, xmlfield: CustomField) : String
}

  
`);


module.exports = schema;


