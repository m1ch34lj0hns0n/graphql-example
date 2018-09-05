
const expressGraphQL = require('express-graphql');
const express = require('express');

const app = express();

const schema = require('./schema/schema');

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}));

app.listen(3001, () => {
    console.log('localhost:3001');
});