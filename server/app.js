const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
const schmea = require('./schema/schema');

app.use('/graphql', graphqlHTTP({
	//similar to schema:schema
	schema
}));

app.listen(3000, ()=>{
	console.log('port 3000');
})
