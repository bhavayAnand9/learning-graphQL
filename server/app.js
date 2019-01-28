const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

//allow cross origin requests
app.use(cors());

mongoose.connect("mongodb://bhavayAnand9:qazPLM2222@ds135800.mlab.com:35800/graphql-project")

mongoose.connection.once('open', ()=>{
	console.log('connected to db');
});

app.use('/graphql', graphqlHTTP({
	//similar to schema:schema
	schema,
	graphiql: true
}));

app.listen(4000, ()=>{
	console.log('port 4000');
})
