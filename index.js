//Tools
const express = require('express');
const bp = require('body-parser');
const path = require('path');


//Router- routes
const homeRouter = require('./kontroler/home');



//adding the feature client with the data for connecting to the database 
const client = require("./config/database")
client.connect();


//configuration
const app = express();
const PORT = 3045;
app.use(express.static(path.join(__dirname, "pogled")));//connecting to the view
app.use(bp.urlencoded({extended:false})); //parses the request body data into a JSON. I think 


//use of routes
app.use('/', homeRouter);


//listening 
app.listen(PORT, () => {
    console.log("Server is listening at", PORT);
});
