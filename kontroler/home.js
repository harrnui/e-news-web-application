const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');//tool for uploading pictures
const upload = multer({dest: 'uploads/'});//destination for saving the pictures

//functions from the model
const modelRegister = require("../model/register");
const modelLoginAdmin = require("../model/loginAdmin");
const modelLoginAutor = require("../model/loginAutor");
const modelDataForClient = require("../model/getDataForClient");
const modelDataFromClient = require("../model/getDataFromClient");
const klijent = require("../config/database")







//routes
router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, '../pogled/index.html'));
    
});

router.post("/prijavaAdmin", (req,res)=>{ // log in Admin
    const data = req.body;
    modelLoginAdmin(data, klijent,res);
    
});

router.post('/prijavaAutor', (req,res) => { // log in Autor
    const data = req.body;
    modelLoginAutor(data, klijent,res);
});

router.get('/autorOpcije', (req,res) => { // autor Options
    res.sendFile(path.join(__dirname, '../pogled/other-sites/autorOpcije.html')); 
});

router.get('/adminOpcije', (req,res) => { // admin Options
    res.sendFile(path.join(__dirname, '../pogled/other-sites/adminOpcije.html'));
});

router.post("/registracija", (req,res) =>{ // registration of a user
    const data = req.body;
    modelRegister(data, klijent,res);//function for getting data from registration and adding them to the database. 
    
});

//routes for adding data
router.get("/adminOpcije/getData", (req,res) => {
    modelDataForClient.getDataKategorije(klijent,res);
});

router.get("/adminOpcije/getDataPodkategorije", (req,res) => {
    modelDataForClient.getDataPodkategorije(klijent,res);
});

//route for posting news data, method get
router.post("/postObjava", upload.single('slika'), async (req,res) => { // post a news post
    try{
        await modelDataFromClient(klijent,res,req);
    }catch(err){
        console.log(err);
    }
});

//route for the news post , method get 
router.get("/getObjava", (req,res) => { // get news post
    modelDataForClient.getDataObjave(klijent,res);
});

//route for subcategories
router.get("/forSubcategories/:id", (req,res) => {
    const subcategories_id = req.params.id;
    
    modelDataForClient.getDataForSubcategories(klijent,res,subcategories_id);

});


module.exports = router;
