
async function insertObjava(klijent, res, req){
    
    await klijent.query('INSERT INTO picture (picture) VALUES ($1)', [req.file.filename]);//adding pictures to the database 

    const pictureID = await klijent.query('SELECT id FROM picture WHERE picture = $1', [req.file.filename]);//fetching pictures id to the database 

    

    const listaSubkategorija = await klijent.query('SELECT id FROM subcategories WHERE name = $1', [req.body.podkategorija]);//fetching  id subcategories from the database 


    if(listaSubkategorija.rows.length === 0){
        res.send("Ne postoji ta podkategorija");
        return;
    }else{

        await klijent.query('INSERT INTO news_posts (title, paragraph, content, picture, subcategories_id) VALUES ($1, $2, $3, $4, $5)', [req.body.naslov, null ,req.body.opis, pictureID.rows[0].id, listaSubkategorija.rows[0].id]);//adding a news post to the database 
        res.send("Uspješno ste dodali objavu");
    }

    console.log("Uspješno ste dodali objavu");
};


module.exports = insertObjava;
