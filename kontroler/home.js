const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');//alat za upload slika
const upload = multer({dest: 'uploads/'});//postavljanje destinacije za spremanje slika

//model funkcije
const modelRegister = require("../model/register");
const modelLoginAdmin = require("../model/loginAdmin");
const modelLoginAutor = require("../model/loginAutor");
const modelDataForClient = require("../model/getDataForClient");
const modelDataFromClient = require("../model/getDataFromClient");
const klijent = require("../config/database")







//rute
router.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname, '../pogled/index.html'));
    
});

router.post("/prijavaAdmin", (req,res)=>{
    const data = req.body;
    modelLoginAdmin(data, klijent,res);
    
});

router.post('/prijavaAutor', (req,res) => {
    const data = req.body;
    modelLoginAutor(data, klijent,res);
});

router.get('/autorOpcije', (req,res) => {
    res.sendFile(path.join(__dirname, '../pogled/other-sites/autorOpcije.html')); // treba dodati autorOpcije.html...
});

router.get('/adminOpcije', (req,res) => {
    res.sendFile(path.join(__dirname, '../pogled/other-sites/adminOpcije.html'));
});

router.post("/registracija", (req,res) =>{
    const data = req.body;
    modelRegister(data, klijent,res);//prikupljanje podataka registracije i dodavanje u bazu podataka.
    
});

//rute za dobavljanje podataka
router.get("/adminOpcije/getData", (req,res) => {
    modelDataForClient.getDataKategorije(klijent,res);
});

router.get("/adminOpcije/getDataPodkategorije", (req,res) => {
    modelDataForClient.getDataPodkategorije(klijent,res);
});

//ruta za objavu, metoda post
router.post("/postObjava", upload.single('slika'), async (req,res) => {
    try{
        await modelDataFromClient(klijent,res,req);
    }catch(err){
        console.log(err);
    }
});

//ruta za objavu , metoda get
router.get("/getObjava", (req,res) => {
    modelDataForClient.getDataObjave(klijent,res);
});

//ruta za podkatetgorije
router.get("/forSubcategories/:id", (req,res) => {
    const subcategories_id = req.params.id;
    
    modelDataForClient.getDataForSubcategories(klijent,res,subcategories_id);

});


module.exports = router;