//here I write functions and send them to the controller....
const bcrypt = require('bcrypt');

async function registration(data, client, response){

    const provjera = await client.query('SELECT * FROM users WHERE email = ($1)', [data.email]);



    if (provjera.rows.length === 0){  //logic when the user is in the database 
        

        try{
            const password = await bcrypt.hash(data.lozinka, 10); // crypting of the password

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


    }else if (provjera.rows[0].email == data.email){  //logic when there is no user in the database 
        
        response.send("User registration denied!.E-mail taken.");
        
    }else{
        response.send("Server ERROR!!.")
    }

};




module.exports = registration;
    
