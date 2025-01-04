const pg = require('pg') // dodaj dokumentaciju o ovome

const client = new pg.Client({
    user: "your_username",
    host: "your_host",
    database: "your_database",
    password: "your_password",
    port: 5432
});


module.exports = client;