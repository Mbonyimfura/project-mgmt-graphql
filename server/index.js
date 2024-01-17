const express= require('express');
const app =  express();
require('dotenv').config();
const {graphqlHTTP} = require('express-graphql')
const schema= require('./schema/schema')
const port =  process.env.PORT || 5000

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))

app.listen(app.get('port'),  () => {
   console.log(`The server is running on port ${port}`)
});
console.log(process.env.NODE_ENV)
