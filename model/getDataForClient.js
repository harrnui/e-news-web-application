const fs = require('fs');
const path = require('path');

async function getDataKategorije(client,res) { //function which fetches the data from the database for categories

    const data = await client.query('SELECT * FROM categories');
    res.json(data.rows);
}


async function getDataPodkategorije(client,res) { //function which fetches data from the database for subcategories
    
    const data = await client.query('SELECT * FROM subcategories'); 
    res.json(data.rows);
};


async function getDataObjave(client,res) { //function which fetches data from the database for news posts

    const data = await client.query('SELECT * FROM news_posts ORDER BY id DESC LIMIT 3');
    

    const picture = await client.query('SELECT * FROM picture ORDER BY id DESC LIMIT 3'); // awaits pictures from the database
    

    const dataOfPictures = [];

    let counter = 2;

    while(counter >= 0){
        dataOfPictures.push( fs.readFileSync( path.join(__dirname, "../uploads/" , Buffer.from(picture.rows[counter].picture).toString()), 'base64')); //picture in base64 format
        
        counter--;
    }
    

    const object = { // data for response
        data: data.rows,
        picture: dataOfPictures 
    }

    res.json(object);
};


async function getDataForSubcategories(client,res, subcategories_id){ // function for getting data for subcategories

    const data = await client.query('SELECT * FROM news_posts where subcategories_id = $1 ORDER BY id DESC LIMIT 2;', [subcategories_id]); 

    
    let picture = []

    for ( let i = 0; i < data.rows.length; i++){
        let idData= (await client.query('SELECT * FROM picture WHERE id = $1', [data.rows[i].picture]));
        
        picture.push(fs.readFileSync( path.join(__dirname, "../uploads/" , Buffer.from(idData.rows[0].picture).toString()), 'base64')); //picture base64 format 
    };


    object = { // data for response
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
