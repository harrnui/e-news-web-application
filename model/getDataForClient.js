const fs = require('fs');
const path = require('path');

async function getDataKategorije(client,res) { //funkcija koja dohvata podatke iz baze podataka

    const data = await client.query('SELECT * FROM categories');
    res.json(data.rows);
}


async function getDataPodkategorije(client,res) { //funkcija koja dohvata podatke iz baze podataka
    
    const data = await client.query('SELECT * FROM subcategories'); 
    res.json(data.rows);
};


async function getDataObjave(client,res) { //funkcija koja dohvata podatke iz baze podataka

    const data = await client.query('SELECT * FROM news_posts ORDER BY id DESC LIMIT 3');
    

    const picture = await client.query('SELECT * FROM picture ORDER BY id DESC LIMIT 3');
    

    const dataOfPictures = [];

    let counter = 2;

    while(counter >= 0){
        dataOfPictures.push( fs.readFileSync( path.join(__dirname, "../uploads/" , Buffer.from(picture.rows[counter].picture).toString()), 'base64'));
        
        counter--;
    }
    

    const object = {
        data: data.rows,
        picture: dataOfPictures //slika u base64 formatu
    }

    res.json(object);
};


async function getDataForSubcategories(client,res, subcategories_id){

    const data = await client.query('SELECT * FROM news_posts where subcategories_id = $1 ORDER BY id DESC LIMIT 2;', [subcategories_id]);

    
    let picture = []

    for ( let i = 0; i < data.rows.length; i++){
        let idData= (await client.query('SELECT * FROM picture WHERE id = $1', [data.rows[i].picture]));
        
        picture.push(fs.readFileSync( path.join(__dirname, "../uploads/" , Buffer.from(idData.rows[0].picture).toString()), 'base64'));
    };


    object = {
        data: data.rows,
        picture: picture
    }

    res.json(object);
}

module.exports = {
    getDataKategorije,
    getDataPodkategorije,
    getDataObjave,
    getDataForSubcategories
}