//Alati
const express = require('express');
//const pg = require('pg') // Software za povezivanje servera i baze podataka
const bp = require('body-parser');
const path = require('path');


//Router- rute
const homeRouter = require('./kontroler/home');



//ukljucivanje clienta sa podacima o bazi podatka
const client = require("./config/database")
client.connect();


//konfiguracija
const app = express();
const PORT = 3045;
app.use(express.static(path.join(__dirname, "pogled")));//povezivanje sa pogledom
app.use(bp.urlencoded({extended:false})); //parses the request body data into a JSON. I think 


//korištenje ruta
app.use('/', homeRouter);


//slušanje rada servera
app.listen(PORT, () => {
    console.log("Server is listening at", PORT);
});