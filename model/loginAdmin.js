const bcrypt = require('bcrypt');// tool for crypting 


async function login(data, client, response){

    
    const getPWandRole = await client.query('SELECT password, role_id FROM users WHERE email = ($1)', [data.email]);

    

    if (getPWandRole.rows.length === 0){
        response.send("Seems you should register.");

    }else{
        if(getPWandRole.rows[0].role_id === 1){
            try{
                const provjeraLozinke = await bcrypt.compare(data.lozinka, getPWandRole.rows[0].password);
                
                if(provjeraLozinke){
                    response.redirect("/adminOpcije");//need to send in browser a notification that the user logged in
                }else{
                    response.send("Try again! Password was inncorect");// need to send in browser a notification that the user should try again.
                }
            }catch(error){
                console.log(error);
            }
        }else{
            response.send("You don't have admin privileges.");
        }
        
    }
    
};


module.exports = login;
