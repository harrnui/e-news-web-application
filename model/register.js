//ovdje pišem funkcije i onda ih šaljem u kontroler ....
const bcrypt = require('bcrypt');

async function registration(data, client, response){

    const provjera = await client.query('SELECT * FROM users WHERE email = ($1)', [data.email]);



    if (provjera.rows.length === 0){  //logika kad u bazi podataka ima korisnik
        

        try{
            const password = await bcrypt.hash(data.lozinka, 10); // kriptiranje pasvorda.

            client.query('INSERT INTO users (username, password, email, role_id) VALUES ($1, $2, $3, $4)', [data.korisnicko_ime, password, data.email, null], (error) => { //dodavanje korinika u bazu podataka
                if(error){
                    console.log("Error is :", error);
                }
                response.send("You have registered!");
                console.log("User added to the DB.");
            });       


        }catch(error){
            console.log(error);
        }


    }else if (provjera.rows[0].email == data.email){  //logika kad nema u bazi podataka korisnika
        
        response.send("User registration denied!.E-mail taken.");
        
    }else{
        response.send("Server ERROR!!.")
    }





    /*client.query('INSERT INTO registration (korisnicko_ime, lozinka, email) VALUES ($1, $2, $3)', [data.name, data.lozinka, data.email], (error) => {
        if(error){
            console.log("Error is :", error);
        }
        console.log("User added to the DB! 1");
        
    });*/
};




module.exports = registration;
    
